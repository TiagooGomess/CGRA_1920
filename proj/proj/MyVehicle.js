/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject {
	constructor(scene) {
        super(scene);
        this.pyramid = new MyPyramid(this.scene, 7, 7);
        
        this.angleYY = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

    display() {
        this.scene.setAmbient(1, 1, 1, 1);

        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angleYY*Math.PI/180.0, 0, 1, 0);

        // transformações iniciais, para meter a pirâmide na origem, a opontar no eixo positivo dos zz
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.pyramid.display();
        this.scene.popMatrix();

    }

    update() {
        this.z += this.speed * Math.cos(this.angleYY*Math.PI/180.0);
        this.x += this.speed * Math.sin(this.angleYY*Math.PI/180.0);
    }

    turn(val) {
        this.angleYY += val;
    }
    
    accelerate(val) {
        this.speed = val;
    }

    reset() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.angleYY = 0;
        this.speed = 0;
    }
}