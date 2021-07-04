const _VS  = /*glsl*/`#define GLSLIFY 1
// Texture varyings
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
varying vec2 pixels;
float PI = 3.141592653589793238;

/*
 * The main program
 */
void main() {
    // Calculate the varyings
    vUv = uv;
    vPosition = position;

    // Vertex shader output
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
export default _VS;