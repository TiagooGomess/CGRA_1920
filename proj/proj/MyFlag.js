/**
 * MyFlag
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFlag extends CGFobject {
    constructor(scene) {
        super(scene);
        this.myPlane = new MyPlane(this.scene, 20, 0, 1, 0, 1);

        this.wire = new MySphere(this.scene, 10, 10);
        
        // Wire Appearance
        this.wireAppearance = new CGFappearance(this.scene);
        this.wireAppearance.setAmbient(0, 0, 0, 1.0);
        this.wireAppearance.setDiffuse(0, 0, 0, 1.0);
        this.wireAppearance.setSpecular(0, 0, 0, 1.0);
        this.wireAppearance.setShininess(5.0);

        this.flagTexture = new CGFtexture(scene, 'images/portugal.png');

        // shader
        this.shader = new CGFshader(scene.gl, 'shaders/flag.vert', 'shaders/flag.frag');
        this.shader.setUniformsValues({ uSampler1: 1 });
        this.shader.setUniformsValues({ speed: 0 });
        this.shader.setUniformsValues({ timeFactor: 0 });
    }

    update(time, _speed) {
        this.shader.setUniformsValues({ speed: _speed });
        this.shader.setUniformsValues({ timeFactor: time });
    }

    display() {
        // flag

        this.scene.setActiveShader(this.shader);
        this.flagTexture.bind(1);

        this.scene.pushMatrix();
        this.scene.scale(0.8, 0.7, 1.6);
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.shader.setUniformsValues({rightSide: 1});
        this.myPlane.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.8, 0.7, 1.6);
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.shader.setUniformsValues({rightSide: -1});
        this.myPlane.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);

        // wires
        this.wireAppearance.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.33, 1.08);
        this.scene.scale(0.02, 0.02, 0.02);
        this.scene.scale(1, 1, 55);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.wire.display();
        this.scene.popMatrix();

        // wires
        this.wireAppearance.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, -0.33, 1.08);
        this.scene.scale(0.02, 0.02, 0.02);
        this.scene.scale(1, 1, 55);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.wire.display();
        this.scene.popMatrix();

    }

    
}