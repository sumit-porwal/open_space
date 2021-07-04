const _FSS =/*glsl*/ `
uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
uniform samplerCube uPerlin;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;
varying vec3 eyeVector;
varying vec3 vNormal;

float PI = 3.141592653589793238;

float Fresnel(vec3 eyeVector, vec3 worldNormal){
    return pow(1.0 + dot(eyeVector, worldNormal), 3.0);
}

vec3 brightnessToColor(float b){
    b*=0.25;
    
    return (vec3(b, b*b,b* b*b*b)/0.25)*0.6;
}
float supersun(){
float sum = 0.;
sum +=textureCube(uPerlin,vLayer0).r;
sum +=textureCube(uPerlin,vLayer1).r;
sum +=textureCube(uPerlin,vLayer2).r;
sum*0.33;

return sum;
}
void main(){
    float brightness = supersun();
    brightness = brightness*3. + 1.;

    float fres = Fresnel(eyeVector, vNormal);

    brightness +=fres;
    
    vec3 col = brightnessToColor(brightness);
    gl_FragColor = vec4(col,1.);
    // gl_FragColor = textureCube(uPerlin,vPosition);
    // gl_FragColor = vec4(vLayer2,1.);
    // gl_FragColor = vec4(vUv,1.,1.);
   

}
`
export default _FSS;