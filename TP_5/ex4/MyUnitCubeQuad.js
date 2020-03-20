/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.square = new MyQuad(this.scene);
        this.initMaterials();
    }

    initMaterials() {
        this.sideTexture = new CGFappearance(this.scene);
        this.sideTexture.setAmbient(1, 1, 1, 1);
        this.sideTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideTexture.setSpecular(0.2, 0.2, 0.2, 1);
        this.sideTexture.setShininess(5);
        this.sideTexture.loadTexture('images/mineSide.png');
        this.sideTexture.setTextureWrap('REPEAT','REPEAT');

        this.topTexture = new CGFappearance(this.scene);
        this.topTexture.setAmbient(1, 1, 1, 1);
        this.topTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topTexture.setSpecular(0.2, 0.2, 0.2, 1);
        this.topTexture.setShininess(5);
        this.topTexture.loadTexture('images/mineTop.png');
        this.topTexture.setTextureWrap('REPEAT','REPEAT');

        this.bottomTexture = new CGFappearance(this.scene);
        this.bottomTexture.setAmbient(1, 1, 1, 1);
        this.bottomTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomTexture.setSpecular(0.2, 0.2, 0.2, 1);
        this.bottomTexture.setShininess(5);
        this.bottomTexture.loadTexture('images/mineBottom.png');
        this.bottomTexture.setTextureWrap('REPEAT','REPEAT');
    }

    display() {
        
        this.sideTexture.apply();
        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.gl.scene.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix(); // face de trás
        this.scene.translate(0, 0, 0.5);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // face da frente
        this.scene.translate(0, 0, -0.5);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // face da esquerda
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // face da direita
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.square.display();
        this.scene.popMatrix();

        this.topTexture.apply();
        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.gl.scene.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix(); // face de cima
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.square.display();
        this.scene.popMatrix();

        this.bottomTexture.apply();
        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.gl.scene.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix(); // face de baixo
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.square.display();
        this.scene.popMatrix();

        
    }
}