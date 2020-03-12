/**
 * Table
 * @constructor
 * @param scene - Reference to MyScene object
 */
class Table extends CGFobject {
    constructor(scene) {
        super(scene);
        this.square = new MyUnitCubeQuad(this.scene);
    }
    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 2);
        this.scene.scale(0.2, 0.2, 3);
        this.scene.translate(0, 0, -0.5);
        this.scene.setDiffuse(0.396, 0.263, 0.129, 1);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 3, 2);
        this.scene.scale(0.2, 0.2, 3);
        this.scene.translate(0, 0, -0.5);
        this.scene.setDiffuse(0.396, 0.263, 0.129, 1);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3, 3, 2);
        this.scene.scale(0.2, 0.2, 3);
        this.scene.translate(0, 0, -0.5);
        this.scene.setDiffuse(0.396, 0.263, 0.129, 1);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3, 0, 2);
        this.scene.scale(0.2, 0.2, 3);
        this.scene.translate(0, 0, -0.5);
        this.scene.setDiffuse(0.396, 0.263, 0.129, 1);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.5, 1.5, 2);
        this.scene.scale(3.5, 3.5, 0.2);
        this.scene.translate(0, 0, -0.5);
        this.scene.setDiffuse(1, 1, 1, 1);
        this.square.display();
        this.scene.popMatrix();
    }
}