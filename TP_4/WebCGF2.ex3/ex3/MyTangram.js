/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);

        this.initMaterials(this.scene);
        this.diamond = new MyDiamond(this.scene);
        this.myTriangle = new MyTriangle(this.scene);
        this.myBigTriangle = new MyTriangleBig(this.scene);
        this.myParallelogram = new MyParallelogram(this.scene);
        this.myTriangle2 = new MyTriangle(this.scene); 
        this.mySmallTriangle = new MyTriangleSmall(this.scene);
        this.mySmallTriangle2 = new MyTriangleSmall(this.scene);
    }

    initMaterials(scene) {
        this.green = new CGFappearance(scene);
        this.green.setAmbient(0, 1, 0, 1);
        this.green.setDiffuse(0, 1, 0, 1);
        this.green.setSpecular(0, 1, 0, 1);
        this.green.setShininess(0);

        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0, 0, 1, 1);
        this.blue.setDiffuse(0, 0, 1, 1);
        this.blue.setSpecular(0, 0, 1, 1);
        this.blue.setShininess(0);

        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(1, 0.5, 0, 1);
        this.orange.setDiffuse(1, 0.5, 0, 1);
        this.orange.setSpecular(1, 0.5, 0, 1);
        this.orange.setShininess(0);

        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(1, 1, 0, 1);
        this.yellow.setDiffuse(1, 1, 0, 1);
        this.yellow.setSpecular(1, 1, 0, 1);
        this.yellow.setShininess(0);

        this.purple = new CGFappearance(scene);
        this.purple.setAmbient(0.52, 0, 0.52, 1);
        this.purple.setDiffuse(0.52, 0, 0.52, 1);
        this.purple.setSpecular(0.52, 0, 0.52, 1);
        this.purple.setShininess(0);

        this.red = new CGFappearance(scene);
        this.red.setAmbient(1, 0, 0, 1);
        this.red.setDiffuse(1, 0, 0, 1);
        this.red.setSpecular(1, 0, 0, 1);
        this.red.setShininess(0);

        this.pink = new CGFappearance(scene);
        this.pink.setAmbient(1, 0.5, 0.8, 1);
        this.pink.setDiffuse(1, 0.5, 0.8, 1);
        this.pink.setSpecular(1, 0.5, 0.8, 1);
        this.pink.setShininess(0);
    }

    display() {
        this.scene.pushMatrix();
        var tx = 0, ty = 4.7, tz = 0;
        var translation = [1.0, 0.0, 0.0, 0.0,
                            0.0, 1.0, 0.0, 0.0,
                            0.0, 0.0, 1.0, 0.0,
                            tx, ty, tz, 1.0];
        this.scene.multMatrix(translation);
        var angle = Math.PI / 4;
        var rotationZ = [Math.cos(angle), Math.sin(angle), 0.0, 0.0,
                        -Math.sin(angle), Math.cos(angle), 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        0.0, 0.0, 0.0, 1.0];
        this.scene.multMatrix(rotationZ);
        //this.scene.setDiffuse(0, 1, 0, 1);
        //this.green.apply();
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 2, 0);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        //this.scene.setDiffuse(0.7, 0.3, 0, 1);
        this.orange.apply();
        this.myBigTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        //this.scene.setDiffuse(0.5, 0.5, 0, 1);
        this.yellow.apply();
        this.myParallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.scene.translate(1,1,0);
        //this.scene.setDiffuse(1, 0.753, 0.796, 1);
        this.pink.apply();
        this.myTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 1.4, 0);
        this.scene.scale(1.5, 1.3, 1);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.translate(1, 1, 0);
        //this.scene.setDiffuse(0, 0, 1, 1);
        this.blue.apply();
        this.myTriangle2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.2, -2.2, 0);
        this.scene.rotate(-Math.PI * (3/4), 0, 0, 1);
        //this.scene.setDiffuse(0.52, 0, 0.52, 1);
        this.purple.apply();
        this.mySmallTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.4, -1.5, 0);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        //this.scene.setDiffuse(1, 0, 0, 1);
        this.red.apply();
        this.mySmallTriangle2.display();
        this.scene.popMatrix();
    }

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.myTriangle.enableNormalViz();
        this.myBigTriangle.enableNormalViz();
        this.myParallelogram.enableNormalViz();
        this.myTriangle2.enableNormalViz(); 
        this.mySmallTriangle.enableNormalViz();
        this.mySmallTriangle2.enableNormalViz();
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.myTriangle.disableNormalViz();
        this.myBigTriangle.disableNormalViz();
        this.myParallelogram.disableNormalViz();
        this.myTriangle2.disableNormalViz(); 
        this.mySmallTriangle.disableNormalViz();
        this.mySmallTriangle2.disableNormalViz();
    }

    updateBuffers(complexity) {
        this.initBuffers();
        this.initNormalVizBuffers();
    }
    

}