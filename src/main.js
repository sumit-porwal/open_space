import './style.css';
import {
	camera
} from './camera';
import * as THREE from 'three';
import addStr from './kupier '
import animation from './animations';
import {
	solarSystem,
	updateShader

} from './Objects';
let lightBtn = document.getElementById('light');
let bulb = document.getElementById('bulb');
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
solarSystem.map(e=>scene.add(e));

let position = [0, 105, 110, 120, 140, 180, 230, 230, 250, 280];
solarSystem.map((e,i)=>{
	e.position.setX(position[i])
});
solarSystem[7].rotateX(90);
solarSystem[6].rotateX(0.5);

//lights

const pointLight = new THREE.PointLight(0Xeeeeee);
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight);
scene.add(ambientLight);
ambientLight.intensity= 0;
let toggle = 0;
lightBtn.addEventListener('click',()=>{
	if(toggle%2){
	bulb.src = './reso/on.svg';
		ambientLight.intensity = 1;
		pointLight.intensity=0;
	}
	else{
		bulb.src = './reso/off.svg';
		ambientLight.intensity = 0;
		pointLight.intensity=1;
		
	}
	toggle++;
})


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

//making sun


const rot = [0, 0.001, 0.001, 0.01,	0.01, 0.024, 0.024,	0.0, 0.014,	0.014]

function rotate(){
	solarSystem.map((e,i)=>{

		e.rotation.y+=rot[i]
	});
	

}
//animation and rendering
function animate() {
	requestAnimationFrame(animate);
	rotate();
	// controls.update();
	render();
}

animation(camera);
camera.position.set(0, 0, 0);

function render() {
	
	updateShader(renderer);
	renderer.render(scene, camera)
}
animate();
//