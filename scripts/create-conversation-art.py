"""Editable Blender sculpture for Idiomas Pro. Run with Blender --background --python."""
import bpy, math, os
from mathutils import Vector

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.samples = 64
scene.cycles.use_denoising = True
scene.render.resolution_x = 1200
scene.render.resolution_y = 1000
scene.render.resolution_percentage = 100
scene.render.film_transparent = True
scene.world.color = (0.22, 0.22, 0.22)
scene.view_settings.view_transform = 'AgX'

def material(name, color, metallic=0, roughness=.3):
    m = bpy.data.materials.new(name)
    m.diffuse_color = (*color, 1)
    m.use_nodes = True
    p = m.node_tree.nodes.get('Principled BSDF')
    p.inputs['Base Color'].default_value = (*color,1)
    p.inputs['Metallic'].default_value = metallic
    p.inputs['Roughness'].default_value = roughness
    return m

blue = material('Idiomas cobalt glazed ceramic', (.018,.065,.8), .25, .22)
lime = material('Citron glazed ceramic', (.65,.85,.08), .12,.29)
white = material('Ivory lettering', (.96,.96,.86), 0,.32)

def bubble(name, loc, rot, mat, scale=1):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc)
    obj=bpy.context.object
    obj.name=name
    obj.dimensions=(3.4*scale,.68*scale,2.5*scale)
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    bevel=obj.modifiers.new('Generous ceramic corners','BEVEL')
    bevel.width=.55*scale; bevel.segments=10
    obj.modifiers.new('Weighted surface normals','WEIGHTED_NORMAL')
    obj.data.materials.append(mat)
    for p in obj.data.polygons: p.use_smooth=True
    bpy.ops.mesh.primitive_cone_add(vertices=3,radius1=.6*scale,radius2=.06*scale,depth=.9*scale,location=(loc[0]-.65*scale,loc[1],loc[2]-1.25*scale))
    tail=bpy.context.object; tail.name=name+' conversation tail'
    tail.rotation_euler[1]=math.radians(165)
    tail.data.materials.append(mat)
    b=tail.modifiers.new('Soft edges','BEVEL');b.width=.15*scale;b.segments=5
    tail.parent=obj; tail.matrix_parent_inverse=obj.matrix_world.inverted()
    for i in range(3):
        bpy.ops.mesh.primitive_uv_sphere_add(segments=32,ring_count=16,radius=.14*scale,location=(loc[0]+(i-1)*.61*scale,loc[1]-.37*scale,loc[2]))
        dot=bpy.context.object; dot.name=name+' dot';dot.scale=(1,.35,1);dot.data.materials.append(white)
        for p in dot.data.polygons:p.use_smooth=True
        dot.parent=obj; dot.matrix_parent_inverse=obj.matrix_world.inverted()
    obj.rotation_euler=tuple(math.radians(a) for a in rot)
    return obj

bubble('Hello',(0,.3,.8),(-10,-15,-12),blue,1.03)
bubble('Hola',(1.4,-1.1,-.8),(5,16,14),lime,.77)

def area(name,loc,power,size):
    bpy.ops.object.light_add(type='AREA',location=loc)
    l=bpy.context.object;l.name=name;l.data.energy=power;l.data.shape='DISK';l.data.size=size
    l.rotation_euler=(Vector((0,0,0))-l.location).to_track_quat('-Z','Y').to_euler()
area('Large softbox',(-4,-6,7),900,5)
area('Edge softbox',(5,1,5),1300,4)
area('Front fill',(0,-7,0),350,4)
bpy.ops.object.camera_add(location=(6,-13,7))
cam=bpy.context.object
cam.rotation_euler=(Vector((.45,0,0))-cam.location).to_track_quat('-Z','Y').to_euler()
cam.data.type='ORTHO';cam.data.ortho_scale=7.2
scene.camera=cam
os.makedirs(os.path.join(ROOT,'assets','blender'),exist_ok=True)
os.makedirs(os.path.join(ROOT,'public','images'),exist_ok=True)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'assets','blender','conversation.blend'))
scene.render.filepath=os.path.join(ROOT,'public','images','conversation-sculpture.png')
bpy.ops.render.render(write_still=True)
