#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

uniform float timeFactor;

void main() {
    vec2 change = mod(vTextureCoord + timeFactor*0.01, 1.0);

    vec4 color = texture2D(uSampler3, change); // Light

    vec4 filter = texture2D(uSampler2, change); // Dark

    color.b += color.b * filter.b * 0.3;
    color.r += color.r * filter.b * 0.3;
    color.g += color.g * filter.b * 0.3;

    gl_FragColor = color;
}