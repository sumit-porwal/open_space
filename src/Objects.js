import * as THREE from 'three';
import {
	shaderMat,
	shaderPerlinMat,
	shaderAuora
} from './Shaders';
const sunTexture = new THREE.TextureLoader().load('./texture/8k_sun.jpg');
const mercuryTexture = new THREE.TextureLoader().load('./texture/mercury.jpg');
const venusTexture = new THREE.TextureLoader().load('./texture/venus.jpg');
const earthTexture = new THREE.TextureLoader().load('./texture/earth.jpg');
const marsTexture = new THREE.TextureLoader().load('./texture/mars.jpg');
const jupiterTexture = new THREE.TextureLoader().load('./texture/jupiter.jpg');
const saturnTexture = new THREE.TextureLoader().load('./texture/saturn.jpg');
const neptuneTexture = new THREE.TextureLoader().load('./texture/neptune.jpg');
const uranusTexture = new THREE.TextureLoader().load('./texture/uranus.jpg');
const saturn_ringTexture = new THREE.TextureLoader().load('./texture/saturn_ring.png');

// const sunAuora = new THREE.Mesh(

// 	new THREE.SphereBufferGeometry(85,30,30),
// 	shaderAuora,
// )
const Sun = new THREE.Mesh(

	new THREE.SphereBufferGeometry(70, 30, 30),
	shaderMat,


)
const TheSun = new THREE.Mesh(

	new THREE.SphereBufferGeometry(70, 30, 30),
	shaderPerlinMat,

)
const Mercury = new THREE.Mesh(
	new THREE.SphereBufferGeometry(0.2, 30, 30),
	new THREE.MeshStandardMaterial({
		map: mercuryTexture,
	}),

)
const Venus = new THREE.Mesh(
	new THREE.SphereBufferGeometry(0.6, 30, 30),
	new THREE.MeshStandardMaterial({
		map: venusTexture,
	}),

)
const Earth = new THREE.Mesh(
	new THREE.SphereBufferGeometry(0.63, 30, 30),
	new THREE.MeshStandardMaterial({
		map: earthTexture,
	}),

)
const Mars = new THREE.Mesh(
	new THREE.SphereBufferGeometry(0.3, 30, 30),
	new THREE.MeshStandardMaterial({
		map: marsTexture,
	}),

)
const Jupiter = new THREE.Mesh(
	new THREE.SphereBufferGeometry(7, 30, 30),
	new THREE.MeshStandardMaterial({
		map: jupiterTexture,
	}),

)

const SaturnRing = new THREE.Mesh(
	new THREE.RingBufferGeometry(5, 14, 100),
	new THREE.MeshStandardMaterial({
		transparent: true,
		side: THREE.DoubleSide,
		map: saturn_ringTexture,
	}),
)

const Saturn = new THREE.Mesh(
	new THREE.SphereBufferGeometry(5.8, 30, 30),
	new THREE.MeshStandardMaterial({
		map: saturnTexture,
	}),

)
const Neptune = new THREE.Mesh(
	new THREE.SphereBufferGeometry(2.4, 30, 30),
	new THREE.MeshStandardMaterial({
		map: neptuneTexture,
	}),

)
const Uranus = new THREE.Mesh(
	new THREE.SphereBufferGeometry(2.5, 30, 30),
	new THREE.MeshStandardMaterial({
		map: uranusTexture,
	}),

)
const solarSystem = [Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn,SaturnRing, Neptune, Uranus, 
];

const scene1 = new THREE.Scene();

const cubeRenderTarget1 = new THREE.WebGLCubeRenderTarget(256, {
	format: THREE.RGBFormat,
	generateMipmaps: true,
	minFilter: THREE.LinearMipmapLinearFilter,
	encoding: THREE.sRGBEncoding // temporary -- to prevent thematerial'sshader from recompiling every frame
});

const cubeCamera1 = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget1);
scene1.add(TheSun);

function updateShader(renderer) {


	shaderPerlinMat.uniforms.time.value += 0.05;
	cubeCamera1.update(renderer, scene1);
	shaderMat.uniforms.time.value += 0.05;
	shaderMat.uniforms.uPerlin.value = cubeRenderTarget1.texture;
}

export {
	solarSystem,
	updateShader
}