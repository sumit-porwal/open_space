import gsap from 'gsap';
import {
	ScrollTrigger
} from "gsap/ScrollTrigger";

export default function animation(camera,solarSystem) {

	//animations
	gsap.registerPlugin(ScrollTrigger,solarSystem);
	let position = [{
			x: -360,
			z: 0
		},
		{
			x: -110,
			z: 100
		},
		{
			x: 104.65,
			z: 0.3
		},
		{
			x: 108.7,
			z: 1
		},
		{
			x: 118.8,
			z: 1
		},
		{
			x: 139.4,
			z: 0.5
		},
		{
			x: 167,
			z: 11
		}, {
			x: 213,
			z: 14
		}, {
			x: 251.4,
			z: 5.5
		}, {
			x: 281.5,
			z: 5.5
		}, {
			x: -110,
			z: 100
		},
	]
	gsap.utils.toArray('.box').forEach((el, i) => {
		gsap.fromTo(camera.position, {
			x: position[i].x,
			z: position[i].z
		}, {
			scrollTrigger: {
				trigger: el,
				end: "center center",
				scrub:1,
			},
			x: position[i + 1].x,
			z: position[i + 1].z,
			duration:5,
			ease: 'none'
		})
		if(i == 7){
			
			gsap.to(solarSystem[i].rotation, {
				scrollTrigger: {
					trigger: "el",
					scrub: 1,
				},
				y: Math.PI
			});
		}
	});
}
