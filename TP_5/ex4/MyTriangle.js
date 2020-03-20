/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
    constructor(scene, color) {
        super(scene);
        this.initBuffers(color);
    }
    initBuffers(color) {
        this.vertices = [
            -1, -1, 0,  // 0
            1, -1, 0,  // 1
            -1, 1, 0,   // 2

            -1, -1, 0,  // 0
            1, -1, 0,  // 1
            -1, 1, 0   // 2

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
        
        if (color == 'pink') {
            this.texCoords = [
                0, 1,
                0.5, 1,
                0, 0.5
            ];
        }
        else if (color == 'blue') {
            this.texCoords = [
                0.5, 0.5,
                1, 0,
                0, 0
            ];
        }
        
        this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
    }
}