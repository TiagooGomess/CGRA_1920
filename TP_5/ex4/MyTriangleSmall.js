/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
    constructor(scene, color) {
        super(scene);
        this.initBuffers(color);
    }
    initBuffers(color) {
        this.vertices = [
            -1, 0, 0,
            1, 0, 0,
            0, 1, 0,

            -1, 0, 0,
            1, 0, 0,
            0, 1, 0
        ];

        this.indices = [
            0, 1, 2,
            2, 1, 0
        ];

        this.normals = [
			0, 0, 1,
			0, 0, 1,
            0, 0, 1,
            
            0, 0, -1,
			0, 0, -1,
			0, 0, -1
        ];
        
        if (color == 'blue') {
            this.texCoords = [
                0, 0,
                0, 0.5,
                0.25, 0.25
            ];
        }
        else if (color == 'red') {
            this.texCoords = [
                0.25, 0.75,
                0.5, 0.5,
                0.75, 0.75
            ];
        }

        this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
    }
}