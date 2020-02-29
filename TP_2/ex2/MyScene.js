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
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0); // (red, green, blue, alpha) (values between 0 and 1)

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        /*
        this.diamond = new MyDiamond(this);
        this.myTriangle = new MyTriangle(this);
        this.myBigTriangle = new MyTriangleBig(this);
        this.myParallelogram = new MyParallelogram(this);
        this.myTriangle2 = new MyTriangle(this); 
        this.mySmallTriangle = new MyTriangleSmall(this);
        this.mySmallTriangle2 = new MyTriangleSmall(this);
        */
        this.myTangram = new MyTangram(this);


        //Objects connected to MyInterface
        this.displayAxis = true;
        this.scaleFactor = 1;
        /*
        this.displayDiamond = true;
        this.displayMyTriangle = true;
        this.displayTriangleBig = true;
        this.displayMyParallelogram = true;
        this.displayMyTriangle2 = true;
        this.displayTriangleSmall = true;
        this.displayTriangleSmall2 = true;
        */
        this.displayTangram = true;



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
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
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

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);

        // ---- BEGIN Primitive drawing section

        /*
        if (this.displayDiamond) {
            this.pushMatrix();
            var tx = 0, ty = 4.7, tz = 0;
            var translation = [1.0, 0.0, 0.0, 0.0,
                               0.0, 1.0, 0.0, 0.0,
                               0.0, 0.0, 1.0, 0.0,
                               tx, ty, tz, 1.0];
            this.multMatrix(translation);
            var angle = Math.PI / 4;
            var rotationZ = [Math.cos(angle), Math.sin(angle), 0.0, 0.0,
                            -Math.sin(angle), Math.cos(angle), 0.0, 0.0,
                            0.0, 0.0, 1.0, 0.0,
                            0.0, 0.0, 0.0, 1.0];
            this.multMatrix(rotationZ);
            this.diamond.display();
            this.popMatrix();
        }

        if (this.displayTriangleBig) {
            this.pushMatrix();
            this.translate(0, 2, 0);
            this.rotate(-Math.PI / 2, 0, 0, 1);
            this.myBigTriangle.display();
            this.popMatrix();
        }
        if (this.displayMyParallelogram) {
            this.pushMatrix();
            this.translate(0, 1, 0);
            this.scale(-1, 1, 1);
            this.rotate(-Math.PI / 2, 0, 0, 1);
            this.myParallelogram.display();
            this.popMatrix();
        }
        if (this.displayMyTriangle) {
            this.pushMatrix();
            this.rotate(-Math.PI / 4, 0, 0, 1);
            this.translate(1,1,0);
            this.myTriangle.display();
            this.popMatrix();
        }
        if (this.displayMyTriangle2) {
            this.pushMatrix();
            this.translate(0, 1.4, 0);
            this.scale(1.5, 1.3, 1);
            this.rotate(Math.PI / 2, 0, 0, 1);
            this.translate(1, 1, 0);
            this.myTriangle2.display();
            this.popMatrix();
        }
        if (this.displayTriangleSmall) {
            this.pushMatrix();
            this.translate(-1.2, -2.2, 0);
            this.rotate(-Math.PI * (3/4), 0, 0, 1);
            this.mySmallTriangle.display();
            this.popMatrix();
        }
        if (this.displayTriangleSmall2) {
            this.pushMatrix();
            this.translate(1.4, -1.5, 0);
            this.rotate(-Math.PI / 2, 0, 0, 1);
            this.mySmallTriangle2.display();
            this.popMatrix();
        }
        */
        if (this.displayTangram) {
            this.myTangram.display();
        }
        


        // ---- END Primitive drawing section
    }
}