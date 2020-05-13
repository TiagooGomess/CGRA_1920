#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D uSampler1;
uniform float timeFactor;
uniform float speed;
uniform bool rightSide;

void main() {
    vTextureCoord = aTextureCoord;

    vec3 offset = vec3(0.0, 0.0, 0.0);

    if(rightSide)
        offset.z = 0.12 * cos((aVertexPosition.x + timeFactor * (0.08 + speed * 2.0)) * 10.0);
    else
        offset.z = -0.12 * cos((-aVertexPosition.x + timeFactor * (0.08 + speed * 2.0)) * 10.0);

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}