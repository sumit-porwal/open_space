import * as THREE from 'three';
import _FS from './shaders/fragment';
import _FSS from './shaders/shadersSun/fragment';
// import _FSA from './shaders/shadersAuora/fragment';
import _VS from './shaders/vertex';
import _VSS from './shaders/shadersSun/vertex';
// import _VSA from './shaders/shadersAuora/vertex';

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
// let shaderAuora = new THREE.ShaderMaterial({

// 	uniforms:{
		 
// 			"c":   { type: "f", value: 0.5 },
// 			"p":   { type: "f", value: 4.0 },
// 	},
// 	transparent:true,
// 	side:THREE.BackSide,
// 	vertexShader:_VSA,
// 	fragmentShader:_FSA,
// })

export{
	shaderMat,
	shaderPerlinMat,
	// shaderAuora
};
