uniform vec3 lightDir;
uniform vec3 meshColor;

varying vec3 n;

void main() {
  float light = dot(normalize(lightDir), n);
  gl_FragColor = vec4(meshColor*light, 1.0);
}