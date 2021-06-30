import * as THREE from 'three';
import { Curves }from 'three/examples/jsm/curves/CurveExtras.js';
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1, 1000 );

camera.rotateY(-0.3);
let x = 0, y = 0, z = 0 ;
function updateCaera(){
	camera.position.set(x, y, z);
	x++;
	y++;
	z++;
}	 


function update(scene, renderer){
	requestAnimationFrame(update);
	updateCamera();
	renderer.render(scene,camera);
}	



export {camera};