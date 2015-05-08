varying vec3 n;

void main() {
  n = normal;
  gl_Position = projectionMatrix *
                modelViewMatrix *
                vec4(position, 1.0);
}
