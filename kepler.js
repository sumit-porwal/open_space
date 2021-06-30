import * as THREE from 'three';

function circle(radius)
    {
     
    let px = []; 
		let py = [];
		let r2;
        r2 = radius * radius;
        
       
        for (let x = -radius; x <= radius; x++) {
          let y =  parseInt(Math.sqrt(r2 - x*x)+1);
            px.push(x);
          if(x>=0){

            py.push(y);
          }
          else{
            py.push(-y);

          }
        }
        for (let x = -radius; x <= radius; x++) {
          let y =  parseInt(Math.sqrt(r2 - x*x));
            px.push(x);
          if(x>=0){

            py.push(-y);
          }
          else{
            py.push(y);

          }
        }
     
		return {px,py};
    }
function getXZ(){
	// const x = parseInt(Math.random()*640)-1;
	const x = THREE.MathUtils.randInt(0,639)
  let p =  circle(160);
  
	return {
    Px:p.px[x],
    Pz:p.py[x],
}
}
function getY(){
	const [y] = Array(1).fill().map(()=> THREE.MathUtils.randFloatSpread(5));
	return y;

}
function addStr(scene){
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({color:0xffffff});
  const star  = new THREE.Mesh(geometry, material);
  let point = getXZ();
  let x = point.Px - THREE.MathUtils.randFloatSpread(20);
  let z = point.Pz - THREE.MathUtils.randFloatSpread(20);

 
  star.position.set(x, getY(), z);
  scene.add(star);
}


export default addStr;