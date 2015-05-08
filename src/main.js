import THREE from 'three.js'
import StarGeometry from './starGeometry'
import OrbitControls from './orbitControls'

import simpleVert from './shaders/simple.vert!text'
import simpleFrag from './shaders/simple.frag!text'

// Scene + camera
var camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 1, 100);
camera.position.set(0, 0, 3);
camera.lookAt(new THREE.Vector3(0, 0, 0));

var scene = new THREE.Scene();

// Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xffffff, 1);
document.body.appendChild(renderer.domElement);

// Objects
var g = new StarGeometry(1, 5);
var m = new THREE.MeshLambertMaterial({ color: 0xffff00 });
var sm = new THREE.ShaderMaterial({
  uniforms: {
    lightDir: { type: 'v3', value: new THREE.Vector3(1, 1, 1) },
    meshColor: { type: 'v3', value: new THREE.Vector3(1, 1, 0) },
  },
  vertexShader: simpleVert,
  fragmentShader: simpleFrag
});
var star = new THREE.Mesh(g, sm);
scene.add(star);
star.rotation.z = 0.5*Math.PI;

// Controls
var controls = new OrbitControls(camera);

animate();

function animate() {
  controls.update();
  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}
