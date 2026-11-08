"""Two original legal-page sculptures, each with its own editable Blender scene."""
import bpy, math, os
from mathutils import Vector
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def material(name,color):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True;p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Roughness'].default_value=.3;p.inputs['Coat Weight'].default_value=.12;return m
def slab(name,location,size,mat,bevel=.08):
 bpy.ops.mesh.primitive_cube_add(size=1,location=location);o=bpy.context.object;o.name=name;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);b=o.modifiers.new('Soft ceramic bevel','BEVEL');b.width=bevel;b.segments=8;o.modifiers.new('Weighted normals','WEIGHTED_NORMAL');o.data.materials.append(mat);return o
def text(body,location,size,mat):
 curve=bpy.data.curves.new('Geometric checkmark','CURVE');curve.dimensions='3D';curve.bevel_depth=.055*size;curve.bevel_resolution=8;curve.resolution_u=16
 spline=curve.splines.new('POLY');spline.points.add(2)
 for point,(x,z) in zip(spline.points,[(-.3,.02),(-.08,-.2),(.37,.32)]):point.co=(location[0]+x*size,location[1]-.055,location[2]+z*size,1)
 obj=bpy.data.objects.new('Solid ceramic checkmark',curve);bpy.context.collection.objects.link(obj);obj.data.materials.append(mat)
def disk(location,radius,mat):
 bpy.ops.mesh.primitive_cylinder_add(vertices=96,radius=radius,depth=.22,location=location,rotation=(math.pi/2,0,0));o=bpy.context.object;o.data.materials.append(mat);b=o.modifiers.new('Soft badge rim','BEVEL');b.width=.07;b.segments=6;o.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
for kind in ['terms','privacy']:
 bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
 scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=96;scene.cycles.use_denoising=True;scene.render.resolution_x=1400;scene.render.resolution_y=1200;scene.render.resolution_percentage=100;scene.render.film_transparent=True;scene.view_settings.view_transform='AgX';scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs[0].default_value=(.45,.5,.4,1);scene.world.node_tree.nodes['Background'].inputs[1].default_value=.4
 ivory=material('Warm ivory porcelain '+kind,(.9,.92,.79));forest=material('Forest ceramic '+kind,(.028,.065,.035));citron=material('Citron ceramic '+kind,(.66,.81,.19))
 if kind=='terms':
  slab('Document back leaf',(.15,.25,.15),(3.0,.18,3.8),forest,.12)
  slab('Ivory document',(0,0,0),(3.0,.22,3.8),ivory,.13)
  for i,width in enumerate([1.65,1.65,1.15]):slab('Raised document line',(-.1,-.17,.75-i*.45),(width,.09,.11),forest,.045)
  disk((1,-.38,-1.05),.66,citron);text('✓',(1,-.53,-1.05),.9,forest)
 else:
  outline=[(-1.5,1.6),(0,2),(1.5,1.6),(1.42,-.2),(.95,-1.15),(0,-1.9),(-.95,-1.15),(-1.42,-.2)]
  vertices=[(x,y,z) for y in [-.2,.2] for x,z in outline];n=len(outline);faces=[tuple(range(n-1,-1,-1)),tuple(range(n,2*n))]+[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)]
  mesh=bpy.data.meshes.new('Shield mesh');mesh.from_pydata(vertices,[],faces);mesh.update();o=bpy.data.objects.new('Forest privacy shield',mesh);bpy.context.collection.objects.link(o);o.data.materials.append(forest);b=o.modifiers.new('Rounded protective silhouette','BEVEL');b.width=.13;b.segments=8;o.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
  disk((0,-.34,.25),.85,ivory);text('✓',(0,-.51,.25),1.15,forest)
  slab('Private letter',(1.35,-.7,-.85),(1.45,.24,1.1),citron,.08)
  # Envelope fold lines, deliberately free of words or personal information.
  for side in [-1,1]:
   edge=slab('Envelope seam',(1.35+side*.32,-.85,-.75),(.79,.045,.045),forest,.015);edge.rotation_euler[1]=math.radians(-side*33)
 for loc,power,size in [((-4,-6,7),1200,5),((5,3,6),1500,4),((0,-7,0),350,4)]:
  bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.data.energy=power;o.data.shape='DISK';o.data.size=size;o.rotation_euler=(Vector((0,0,0))-o.location).to_track_quat('-Z','Y').to_euler()
 bpy.ops.object.camera_add(location=(5,-12,6));camera=bpy.context.object;camera.rotation_euler=(Vector((0,0,0))-camera.location).to_track_quat('-Z','Y').to_euler();camera.data.type='ORTHO';camera.data.ortho_scale=6.9;scene.camera=camera
 scene.render.filepath=os.path.join(ROOT,'public','images',f'es-{kind}.png');bpy.ops.file.pack_all();bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'assets','blender',f'es-{kind}.blend'));bpy.ops.render.render(write_still=True)
