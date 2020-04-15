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
            this.backS = new CGFappearance(scene);   
            this.backS.setAmbient(1.0, 1.0, 1.0, 1.0);
            this.backS.setShininess(10.0);

            this.bottomS = new CGFappearance(scene);   
            this.bottomS.setAmbient(1.0, 1.0, 1.0, 1.0);
            this.bottomS.setShininess(10.0);

            this.frontS = new CGFappearance(scene);   
            this.frontS.setAmbient(1.0, 1.0, 1.0, 1.0);
            this.frontS.setShininess(10.0);

            this.leftS = new CGFappearance(scene);   
            this.leftS.setAmbient(1.0, 1.0, 1.0, 1.0);        
            this.leftS.setShininess(10.0);

            this.rightS = new CGFappearance(scene);   
            this.rightS.setAmbient(1.0, 1.0, 1.0, 1.0);
            this.rightS.setShininess(10.0);

            this.topS = new CGFappearance(scene);   
            this.topS.setAmbient(1.0, 1.0, 1.0, 1.0);
            this.topS.setShininess(10.0);

            this.backS.loadTexture("images/split_cubemap/back.png");
            this.bottomS.loadTexture("images/split_cubemap/bottom.png");
            this.frontS.loadTexture("images/split_cubemap/front.png");
            this.leftS.loadTexture("images/split_cubemap/left.png");
            this.rightS.loadTexture("images/split_cubemap/right.png");
            this.topS.loadTexture("images/split_cubemap/top.png");

            // ---
            this.backD = new CGFappearance(scene);   
            this.backD.setAmbient(1.0, 1.0, 1.0, 1.0);
            this.backD.setShininess(10.0);

            this.bottomD = new CGFappearance(scene);   
            this.bottomD.setAmbient(1.0, 1.0, 1.0, 1.0);
            this.bottomD.setShininess(10.0);

            this.frontD = new CGFappearance(scene);   
            this.frontD.setAmbient(1.0, 1.0, 1.0, 1.0);
            this.frontD.setShininess(10.0);

            this.leftD = new CGFappearance(scene);   
            this.leftD.setAmbient(1.0, 1.0, 1.0, 1.0);        
            this.leftD.setShininess(10.0);

            this.rightD = new CGFappearance(scene);   
            this.rightD.setAmbient(1.0, 1.0, 1.0, 1.0);
            this.rightD.setShininess(10.0);

            this.frontD = new CGFappearance(scene);   
            this.frontD.setAmbient(1.0, 1.0, 1.0, 1.0);
            this.frontD.setShininess(10.0);

            this.topD = new CGFappearance(scene);   
            this.topD.setAmbient(1.0, 1.0, 1.0, 1.0);
            this.topD.setShininess(10.0);
            this.backD.loadTexture("images/dark_cubemap/back.png");
            this.bottomD.loadTexture("images/dark_cubemap/bottom.png");
            this.frontD.loadTexture("images/dark_cubemap/front.png");
            this.leftD.loadTexture("images/dark_cubemap/left.png");
            this.rightD.loadTexture("images/dark_cubemap/right.png");
            this.topD.loadTexture("images/dark_cubemap/top.png");
        

    }
    display() {
        this.scene.scale(50.0, 50.0, 50.0);

        if(this.scene.skyBackground)
            this.bottomS.apply();
        else
            this.bottomD.apply();
        
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        if(this.scene.skyBackground)
            this.frontS.apply();
        else
            this.frontD.apply();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5); 
        this.quad.display();
        this.scene.popMatrix();

        if(this.scene.skyBackground)
            this.rightS.apply();
        else
            this.rightD.apply();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        if(this.scene.skyBackground)
            this.backS.apply();
        else   
            this.backD.apply();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        if(this.scene.skyBackground)
            this.leftS.apply();
        else
            this.leftD.apply();

        this.scene.pushMatrix();
        this.scene.rotate(3 * Math.PI/2, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        if(this.scene.skyBackground)
            this.topS.apply();
        else
            this.topD.apply();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();
    }
}