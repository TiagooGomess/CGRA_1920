#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;

void main() {
    //gl_FragColor = vec4(0.0, 0.0, 1, 1.0);

    if(coords.y > 0.5) { // amarelo se estiver acima dos yy
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
    }
    else {  // otherwise it's blue
        gl_FragColor = vec4(0.6, 0.6, 0.9, 1.0);
    }
	
}