import * as THREE from 'three';

const sunTexture = new THREE.TextureLoader().load('./texture/8k_sun.jpg');
const mercuryTexture = new THREE.TextureLoader().load('./texture/mercury.jpg');
const venusTexture = new THREE.TextureLoader().load('./texture/venus.jpg');
const earthTexture = new THREE.TextureLoader().load('./texture/earth.jpg');
const marsTexture = new THREE.TextureLoader().load('./texture/mars.jpg');
const jupiterTexture = new THREE.TextureLoader().load('./texture/jupiter.jpg');
const saturnTexture = new THREE.TextureLoader().load('./texture/saturn.jpg');
const saturnMap = new THREE.TextureLoader().load('./texture/saturn.jpg');
const neptuneTexture = new THREE.TextureLoader().load('./texture/neptune.jpg');
const uranusTexture = new THREE.TextureLoader().load('./texture/uranus.jpg');
const saturn_ringTexture = new THREE.TextureLoader().load('./texture/saturn_ring.png');
const Sun = new THREE.Mesh(

	new THREE.SphereBufferGeometry(70,30,30),
	new THREE.MeshStandardMaterial({
		map:sunTexture,
	}),

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
	new THREE.RingBufferGeometry(5, 14 ,100),
	new THREE.MeshStandardMaterial({
		transparent:true,
		side: THREE.DoubleSide,
		map: saturn_ringTexture,
	}),
)

const Saturn = new THREE.Mesh(
	new THREE.SphereBufferGeometry(5.8, 30, 30),
	new THREE.MeshStandardMaterial({
		map: saturnMap,
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


export {
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


} 