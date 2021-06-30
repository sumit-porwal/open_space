import './style.css';
import {
	cam,
	camera
} from './camera';
import * as THREE from 'three';
import addStr from './kepler'
import gsap from 'gsap';
import {
	ScrollTrigger
} from "gsap/ScrollTrigger";
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


} from './Objects';

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
cam(scene, renderer);

//adding objects

Array(100).fill().forEach(() => addStr(scene));
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

//animation and rendering
function animate() {
	requestAnimationFrame(animate);


	//controls.update();
	render();
}

//animations
gsap.registerPlugin(ScrollTrigger);

//sun
gsap.fromTo(camera.position, {
	x: 0,
	z: 0
}, {
	scrollTrigger: {
		trigger: "#sun",
		start:"top top",
		end: "top bottom",
		toggleActions: "restart none reverse none",
		scrub:1,
		markers: true,
	},
	x: -110,
	z: 100,
	duration: 5,
	ease: "none"
});

//mercury
gsap.fromTo(camera.position, {
	x: -110,
	z: 100
}, {
	scrollTrigger: {
		trigger: "#mercury",
		end: "center center",
		toggleActions: "restart none reverse none",
		markers: true,
		scrub:true,
	},
	x: 104.65,
	z: 0.3,
	duration: 5,
	ease: "power1"
});
//venus
gsap.fromTo(camera.position, {
	x: 104.65,
	z: 0.3
}, {
	scrollTrigger: {
		trigger: "#venus",
		end: "center center",
		toggleActions: "restart none reverse none",
		markers: true,
		scrub:true,
	},
	x: 108.7,
	z: 1,
	duration: 5,
	ease: "power1"
});
gsap.fromTo(camera.position, {
	x: 108.7,
	z: 1
}, {
	scrollTrigger: {
		trigger: "#earth",
		end: "center center",
		toggleActions: "restart none reverse none",
		markers: true,
		scrub:true,
	},
	x: 118.8,
	z: 1,
	duration: 5,
	ease: "power1"
});
gsap.fromTo(camera.position, {
	x: 118.8,
	z: 1
}, {
	scrollTrigger: {
		trigger: "#mars",
		end: "center center",
		toggleActions: "restart none reverse none",
		markers: true,
		scrub:true
	},
	x: 139.4,
	z: 0.5,
	duration: 2,
	ease: "power1"
});
gsap.fromTo(camera.position, {
	x: 139.4,
	z: 0.5,
}, {
	scrollTrigger: {
		trigger: "#jupiter",
		end: "center center",
		toggleActions: "restart none reverse none",
		markers: true,
		scrub:true
	},
	x: 167,
	z: 11,
	duration: 2,
	ease: "power1"
});
gsap.fromTo(camera.position, {
	x: 167,
	z: 11
}, {
	scrollTrigger: {
		trigger: "#saturn",
		end: "center center",
		toggleActions: "restart none reverse none",
		markers: true,
		scrub:true
	},
	x: 213,
	z: 14,
	duration: 2,
	ease: "power1"
});
gsap.fromTo(camera.position, {
	x: 213,
	z: 14
}, {
	scrollTrigger: {
		trigger: "#uranus",
		end: "center center",
		toggleActions: "restart none reverse none",
		markers: true,
		scrub:true
	},
	x: 251.4,
	z: 5.5,
	duration: 2,
	ease: "power1"
});
gsap.fromTo(camera.position, {
	x: 251.4,
	z: 5.5
}, {
	scrollTrigger: {
		trigger: "#neptune",
		end: "center center",
		toggleActions: "restart none reverse none",
		markers: true,
		scrub:true
	},
	x: 281.5,
	z: 5.5,
	duration: 2,
	ease: "power1"
});
gsap.fromTo(camera.position, {
	x: 281.5,
	z: 5.5
}, {
		scrollTrigger: {
		trigger: "#backsun",
		end: "center center",
		toggleActions: "restart none reverse none",
		markers: true,
	},
	x: -110,
	z: 120,
	duration: 1,
	ease: "power1"
});
camera.position.set(0,0,0);

function render() {
	renderer.render(scene, camera)
}
animate();
//