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
        this.back = new CGFtexture(scene, );
        this.bottom = new CGFtexture(scene, "images/split_cubemap/bottom.png");
        this.front = new CGFtexture(scene, "images/split_cubemap/left.png");
        this.left = new CGFtexture(scene, "images/split_cubemap/left.png");
        this.right = new CGFtexture(scene, "images/split_cubemap/right.png");
        this.top = new CGFtexture(scene, "images/split_cubemap/top.png");

        this.back = new CGFappearance(scene);   
        this.back.setAmbient(1.0, 1.0, 1.0, 1.0);
        this.back.setShininess(10.0);
        this.back.loadTexture("images/split_cubemap/back.png");
        this.back.setTextureWrap('REPEAT', 'REPEAT');

        this.bottom = new CGFappearance(scene);   
        this.bottom.setAmbient(1.0, 1.0, 1.0, 1.0);
        this.bottom.setShininess(10.0);
        this.bottom.loadTexture("images/split_cubemap/bottom.png");
        this.bottom.setTextureWrap('REPEAT', 'REPEAT');

        this.front = new CGFappearance(scene);   
        this.front.setAmbient(1.0, 1.0, 1.0, 1.0);
        this.front.setShininess(10.0);
        this.front.loadTexture("images/split_cubemap/front.png");
        this.front.setTextureWrap('REPEAT', 'REPEAT');

        this.left = new CGFappearance(scene);   
        this.left.setAmbient(1.0, 1.0, 1.0, 1.0);        this.left.setShininess(10.0);
        this.left.loadTexture("images/split_cubemap/left.png");
        this.left.setTextureWrap('REPEAT', 'REPEAT');

        this.right = new CGFappearance(scene);   
        this.right.setAmbient(1.0, 1.0, 1.0, 1.0);
        this.right.setShininess(10.0);
        this.right.loadTexture("images/split_cubemap/right.png");
        this.right.setTextureWrap('REPEAT', 'REPEAT');

        this.top = new CGFappearance(scene);   
        this.top.setAmbient(1.0, 1.0, 1.0, 1.0);
        this.top.setShininess(10.0);
        this.top.loadTexture("images/split_cubemap/top.png");
        this.top.setTextureWrap('REPEAT', 'REPEAT');
    }
    display() {
        this.scene.scale(50.0, 50.0, 50.0);

        this.bottom.apply();
        
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.front.apply();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5); 
        this.quad.display();
        this.scene.popMatrix();

        this.right.apply();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.back.apply();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.left.apply();

        this.scene.pushMatrix();
        this.scene.rotate(3 * Math.PI/2, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.top.apply();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();
    }
}