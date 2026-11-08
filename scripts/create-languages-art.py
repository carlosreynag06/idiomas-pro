"""Original ceramic alphabet sculpture for the Languages page."""
import bpy, math, os
from mathutils import Vector

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.samples = 96
scene.cycles.use_denoising = True
scene.render.resolution_x = 1600
scene.render.resolution_y = 1300
scene.render.resolution_percentage = 100
scene.render.film_transparent = True
scene.view_settings.view_transform = 'AgX'
scene.world.use_nodes = True
scene.world.node_tree.nodes['Background'].inputs[0].default_value = (.43,.5,.39,1)
scene.world.node_tree.nodes['Background'].inputs[1].default_value = .4

def material(name, color, roughness=.3, metallic=.08):
    m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
    shader=m.node_tree.nodes.get('Principled BSDF')
    shader.inputs['Base Color'].default_value=(*color,1)
    shader.inputs['Roughness'].default_value=roughness
    shader.inputs['Metallic'].default_value=metallic
    shader.inputs['Coat Weight'].default_value=.2
    shader.inputs['Coat Roughness'].default_value=.28
    return m

forest=material('Deep forest ceramic',(.026,.065,.035),.29)
citron=material('Citron ceramic',(.66,.8,.17),.3)
ivory=material('Warm ivory porcelain',(.91,.92,.8),.26)
font=bpy.data.fonts.load('C:/Windows/Fonts/arialbd.ttf')

def letter(name,character,location,size,rotation,mat):
    bpy.ops.object.text_add(location=location)
    obj=bpy.context.object;obj.name=name
    obj.data.body=character;obj.data.font=font
    obj.data.align_x='CENTER';obj.data.align_y='CENTER'
    obj.data.size=size;obj.data.extrude=.24
    obj.data.bevel_depth=.055;obj.data.bevel_resolution=8;obj.data.resolution_u=32
    obj.rotation_euler=tuple(math.radians(v) for v in rotation)
    obj.data.materials.append(mat)
    return obj

letter('English lowercase a','a',(-1.22,.45,1.05),5.1,(78,-12,-14),forest)
letter('Spanish lowercase enye','ñ',(1.0,-.5,.4),4.65,(84,14,13),citron)
for name,location,radius,mat in [
    ('Ivory conversation dot',(-2.45,-.7,-.95),.32,ivory),
    ('Citron accent dot',(2.4,.15,2.5),.2,citron),
]:
    bpy.ops.mesh.primitive_uv_sphere_add(segments=64,ring_count=32,radius=radius,location=location)
    sphere=bpy.context.object;sphere.name=name;sphere.data.materials.append(mat)
    for face in sphere.data.polygons:face.use_smooth=True

def area(name,location,energy,size):
    bpy.ops.object.light_add(type='AREA',location=location)
    light=bpy.context.object;light.name=name;light.data.energy=energy
    light.data.shape='DISK';light.data.size=size
    light.rotation_euler=(Vector((0,0,1))-light.location).to_track_quat('-Z','Y').to_euler()
area('Large left softbox',(-4,-5,7),1200,5)
area('Porcelain rim light',(5,3,6),1500,4)
area('Soft front fill',(0,-6,1),450,4)
bpy.ops.object.camera_add(location=(4,-12,6))
camera=bpy.context.object
camera.rotation_euler=(Vector((0,0,.85))-camera.location).to_track_quat('-Z','Y').to_euler()
camera.data.type='ORTHO';camera.data.ortho_scale=7.5;scene.camera=camera
scene.render.filepath=os.path.join(ROOT,'public','images','languages-alphabet.png')
bpy.ops.file.pack_all()
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'assets','blender','languages-alphabet.blend'))
bpy.ops.render.render(write_still=True)
