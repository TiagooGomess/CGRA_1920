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

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.incompleteSphere = new MySphere(this, 16, 8);
        this.cylinder = new MyCylinder(this, 30);
        this.sphere = new MySphere(this, 50, 50);
        this.cube = new MyCubeQuad(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayCilinder = false;
        this.displaySphere = false;
        this.skyBackground = true;
        this.darkBackground = false;

        // Appearance
        this.defaultAppearance = new CGFappearance(this);
        this.defaultAppearance.setAmbient(0.4, 0.6, 1.0, 1.0);
        this.defaultAppearance.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.defaultAppearance.setSpecular(0.42, 0.6, 0.8, 1.0);
        this.defaultAppearance.setShininess(10.0);
        this.defaultAppearance.loadTexture('images/earth.jpg');
        this.defaultAppearance.setTextureWrap('REPEAT','REPEAT');
        this.defaultAppearance.apply();
        
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.4, 0.6, 1.0, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);        
    }
    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        //To be done...
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
        
        if (this.displayCilinder)
            this.cylinder.display();

        //This sphere have defined texture coordinates
        if (this.displaySphere)
            this.sphere.display();
        
        if(this.skyBackground)
            this.cube.display();
        else if(this.darkBackground)
            this.cube.display();

        // ---- END Primitive drawing section
    }
}