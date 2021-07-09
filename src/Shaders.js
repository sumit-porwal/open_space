import * as THREE from 'three';
import _FS from './shaders/fragment';
import _FSS from './shaders/shadersSun/fragment';
import _VS from './shaders/vertex';
import _VSS from './shaders/shadersSun/vertex';

let shaderMat = new THREE.ShaderMaterial({
	uniforms:{
		time:{value:0},
		uPerlin:{value:null},
		resolution:{value:new THREE.Vector4()}

	},
	side:THREE.DoubleSide,
	vertexShader:_VSS,
	fragmentShader:_FSS,
})
let shaderPerlinMat = new THREE.ShaderMaterial({
	uniforms:{
		time:{value:0},
		resolution:{value:new THREE.Vector4()}
	},
	side:THREE.DoubleSide,
	vertexShader:_VS,
	fragmentShader:_FS,
})


export{
	shaderMat,
	shaderPerlinMat,
};
