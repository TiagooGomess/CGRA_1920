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

    float amplitude = 0.12;
    float initialSpeed = 0.08;
    float frequency = (aVertexPosition.x + timeFactor * (initialSpeed + speed * 2.0)) * 10.0;

    float absOffsetZ = amplitude * cos(frequency);
    
    vec3 offset = vec3(0.0, 0.0, 0.0);
    
    if(rightSide)
        offset.z = absOffsetZ;
    else
        offset.z = -absOffsetZ;

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}