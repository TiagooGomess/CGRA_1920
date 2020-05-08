/**
 * MyTrapeze
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTrapeze extends CGFobject {
	constructor(scene) {
        super(scene);

        this.triangle = new MyTriangle(this.scene);
        this.square = new MyDiamond(this.scene);
    }

    display() {
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.scale(1, 0.4, 0.4);
            
        this.scene.setAmbient(1, 1, 1, 1);
        this.scene.setDiffuse(0.3, 0.3, 0.3, 1);
        this.scene.setSpecular(0.3, 0.3, 0.3, 1);

        this.scene.pushMatrix();
        this.scene.scale(1, 0.707, 0.707);
        this.scene.translate(0, 0, -2);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.square.display();
        this.scene.popMatrix();
    }
}