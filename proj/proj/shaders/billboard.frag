#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;
varying vec2 vTextureCoord;

uniform sampler2D uSampler1;
uniform int nSuppliesDelivered ;

void main() {

    vec4 color = texture2D(uSampler1, vTextureCoord);
    gl_FragColor = color;

    if (coords.x > -0.45 && coords.x < 0.45 && coords.y > -0.4 && coords.y < 0.1) {
        gl_FragColor.rgb =  vec3(0.6, 0.6, 0.6);
        gl_FragColor.a = 1.0;
    }
    
    float level = -0.45 + 0.18 * float(nSuppliesDelivered);

    if (coords.x < level && coords.x > -0.45 && coords.x < 0.45 && coords.y > -0.4 && coords.y < 0.1) {
        gl_FragColor.rgb =  vec3(1.0 - (0.5 + coords.x / 0.7), 0.5 + coords.x / 0.7, 0);
        gl_FragColor.a = 1.0;
    }
        
}