// import * as THREE from 'three';

let cam;



const box = document.getElementById('box');
box.onscroll = updateCamera;
function update(camera){
	camera = cam;
	requestAnimationFrame(update);
}
function animation(camera){
		cam = camera;
		update(camera);
}
export default animation;




let tweenMercury = new TWEEN.Tween({x:-110, z:120}).to({x:104.7, z:0.3}, 1000).easing(TWEEN.Easing.Cubic.InOut);
let tweenVenus = new TWEEN.Tween({x:104.7, z:0.3}).to({x:109, z:1}, 1000).easing(TWEEN.Easing.Cubic.InOut);
let tweenEarth = new TWEEN.Tween({x:109, z:1}).to({x:119, z:1}, 1000).easing(TWEEN.Easing.Cubic.InOut);
let tweenMars = new TWEEN.Tween({x:119, z:1}).to({x:139.5, z:0.5}, 1000).easing(TWEEN.Easing.Cubic.InOut);
let tweenJupiter = new TWEEN.Tween({x:139.5, z:0.5}).to({x:170, z:10}, 1000).easing(TWEEN.Easing.Cubic.InOut);
let tweenSaturn = new TWEEN.Tween({x:170, z:10}).to({x:213, z:14}, 1000).easing(TWEEN.Easing.Cubic.InOut);
let tweenNeptune = new TWEEN.Tween({x:213, z:14}).to({x:251, z:5}, 1000).easing(TWEEN.Easing.Cubic.InOut);
let tweenUranus = new TWEEN.Tween({x:251, z:5}).to({x:281, z:5}, 1000).easing(TWEEN.Easing.Cubic.InOut);
let tweenBackSun = new TWEEN.Tween({x:281, z:5}).to({x:-110, z:120}, 1000).easing(TWEEN.Easing.Cubic.InOut);

function changeCam(){
    camera.position.x = this.x;
    camera.position.z = this.z;
}

tweenSun.onUpdate(changeCam);
tweenMercury.onUpdate(changeCam);
tweenVenus.onUpdate(changeCam);
tweenVenus.onUpdate(changeCam);
tweenEarth.onUpdate(changeCam);
tweenMars.onUpdate(changeCam);
tweenJupiter.onUpdate(changeCam);
tweenSaturn.onUpdate(changeCam);
tweenNeptune.onUpdate(changeCam);
tweenUranus.onUpdate(changeCam);
tweenBackSun.onUpdate(changeCam);

	






const controller = new ScrollMagic.Controller();

let SunScene = new ScrollMagic.Scene({
		triggerElement:'#sun',
	    duration: 100, 
	    offset: 50
	})
	    .addTo(controller);
SunScene.on('enter',(e)=>{
	  console.log("Scene entered.");
	if(e.scrollDirection == "FORWARD")
	  	tweenSun.start();
	if(e.scrollDirection == "BACKWARD")
	  tweenSun.handle.reverse();
	
})
let VenusScene = new ScrollMagic.Scene({
		triggerElement:'#venus',
	    duration: 100, 
	    offset: 50
	})
	    .addTo(controller);
VenusScene.on('enter',(e)=>{
	  console.log("Scene entered.");
	//   if(e.scrollDirection == "FORWARD")
	  	tweenVenus.handle.reverse();
	//   if(e.scrollDirection == "FORWARD")
	
})
let EarthScene = new ScrollMagic.Scene({
		triggerElement:'#earth',
	    duration: 100, 
	    offset: 50
	})
	    .addTo(controller);
EarthScene.on('enter',(e)=>{
	  console.log("Scene entered.");
	//   if(e.scrollDirection == "FORWARD")
	  	tweenEarth.start();
	//   if(e.scrollDirection == "FORWARD")
	
})
let MarsScene = new ScrollMagic.Scene({
		triggerElement:'#mars',
	    duration: 100, 
	    offset: 50
	})
	    .addTo(controller);
MarsScene.on('enter',(e)=>{
	  console.log("Scene entered.");
	//   if(e.scrollDirection == "FORWARD")
	  	tweenMars.start();
	//   if(e.scrollDirection == "FORWARD")
	
})
let JupiterScene = new ScrollMagic.Scene({
		triggerElement:'#jupiter',
	    duration: 100, 
	    offset: 50
	})
	    .addTo(controller);
JupiterScene.on('enter',(e)=>{
	  console.log("Scene entered.");
	//   if(e.scrollDirection == "FORWARD")
	  	tweenJupiter.start();
	//   if(e.scrollDirection == "FORWARD")
	
})
let SaturnScene = new ScrollMagic.Scene({
		triggerElement:'#saturn',
	    duration: 100, 
	    offset: 50
	})
	    .addTo(controller);
SaturnScene.on('enter',(e)=>{
	  console.log("Scene entered.");
	//   if(e.scrollDirection == "FORWARD")
	  	tweenSaturn.start();
	//   if(e.scrollDirection == "FORWARD")
	
})
let NeptuneScene = new ScrollMagic.Scene({
		triggerElement:'#neptune',
	    duration: 100, 
	    offset: 50
	})
	    .addTo(controller);
NeptuneScene.on('enter',(e)=>{
	  console.log("Scene entered.");
	  if(e.scrollDirection == "FORWARD")
	  	tweenNeptune.start();
	//   if(e.scrollDirection == "FORWARD")
	
})
let UranusScene = new ScrollMagic.Scene({
		triggerElement:'#uranus',
	    duration: 100, 
	    offset: 50
	})
	    .addTo(controller);
UranusScene.on('enter',(e)=>{
	  console.log("Scene entered.");
	  if(e.scrollDirection == "FORWARD")
	  	tweenUranus.start();
	//   if(e.scrollDirection == "FORWARD")
	
})
let backSunScene = new ScrollMagic.Scene({
		triggerElement:'#backsun',
	    duration: 100, 
	    offset: 50
	})
	    .addTo(controller);
backSunScene.on('enter',(e)=>{
	  console.log("Scene entered.");
	  if(e.scrollDirection == "FORWARD")
	  	tweenBackSun.start();
	//   if(e.scrollDirection == "FORWARD")
	
})
