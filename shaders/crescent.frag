uniform vec3 in_color;
uniform float lifespan;

varying vec2 vuv;

void main() {

	float trans = 1.0;
	float dist_center = length(vuv - vec2(0.5, 0.5));
	if (dist_center > 0.5) {
		trans = 0.0;
	} if (dist_center > 0.45) {
		trans =  1.0 - (dist_center - 0.45) * 20.0;
	}
	float life1 = 0.5 - lifespan/2.0;
	if (length(vuv - vec2(life1, 0.5)) < life1) {
		trans = 0.0;
	}
	
	gl_FragColor = vec4(
		in_color,
		trans
		);
}