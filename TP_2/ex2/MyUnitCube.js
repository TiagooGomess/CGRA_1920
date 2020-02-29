/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
    }
    initBuffers() {
        this.vertices = [-0.5, -0.5, -0.5, // vértices de baixo
                         0.5, -0.5, -0.5,
                         0.5, 0.5, -0.5,
                         -0.5, 0.5, -0.5,
                         -0.5, -0.5, 0.5, // vértices de cima
                         0.5, -0.5, 0.5,
                         0.5, 0.5, 0.5,
                         -0.5, 0.5, 0.5];

        this.indices = [2, 1, 0, // face de baixo
                        3, 2, 0,
                        4, 5, 6, // face de cima
                        4, 6, 7,
                        0, 1, 4, // face da frente
                        1, 5, 4,
                        7, 2, 3, // face de trás
                        7, 6, 2,
                        1, 2, 5, // face da direita
                        2, 6, 5,
                        4, 3, 0, // face da esquerda
                        4, 7, 3];

        this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
    }
}