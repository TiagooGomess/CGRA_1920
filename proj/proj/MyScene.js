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

        this.updatePeriod = 50/1000;
        this.setUpdatePeriod(this.updatePeriod);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.cylinder = new MyCylinder(this, 30);
        this.sphere = new MySphere(this, 50, 50);
        this.cube = new MyCubeQuad(this);
        this.vehicle = new MyVehicle(this);
        this.terrain = new MyTerrain(this);

        this.mySupplies = [];
        for (var i = 0; i < 5; i++) {
            this.mySupplies.push(new MySupply(this));
        }
        this.nSuppliesDelivered = 0;

        this.mySupply = new MySupply(this);

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

        this.speedFactor = 1;
        this.scaleFactor = 1;     

        this.numTimesPKeyIsPressed = 0;
        this.numTimesLKeyIsPressed = 0;
        
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 20, 15), vec3.fromValues(0, 2, 0));
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

        for (var i = 0; i < 5; i++) {
            this.mySupplies[i].update(elapsedTime);
        }

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

        this.defaultAppearance.apply(); 

        var sca = [0.45*this.scaleFactor, 0.0, 0.0, 0.0,
            0.0, 0.45*this.scaleFactor, 0.0, 0.0,
            0.0, 0.0, 0.45*this.scaleFactor, 0.0,
            0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);
        
        if (this.displayCilinder)
            this.cylinder.display();

        //This sphere have defined texture coordinates
        if (this.displaySphere)
            this.sphere.display();

        if (this.displayVehicle) {
            this.vehicle.display();
        }
        
        if(this.skyBackground || this.darkBackground)
            this.cube.display();

        if (this.displayTerrain) {
            this.terrain.display();
        }

        for (var i = 0; i < 5; i++) {
            this.mySupplies[i].display();
        }


        // ---- END Primitive drawing section
    }

    checkKeys() {

        if (this.gui.isKeyPressed("KeyW")) {
            if (!this.vehicle.autoPilotOn)
                this.vehicle.accelerate(this.speedFactor*0.5);
        }

        if (this.gui.isKeyPressed("KeyS")) {
            if (!this.vehicle.autoPilotOn)
                this.vehicle.accelerate(-this.speedFactor*0.5);
        }

        if (this.gui.isKeyPressed("KeyA")) {
            if (!this.vehicle.autoPilotOn)
                this.vehicle.turn(3);
        }

        if (this.gui.isKeyPressed("KeyD")) {
            if (!this.vehicle.autoPilotOn)
                this.vehicle.turn(-3);
        }

        if (this.gui.isKeyPressed("KeyR")) {
            this.vehicle.reset();
            this.numTimesPKeyIsPressed = 0;
            this.numTimesLKeyIsPressed = 0;
            for (var i = 0; i < 5; i++) {
                this.mySupplies[i].reset();
            }
            this.nSuppliesDelivered = 0;
        }

        if (this.gui.isKeyPressed("KeyP")) {
            this.numTimesPKeyIsPressed++;
            if (this.numTimesPKeyIsPressed == 1)
                this.vehicle.checkAutoPilot();
        }
        else {
            if (this.numTimesPKeyIsPressed > 1)
                this.numTimesPKeyIsPressed = 0;
        }

        if (this.gui.isKeyPressed("KeyL") && this.nSuppliesDelivered < 5) {
            this.numTimesLKeyIsPressed++;
            if (this.numTimesLKeyIsPressed == 1) {
                this.mySupplies[this.nSuppliesDelivered].drop([this.vehicle.x, 8.5, this.vehicle.z]);
                this.nSuppliesDelivered++;
            }       
        }
        else {
            if (this.numTimesLKeyIsPressed > 1)
                this.numTimesLKeyIsPressed = 0;
        }
        




    }
}