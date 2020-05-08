/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.updatePeriod = 1;
        this.setUpdatePeriod(this.updatePeriod);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.incompleteSphere = new MySphere(this, 16, 8);
        this.cylinder = new MyCylinder(this, 30);
        this.sphere = new MySphere(this, 50, 50);
        this.cube = new MyCubeQuad(this);
        this.vehicle = new MyVehicle(this);
        this.terrain = new MyTerrain(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayCilinder = false;
        this.displaySphere = false;
        this.displayVehicle = true;
        this.skyBackground = true;
        this.darkBackground = false;
        this.displayTerrain = true;

        // Appearance
        this.defaultAppearance = new CGFappearance(this);
        this.defaultAppearance.setAmbient(0.4, 0.6, 1.0, 1.0);
        this.defaultAppearance.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.defaultAppearance.setSpecular(0.42, 0.6, 0.8, 1.0);
        this.defaultAppearance.setShininess(10.0);
        this.defaultAppearance.loadTexture('images/earth.jpg');
        this.defaultAppearance.setTextureWrap('REPEAT','REPEAT');
        this.defaultAppearance.apply();

        // Tap Appearance
        this.tapAppearance = new CGFappearance(this);
        this.tapAppearance.setAmbient(0.4, 0.6, 1.0, 1.0);
        this.tapAppearance.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.tapAppearance.setSpecular(0.42, 0.6, 0.8, 1.0);
        this.tapAppearance.setShininess(10.0);
        this.tapAppearance.loadTexture('images/TapPTS.png');
        this.tapAppearance.setTextureWrap('REPEAT','REPEAT');

        this.speedFactor = 1;
        this.scaleFactor = 1;     
        
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 30, 15), vec3.fromValues(0, 10, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.4, 0.6, 1.0, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);        
    }
    // called periodically (as per setUpdatePeriod() in init())
    update(t){
    
        this.checkKeys();
        this.vehicle.update();

        if (this.lastUpdate == 0)
            this.lastUpdate = t;
        var elapsedTime = t - this.lastUpdate;
        this.lastUpdate = t;

        this.vehicle.autoPilot(elapsedTime);

    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        //This sphere does not have defined texture coordinates
        //this.incompleteSphere.display();
        this.defaultAppearance.apply(); 

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
            0.0, this.scaleFactor, 0.0, 0.0,
            0.0, 0.0, this.scaleFactor, 0.0,
            0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);
        
        if (this.displayCilinder)
            this.cylinder.display();

        //This sphere have defined texture coordinates
        if (this.displaySphere)
            this.sphere.display();

        if (this.displayVehicle) {
            this.tapAppearance.apply();
            this.vehicle.display();
            this.defaultAppearance.apply();
        }
        
        if(this.skyBackground)
            this.cube.display();
        else if(this.darkBackground)
            this.cube.display();


        if (this.displayTerrain) {
            this.terrain.display();
        }

        //this.setActiveShader(this.defaultShader);

        // ---- END Primitive drawing section
    }

    checkKeys() {
        //var text = "Keys pressed: ";
        //var keysPressed = false;

        /*
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyS")) {
            text += " S ";
            keysPressed = true;
        }

        if (keysPressed) {
            console.log(text);
        } 
        */

        if (this.gui.isKeyPressed("KeyW")) {
            if (!this.vehicle.autoPilotOn)
                this.vehicle.accelerate(this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyS")) {
            if (!this.vehicle.autoPilotOn)
                this.vehicle.accelerate(-this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyA")) {
            if (!this.vehicle.autoPilotOn)
                this.vehicle.turn(4);
        }

        if (this.gui.isKeyPressed("KeyD")) {
            if (!this.vehicle.autoPilotOn)
                this.vehicle.turn(-4);
        }

        if (this.gui.isKeyPressed("KeyR")) {
            this.vehicle.reset();
        }

        if (this.gui.isKeyPressed("KeyP")) {
            this.vehicle.checkAutoPilot();
        }

        //if (this.vehicle.autoPilotOn)
          //  this.vehicle.autoPilot();

    

    }
}