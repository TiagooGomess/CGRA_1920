/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject {
	constructor(scene) {
        super(scene);
        //this.pyramid = new MyPyramid(this.scene, 7, 7);
        this.sphere = new MySphere(this.scene, 30, 30);
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
        this.angleTrapeze = 0;
        this.TRAPEZE_MAX_ANGLE = Math.PI/8;
        this.autoPilotOn = false;

        // Aircraft Appearance
        this.aircraftAppearance = new CGFappearance(this.scene);
        this.aircraftAppearance.setAmbient(0.8, 0.2, 0.2, 1.0);
        this.aircraftAppearance.setDiffuse(0.8, 0.2, 0.2, 1.0);
        this.aircraftAppearance.setSpecular(0.8, 0.2, 0.2, 1.0);
        this.aircraftAppearance.setShininess(5.0);
        this.aircraftAppearance.loadTexture('images/patternAirship.jpg');
        this.aircraftAppearance.setTextureWrap('REPEAT','REPEAT');

        // Cylinder Appearence
        this.cylinderAppearance = new CGFappearance(this.scene);
        this.cylinderAppearance.setAmbient(150/256, 75/256, 0, 1.0);
        this.cylinderAppearance.setDiffuse(150/256, 75/256, 0, 1.0);
        this.cylinderAppearance.setSpecular(150/256, 75/256, 0, 1.0);
        this.cylinderAppearance.setShininess(5.0);
        this.cylinderAppearance.loadTexture('images/patternAirship.jpg');
        this.cylinderAppearance.setTextureWrap('REPEAT','REPEAT');

        // Propeller Appearence
        this.propellerAppearance = new CGFappearance(this.scene);
        this.propellerAppearance.setAmbient(0, 0, 0, 1.0);
        this.propellerAppearance.setDiffuse(0, 0, 0, 1.0);
        this.propellerAppearance.setSpecular(0, 0, 0, 1.0);
        this.propellerAppearance.setShininess(5.0);
        this.propellerAppearance.loadTexture('images/patternAirship.jpg');
        this.propellerAppearance.setTextureWrap('REPEAT','REPEAT');

        // Trapeze Appearence
        this.trapezeAppearance = new CGFappearance(this.scene);
        this.trapezeAppearance.setAmbient(1, 1, 0, 1.0);
        this.trapezeAppearance.setDiffuse(1, 1, 0, 1.0);
        this.trapezeAppearance.setSpecular(1, 1, 0, 1.0);
        this.trapezeAppearance.setShininess(5);
        this.trapezeAppearance.loadTexture('images/patternAirship.jpg');
        this.trapezeAppearance.setTextureWrap('REPEAT','REPEAT');
    }

    display() {
        this.aircraftAppearance.apply();

        this.scene.pushMatrix();

        // turn and accelerate
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angleYY*Math.PI/180.0, 0, 1, 0);
        
        this.scene.translate(0, 10, 0);
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 2); // scale the sphere so it looks like an airship
        this.sphere.display();
        this.scene.popMatrix();

        // -------------- TRAPEZES --------------
        this.scene.pushMatrix(); 
        this.scene.translate(0, 0.7, -2);
        this.scene.rotate(-this.angleTrapeze, 0, 1, 0);
        this.trapezeAppearance.apply();
        this.trapeze.display(); // trapeze vertical up
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.7, -2);
        this.scene.rotate(-this.angleTrapeze, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.trapezeAppearance.apply();
        this.trapeze.display(); // trapeze vertical down
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, -2);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.trapezeAppearance.apply();
        this.trapeze.display(); // trapeze horizontal left
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, -2);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.trapezeAppearance.apply();
        this.trapeze.display(); // trapeze horizontal right
        this.scene.popMatrix();
        // --------------------------------------

        // -------------- CYLINDER --------------
        this.scene.pushMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0, -1.2, 0.8);
        this.scene.scale(0.2, 0.2, 0.2);
        this.cylinderAppearance.apply();
        this.cylinderBase.display(); // base da frente do cilindro
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -1.2, -0.8);
        this.scene.scale(0.2, 0.2, 0.2);
        this.cylinderAppearance.apply();
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
        this.propellerAppearance.apply();
        this.propeller.display(); // hélice da direita
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.3, -1.2, -1.08);
        this.scene.rotate(Math.PI/2 + this.anglePropeller, 0, 0, 1);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(0.02, 0.02, 0.02);
        this.scene.scale(1, 1, 8);
        this.propellerAppearance.apply();
        this.propeller.display(); // hélice da esquerda
        this.scene.popMatrix();

        this.scene.translate(0, -1.2, -0.8);
        this.scene.scale(0.2, 0.2, 0.2);
        this.scene.scale(1, 1, 8);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.cylinderAppearance.apply();
        this.cylinder.display(); // main cylinder
        this.scene.popMatrix();
        // --------------------------------------

        this.scene.popMatrix();

    }

    update() {
        if (!this.autoPilotOn) {
            this.z += this.speed * Math.cos(this.angleYY*Math.PI/180.0);
            this.x += this.speed * Math.sin(this.angleYY*Math.PI/180.0);
            this.anglePropeller += this.speed;
        }
        else {
            this.anglePropeller += 0.1;
        }
        
    }

    turn(val) {
        this.angleYY += val;
        if (this.angleTrapeze + 0.01*val <= this.TRAPEZE_MAX_ANGLE && this.angleTrapeze + 0.01*val >= -this.TRAPEZE_MAX_ANGLE)
            this.angleTrapeze += 0.01*val;
    }
    
    accelerate(val) {
        this.speed += 0.03*val;
        if (this.angleTrapeze > 0) {
            this.angleTrapeze -= 0.01;
        }
        if (this.angleTrapeze < 0) {
            this.angleTrapeze += 0.01;
        }
    }

    reset() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.angleYY = 0;
        this.speed = 0;
        this.anglePropeller = 0;
        this.angleTrapeze = 0;
        this.autoPilotOn = false;
    }

    checkAutoPilot() {
        this.autoPilotOn = this.autoPilotOn ? false : true;
        if (this.autoPilotOn) {
            // cálculo do angulo entre a direção do veículo e o eixo do xx
            this.angleXX = (this.angleYY + 90) * Math.PI/180;

            // cálculo do centro de rotação
            this.centerPosition = [this.x + 5*Math.sin(this.angleXX), 0, this.z + 5*Math.cos(this.angleXX)]

            // Definir a posição inicial utilizando o centro e ângulo inicial calculados
            this.x = this.centerPosition[0] + 5*Math.cos(this.angleYY* Math.PI / 180);
            this.z = this.centerPosition[2] + 5*Math.sin(this.angleYY* Math.PI / 180);
            this.speed = 0;
        }
    }

    autoPilot(elapsedTime) {
        if (this.autoPilotOn) {

            // Atualização da posição a cada frame
            this.x = this.centerPosition[0] - 5*Math.cos(this.angleYY*Math.PI/180);
            this.z = this.centerPosition[2] + 5*Math.sin(this.angleYY*Math.PI/180);
            
            // Atualização da direção
            this.turn(180*((elapsedTime*2*Math.PI) / 5000)/Math.PI); // uma volta (2*PI) é completada em 5000 ms (5 s)

        }
        
    }

}