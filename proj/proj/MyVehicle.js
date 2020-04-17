/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject {
	constructor(scene) {
        super(scene);
        //this.pyramid = new MyPyramid(this.scene, 7, 7);
        this.sphere = new MySphere(this.scene, 20, 20);
        this.trapeze = new MyTrapeze(this.scene);
        this.cylinder = new MyCylinder(this.scene, 10);
        this.cylinderBase = new MySphere(this.scene, 10, 10);
        this.propellerSupport = new MySphere(this.scene, 10, 10);
        this.propeller = new MySphere(this.scene, 10, 10);

        this.angleYY = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.anglePropeller = 0;
    }

    display() {
        this.scene.setAmbient(1, 1, 1, 1);

        this.scene.pushMatrix();

        // turn and accelerate
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angleYY*Math.PI/180.0, 0, 1, 0);

        // transformações iniciais, para meter a pirâmide na origem, a opontar no eixo positivo dos zz
        //this.scene.translate(0, 0, -0.5);
        //this.scene.rotate(Math.PI/2, 1, 0, 0);
        //this.pyramid.display();
        
        //this.scene.translate(0, 10, 0);
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 2); // scale the sphere so it looks like an airship
        this.sphere.display();
        this.scene.popMatrix();

        // -------------- TRAPEZES --------------
        this.scene.pushMatrix(); 
        this.scene.translate(0, 0.7, -2);
        this.trapeze.display(); // trapeze vertical up
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.7, -2);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.trapeze.display(); // trapeze vertical down
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, -2);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.trapeze.display(); // trapeze horizontal left
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, -2);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.trapeze.display(); // trapeze horizontal right
        this.scene.popMatrix();
        // --------------------------------------

        // -------------- CYLINDER --------------
        this.scene.pushMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0, -1.2, 0.8);
        this.scene.scale(0.2, 0.2, 0.2);
        this.cylinderBase.display(); // base da frente do cilindro
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -1.2, -0.8);
        this.scene.scale(0.2, 0.2, 0.2);
        this.cylinderBase.display(); // base de trás do cilindro
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.3, -1.2, -0.8);
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.scale(1, 1, 3);
        this.propellerSupport.display(); // suporte da hélice esquerda
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.3, -1.2, -0.8);
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.scale(1, 1, 3);
        this.propellerSupport.display(); // suporte da hélice direita
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.3, -1.2, -1.08);
        this.scene.rotate(Math.PI/2 + this.anglePropeller, 0, 0, 1);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(0.02, 0.02, 0.02);
        this.scene.scale(1, 1, 8);
        this.propeller.display(); // hélice da direita
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.3, -1.2, -1.08);
        this.scene.rotate(Math.PI/2 + this.anglePropeller, 0, 0, 1);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(0.02, 0.02, 0.02);
        this.scene.scale(1, 1, 8);
        this.propeller.display(); // hélice da esquerda
        this.scene.popMatrix();

        this.scene.translate(0, -1.2, -0.8);
        this.scene.scale(0.2, 0.2, 0.2);
        this.scene.scale(1, 1, 8);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.cylinder.display(); // main cylinder
        this.scene.popMatrix();
        // --------------------------------------

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
        this.anglePropeller += 0.5;
    }

    reset() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.angleYY = 0;
        this.speed = 0;
    }
}