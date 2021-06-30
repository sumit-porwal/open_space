import './style.css';
import {
	camera
} from './src/camera';
import * as THREE from 'three';
import addStr from './src/kupier '
import animation from './src/animations';
import {
	Sun,
	Mercury,
	Venus,
	Earth,
	Mars,
	Jupiter,
	Saturn,
	Neptune,
	Uranus,
	SaturnRing,


} from './src/Objects';

import {
	OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';

//init()

const scene = new THREE.Scene();

//renderer config
const renderer = new THREE.WebGL1Renderer({
	canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


renderer.render(scene, camera);

//adding objects

Array(500).fill().forEach(() => addStr(scene));
scene.add(Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Neptune, Uranus, SaturnRing);
Sun.position.setX(0);
Mercury.position.setX(105);
Venus.position.setX(110);
Earth.position.setX(120);
Mars.position.setX(140);
Jupiter.position.setX(180);
Saturn.position.setX(230);
SaturnRing.position.setX(230);
SaturnRing.rotateX(90);
Saturn.rotateX(0.5);
Uranus.position.setX(250);
Neptune.position.setX(280);

//lights

const pointLight = new THREE.PointLight(0xffffff);
const ambientLight = new THREE.AmbientLight(0xffffff);
pointLight.position.set(4, 2, 2);

scene.add(pointLight, ambientLight);

//helper funciton

const gridHelper = new THREE.GridHelper(2000, 500);
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper, gridHelper);

//orbit controll
// const controls = new OrbitControls(camera, renderer.domElement);
window.addEventListener('resize', onWindowResize, false)

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
	render()
}
//scene background
const sceneBackground = new THREE.TextureLoader().load('./texture/space.jpg')
scene.background = sceneBackground;
function rotate(){
	Sun.rotation.y += 0.02;
	Mercury.rotation.y +=0.001;
	Venus.rotation.y +=0.001;
	Earth.rotation.y +=0.01;
	Mars.rotation.y +=0.01;
	Jupiter.rotation.y +=0.024;
	Saturn.rotation.y +=0.024;
	Uranus.rotation.y +=0.014;
	Neptune.rotation.y +=0.014;
	

}
//animation and rendering
function animate() {
	requestAnimationFrame(animate);
	rotate();
	//controls.update();
	render();
}

animation(camera);
camera.position.set(0, 0, 0);

function render() {
	renderer.render(scene, camera)
}
animate();
//