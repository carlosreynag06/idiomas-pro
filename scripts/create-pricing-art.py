"""Three original notebook stacks: one, four and eight lessons. Blender/Cycles."""
import bpy, math, os
from mathutils import Vector
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=96;scene.cycles.use_denoising=True
scene.render.resolution_x=1600;scene.render.resolution_y=1300;scene.render.resolution_percentage=100
scene.render.film_transparent=True;scene.view_settings.view_transform='AgX'
scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs[0].default_value=(.45,.49,.39,1)
scene.world.node_tree.nodes['Background'].inputs[1].default_value=.4
def mat(name,color,rough=.4):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
 p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Roughness'].default_value=rough
 return m
forest=mat('Forest linen',(.035,.075,.04));citron=mat('Citron linen',(.67,.81,.2));ivory=mat('Ivory linen',(.88,.9,.74));paper=mat('Individual paper edges',(.93,.94,.85),.7)
def slab(name,loc,size,material,radius=.05):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=size
 bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
 b=o.modifiers.new('Soft edges','BEVEL');b.width=radius;b.segments=5;o.modifiers.new('Weighted normals','WEIGHTED_NORMAL');o.data.materials.append(material)
 return o
font=bpy.data.fonts.load('C:/Windows/Fonts/arialbd.ttf')
for stack,(x,count,cover) in enumerate([(-2.1,1,forest),(0,4,citron),(2.1,8,ivory)]):
 for n in range(count):
  z=n*.3
  slab('Notebook cover',(x,0,z+.025),(1.82,2.35,.05),cover)
  slab('Cream page block',(x,.02,z+.15),(1.72,2.23,.2),paper,.025)
  for line in range(3):slab('Fine page edge',(x,-1.1,z+.09+line*.055),(1.68,.007,.008),ivory,.002)
  slab('Notebook upper cover',(x,0,z+.275),(1.82,2.35,.05),cover)
 height=count*.3
 # Raised numbering is placed on each top cover, facing the orthographic camera.
 bpy.ops.object.text_add(location=(x,-.4,height+.022));o=bpy.context.object;o.name=str(count)+' lessons'
 o.data.body=str(count);o.data.align_x='CENTER';o.data.size=1.15;o.data.font=font;o.data.extrude=.018;o.data.bevel_depth=.006
 o.data.materials.append(ivory if stack==0 else forest)
 # A narrow ribbon gives the stacks a book-like silhouette.
 slab('Ribbon bookmark',(x+.5,-.1,height+.012),(.09,2.5,.025),citron if stack==0 else forest,.01)
def area(loc,energy,size):
 bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.data.energy=energy;o.data.shape='DISK';o.data.size=size
 o.rotation_euler=(Vector((0,0,.8))-o.location).to_track_quat('-Z','Y').to_euler()
area((-4,-5,8),1400,5);area((4,3,6),1600,4);area((0,-7,2),450,4)
bpy.ops.object.camera_add(location=(6,-10,9));camera=bpy.context.object
camera.rotation_euler=(Vector((0,0,1))-camera.location).to_track_quat('-Z','Y').to_euler();camera.data.type='ORTHO';camera.data.ortho_scale=8.8;scene.camera=camera
scene.render.filepath=os.path.join(ROOT,'public','images','pricing-momentum.png')
bpy.ops.file.pack_all();bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'assets','blender','pricing-momentum.blend'))
bpy.ops.render.render(write_still=True)
