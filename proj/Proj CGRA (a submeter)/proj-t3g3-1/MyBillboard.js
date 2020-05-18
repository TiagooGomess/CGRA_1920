/**
 * MyBillboard
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBillboard extends CGFobject {
    constructor(scene) {
        super(scene);
        this.myPlane = new MyPlane(this.scene, 20, 0, 1, 0, 1);
        this.post = new MySphere(this.scene, 10, 10);

        this.numSuppliesDelivered = 0;

        // Post Appearance
        this.postAppearance = new CGFappearance(this.scene);
        this.postAppearance.setAmbient(0, 0, 0, 1.0);
        this.postAppearance.setDiffuse(0, 0, 0, 1.0);
        this.postAppearance.setSpecular(0, 0, 0, 1.0);
        this.postAppearance.setShininess(5.0);

        // Back Appearance
        this.backAppearance = new CGFappearance(this.scene);
        this.backAppearance.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.backAppearance.setDiffuse(0.5, 0.5, 0.5, 1.0);
        this.backAppearance.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.backAppearance.setShininess(5.0);

        this.billboardTexture = new CGFtexture(scene, 'images/billboard.png');

        // shader
        this.shader = new CGFshader(scene.gl, 'shaders/billboard.vert', 'shaders/billboard.frag');
        this.shader.setUniformsValues( {uSampler1: 1});
        this.shader.setUniformsValues({ nSuppliesDelivered: this.numSuppliesDelivered });
    }

    update(numLandedSupplies) {
        this.shader.setUniformsValues({ nSuppliesDelivered: numLandedSupplies });
    }

    reset() {
        this.shader.setUniformsValues({ nSuppliesDelivered : 0 });
    }

    display() {
        this.scene.setActiveShader(this.shader);
        this.billboardTexture.bind(1);

        this.scene.pushMatrix();

        this.scene.translate(-12, 7.5, -6);
        this.scene.scale(2, 1, 1);
        this.scene.scale(2, 2, 2);
        this.scene.rotate(Math.PI/3, 0, 1, 0);
        this.myPlane.display();

        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);

        this.scene.pushMatrix();

        this.scene.translate(-12, 7.5, -6);
        this.scene.scale(2, 1, 1);
        this.scene.scale(2, 2, 2);
        this.scene.rotate(Math.PI/3, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.backAppearance.apply();
        this.myPlane.display();

        this.scene.popMatrix();

        
        // Posts
        this.postAppearance.apply();

        this.scene.pushMatrix();
        this.scene.translate(-1.0, -1, 0.80);
        this.scene.translate(-12, 6, -6);
        this.scene.scale(0.08, 2, 0.08);
        this.post.display();
        this.scene.popMatrix();

        this.postAppearance.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.85, -1, -0.95);
        this.scene.translate(-12, 6, -6);
        this.scene.scale(0.08, 2, 0.08);
        this.post.display();
        this.scene.popMatrix();

    }

    
}