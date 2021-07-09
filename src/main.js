import './style.css';
import background from './../texture/space.jpg';
import * as THREE from 'three';
import addStr from './kupier '

import animation from './animations';
// import Stats from 'three/examples/jsm/libs/stats.module'
import {
	solarSystem,
	updateShader

} from './Objects';
let lightBtn = document.getElementById('light');
// import {
// 	OrbitControls
// } from 'three/examples/jsm/controls/OrbitControls';

//init()
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1, 500 );
camera.rotateY(-0.3);
//renderer config
const renderer = new THREE.WebGL1Renderer({
	canvas: document.querySelector('#bg'),
	powerPreference: "high-performance",
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);



renderer.render(scene, camera);

//adding objects

Array(500).fill().forEach(() => addStr(scene));
solarSystem.map(e => scene.add(e));

let position = [0, 105, 110, 120, 140, 180, 230, 230, 250, 280];
solarSystem.map((e, i) => {
	e.position.setX(position[i])
});
solarSystem[7].rotateX(90);
solarSystem[6].rotateX(0.5);

//lights

const pointLight = new THREE.PointLight(0Xeeeeee);
const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.intensity = 0;

scene.add(pointLight, ambientLight);


let toggle = 1;
lightBtn.addEventListener('click', () => {
	if (toggle % 2) {
		document.getElementById("Layer_1").style.fill = "yellow";
		ambientLight.intensity = 1;
		pointLight.intensity = 0;
		render();
	} else {
		
		document.getElementById("Layer_1").style.fill = "white";
		ambientLight.intensity = 0;
		pointLight.intensity = 1;
		render();
		
	}
	toggle++;
})

//orbit controll
window.addEventListener('resize', onWindowResize, false)

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
	render()
}

//scene background
const sceneBackground = new THREE.TextureLoader().load(background);
scene.background = sceneBackground;

//making sun


const rot = [0, 0.001, 0.001, 0.01,	0.01, 0.024, 0.024,	0.0, 0.014,	0.014]

function rotate(){
	solarSystem.map((e,i)=>{

		e.rotation.y+=rot[i]
	});


}
//animation and rendering
animation(camera, solarSystem, render);
camera.position.set(-360, 0, 0);

function render() {
	requestAnimationFrame(render);
	
	rotate();
	renderer.render(scene, camera)
}
updateShader(renderer);
setTimeout(
	render,
	200

)

