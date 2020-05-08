/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {
	constructor(scene) {
        super(scene);

        this.shader = new CGFshader(scene.gl, 'shaders/terrain.vert', 'shaders/terrain.frag');
        this.imageTexture = new CGFtexture(scene, 'images/terrain.jpg');
        this.heightTexture = new CGFtexture(scene, 'images/heightmap.jpg');

        this.shader.setUniformsValues( {uSampler1: 1});
        this.shader.setUniformsValues( {uSampler2: 2});

        this.plane = new MyPlane(this.scene, 20, 0, 1, 0, 1);
    }

    display() {

        this.scene.setActiveShader(this.shader);

        this.imageTexture.bind(1);
        this.heightTexture.bind(2);

        this.scene.pushMatrix();

        this.scene.translate(0, -0.5, 0);
        this.scene.scale(1, 4, 1);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.plane.display();

        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);
    }
}