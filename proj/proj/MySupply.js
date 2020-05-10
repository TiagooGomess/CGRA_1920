
const SupplyStates = {
    INACTIVE: 0,
    FALLING: 1,
    LANDED: 2
};

/**
 * MySupply
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySupply extends CGFobject {
    constructor(scene) {
        super(scene);
        this.square = new MyQuadSupply(this.scene);
        this.initMaterials();

        this.state=SupplyStates.INACTIVE;

        this.position = [0.1, 0.1, 0.1];
    }

    initMaterials() {
        this.texture = new CGFappearance(this.scene);
        this.texture.setAmbient(1, 1, 1, 1);
        this.texture.setDiffuse(1, 1, 1, 1);
        this.texture.setSpecular(0.01, 0.01, 0.01, 1);
        this.texture.setShininess(5);
        this.texture.loadTexture('images/wood.jpg');
        this.texture.setTextureWrap('REPEAT','REPEAT');

    }

    update(elapsedTime) {
        if (this.state == SupplyStates.FALLING)
            this.position[1] -= 8.5*(elapsedTime/3000); // demora 3000 ms (3s) para descer 8.5 unidades
        this.land();
    }

    drop(dropPosition) { // posição atual do dirigível
        this.state = SupplyStates.FALLING;
        this.position = dropPosition;
    }

    land() {
        if (this.position[1] <= 0) {
            this.state = SupplyStates.LANDED;
            this.position[1] = 0;
        }
            
    }

    displayFalling() {
        this.scene.pushMatrix();

        this.scene.translate(this.position[0], this.position[1], this.position[2]);

        this.texture.apply();
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

        this.texture.apply();
        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.gl.scene.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix(); // face de cima
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.square.display();
        this.scene.popMatrix();

        this.texture.apply();
        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.gl.scene.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix(); // face de baixo
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.square.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }

    displayOnLanded() { // desenhar o objeto em forma de caixa espalmada
        this.scene.pushMatrix();

        this.scene.translate(this.position[0], this.position[1], this.position[2]);

        this.scene.rotate(Math.PI, 1, 0, 0); // para ficar com o lado mais iluminado para cima

        this.texture.apply();
        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.gl.scene.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, -1);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 1);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, -0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1, -0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.square.display();
        this.scene.popMatrix();

        this.texture.apply();
        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.gl.scene.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix();
        this.scene.translate(2, -0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.square.display();
        this.scene.popMatrix();

        this.texture.apply();
        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.gl.scene.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.square.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }

    display() {

        if (this.state == SupplyStates.FALLING) {
            this.displayFalling();
        }

        if (this.state == SupplyStates.LANDED) {
            this.displayOnLanded();
        }

    }

    reset() {
        this.state = SupplyStates.INACTIVE;
        this.position = [0.1, 0.1, 0.1];
    }
}