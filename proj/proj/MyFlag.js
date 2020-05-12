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

        this.wireAppearance = new CGFappearance(this.scene);
        this.wireAppearance.setAmbient(0, 0, 0, 1.0);
        this.wireAppearance.setDiffuse(0, 0, 0, 1.0);
        this.wireAppearance.setSpecular(0, 0, 0, 1.0);
        this.wireAppearance.setShininess(5.0);
    }

    display() {
        // flag
        this.scene.pushMatrix();
        this.scene.scale(0.8, 0.7, 1.6);
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.myPlane.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.8, 0.7, 1.6);
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.myPlane.display();
        this.scene.popMatrix();

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