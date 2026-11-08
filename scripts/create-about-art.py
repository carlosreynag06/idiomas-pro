"""Original open-book sculpture for the About Carlos page. Run with Blender --background --python."""
import bpy, math, os
from mathutils import Vector

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.samples = 96
scene.cycles.use_denoising = True
scene.render.resolution_x = 1400
scene.render.resolution_y = 1200
scene.render.resolution_percentage = 100
scene.render.film_transparent = True
scene.view_settings.view_transform = 'AgX'
scene.world.use_nodes = True
scene.world.node_tree.nodes['Background'].inputs[0].default_value = (.4,.44,.37,1)
scene.world.node_tree.nodes['Background'].inputs[1].default_value = .35

def material(name, color, rough=.35, metal=0):
    m = bpy.data.materials.new(name)
    m.diffuse_color = (*color,1)
    m.use_nodes = True
    shader = m.node_tree.nodes.get('Principled BSDF')
    shader.inputs['Base Color'].default_value = (*color,1)
    shader.inputs['Roughness'].default_value = rough
    shader.inputs['Metallic'].default_value = metal
    return m

forest = material('Forest linen cover', (.035,.085,.045), .5)
paper = material('Warm porcelain pages', (.9,.91,.78), .4)
citron = material('Citron ceramic page', (.68,.82,.21), .27)
ink = material('Deep green raised lettering', (.025,.055,.03), .32)
silver = material('Brushed pencil ferrule', (.5,.53,.45), .24,.8)
wood = material('Pencil cedar', (.48,.28,.13), .65)
graphite = material('Graphite', (.018,.023,.02), .4)

def slab(name,loc,size,mat,bevel=.06,rotation=0):
    bpy.ops.mesh.primitive_cube_add(size=1,location=loc)
    obj=bpy.context.object; obj.name=name; obj.dimensions=size
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    modifier=obj.modifiers.new('Soft tactile edges','BEVEL');modifier.width=bevel;modifier.segments=6
    obj.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
    obj.rotation_euler[1]=math.radians(rotation)
    obj.data.materials.append(mat)
    return obj

for side,angle in [(-1,-5),(1,5)]:
    slab('Forest book cover', (side*1.17,0,0), (2.35,3.4,.15), forest,.09,angle)
    for layer in range(8):
        slab('Individual sculpted page', (side*1.14,0,.13+layer*.039), (2.25,3.22,.034), paper,.025,angle)
    slab('Open language page', (side*1.14,0,.49), (2.25,3.22,.11), paper if side<0 else citron,.07,angle)

font_path='C:/Windows/Fonts/arialbd.ttf'
font=bpy.data.fonts.load(font_path) if os.path.exists(font_path) else None
def lettering(word,x,y,z,size,angle=0):
    bpy.ops.object.text_add(location=(x,y,z))
    obj=bpy.context.object;obj.name='Raised lettering '+word
    obj.data.body=word;obj.data.align_x='CENTER';obj.data.size=size;obj.data.extrude=.018;obj.data.bevel_depth=.005
    obj.rotation_euler[1]=math.radians(angle)
    if font:obj.data.font=font
    obj.data.materials.append(ink)
lettering('Hello.',-1.14,.15,.59,.5,-5)
lettering('Hola.',1.14,.15,.59,.5,5)
for side in [-1,1]:
    for line in range(3):
        slab('Quiet practice line', (side*1.14,-.4-line*.18,.585), (1.35 if line<2 else .8,.024,.008),forest,.004)

# A bookmark creates a single physical connection between the two pages.
slab('Citron ribbon bookmark', (.06,-1.1,.6), (.16,1.45,.035),citron,.018)
bpy.ops.mesh.primitive_uv_sphere_add(segments=48,ring_count=24,radius=.28,location=(-2.8,.95,1.7))
sphere=bpy.context.object;sphere.name='Floating conversation point';sphere.data.materials.append(citron)
for polygon in sphere.data.polygons:polygon.use_smooth=True

# Graphite pencil resting beside the book; all parts share its local orientation.
bpy.ops.object.empty_add(location=(2.8,-.2,.95))
pencil=bpy.context.object;pencil.name='Pencil assembly';pencil.rotation_euler=(math.radians(13),math.radians(-22),math.radians(-25))
def pencil_part(name,z,depth,radius,mat,cone=False):
    if cone:bpy.ops.mesh.primitive_cone_add(vertices=64,radius1=radius,radius2=0,depth=depth)
    else:bpy.ops.mesh.primitive_cylinder_add(vertices=6,radius=radius,depth=depth)
    obj=bpy.context.object;obj.name=name;obj.parent=pencil;obj.location=(0,0,z);obj.data.materials.append(mat)
    edge=obj.modifiers.new('Fine bevel','BEVEL');edge.width=.015;edge.segments=3
    obj.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
pencil_part('Forest pencil body',0,2.8,.105,forest)
pencil_part('Cedar tip',1.6,.4,.105,wood,True)
pencil_part('Graphite point',1.79,.08,.025,graphite,True)
pencil_part('Silver ferrule',-1.46,.16,.108,silver)
pencil_part('Citron eraser',-1.64,.2,.103,citron)

def area(name,loc,power,size):
    bpy.ops.object.light_add(type='AREA',location=loc)
    light=bpy.context.object;light.name=name;light.data.energy=power;light.data.shape='DISK';light.data.size=size
    light.rotation_euler=(Vector((0,0,.2))-light.location).to_track_quat('-Z','Y').to_euler()
area('Large softbox',(-4,-3,8),1100,5)
area('Soft rim',(4,4,5),1400,4)
area('Front fill',(1,-6,3),350,4)
bpy.ops.object.camera_add(location=(6,-9,11))
camera=bpy.context.object;camera.rotation_euler=(Vector((.1,0,.4))-camera.location).to_track_quat('-Z','Y').to_euler()
camera.data.type='ORTHO';camera.data.ortho_scale=7.6;scene.camera=camera
scene.render.filepath=os.path.join(ROOT,'public','images','about-open-book.png')
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'assets','blender','about-open-book.blend'))
bpy.ops.render.render(write_still=True)
