import gsap from 'gsap';
import {
	ScrollTrigger
} from "gsap/ScrollTrigger";
export default function animation(camera){

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
		scrub:2,
		markers: true,
	},
	x: -110,
	z: 100,
	duration: 5,
	ease: "power1"
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
		scrub:1,
	},
	x: -110,
	z: 120,
	duration: 1,
	ease: "power1"
});
}