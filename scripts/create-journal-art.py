"""Original quotation-mark sculpture for The Local Word. Blender/Cycles."""
import bpy, math, os
from mathutils import Vector
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=96;scene.cycles.use_denoising=True
scene.render.resolution_x=1400;scene.render.resolution_y=1100;scene.render.resolution_percentage=100
scene.render.film_transparent=True;scene.view_settings.view_transform='AgX'
scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs[0].default_value=(.42,.48,.37,1);scene.world.node_tree.nodes['Background'].inputs[1].default_value=.4
def material(name,color,rough=.28,metal=.05):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
 p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Roughness'].default_value=rough;p.inputs['Metallic'].default_value=metal;p.inputs['Coat Weight'].default_value=.2
 return m
ivory=material('Ivory glazed quotation',(.9,.92,.78));citron=material('Citron glazed quotation',(.67,.81,.18));forest=material('Forest pencil',(.025,.06,.032),.4);wood=material('Cedar tip',(.5,.3,.14),.6);graphite=material('Graphite',(.018,.024,.02),.4)
font=bpy.data.fonts.load('C:/Windows/Fonts/georgiab.ttf')
for name,body,loc,rotation,mat in [
 ('Opening quotation','“',(-1.15,.35,.85),(82,-13,-12),ivory),
 ('Closing quotation','”',(1.0,-.3,-.15),(78,15,16),citron),
]:
 bpy.ops.object.text_add(location=loc);o=bpy.context.object;o.name=name;o.data.body=body;o.data.font=font;o.data.align_x='CENTER';o.data.align_y='CENTER';o.data.size=5.2;o.data.extrude=.25;o.data.bevel_depth=.055;o.data.bevel_resolution=8;o.data.resolution_u=32;o.rotation_euler=tuple(math.radians(a) for a in rotation);o.data.materials.append(mat)
bpy.ops.object.empty_add(location=(-.2,-1.1,-1.35));pencil=bpy.context.object;pencil.name='Editorial pencil';pencil.rotation_euler=(math.radians(79),math.radians(-16),math.radians(-38))
for name,z,length,radius,mat,cone in [('Hexagonal forest body',0,3.4,.09,forest,False),('Cedar taper',1.9,.4,.09,wood,True),('Graphite point',2.09,.08,.02,graphite,True)]:
 if cone:bpy.ops.mesh.primitive_cone_add(vertices=64,radius1=radius,radius2=0,depth=length)
 else:bpy.ops.mesh.primitive_cylinder_add(vertices=6,radius=radius,depth=length)
 o=bpy.context.object;o.name=name;o.parent=pencil;o.location=(0,0,z);o.data.materials.append(mat);b=o.modifiers.new('Fine bevel','BEVEL');b.width=.012;b.segments=3;o.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
def area(loc,energy,size):
 bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.data.energy=energy;o.data.shape='DISK';o.data.size=size;o.rotation_euler=(Vector((0,0,0))-o.location).to_track_quat('-Z','Y').to_euler()
area((-4,-6,7),1200,5);area((5,3,5),1500,4);area((0,-7,0),400,4)
bpy.ops.object.camera_add(location=(4,-12,6));camera=bpy.context.object;camera.rotation_euler=(Vector((0,0,0))-camera.location).to_track_quat('-Z','Y').to_euler();camera.data.type='ORTHO';camera.data.ortho_scale=7.2;scene.camera=camera
scene.render.filepath=os.path.join(ROOT,'public','images','journal-quotation.png')
bpy.ops.file.pack_all();bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'assets','blender','journal-quotation.blend'));bpy.ops.render.render(write_still=True)
