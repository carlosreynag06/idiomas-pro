"""An original ceramic 'sí.' typography sculpture for the student-stories page."""
import bpy, math, os
from mathutils import Vector
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.samples = 128
scene.cycles.use_denoising = True
scene.render.resolution_x = 1500
scene.render.resolution_y = 1200
scene.render.resolution_percentage = 100
scene.render.film_transparent = True
scene.view_settings.view_transform = 'AgX'
scene.world.use_nodes = True
scene.world.node_tree.nodes['Background'].inputs[0].default_value = (.48, .52, .43, 1)
scene.world.node_tree.nodes['Background'].inputs[1].default_value = .4

def material(name, color):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    p = m.node_tree.nodes.get('Principled BSDF')
    p.inputs['Base Color'].default_value = (*color, 1)
    p.inputs['Roughness'].default_value = .23
    p.inputs['Coat Weight'].default_value = .25
    return m

forest = material('Glazed forest ceramic', (.025, .075, .038))
ivory = material('Ivory porcelain edge', (.9, .93, .8))
citron = material('Citron accent', (.68, .84, .17))
font = bpy.data.fonts.load('C:/Windows/Fonts/georgiaz.ttf')

def word(name, location, mat, depth):
    bpy.ops.object.text_add(location=location, rotation=(math.pi / 2, 0, 0))
    o = bpy.context.object
    o.name = name
    o.data.body = 'sí'
    o.data.font = font
    o.data.size = 4.2
    o.data.align_x = 'CENTER'
    o.data.extrude = depth
    o.data.bevel_depth = .035
    o.data.bevel_resolution = 8
    o.data.resolution_u = 32
    o.data.materials.append(mat)
    return o

word('Ivory echo of the word', (.11, .15, .14), ivory, .28)
word('The word sí', (0, -.04, .2), forest, .32)
bpy.ops.mesh.primitive_uv_sphere_add(segments=64, ring_count=32, radius=.34, location=(2.1, -.13, .55))
dot = bpy.context.object
dot.name = 'Citron full stop'
dot.data.materials.append(citron)
bpy.ops.object.shade_smooth()

def light(location, energy, size):
    bpy.ops.object.light_add(type='AREA', location=location)
    o = bpy.context.object
    o.data.energy = energy
    o.data.shape = 'DISK'
    o.data.size = size
    o.rotation_euler = (Vector((0, 0, 1.5)) - o.location).to_track_quat('-Z', 'Y').to_euler()

light((-4, -6, 7), 1500, 5)
light((5, 2, 7), 1800, 4)
light((0, -7, 1), 500, 4)
bpy.ops.object.camera_add(location=(5, -12, 6.5))
camera = bpy.context.object
camera.rotation_euler = (Vector((0, 0, 1.55)) - camera.location).to_track_quat('-Z', 'Y').to_euler()
camera.data.type = 'ORTHO'
camera.data.ortho_scale = 6.2
scene.camera = camera
scene.render.filepath = os.path.join(ROOT, 'public', 'images', 'testimonios-si.png')
bpy.ops.file.pack_all()
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT, 'assets', 'blender', 'testimonios-si.blend'))
bpy.ops.render.render(write_still=True)
