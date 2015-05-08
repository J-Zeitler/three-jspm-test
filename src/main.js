import THREE from 'three.js'
import StarGeometry from './starGeometry'
import OrbitControls from './orbitControls'

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

// Lights
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

var ambientLight = new THREE.AmbientLight(0x909090);
scene.add(ambientLight);

// Objects
var g = new StarGeometry(1, 5);
var m = new THREE.MeshLambertMaterial({ color: 0xffff00 });
var star = new THREE.Mesh(g, m);
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
