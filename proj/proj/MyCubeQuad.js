/**
 * MyCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);
        this.quad = new MyQuad(this.scene);
        this.initMaterials(scene);
    }
    initMaterials(scene) {
            this.skyBg = new CGFappearance(scene);
            this.skyBg.setAmbient(1.0, 1.0, 1.0, 1.0);
            this.skyBg.setEmission(1.0, 1.0, 1.0, 1.0);

            this.backS = new CGFtexture(scene, "images/split_cubemap/back.png");
            this.bottomS = new CGFtexture(scene, "images/split_cubemap/bottom.png");
            this.frontS = new CGFtexture(scene, "images/split_cubemap/front.png");
            this.leftS = new CGFtexture(scene, "images/split_cubemap/left.png");
            this.rightS = new CGFtexture(scene, "images/split_cubemap/right.png");
            this.topS = new CGFtexture(scene, "images/split_cubemap/top.png");

            // ---

            this.darkBg = new CGFappearance(scene);
            this.darkBg.setAmbient(1.0, 1.0, 1.0, 1.0);
            this.darkBg.setEmission(1.0, 1.0, 1.0, 1.0); 

            this.backD = new CGFtexture(scene, "images/dark_cubemap/back.png");
            this.bottomD = new CGFtexture(scene, "images/dark_cubemap/bottom.png");
            this.frontD = new CGFtexture(scene, "images/dark_cubemap/front.png");
            this.leftD = new CGFtexture(scene, "images/dark_cubemap/left.png");
            this.rightD = new CGFtexture(scene, "images/dark_cubemap/right.png");
            this.topD = new CGFtexture(scene, "images/dark_cubemap/top.png");
        

    }
    display() {
        this.scene.pushMatrix();
        this.scene.scale(50.0, 50.0, 50.0);

        if(this.scene.skyBackground) {
            this.skyBg.setTexture(this.bottomS);
            this.skyBg.apply();
        }    
        else {
            this.darkBg.setTexture(this.bottomD);
            this.darkBg.apply();
        }    
        
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        if(this.scene.skyBackground) {
            this.skyBg.setTexture(this.frontS);
            this.skyBg.apply();
        }    
        else {
            this.darkBg.setTexture(this.frontD);
            this.darkBg.apply();
        } 

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5); 
        this.quad.display();
        this.scene.popMatrix();

        if(this.scene.skyBackground) {
            this.skyBg.setTexture(this.rightS);
            this.skyBg.apply();
        }    
        else {
            this.darkBg.setTexture(this.rightD);
            this.darkBg.apply();
        } 

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        if(this.scene.skyBackground) {
            this.skyBg.setTexture(this.backS);
            this.skyBg.apply();
        }    
        else {
            this.darkBg.setTexture(this.backD);
            this.darkBg.apply();
        } 

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        if(this.scene.skyBackground) {
            this.skyBg.setTexture(this.leftS);
            this.skyBg.apply();
        }    
        else {
            this.darkBg.setTexture(this.leftD);
            this.darkBg.apply();
        } 

        this.scene.pushMatrix();
        this.scene.rotate(3 * Math.PI/2, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        if(this.scene.skyBackground) {
            this.skyBg.setTexture(this.topS);
            this.skyBg.apply();
        }    
        else {
            this.darkBg.setTexture(this.topD);
            this.darkBg.apply();
        } 

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}