#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix; // Model-View Matrix -- Represents transformations applied to scene and camera position
uniform mat4 uPMatrix; // Projection Matrix -- Applies transformations related to camera frustum
uniform mat4 uNMatrix;

varying vec4 coords;

void main() {
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    coords = gl_Position;
}