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
        this.myUnitCubeQuad = new MyUnitCubeQuad(this);
        this.myTable = new Table(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.scaleFactor = 0.1;
        this.displayUnitCubeQuad = true;
        this.displayTable = true;

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

        this.pushMatrix();

        this.translate(0.5, 1, 0.5);
        this.rotate(-Math.PI / 2, 1, 0, 0);

        if (this.displayUnitCubeQuad) {
            this.pushMatrix();
            this.translate(20, 20, 7);
            this.scale(50, 0.1, 15);
            this.setDiffuse(0.9, 0.9, 0.9, 1);
            this.myUnitCubeQuad.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(15, -25, -3);
            this.rotate(Math.PI / 2, 0, 0, 1);
            this.translate(20, 20, 10);
            this.scale(50, 0.1, 15);
            this.setDiffuse(0.9, 0.9, 0.9, 1);
            this.myUnitCubeQuad.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(65, -25, -3);
            this.rotate(Math.PI / 2, 0, 0, 1);
            this.translate(20, 20, 10);
            this.scale(50, 0.1, 15);
            this.setDiffuse(0.9, 0.9, 0.9, 1);
            this.myUnitCubeQuad.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(20, -30, 7);
            this.scale(50, 0.1, 15);
            this.setDiffuse(0.9, 0.9, 0.9, 1);
            this.myUnitCubeQuad.display();
            this.popMatrix();


            this.pushMatrix();
            this.translate(20, -5, 0);
            this.scale(50, 50, 0.1);
            this.setDiffuse(0.9, 0.9, 0.9, 1);
            this.myUnitCubeQuad.display(); // chão
            this.popMatrix();

            this.pushMatrix();
            this.translate(30, 20, 6);
            this.scale(7, 0.5, 12);
            this.setDiffuse(0.396, 0.263, 0.129, 1);
            this.myUnitCubeQuad.display();
            this.popMatrix();

            this.pushMatrix();

        }

        if (this.displayTable) {
            this.pushMatrix();
            this.translate(-2, -3, 0);
            this.scale(3, 2, 1);
            this.myTable.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(10, -3, 0);
            this.scale(3, 2, 1);
            this.myTable.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(10, 10, 0);
            this.scale(3, 2, 1);
            this.myTable.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(-2, 10, 0);
            this.scale(3, 2, 1);
            this.myTable.display();
            this.popMatrix();
        }



        this.popMatrix();

        // ---- END Primitive drawing section
    }
}