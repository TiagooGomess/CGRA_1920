/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject {
	constructor(scene) {
        super(scene);
        
        this.pyramid = new MyPyramid(this.scene, 7, 7);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.pyramid.display();
        this.scene.popMatrix();
    }
    
}