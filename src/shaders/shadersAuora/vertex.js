const _VSA  = /*glsl*/`
// #define GLSLIFY 1
// Texture varyings
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
varying vec2 pixels;
float PI = 3.141592653589793238;
varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;
varying vec3 vLayer3;
varying vec3 eyeVector;
varying vec3 vNormal;

mat2 rotate(float a){
    float s = sin(a);
    float c = cos(a);
    return mat2(c,-s,s,c);
}
/*
 * The main program
 */
void main() {
    vNormal  = normal;
    // Calculate the varyings
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    eyeVector = normalize(worldPosition.xyz - cameraPosition);

    float t = time*0.002;
    mat2 rot = rotate(t);
    mat2 rot2 = rotate(0.8);

    vec3 p0 = position*0.02;
    p0.yz = rot*p0.yz;
    vLayer0 = p0;

    rot = rotate(t + 10.);

    vec3 p1 = position*0.02;
    p1.xz = rot*p1.xz;
    vLayer1 = p1;

    rot = rotate(t + 30.);
    
    vec3 p2 = position*0.02;
    p2.xy = rot*p2.xy;
    vLayer2 = p2;

    vec3 p3 = position*0.02;
    p3.xz = rot2*p3.xz;
    vLayer3 = p3;
    vUv = uv;
    vPosition = position;

    vNormal = normalize( normalMatrix * normal );
    // Vertex shader output
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
export default _VSA;