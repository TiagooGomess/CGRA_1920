/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.diamond = new MyDiamond(this.scene);
        this.myTriangle = new MyTriangle(this.scene);
        this.myBigTriangle = new MyTriangleBig(this.scene);
        this.myParallelogram = new MyParallelogram(this.scene);
        this.myTriangle2 = new MyTriangle(this.scene); 
        this.mySmallTriangle = new MyTriangleSmall(this.scene);
        this.mySmallTriangle2 = new MyTriangleSmall(this.scene);
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
        this.scene.setDiffuse(0, 1, 0, 1);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 2, 0);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.setDiffuse(0.7, 0.3, 0, 1);
        this.myBigTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.setDiffuse(0.5, 0.5, 0, 1);
        this.myParallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.scene.translate(1,1,0);
        this.scene.setDiffuse(1, 0.753, 0.796, 1);
        this.myTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 1.4, 0);
        this.scene.scale(1.5, 1.3, 1);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.translate(1, 1, 0);
        this.scene.setDiffuse(0, 0, 1, 1);
        this.myTriangle2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.2, -2.2, 0);
        this.scene.rotate(-Math.PI * (3/4), 0, 0, 1);
        this.scene.setDiffuse(0.52, 0, 0.52, 1);
        this.mySmallTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.4, -1.5, 0);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.setDiffuse(1, 0, 0, 1);
        this.mySmallTriangle2.display();
        this.scene.popMatrix();
    }
}