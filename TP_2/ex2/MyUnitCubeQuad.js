/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.square = new MyQuad(this.scene);
    }
    display() {
        this.scene.pushMatrix(); // face de trás
        this.scene.translate(0, 0, 0.5);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // face da frente
        this.scene.translate(0, 0, -0.5);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // face de cima
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // face de baixo
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // face da esquerda
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // face da direita
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.square.display();
        this.scene.popMatrix();
    }
}