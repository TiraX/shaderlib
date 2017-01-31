// definetions
var EIT_16BIT = 0;
var EIT_32BIT = 1;

var EVSSEG_POSITION = 1 << 0;
var EVSSEG_NORMAL = 1 << 1;
var EVSSEG_COLOR = 1 << 2;
var EVSSEG_TEXCOORD0 = 1 << 3;
var EVSSEG_TEXCOORD1 = 1 << 4;
var EVSSEG_TANGENT = 1 << 5;
var EVSSEG_BLENDINDEX = 1 << 6;
var EVSSEG_BLENDWEIGHT = 1 << 7;
var EVSSEG_TOTAL = EVSSEG_BLENDWEIGHT;

var ESSI_POSITION = 0;
var ESSI_NORMAL = 1;
var ESSI_COLOR = 2;
var ESSI_TEXCOORD0 = 3;
var ESSI_TEXCOORD1 = 4;
var ESSI_TANGENT = 5;
var ESSI_BLENDINDEX = 6;
var ESSI_BLENDWEIGHT = 7;
var ESSI_TOTAL = 8;

var EUF_VEC4 = 0;
var EUF_VEC3 = 1;
var EUF_VEC2 = 2;
var EUF_MAT4 = 3;
var EUF_FLOAT = 4;
var EUF_INT = 5;
var EUF_SAMPLER2D = 6;
var EUF_SAMPLERCUBE = 7;
var EUF_INT4 = 8;
var EUF_MAT2 = 9;

var ETC_REPEAT = 0;
var ETC_CLAMP_TO_EDGE = 1;
var ETC_MIRROR = 2;
var ETC_COUNT = 3;

var ESLT_SOLID = 0;
var ESLT_TRANSPARENT = 1;
var ESLT_PARTICLES = 2;
var ESLT_LIGHTS = 3;
var ESLT_UI_3D = 4;
var ESLT_SKYBOX = 5;
var ESLT_COUNT = 6;

var ENF_VISIBLE      = 1 << 0;
var ENF_DIRTY_POS    = 1 << 1;
var ENF_DIRTY_ROT    = 1 << 2;
var ENF_DIRTY_SCALE    = 1 << 3;
var ENF_DIRTY_TRANS_MAT  = 1 << 4;
var ENF_DIRTY_TRANSFORM  = (ENF_DIRTY_POS | ENF_DIRTY_ROT | ENF_DIRTY_SCALE | ENF_DIRTY_TRANS_MAT);
var ENF_ABSOLUTETRANSFORMATION_UPDATED  = 1 << 5;
var ENF_STANDOUT    = 1 << 6;
var ENF_FOCUS      = 1 << 7;
var ENF_MESH_BAKED    = 1 << 8;
var ENF_MESH_NOBATCH  = 1 << 9;
var ENF_ANIMATION_STOP  = 1 << 10;
var ENF_SKIN_DIRTY    = 1 << 11;  // Skinmesh's BoneMatrices need update
var ENF_SKYBOX_RELATIVE_TRANSFORM  = 1 << 14;
var ENF_DISABLE_ABSOLUTE_UPDATE    = 1 << 15;
var ENF_UIHOLDER_BILLBOARD_DIRTY  = 1 << 16;

var ETS_VIEW = 0;
var ETS_WORLD = 1;
var ETS_PROJECTION = 2;
var ETS_VP = 3;
var ETS_WVP = 4;
var ETS_WORLDIT = 5;
var ETS_LVP = 6;
var ETS_LWVP = 7;
var ETS_WV = 8;
var ETS_POST = 9;
var ETS_COUNT = 10;

var EBF_ZERO = 0; 
var EBF_ONE = 1; 
var EBF_SRC_COLOR = 2;
var EBF_ONE_MINUS_SRC_COLOR = 3;
var EBF_DEST_COLOR = 4;
var EBF_ONE_MINUS_DEST_COLOR = 5;
var EBF_SRC_ALPHA = 6;
var EBF_ONE_MINUS_SRC_ALPHA = 7;
var EBF_DST_ALPHA = 8;
var EBF_ONE_MINUS_DST_ALPHA = 9;
var EBF_CONSTANT_COLOR = 10;
var EBF_ONE_MINUS_CONSTANT_COLOR = 11;
var EBF_CONSTANT_ALPHA = 12;
var EBF_ONE_MINUS_CONSTANT_ALPHA = 13;
var EBF_SRC_ALPHA_SATURATE = 14;

var EMBF_HARDWARE_BUFFER  = 1 << 0;
var EMBF_HOLD_BUFFER    = 1 << 1;
var EMBF_VERTEXBUFFER_DIRTY  = 1 << 5;
var EMBF_INDEXBUFFER_DIRTY  = 1 << 6;
var EMBF_HW_BUFFER_DIRTY  = 1 << 7;

var ECF_NEVER = 1;
var ECF_LESS = 2;
var ECF_LESS_EQUAL = 3;
var ECF_EQUAL = 4;
var ECF_GREATER = 5;
var ECF_NOT_EQUAL = 6;
var ECF_GREATER_EQUAL = 7;
var ECF_ALWAYS = 8;

var EPF_UNKNOWN = -1;
var EPF_A8 = 0;
var EPF_R8G8B8 = 1;
var EPF_R8G8B8A8 = 2;
var EPF_RGBA32F = 3;
var EPF_DEPTH32 = 4;
var EPF_SRGB8 = 5;
var EPF_SRGB8_ALPHA = 6;
var EPF_R32F = 7;
var EPF_COUNT = 8;

var EFB_COLOR = 0;
var EFB_DEPTH = 1;
var EFB_STENCIL = 2;

var EFB_COLOR_MASK = 1 << EFB_COLOR;
var EFB_DEPTH_MASK = 1 << EFB_DEPTH;
var EFB_STENCIL_MASK = 1 << EFB_STENCIL;

var CUBE_POSITIVE_X = 0;
var CUBE_NEGATIVE_X = 1;
var CUBE_POSITIVE_Y = 2;
var CUBE_NEGATIVE_Y = 3;
var CUBE_POSITIVE_Z = 4;
var CUBE_NEGATIVE_Z = 5;

var GL_EXT_FLOAT = 0x1406;
var GL_EXT_HALF_FLOAT_OES = GL_EXT_HALF_FLOAT = 0x8D61;
var GL_EXT_FLOAT_TEXTURE_LINEAR = 0x2601;

var MATERIAL_FLAG_ISPBR = 1 << 0;
var MATERIAL_FLAG_ISTRANSPARENT = 1 << 1;
var MATERIAL_FLAG_PBR_NOTEX = 1 << 2;

var DEGTORAD = Math.PI / 180.0;
var RADTODEG = 180.0 / Math.PI;

var k_vertex_attrib_component = [
  3,  //ESSI_POSITION
  3,  //ESSI_NORMAL,
  4,  //ESSI_COLOR,
  2,  //ESSI_TEXCOORD0,
  2,  //ESSI_TEXCOORD1,
  3,  //ESSI_TANGENT,
  4,  //ESSI_BLENDINDEX,
  4,  //ESSI_BLENDWEIGHT,
];
var k_vertex_attrib_size = [
  12,  //ESSI_POSITION
  12,  //ESSI_NORMAL,
  16,  //ESSI_COLOR,
  8,  //ESSI_TEXCOORD0,
  8,  //ESSI_TEXCOORD1,
  12,  //ESSI_TANGENT,
  16,  //ESSI_BLENDINDEX,
  16,  //ESSI_BLENDWEIGHT,
];

// helper function
function extend(subClass, superClass){
    var F = function() {};
 
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
 
    subClass.superclass = superClass.prototype;
    if(superClass.prototype.constructor == Object.prototype.constructor){
        superClass.prototype.constructor = superClass;
    }
}
//////////////////////////////////////////////////////////////////////////
// Loger , log everything
//////////////////////////////////////////////////////////////////////////

function getFunctionName(func) {
  if (typeof func == 'function' || typeof func == 'object') {
    var name = ('' + func).match(/function\s*([\w\$]*)\s*\(/);
  }
  return name && name[1];
};

if (!('console' in window)) {
  window.console = {};
};
if (!console.trace) {
  /**
  * show stack
  * add trace() function to console.
  * @param {Function} func
  * @example
    function a() {
      b();
    }
    function b() {
      c();
    }
    function c() {
      d();
    }
    function d() {
      console.trace();
    }
    a();
  */
  console.trace = function() {
    var stack = [],
    caller = arguments.callee.caller;

    while (caller) {
      stack.unshift(getFunctionName(caller));
      caller = caller && caller.caller;
    }

    alert('functions on stack:' + '\n' + stack.join('\n'));
  }
};
function Loger() {  
  this._output = document.getElementById("log_output");
};

Loger.prototype = {
  _log : function (msg) {
    console.log( msg );
    if (this._output) {
      this._output.innerHTML += "<br>";
      this._output.innerHTML += msg;
    }
  },
  _error : function (msg) {
    console.error( msg );
    if (this._output) {
      this._output.innerHTML += "<br><p style='color:red'>";
      this._output.innerHTML += msg;
      this._output.innerHTML += "<br>";
      this._output.innerHTML += console.trace();
      this._output.innerHTML += "</p>";
    }
  },
  _warn : function (msg) {
    console.warn( msg );
    if (this._output) {
      this._output.innerHTML += "<br><p style='color:yellow'>";
      this._output.innerHTML += msg;
      this._output.innerHTML += "<br>";
      this._output.innerHTML += console.trace();
      this._output.innerHTML += "</p>";
    }
  },
  _alert : function (msg) {
    alert( msg );
  },
};
_LOG = new Loger();

//////////////////////////////////////////////////////////////////////////
//shaders

var pbr_vsh = "attribute vec4 position;\n\
attribute vec3 normal;\n\
attribute vec4 color;\n\
attribute vec2 texcoord0;\n\
attribute vec2 texcoord1;\n\
attribute vec3 tangent;\n\
attribute vec4 blendindex;\n\
attribute vec4 blendweight;\n\
\n\
uniform mat4 WVP;\n\
uniform mat4 World;\n\
uniform mat4 WorldIT;\n\
uniform mat4 LWVP;\n\
uniform vec3 CamPos;\n\
\n\
varying vec2 vCoords0;\n\
varying vec3 vNormal;\n\
varying vec3 vTangent;\n\
varying vec3 vViewDir;\n\
varying vec4 vLightSpacePos;\n\
varying vec4 svPosition;\n\
\n\
void main ()\n\
{\n\
  vec3 worldPos  = (World * position).xyz;\n\
  vNormal = (WorldIT * vec4(normal, 1.0)).xyz;\n\
  vTangent = (WorldIT * vec4(tangent, 1.0)).xyz;\n\
  vViewDir = normalize(CamPos - worldPos);\n\
  vCoords0 = texcoord0;\n\
  vLightSpacePos    = LWVP * position;\n\
  vLightSpacePos    /= vLightSpacePos.w;\n\
  vLightSpacePos.xy  = vLightSpacePos.xy * 0.5 + 0.5;\n\
  svPosition = WVP * position;\n\
  gl_Position = svPosition;\n\
}";
var pbr_fsh = "uniform sampler2D albedo_map;\n\
uniform sampler2D normal_map;\n\
uniform sampler2D rmc_map;\n\
uniform sampler2D shadowmap;\n\
\n\
uniform samplerCube diffuseProbe;\n\
uniform samplerCube specularProbe;\n\
uniform sampler2D brdfLut;\n\
\n\
uniform vec4 MainLightColor;\n\
uniform vec3 MainLightDirection;\n\
uniform int enable_shadow;\n\
uniform float shadow_factor;\n\
\n\
uniform float _miplevels;\n\
uniform mat2 EnvRot;\n\
\n\
varying vec2 vCoords0;\n\
varying vec3 vNormal;\n\
varying vec3 vTangent;\n\
varying vec3 vViewDir;\n\
varying vec3 worldPos;\n\
varying vec4 vLightSpacePos;\n\
varying vec4 svPosition;\n\
\n\
const float ONE_OVER_PI = 0.318309;\n\
const float PI = 3.1415926535897932;\n\
const float LDR_SCALE = 5.0;\n\
\n\
const float roughnessRescale = 10.0;\n\
const vec3 dielectricColor = vec3(0.04, 0.04, 0.04);\n\
\n\
vec3 getSpecularColor(vec3 albedo, float metalness)\n\
{\n\
  return mix(dielectricColor.rgb, albedo.rgb, metalness);\n\
}\n\
\n\
vec3 getDiffuseColor(vec3 albedo, float metalness)\n\
{\n\
  return albedo * (1.0 - metalness);\n\
}\n\
\n\
vec4 ibl_shade(sampler2D brdfLut, float vdotn, vec3 specColor, float roughness, float baked_ao, vec4 albedo, vec4 diffuseIBL, vec4 specularIBL)\n\
{\n\
    vec4 brdfTerm = texture2D(brdfLut, vec2(vdotn, roughness));\n\
    vec3 metalSpecularIBL = specularIBL.rgb; \n\
\n\
    diffuseIBL.rgb = mix(diffuseIBL.rgb * 0.3, diffuseIBL.rgb, baked_ao);\n\
    \n\
    vec3 albedoByDiffuse = albedo.rgb * diffuseIBL.rgb;\n\
\n\
    vec4 litColor;\n\
    litColor.rgb =  (albedoByDiffuse.rgb + (metalSpecularIBL * (specColor * brdfTerm.x + (brdfTerm.y)))) * baked_ao;\n\
    litColor.a = 1.0;\n\
\n\
    return litColor;\n\
}\n\
\n\
float Square(float x)\n\
{\n\
  return x * x;\n\
}\n\
\n\
float Pow5( float x )\n\
{\n\
  float x2 = x*x;\n\
  return x2 * x2 * x;\n\
}\n\
\n\
float D_GGX( float Roughness, float NoH )\n\
{\n\
  float a = Roughness * Roughness;\n\
  float a2 = a * a;\n\
  float d = ( NoH * a2 - NoH ) * NoH + 1.0;  // 2 mad\n\
  return a2 / ( PI*d*d );          // 4 mul, 1 rcp\n\
}\n\
\n\
float Vis_SmithJointApprox( float Roughness, float NoV, float NoL )\n\
{\n\
  float a = Square( Roughness );\n\
  float Vis_SmithV = NoL * ( NoV * ( 1.0 - a ) + a );\n\
  float Vis_SmithL = NoV * ( NoL * ( 1.0 - a ) + a );\n\
  //return 0.5 * rcp( Vis_SmithV + Vis_SmithL );\n\
  return 0.5 / (Vis_SmithV + Vis_SmithL);\n\
}\n\
\n\
vec3 F_Schlick( vec3 SpecularColor, float VoH )\n\
{\n\
  float Fc = Pow5( 1.0 - VoH );          // 1 sub, 3 mul\n\
  //return Fc + (1 - Fc) * SpecularColor;    // 1 add, 3 mad\n\
  \n\
  // Anything less than 2% is physically impossible and is instead considered to be shadowing\n\
  return clamp(( 50.0 * SpecularColor.g ) * Fc + (1.0 - Fc) * SpecularColor, 0.0, 1.0);\n\
  \n\
}\n\
\n\
vec3 Diffuse_Lambert( vec3 DiffuseColor )\n\
{\n\
  return DiffuseColor;// * (1.0 / PI);\n\
}\n\
\n\
vec3 StandardShading(vec3 diffuse, vec3 specular, float roughness, vec3 L, vec3 V, vec3 N, float NoV )\n\
{\n\
  vec3 H = normalize(V + L);\n\
  float NoL = clamp( dot(N, L), 0.0, 1.0);\n\
  float NoH = clamp( dot(N, H), 0.0, 1.0);\n\
  float VoH = clamp( dot(V, H), 0.0, 1.0);\n\
  \n\
  // Generalized microfacet specular\n\
  float D = D_GGX( roughness, NoH );\n\
  float Vis = Vis_SmithJointApprox( roughness, NoV, NoL );\n\
  vec3 F = F_Schlick( specular, VoH );\n\
\n\
  vec3 Diffuse = Diffuse_Lambert( diffuse );\n\
  \n\
  return Diffuse + (D * Vis) * F;\n\
}\n\
vec3 UnpackNormal(vec3 normal, vec3 tangent, sampler2D normal_map, vec2 coord)\n\
{\n\
  vec3 bitangent = cross(normal, tangent);\n\
  mat3 tbn = mat3(tangent, bitangent, normal);\n\
  \n\
  vec4 bump = texture2D(normal_map, coord);\n\
  bump.xyz = normalize(bump.xyz * 2.0 - 1.0);\n\
  vec3 oNormal = tbn * bump.xyz;\n\
  return oNormal;\n\
}\n\
\n\
void main ()\n\
{\n\
  // We build the TBN frame here in order to be able to use the bump map for IBL:\n\
  vec3 normal = UnpackNormal(normalize(vNormal), normalize(vTangent), normal_map, vCoords0);\n\
  vec3 viewDir = normalize(vViewDir);\n\
  \n\
  if (!gl_FrontFacing)\n\
    normal = -normal;\n\
\n\
  vec4 albedo = texture2D(albedo_map, vCoords0);\n\
  albedo.rgb = pow(albedo.rgb, vec3(2.2));\n\
  //albedo.xyz = pow(albedo.xyz, vec3(2.2));\n\
  vec4 rmc_sample = texture2D(rmc_map, vCoords0);\n\
  float rough_s = rmc_sample.x;\n\
  float metal_s = rmc_sample.y;\n\
  float ao_s = rmc_sample.z;\n\
  \n\
  vec3 N = normal.xzy;\n\
  vec3 V = viewDir.xzy;\n\
  \n\
  float NoV = max( dot(N, V), 1e-5 );\n\
  vec3 R = normalize(reflect(-V, N));\n\
  \n\
  //N.xz = EnvRot * N.xz;\n\
  //R.xz = EnvRot * R.xz;\n\
  \n\
  float roughness = rough_s;\n\
  float metalness = metal_s;\n\
  float baked_ao = ao_s;\n\
\n\
  // Diffuse Probe. Convert Irradiance to Radiance\n\
  vec4 diffuseIBL = textureCube(diffuseProbe, N);\n\
  diffuseIBL.xyz *= vec3(ONE_OVER_PI * LDR_SCALE);\n\
  \n\
  // Specular Probe\n\
  float specMipLevel = roughness * 8.0;//_miplevels;\n\
  vec4 specularIBL = textureCubeLodEXT(specularProbe, R, specMipLevel);\n\
  specularIBL.xyz *= vec3(LDR_SCALE);\n\
  \n\
  vec3 specularColor = getSpecularColor(albedo.xyz, metalness);\n\
  vec4 color = ibl_shade(brdfLut, NoV, specularColor, roughness, baked_ao, albedo, diffuseIBL, specularIBL);\n\
  \n\
  color.a = albedo.a;\n\
  \n\
  //color.xyz = specularIBL.xyz;\n\
  color.xyz = pow(color.xyz , vec3(1.0 / 2.2));\n\
  gl_FragColor = color;\n\
}";
shader_pbr = {
  normal : {
    vsh : pbr_vsh,
    fsh : pbr_fsh,
    render_state : {
      cull : true,
      wireframe : false,
      depth_write : true,
      depth_test : true,
      depth_func : ECF_LESS,
      blend : false,
      blend_src : EBF_SRC_ALPHA,
      blend_dest : EBF_ONE_MINUS_SRC_ALPHA,
    },
  },
};

pbr = {
  normal : {
    vsh : pbr_vsh,
    fsh : pbr_fsh,
    render_state : {
      cull : true,
      wireframe : false,
      depth_write : true,
      depth_test : true,
      depth_func : ECF_LESS,
      blend : false,
      blend_src : EBF_SRC_ALPHA,
      blend_dest : EBF_ONE_MINUS_SRC_ALPHA,
    },
  },
};

shader_pbr_alpha = {
  normal : {
    vsh : pbr_vsh,
    fsh : pbr_fsh,
    render_state : {
      cull : true,
      wireframe : false,
      depth_write : false,
      depth_test : true,
      depth_func : ECF_LESS,
      blend : true,
      blend_src : EBF_SRC_ALPHA,
      blend_dest : EBF_ONE_MINUS_SRC_ALPHA,
    },
  },
};

pbr_alpha = {
  normal : {
    vsh : pbr_vsh,
    fsh : pbr_fsh,
    render_state : {
      cull : true,
      wireframe : false,
      depth_write : false,
      depth_test : true,
      depth_func : ECF_LESS,
      blend : true,
      blend_src : EBF_SRC_ALPHA,
      blend_dest : EBF_ONE_MINUS_SRC_ALPHA,
    },
  },
};


//////////////////////////////////////////////////////////////////////////
// Math , 3d math
//////////////////////////////////////////////////////////////////////////
function Vector2( x, y ) {
  this.x = x || 0;
  this.y = y || 0;
}

Vector2.prototype = {
  constructor: Vector2,

  isVector2: true,

  get width() {
    return this.x;
  },

  set width( value ) {
    this.x = value;
  },

  get height() {
    return this.y;
  },

  set height( value ) {
    this.y = value;
  },
  set: function ( x, y ) {
    this.x = x;
    this.y = y;
    return this;
  },
  setScalar: function ( scalar ) {
    this.x = scalar;
    this.y = scalar;
    return this;
  },

  setX: function ( x ) {
    this.x = x;
    return this;
  },

  setY: function ( y ) {
    this.y = y;
    return this;
  },

  setComponent: function ( index, value ) {
    switch ( index ) {
      case 0: this.x = value; break;
      case 1: this.y = value; break;
      default: throw new Error( 'index is out of range: ' + index );
    }
  },

  getComponent: function ( index ) {
    switch ( index ) {
      case 0: return this.x;
      case 1: return this.y;
      default: throw new Error( 'index is out of range: ' + index );
    }
  },

  clone: function () {
    return new this.constructor( this.x, this.y );
  },

  copy: function ( v ) {
    this.x = v.x;
    this.y = v.y;
    return this;
  },

  add: function ( v, w ) {
    if ( w !== undefined ) {
      console.warn( 'Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
      return this.addVectors( v, w );
    }
    this.x += v.x;
    this.y += v.y;
    return this;
  },

  addScalar: function ( s ) {
    this.x += s;
    this.y += s;
    return this;
  },

  addVectors: function ( a, b ) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this;
  },

  addScaledVector: function ( v, s ) {
    this.x += v.x * s;
    this.y += v.y * s;
    return this;
  },

  sub: function ( v, w ) {
    if ( w !== undefined ) {
      console.warn( 'Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
      return this.subVectors( v, w );
    }
    this.x -= v.x;
    this.y -= v.y;
    return this;
  },

  subScalar: function ( s ) {
    this.x -= s;
    this.y -= s;
    return this;
  },

  subVectors: function ( a, b ) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this;
  },

  multiply: function ( v ) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  },

  multiplyScalar: function ( scalar ) {
    if ( isFinite( scalar ) ) {
      this.x *= scalar;
      this.y *= scalar;
    } else {
      this.x = 0;
      this.y = 0;
    }
    return this;
  },

  divide: function ( v ) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  },

  divideScalar: function ( scalar ) {
    return this.multiplyScalar( 1 / scalar );
  },

  min: function ( v ) {
    this.x = Math.min( this.x, v.x );
    this.y = Math.min( this.y, v.y );
    return this;
  },

  max: function ( v ) {
    this.x = Math.max( this.x, v.x );
    this.y = Math.max( this.y, v.y );
    return this;
  },

  clamp: function ( min, max ) {
    this.x = Math.max( min.x, Math.min( max.x, this.x ) );
    this.y = Math.max( min.y, Math.min( max.y, this.y ) );
    return this;
  },

  clampScalar: function () {
    var min, max;
    return function clampScalar( minVal, maxVal ) {
      if ( min === undefined ) {
        min = new Vector2();
        max = new Vector2();
      }

      min.set( minVal, minVal );
      max.set( maxVal, maxVal );

      return this.clamp( min, max );
    };
  }(),

  clampLength: function ( min, max ) {
    var length = this.length();
    return this.multiplyScalar( Math.max( min, Math.min( max, length ) ) / length );
  },

  floor: function () {
    this.x = Math.floor( this.x );
    this.y = Math.floor( this.y );
    return this;
  },

  ceil: function () {
    this.x = Math.ceil( this.x );
    this.y = Math.ceil( this.y );
    return this;
  },

  round: function () {
    this.x = Math.round( this.x );
    this.y = Math.round( this.y );
    return this;
  },

  roundToZero: function () {
    this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
    this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );
    return this;
  },

  negate: function () {
    this.x = - this.x;
    this.y = - this.y;
    return this;
  },

  dot: function ( v ) {
    return this.x * v.x + this.y * v.y;
  },

  lengthSq: function () {
    return this.x * this.x + this.y * this.y;
  },

  length: function () {
    return Math.sqrt( this.x * this.x + this.y * this.y );
  },

  lengthManhattan: function() {
    return Math.abs( this.x ) + Math.abs( this.y );
  },

  normalize: function () {
    return this.divideScalar( this.length() );
  },

  angle: function () {
    var angle = Math.atan2( this.y, this.x );
    if ( angle < 0 ) angle += 2 * Math.PI;
    return angle;
  },

  distanceTo: function ( v ) {
    return Math.sqrt( this.distanceToSquared( v ) );
  },

  distanceToSquared: function ( v ) {
    var dx = this.x - v.x, dy = this.y - v.y;
    return dx * dx + dy * dy;
  },

  distanceToManhattan: function ( v ) {
    return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );
  },

  setLength: function ( length ) {
    return this.multiplyScalar( length / this.length() );
  },

  lerp: function ( v, alpha ) {
    this.x += ( v.x - this.x ) * alpha;
    this.y += ( v.y - this.y ) * alpha;
    return this;
  },

  lerpVectors: function ( v1, v2, alpha ) {
    return this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );
  },

  equals: function ( v ) {
    return ( ( v.x === this.x ) && ( v.y === this.y ) );
  },

  fromArray: function ( array, offset ) {
    if ( offset === undefined ) offset = 0;
    this.x = array[ offset ];
    this.y = array[ offset + 1 ];
    return this;
  },

  toArray: function ( array, offset ) {
    if ( array === undefined ) array = [];
    if ( offset === undefined ) offset = 0;

    array[ offset ] = this.x;
    array[ offset + 1 ] = this.y;
    return array;
  },

  fromAttribute: function ( attribute, index, offset ) {
    if ( offset === undefined ) offset = 0;
    index = index * attribute.itemSize + offset;
    this.x = attribute.array[ index ];
    this.y = attribute.array[ index + 1 ];

    return this;
  },

  rotateAround: function ( center, angle ) {
    var c = Math.cos( angle ), s = Math.sin( angle );
    var x = this.x - center.x;
    var y = this.y - center.y;
    this.x = x * c - y * s + center.x;
    this.y = x * s + y * c + center.y;

    return this;
  }
};

function Vector3( x, y, z ) {

  this.v = new Float32Array( [
    0, 0, 0
  ] );
  this.v[0] = x || 0;
  this.v[1] = y || 0;
  this.v[2] = z || 0;

}
Vector3.prototype = {

  constructor: Vector3,

  isVector3: true,

  set: function ( x, y, z ) {

    this.v[0] = x;
    this.v[1] = y;
    this.v[2] = z;

    return this;

  },

  setScalar: function ( scalar ) {

    this.v[0] = scalar;
    this.v[1] = scalar;
    this.v[2] = scalar;

    return this;

  },

  x : function() {
    return this.v[0];
  },

  y : function() {
    return this.v[1];
  },

  z : function() {
    return this.v[2];
  },

  setX: function ( x ) {

    this.v[0] = x;

    return this;

  },

  setY: function ( y ) {

    this.v[1] = y;

    return this;

  },

  setZ: function ( z ) {

    this.v[2] = z;

    return this;

  },

  setComponent: function ( index, value ) {

    switch ( index ) {

      case 0: this.v[0] = value; break;
      case 1: this.v[1] = value; break;
      case 2: this.v[2] = value; break;
      default: throw new Error( 'index is out of range: ' + index );

    }

  },

  getComponent: function ( index ) {

    switch ( index ) {

      case 0: return this.v[0];
      case 1: return this.v[1];
      case 2: return this.v[2];
      default: throw new Error( 'index is out of range: ' + index );

    }

  },

  clone: function () {

    return new this.constructor( this.v[0], this.v[1], this.v[2] );

  },

  copy: function ( v ) {

    this.v[0] = v.v[0];
    this.v[1] = v.v[1];
    this.v[2] = v.v[2];

    return this;
  },

  add: function ( v ) {
    
    this.v[0] += v.v[0];
    this.v[1] += v.v[1];
    this.v[2] += v.v[2];

    return this;
  },

  addScalar: function ( s ) {

    this.v[0] += s;
    this.v[1] += s;
    this.v[2] += s;

    return this;

  },

  addVectors: function ( a, b ) {

    this.v[0] = a.v[0] + b.v[0];
    this.v[1] = a.v[1] + b.v[1];
    this.v[2] = a.v[2] + b.v[2];

    return this;

  },

  addScaledVector: function ( v, s ) {

    this.v[0] += v.v[0] * s;
    this.v[1] += v.v[1] * s;
    this.v[2] += v.v[2] * s;

    return this;

  },

  sub: function ( v ) {
    
    this.v[0] -= v.v[0];
    this.v[1] -= v.v[1];
    this.v[2] -= v.v[2];

    return this;
  },

  subScalar: function ( s ) {

    this.v[0] -= s;
    this.v[1] -= s;
    this.v[2] -= s;

    return this;

  },

  subVectors: function ( a, b ) {

    this.v[0] = a.v[0] - b.v[0];
    this.v[1] = a.v[1] - b.v[1];
    this.v[2] = a.v[2] - b.v[2];

    return this;

  },

  multiply: function ( v ) {

    this.v[0] *= v.v[0];
    this.v[1] *= v.v[1];
    this.v[2] *= v.v[2];

    return this;
  },

  multiplyScalar: function ( scalar ) {
    this.v[0] *= scalar;
    this.v[1] *= scalar;
    this.v[2] *= scalar;
    
    return this;

  },

  multiplyVectors: function ( a, b ) {

    this.v[0] = a.v[0] * b.v[0];
    this.v[1] = a.v[1] * b.v[1];
    this.v[2] = a.v[2] * b.v[2];

    return this;

  },

  divide: function ( v ) {

    this.v[0] /= v.v[0];
    this.v[1] /= v.v[1];
    this.v[2] /= v.v[2];

    return this;

  },

  divideScalar: function ( scalar ) {

    return this.multiplyScalar( 1 / scalar );

  },

  negate: function () {

    this.v[0] = - this.v[0];
    this.v[1] = - this.v[1];
    this.v[2] = - this.v[2];

    return this;

  },

  dotProduct: function ( v ) {

    return this.v[0] * v.v[0] + this.v[1] * v.v[1] + this.v[2] * v.v[2];

  },

  getLengthSQ: function () {

    return this.v[0] * this.v[0] + this.v[1] * this.v[1] + this.v[2] * this.v[2];

  },

  getLength: function () {

    return Math.sqrt( this.v[0] * this.v[0] + this.v[1] * this.v[1] + this.v[2] * this.v[2] );

  },

  lengthManhattan: function () {

    return Math.abs( this.v[0] ) + Math.abs( this.v[1] ) + Math.abs( this.v[2] );

  },

  normalize: function () {

    return this.divideScalar( this.getLength() );

  },

  setLength: function ( length ) {

    return this.multiplyScalar( length / this.getLength() );

  },

  lerp: function ( v, alpha ) {

    this.v[0] += ( v.v[0] - this.v[0] ) * alpha;
    this.v[1] += ( v.v[1] - this.v[1] ) * alpha;
    this.v[2] += ( v.v[2] - this.v[2] ) * alpha;

    return this;

  },

  lerpVectors: function ( v1, v2, alpha ) {

    return this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );

  },
  
  crossProduct: function ( v ) {

    var x = this.v[0], y = this.v[1], z = this.v[2];

    this.v[0] = -y * v.v[2] + z * v.v[1];
    this.v[1] = -z * v.v[0] + x * v.v[2];
    this.v[2] = -x * v.v[1] + y * v.v[0];

    return this;

  },

  crossVectors: function ( a, b ) {

    var ax = a.v[0], ay = a.v[1], az = a.v[2];
    var bx = b.v[0], by = b.v[1], bz = b.v[2];

    this.v[0] = -ay * bz + az * by;
    this.v[1] = -az * bx + ax * bz;
    this.v[2] = -ax * by + ay * bx;

    return this;

  },
  
  equals: function ( v ) {

    return ( ( v.v[0] === this.v[0] ) && ( v.v[1] === this.v[1] ) && ( v.v[2] === this.v[2] ) );

  },
  
  is_scaled : function () {
    return !((this.v[0] == 1) && (this.v[1] == 1) && (this.v[2] == 1));
  },

  applyQuaternion: function ( q ) {
    var x = this.x, y = this.y, z = this.z;
    var qx = q.x, qy = q.y, qz = q.z, qw = q.w;
    var ix =  qw * x + qy * z - qz * y;
    var iy =  qw * y + qz * x - qx * z;
    var iz =  qw * z + qx * y - qy * x;
    var iw = - qx * x - qy * y - qz * z;
    this.x = ix * qw + iw * - qx + iy * - qz - iz * - qy;
    this.y = iy * qw + iw * - qy + iz * - qx - ix * - qz;
    this.z = iz * qw + iw * - qz + ix * - qy - iy * - qx;
    return this;
  },
};

/////////////////////////////////////////////////////////////////////////////

function Quaternion( x, y, z, w ) {

  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
  this.w = ( w !== undefined ) ? w : 1;

}

Quaternion.prototype = {

  constructor: Quaternion,

  set: function ( x, y, z, w ) {

    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;

    return this;
  },

  clone: function () {

    return new this.constructor( this.x, this.y, this.z, this.w );

  },

  add: function ( q ) {
    
    this.x += q.x;
    this.y += q.y;
    this.z += q.z;
    this.w += q.w;

    return this;
  },

  sub: function ( q ) {
    
    this.x -= q.x;
    this.y -= q.y;
    this.z -= q.z;
    this.w -= q.w;

    return this;
  },

  multiQuaternion : function ( quat ) {
    var w = this.w;
    var x = this.x;
    var y = this.y;
    var z = this.z;
    this.w = (quat.w * w) - (quat.x * x) - (quat.y * y) - (quat.z * z);
    this.x = (quat.w * x) + (quat.x * w) + (quat.y * z) - (quat.z * y);
    this.y = (quat.w * y) + (quat.y * w) + (quat.z * x) - (quat.x * z);
    this.z = (quat.w * z) + (quat.z * w) + (quat.x * y) - (quat.y * x);
    return this;
  },
  
  multiScalar : function ( s ) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    this.w *= s;
    
    return this;
  },

  copy: function ( quaternion ) {

    this.x = quaternion.x;
    this.y = quaternion.y;
    this.z = quaternion.z;
    this.w = quaternion.w;

    this.onChangeCallback();

    return this;

  },

  copyFromMatrix: function ( mat ) {
    // Determine which of w, x, y, or z has the largest absolute value
    var fourWSquaredMinus1 = mat.m[0] + mat.m[5] + mat.m[10];
    var fourXSquaredMinus1 = mat.m[0] - mat.m[5] - mat.m[10];
    var fourYSquaredMinus1 = mat.m[5] - mat.m[0] - mat.m[10];
    var fourZSquaredMinus1 = mat.m[10] - mat.m[0] - mat.m[5];

    var biggestIndex = 0;
    var fourBiggestSquaredMinus1 = fourWSquaredMinus1;
    if (fourXSquaredMinus1 > fourBiggestSquaredMinus1) 
    {
      fourBiggestSquaredMinus1 = fourXSquaredMinus1;
      biggestIndex = 1;
    }
    if (fourYSquaredMinus1 > fourBiggestSquaredMinus1) 
    {
      fourBiggestSquaredMinus1 = fourYSquaredMinus1;
      biggestIndex = 2;
    }
    if (fourZSquaredMinus1 > fourBiggestSquaredMinus1) 
    {
      fourBiggestSquaredMinus1 = fourZSquaredMinus1;
      biggestIndex = 3;
    }

    // Perform square root and division
    var biggestVal = Math.sqrt(fourBiggestSquaredMinus1 + 1.0) * 0.5;
    var mult = 0.25 / biggestVal;
    // Apply table to compute quaternion values
    switch (biggestIndex) 
    {
    case 0:
      this.w = biggestVal;
      //this.x = (m(1, 2) - m(2, 1)) * mult;
      //this.y = (m(2, 0) - m(0, 2)) * mult;
      //this.z = (m(0, 1) - m(1, 0)) * mult;
      this.x = (mat.m[6] - mat.m[9]) * mult;
      this.y = (mat.m[8] - mat.m[2]) * mult;
      this.z = (mat.m[1] - mat.m[4]) * mult;
    break;
    case 1:
      this.x = biggestVal;
      //W = (m(1, 2) - m(2, 1)) * mult;
      //Y = (m(0, 1) + m(1, 0)) * mult;
      //Z = (m(2, 0) + m(0, 2)) * mult;
      this.w = (mat.m[6] - mat.m[9]) * mult;
      this.y = (mat.m[1] + mat.m[4]) * mult;
      this.z = (mat.m[8] + mat.m[2]) * mult;
    break;
    case 2:
      this.y = biggestVal;
      //W = (m(2, 0) - m(0, 2)) * mult;
      //X = (m(0, 1) + m(1, 0)) * mult;
      //Z = (m(1, 2) + m(2, 1)) * mult;
      this.w = (mat.m[8] - mat.m[2]) * mult;
      this.x = (mat.m[1] + mat.m[4]) * mult;
      this.z = (mat.m[6] + mat.m[9]) * mult;
    break;
    case 3:
      this.z = biggestVal;
      //W = (m(0, 1) - m(1, 0)) * mult;
      //X = (m(2, 0) + m(0, 2)) * mult;
      //Y = (m(1, 2) + m(2, 1)) * mult;
      this.w = (mat.m[1] - mat.m[4]) * mult;
      this.x = (mat.m[8] + mat.m[2]) * mult;
      this.y = (mat.m[6] + mat.m[9]) * mult;
    break;
    }

    return normalize();
  },
  
  getMatrix : function () {
    var _2xx = 2.0*this.x*this.x;
    var _2yy = 2.0*this.y*this.y;
    var _2zz = 2.0*this.z*this.z;
    var _2xy = 2.0*this.x*this.y;
    var _2xz = 2.0*this.x*this.z;
    var _2xw = 2.0*this.x*this.w;
    var _2yz = 2.0*this.y*this.z;
    var _2yw = 2.0*this.y*this.w;
    var _2zw = 2.0*this.z*this.w;

    var dest = new Matrix4();
    dest.m[0] = 1.0 - _2yy - _2zz;
    dest.m[1] = _2xy + _2zw;
    dest.m[2] = _2xz - _2yw;
    dest.m[3] = 0.0;

    dest.m[4] = _2xy - _2zw;
    dest.m[5] = 1.0 - _2xx - _2zz;
    dest.m[6] = _2yz + _2xw;
    dest.m[7] = 0.0;

    dest.m[8] = _2xz + _2yw;
    dest.m[9] = _2yz - _2xw;
    dest.m[10] = 1.0 - _2yy - _2xx;
    dest.m[11] = 0.0;

    dest.m[12] = 0;
    dest.m[13] = 0;
    dest.m[14] = 0;
    dest.m[15] = 1;
    
    return dest;
  },

  getMatrix_transposed : function () {
    var _2xx = 2.0*this.x*this.x;
    var _2yy = 2.0*this.y*this.y;
    var _2zz = 2.0*this.z*this.z;
    var _2xy = 2.0*this.x*this.y;
    var _2xz = 2.0*this.x*this.z;
    var _2xw = 2.0*this.x*this.w;
    var _2yz = 2.0*this.y*this.z;
    var _2yw = 2.0*this.y*this.w;
    var _2zw = 2.0*this.z*this.w;

    var dest = new Matrix4();
    dest.m[0] = 1.0 - _2yy - _2zz;
    dest.m[4] = _2xy + _2zw;
    dest.m[8] = _2xz - _2yw;
    dest.m[12] = 0.0;

    dest.m[1] = _2xy - _2zw;
    dest.m[5] = 1.0 - _2xx - _2zz;
    dest.m[9] = _2yz + _2xw;
    dest.m[13] = 0.0;

    dest.m[2] = _2xz + _2yw;
    dest.m[6] = _2yz - _2xw;
    dest.m[10] = 1.0 - _2yy - _2xx;
    dest.m[14] = 0.0;

    dest.m[3] = 0;
    dest.m[7] = 0;
    dest.m[11] = 0;
    dest.m[15] = 1;
    
    return dest;
  },
  
  makeInverse : function() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    
    return this;
  },
  
  setEuler : function( x, y, z ) {
    var angle;

    angle = x * 0.5;
    var sr = Math.sin(angle);
    var cr = Math.cos(angle);

    angle = y * 0.5;
    var sp = Math.sin(angle);
    var cp = Math.cos(angle);

    angle = z * 0.5;
    var sy = Math.sin(angle);
    var cy = Math.cos(angle);

    var cpcy = cp * cy;
    var spcy = sp * cy;
    var cpsy = cp * sy;
    var spsy = sp * sy;

    this.x = (sr * cpcy - cr * spsy);
    this.y = (cr * spcy + sr * cpsy);
    this.z = (cr * cpsy - sr * spcy);
    this.w = (cr * cpcy + sr * spsy);

    return normalize();
  },
  
  normalize : function () {
    var n = this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    
    if (n == 1)
      return this;
    
    var n_inv = 1.0 / Math.sqrt( n );
    this.x *= n_inv;
    this.y *= n_inv;
    this.z *= n_inv;
    this.w *= n_inv;
    
    return this;
  },

  slerp : function( _q1, _q2, time ) {
    var q1 = _q1.clone();
    var q2 = _q2.clone();
    var angle = q1.dotProduct(q2);

    if (angle < 0.0)
    {
      q1 *= -1.0;
      angle *= -1.0;
    }

    var scale;
    var invscale;

    if ((angle + 1.0) > 0.05)
    {
      if ((1.0 - angle) >= 0.05) // spherical interpolation
      {
        var theta = Math.acos(angle);
        var invsintheta = 1.0 / (Math.sin(theta));
        scale = Math.sin(theta * (1.0-time)) * invsintheta;
        invscale = Math.sin(theta * time) * invsintheta;
        q1.multiplyScalar(scale);
        q2.multiplyScalar(invscale);
        q1.add(q2);
        return q1.normalize();
      }
      else // linear interploation
      {
        scale = 1.0 - time;
        invscale = time;
        q1.multiplyScalar(scale);
        q2.multiplyScalar(invscale);
        q1.add(q2);
        return q1.normalize();
      }
    }
    else
    {
      q2.set(-q1.y, q1.x, -q1.w, q1.z);
      scale = Math.sin(Math.PI * (0.5 - time));
      invscale = Math.sin(Math.PI * time);
      q1.multiplyScalar(scale);
      q2.multiplyScalar(invscale);
      q1.add(q2);
      return q1.normalize();
    }
  },
  
  dotProduct : function( q2 ) {
    return (this.x * q2.x) + (this.y * q2.y) + (this.z * q2.z) + (this.w * q2.w);
  },
  
  fromAngleAxis : function( angle, axis ) {
    var fHalfAngle = 0.5 * angle;
    var fSin = Math.sin(fHalfAngle);
    this.w = Math.cos(fHalfAngle);
    this.x = fSin * axis.x();
    this.y = fSin * axis.y();
    this.z = fSin * axis.z();
    return this;
  },
  
  makeIdentity : function() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.w = 1;
    
    return this;
  },
  
  rotationFromTo : function( _from, _to)
  {
    // Based on Stan Melax's article in Game Programming Gems
    // Copy, since cannot modify local
    var v0 = _from.clone();
    var v1 = _to.clone();
    v0.normalize();
    v1.normalize();

    var d = v0.dotProduct(v1);
    if (d >= 1.0) // If dot == 1, vectors are the same
    {
      return makeIdentity();
    }

    if (d <= -1.0) // if dot == -1, vectors are opossite
    {
      var axis = new Vector3();
      axis.set(1, 0, 0);
      axis = axis.crossProduct(_from);
      if (axis.getLengthSQ() == 0) // pick another if colinear
      {
        axis.set(0, 1, 0);
        axis = axis.crossProduct(_from);
      }
      axis.normalize();
      return fromAngleAxis(Math.PI, axis);
    }

    var s = Math.sqrt( (1+d)*2 ); // optimize inv_sqrt
    var invs = 1.0 / s;
    var c = [];
    c[0] = (v0.y() * v1.z() - v0.z() * v1.y()) * invs;
    c[1] = (v0.z() * v1.x() - v0.x() * v1.z()) * invs;
    c[2] = (v0.x() * v1.y() - v0.y() * v1.x()) * invs;
    
    this.x = c[0];
    this.y = c[1];
    this.z = c[2];
    this.w = s * 0.5;

    return this.normalize();
  },
};

/////////////////////////////////////////////////////////////////////////////

function Spherical( radius, phi, theta ) {
  this.radius = ( radius !== undefined ) ? radius : 1.0;
  this.phi = ( phi !== undefined ) ? phi : 0; // up / down towards top and bottom pole
  this.theta = ( theta !== undefined ) ? theta : 0; // around the equator of the sphere
  return this;
}

Spherical.prototype = {
  constructor: Spherical,

  set: function ( radius, phi, theta ) {
    this.radius = radius;
    this.phi = phi;
    this.theta = theta;
    return this;
  },

  clone: function () {
    return new this.constructor().copy( this );
  },

  copy: function ( other ) {
    this.radius.copy( other.radius );
    this.phi.copy( other.phi );
    this.theta.copy( other.theta );

    return this;
  },

  // restrict phi to be betwee EPS and PI-EPS
  makeSafe: function() {
    var EPS = 0.000001;
    this.phi = Math.max( EPS, Math.min( Math.PI - EPS, this.phi ) );

    return this;
  },

  setFromVector3: function( vec3 ) {
    this.radius = vec3.length();

    if ( this.radius === 0 ) {
      this.theta = 0;
      this.phi = 0;
    } else {
      this.theta = Math.atan2( vec3.x, vec3.z ); // equator angle around y-up axis
      this.phi = Math.acos( exports.Math.clamp( vec3.y / this.radius, - 1, 1 ) ); // polar angle
    }

    return this;
  },
};
/////////////////////////////////////////////////////////////////////////////
function SColor4( r, g, b, a ) {

  this.c = new Float32Array( [
    0, 0, 0, 1
  ] );
  this.c[0] = r || 0;
  this.c[1] = g || 0;
  this.c[2] = b || 0;
  this.c[3] = ( a !== undefined ) ? a : 1;

}

SColor4.prototype = {

  constructor: SColor4,

  set: function ( r, g, b, a ) {

    this.c[0] = r || 0;
    this.c[1] = g || 0;
    this.c[2] = b || 0;
    this.c[3] = a || 1;

    return this;
  },
  
  multiScalar : function( s ) {
    this.c[0] *= s;
    this.c[1] *= s;
    this.c[2] *= s;
    this.c[3] *= s;
    
    return this;
  },
  
  add : function( color ) {
    this.c[0] += color.c[0];
    this.c[1] += color.c[1];
    this.c[2] += color.c[2];
    this.c[3] += color.c[3];
    
    return this;
  },
  
  sub : function( color ) {
    this.c[0] -= color.c[0];
    this.c[1] -= color.c[1];
    this.c[2] -= color.c[2];
    this.c[3] -= color.c[3];
    
    return this;
  },
  
  multi : function( color ) {
    this.c[0] *= color.c[0];
    this.c[1] *= color.c[1];
    this.c[2] *= color.c[2];
    this.c[3] *= color.c[3];
    
    return this;
  },
  
  equals : function( color ) {
    return  this.c[0] == color.c[0] &&
        this.c[1] == color.c[1] &&
        this.c[2] == color.c[2] &&
        this.c[3] == color.c[3];
  },
};
/////////////////////////////////////////////////////////////////////////////

function Matrix4() {
  this.m = new Float32Array( [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ] );
}

Matrix4.prototype = {

  constructor: Matrix4,

  isMatrix4: true,

  set: function ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {
    var te = this.m;

    te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
    te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
    te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
    te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

    return this;
  },
  
  makeIdentity: function () {
    this.set(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    );
    return this;
  },

  clone: function () {
    return new Matrix4().fromArray( this.m );
  },

  copy: function ( m ) {
    this.m.set( m.m );
    return this;
  },

  multiplyScalar: function( s ) {
    this.m[0] *= s;
    this.m[1] *= s;
    this.m[2] *= s;
    this.m[3] *= s;
    this.m[4] *= s;
    this.m[5] *= s;
    this.m[6] *= s;
    this.m[7] *= s;
    this.m[8] *= s;
    this.m[9] *= s;
    this.m[10] *= s;
    this.m[11] *= s;
    this.m[12] *= s;
    this.m[13] *= s;
    this.m[14] *= s;
    this.m[15] *= s;
    return this;
  },
  
  multiplyMatrices: function ( a, b ) {

    var ae = a.m;
    var be = b.m;
    var te = this.m;

    var a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
    var a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
    var a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
    var a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

    var b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
    var b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
    var b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
    var b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

    te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

    te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

    te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

    te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

    return this;
  },
  
  multiply: function( m ) {
    return multiplyMatrices(this, m);
  },
  
  premultiply: function( m ) {
    return multiplyMatrices(m, this);
  },

  multiMatrices34: function( a, b ) {
    var ae = a.m;
    var be = b.m;
    var te = this.m;

    var a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
    var a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
    var a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
    var a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

    var b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
    var b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
    var b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
    var b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

    te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

    te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

    te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

    te[ 3 ] = 0;
    te[ 7 ] = 0;
    te[ 11 ] = 0;
    te[ 15 ] = 1;

    return this;
  },
  
  multi34: function( m ) {
    return this.multiMatrices34(this, m);
  },
  
  premulti34: function( m ) {
    return this.multiMatrices34(m, this);
  },
  
  getTranslation: function() {
    var v1 = new Vector3();
    return v1.set(this.m[12], this.m[13], this.m[14]);
  },
  
  setTranslation: function( x,y,z )  {
    this.m[12] = x;
    this.m[13] = y;
    this.m[14] = z;
    return this;
  },

  setScale: function( x, y, z ) {
    this.m[0] = x;
    this.m[5] = y;
    this.m[10] = z;
    return this;
  },

  preScale: function( x, y, z ) {
    this.m[0] *= x;
    this.m[1] *= y;
    this.m[2] *= z;

    this.m[4] *= x;
    this.m[5] *= y;
    this.m[6] *= z;

    this.m[8] *= x;
    this.m[9] *= y;
    this.m[10] *= z;

    this.m[12] *= x;
    this.m[13] *= y;
    this.m[14] *= z;
    
    return this;
  },
  
  postScale: function( x, y, z ) {
    this.m[0] *= x;
    this.m[1] *= x;
    this.m[2] *= x;

    this.m[4] *= y;
    this.m[5] *= y;
    this.m[6] *= y;

    this.m[8] *= z;
    this.m[9] *= z;
    this.m[10] *= z;

    return this;
  },
  
  getScale: function() {
    var vScale = new Vector3();
    var vec3 = new Vector3();
    vec3.set(this.m[0], this.m[1], this.m[2]);
    vScale.v[0] = vec3.getLength();
    vec3.set(this.m[4], this.m[5], this.m[6]);
    vScale.v[1] = vec3.getLength();
    vec3.set(this.m[8], this.m[9], this.m[10]);
    vScale.v[2] = vec3.getLength();
  },

  transformVect3: function( vect ) {
    var result = new Vector3();
    
    result.v[0] = vect.x() * this.m[0] + vect.y() * this.m[4] + vect.z() * this.m[8] + this.m[12];
    result.v[1] = vect.x() * this.m[1] + vect.y() * this.m[5] + vect.z() * this.m[9] + this.m[13];
    result.v[2] = vect.x() * this.m[2] + vect.y() * this.m[6] + vect.z() * this.m[10] + this.m[14];
    
    return result;
  },
  
  getDeterminant: function() {
    var t0 = this.m[10] * this.m[15] - this.m[11] * this.m[14];
    var t1 = this.m[6] * this.m[15] - this.m[7] * this.m[14];
    var t2 = this.m[6] * this.m[11] - this.m[7] * this.m[10];
    var t3 = this.m[2] * this.m[15] - this.m[3] * this.m[14];
    var t4 = this.m[2] * this.m[11] - this.m[3] * this.m[10];
    var t5 = this.m[2] * this.m[7] - this.m[3] * this.m[6];

    var t6 = this.m[8] * this.m[13] - this.m[9] * this.m[12];
    var t7 = this.m[4] * this.m[13] - this.m[5] * this.m[12];
    var t8 = this.m[4] * this.m[9] - this.m[5] * this.m[8];
    var t9 = this.m[0] * this.m[13] - this.m[1] * this.m[12];
    var t10 = this.m[0] * this.m[9] - this.m[1] * this.m[8];
    var t11 = this.m[0] * this.m[5] - this.m[1] * this.m[4];

    return t0 * t11 - t1 * t10 + t2 * t9 + t3 * t8 - t4 * t7 + t5 * t6;
  },

  getInverse: function () {
    var det = getDeterminant();
    if (det < 0.0001 && det > -0.0001) {
      return null;
    }
    
    var result = new Matrix4();

    result.m[0] = this.m[5] * t0 - this.m[9] * t1 + this.m[13] * t2;
    result.m[1] = this.m[9] * t3 - this.m[1] * t0 - this.m[13] * t4;
    result.m[2] = this.m[1] * t1 - this.m[5] * t3 + this.m[13] * t5;
    result.m[3] = this.m[5] * t4 - this.m[1] * t2 - this.m[9] * t5;

    result.m[4] = this.m[8] * t1 - this.m[4] * t0 - this.m[12] * t2;
    result.m[5] = this.m[0] * t0 - this.m[8] * t3 + this.m[12] * t4;
    result.m[6] = this.m[4] * t3 - this.m[0] * t1 - this.m[12] * t5;
    result.m[7] = this.m[0] * t2 - this.m[4] * t4 + this.m[8] * t5;

    result.m[8] = this.m[7] * t6 - this.m[11] * t7 + this.m[15] * t8;
    result.m[9] = this.m[11] * t9 - this.m[3] * t6 - this.m[15] * t10;
    result.m[10] = this.m[3] * t7 - this.m[7] * t9 + this.m[15] * t11;
    result.m[11] = this.m[7] * t10 - this.m[3] * t8 - this.m[11] * t11;

    result.m[12] = this.m[10] * t7 - this.m[6] * t6 - this.m[14] * t8;
    result.m[13] = this.m[2] * t6 - this.m[10] * t9 + this.m[14] * t10;
    result.m[14] = this.m[6] * t9 - this.m[2] * t7 - this.m[14] * t11;
    result.m[15] = this.m[2] * t8 - this.m[6] * t10 + this.m[10] * t11;

    //det = reciprocal(det);
    det = 1.0 / det;
    for ( var i = 0; i < 16; ++i )
    {
      result.m[i] *= det;
    }
    return result;
  },
  
  getTransposed: function () {
    var result = new Matrix4();
    result.m[ 0] = this.m[ 0];
    result.m[ 1] = this.m[ 4];
    result.m[ 2] = this.m[ 8];
    result.m[ 3] = this.m[12];

    result.m[ 4] = this.m[ 1];
    result.m[ 5] = this.m[ 5];
    result.m[ 6] = this.m[ 9];
    result.m[ 7] = this.m[13];

    result.m[ 8] = this.m[ 2];
    result.m[ 9] = this.m[ 6];
    result.m[10] = this.m[10];
    result.m[11] = this.m[14];

    result.m[12] = this.m[ 3];
    result.m[13] = this.m[ 7];
    result.m[14] = this.m[11];
    result.m[15] = this.m[15];
    return result;
  },
};

buildProjectionMatrixPerspectiveFov = function( fov, aspect, zNear, zFar ) {
  var h = 1.0 / Math.tan( fov / 2.0 );
  var w = h / aspect;

  var mat = new Matrix4();

  mat.m[0] = w;
  mat.m[1] = 0;
  mat.m[2] = 0;
  mat.m[3] = 0;

  mat.m[4] = 0;
  mat.m[5] = h;
  mat.m[6] = 0;
  mat.m[7] = 0;

  mat.m[8] = 0;
  mat.m[9] = 0;
  mat.m[10] = (zFar / (zFar - zNear));
  mat.m[11] = 1;

  mat.m[12] = 0;
  mat.m[13] = 0;
  mat.m[14] = (-zNear * zFar / (zFar - zNear));
  mat.m[15] = 0;
  
  return mat;
};

buildProjectionMatrixOrtho = function( widthOfViewVolume, heightOfViewVolume, zNear, zFar ) {
  var mat = new Matrix4();

  mat.m[0] = 2.0 / widthOfViewVolume;
  mat.m[1] = 0;
  mat.m[2] = 0;
  mat.m[3] = 0;

  mat.m[4] = 0;
  mat.m[5] = 2.0 / heightOfViewVolume;
  mat.m[6] = 0;
  mat.m[7] = 0;

  mat.m[8] = 0;
  mat.m[9] = 0;
  mat.m[10] = 1.0 / (zFar - zNear);
  mat.m[11] = 0;

  mat.m[12] = 0;
  mat.m[13] = 0;
  mat.m[14] = (zNear / (zFar - zNear));
  mat.m[15] = 1;

  return mat;
};

buildCameraLookAtMatrix = function( position, target, upVector ) {
  var zaxis = target.clone();
  zaxis.sub(position);
  zaxis.normalize();

  var xaxis = new Vector3();
  xaxis.crossVectors(upVector, zaxis);
  xaxis.normalize();

  var yaxis = new Vector3();
  yaxis.crossVectors(zaxis, xaxis);

  var mat = new Matrix4();

  mat.m[0] = xaxis.x();
  mat.m[1] = yaxis.x();
  mat.m[2] = zaxis.x();
  mat.m[3] = 0;

  mat.m[4] = xaxis.y();
  mat.m[5] = yaxis.y();
  mat.m[6] = zaxis.y();
  mat.m[7] = 0;

  mat.m[8] = xaxis.z();
  mat.m[9] = yaxis.z();
  mat.m[10] = zaxis.z();
  mat.m[11] = 0;

  mat.m[12] = -xaxis.dotProduct(position);
  mat.m[13] = -yaxis.dotProduct(position);
  mat.m[14] = -zaxis.dotProduct(position);
  mat.m[15] = 1;

  return mat;
};

//////////////////////////////////////////////////////////////////////////
// TiRenderer , render main things
//////////////////////////////////////////////////////////////////////////
var renderer_instance = null;
function TiRenderer(canvas) {
  this._matrices = [];
  this._viewport = [];
  this._canvas = canvas;
  this._gl = null;
  
  this._common_parameters = {};
  this._ext_vao = null;
  this._ext_srgb = null;
  this._last_program_used = null;
  this._vertex_attribute_status = 0;
  this._last_render_state = {};
  
  // default textures
  this._default_tex2d = null;
  this._default_tex_normal = null;
  this._default_cube = null;
  this._spec_probe = null;
  this._diff_probe = null;
  this._brdf_lut = null;
  
  this.init();
  // API
  this.GetContext = function () {
    return this._gl;
  };
  
  renderer_instance = this;
};

TiRenderer.prototype = {
  constructor : TiRenderer,
  
  init : function () {
    var _canvas = this._canvas !== undefined ? this._canvas : document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' );
    this._canvas = _canvas;
    this._viewport[0] = 0;
    this._viewport[1] = 0; 
    this._viewport[2] = _canvas.clientWidth;
    this._viewport[3] = _canvas.clientHeight;
    _LOG._log("canvas created. [0, 0, " + this._viewport[2] + ", " + this._viewport[3] + "].");
    
    // Init web gl
    this._gl = null;
    try {
      var attributes = {
        alpha: false,
        depth: true,
        stencil: false,
        antialias: true,
        premultipliedAlpha: false,
        preserveDrawingBuffer: false
      };

      this._gl = _canvas.getContext( 'webgl2', attributes );
      if (this._gl == null) {
        this._gl = _canvas.getContext( 'webgl', attributes );
      }
      if (this._gl == null) {
        this._gl = _canvas.getContext( 'experimental-webgl', attributes );
      }

      if ( this._gl === null ) {
        if ( _canvas.getContext( 'webgl' ) !== null ) {
          throw 'Error creating WebGL context with your selected attributes.';
        } else {
          throw 'Error creating WebGL context.';
        }
      }

      // Some experimental-webgl implementations do not have getShaderPrecisionFormat
      if ( this._gl.getShaderPrecisionFormat === undefined ) {
        this._gl.getShaderPrecisionFormat = function () {
          return { 'rangeMin': 1, 'rangeMax': 1, 'precision': 1 };
        };
      }
      
      _LOG._log( "extensions : " + this._gl.getSupportedExtensions() );
      // enable web gl extensions
      _LOG._log( "OES_texture_float : " + this._gl.getExtension( 'OES_texture_float' ) );
      _LOG._log( "OES_texture_float_linear : " + this._gl.getExtension( 'OES_texture_float_linear' ) );
      _LOG._log( "EXT_shader_texture_lod : " + this._gl.getExtension( 'EXT_shader_texture_lod' ) );
      this._ext_vao = this._gl.getExtension( 'OES_vertex_array_object' ) ;
      this._ext_srgb = this._gl.getExtension( 'EXT_sRGB' ) ;
      _LOG._log( "EXT_sRGB : " + this._ext_srgb);

      _canvas.addEventListener( 'webglcontextlost', this.onContextLost, false );

    } catch ( error ) {
      _LOG._error( 'Error: renderer - ' + error );
    }
    
    // init render states
    this.ApplyRenderState( null );
    
    // clear settings
    this._gl.clearColor(0.8, 0.8, 0.8, 1);
    this._gl.clearDepth(1.0);
    this._gl.clearStencil(0);
    
    // init matrices
    for (var m = 0 ; m < ETS_COUNT ; ++ m) {
      this._matrices[m] = new Matrix4();
    }
    
    // init common parameters
    this.RegisterCommonParameter("WVP", this._matrices[ETS_WVP]);
    this.RegisterCommonParameter("VP", this._matrices[ETS_VP]);
    this.RegisterCommonParameter("World", this._matrices[ETS_WORLD]);
    this.RegisterCommonParameter("WorldIT", this._matrices[ETS_WORLDIT]);
    this.RegisterCommonParameter("LWVP", this._matrices[ETS_LWVP]);
    this.RegisterCommonParameter("WV", this._matrices[ETS_WV]);
  },
  
  onContextLost : function ( event ) {
    //event.preventDefault();

    //resetGLState();
    //setDefaultGLState();

    //properties.clear();
  },
  
  ClearBuffers : function ( mask ) {
    var gl = this._gl;
    var gl_mask = 0;
    if ((mask & EFB_COLOR_MASK) != 0) {
      gl_mask |= gl.COLOR_BUFFER_BIT;
    }
    if ((mask & EFB_DEPTH_MASK) != 0) {
      // glClearDepth need glDepthMask be TRUE!
      if (!this._last_render_state.depth_write) {
        gl.depthMask( true );
      }
      gl_mask |= gl.DEPTH_BUFFER_BIT;
    }
    if ((mask & EFB_STENCIL_MASK) != 0) {
      gl_mask |= gl.STENCIL_BUFFER_BIT;
    }
    gl.clear(gl_mask);
    if (!this._last_render_state.depth_write) {
      gl.depthMask( false );
    }
  },
  
  SetViewport(x, y, x1, y1) {
    this._viewport[0] = x;
    this._viewport[1] = y;
    this._viewport[2] = x1;
    this._viewport[3] = y1;
  },
  
  SetTransform : function( state, trans ) {
    this._matrices[state].copy(trans);
    if ( state == ETS_WORLD ) {
      this._matrices[ETS_WVP].multiplyMatrices(this._matrices[ETS_POST], this._matrices[ETS_VP]);
      this._matrices[ETS_WVP].multiplyMatrices(this._matrices[ETS_WVP], this._matrices[ETS_WORLD]);
    }
  },
  
  QueryTransform : function( state ) {
    if (state == ETS_LWVP) {
      this._matrices[ETS_LWVP].multiplyMatrices(this._matrices[ETS_LVP], this._matrices[ETS_WORLD]);
    }
    else if (state == ETS_WV) {
      this._matrices[ETS_WV].multiplyMatrices(this._matrices[ETS_VIEW], this._matrices[ETS_WORLD]);
    }
    else if (state == ETS_WORLDIT) {
      this._matrices[ETS_WORLDIT].copy(this._matrices[ETS_WORLD]);
      this._matrices[ETS_WORLDIT].setTranslation(0,0,0);
    }
  },
  
  DrawMeshBuffer : function( mb, mt ) {
    var gl = this._gl;
    // Setup vao
    if ((mb._mesh_flag & EMBF_HARDWARE_BUFFER) != 0) {
      if ((mb._mesh_flag & EMBF_HW_BUFFER_DIRTY) != 0) {
        mb.BindHardwardbuffer();
      }
      
      if (this._ext_vao != null) {
        this._ext_vao.bindVertexArrayOES( mb._vao );
      } else {
        gl.bindBuffer( gl.ARRAY_BUFFER, mb._vertex_handle );
        gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, mb._index_handle );
        this.SetupMesh( gl, mb );
      }
    } else {
      _LOG._error(" non-vbo not supported! ");
      return;
    }

    var technique = mt._current_tech;
    var program = technique._shader_program;

    {
      if (!program._compiled)
        technique.CompileProgram();

      if (this._last_program_used != program._program)
      {
        gl.useProgram( program._program );
        this._last_program_used  = program._program;
      }

      // apply common parameter
      program.ApplyCommonParameter();

      // apply custom parameter
      mt.ApplyParameters();

      // apply lights
      //material->ApplyLights(current_pass);

      // apply render state
      this.ApplyRenderState(program._render_state);
      
      // Render triangles
      //if (instance_count > 0)
      //{
      //  if (pMB_GL->IsHardwareBuffer())
      //  {
      //    GL_CHECK_ERROR(GlDrawElementsInstanced(pMB_GL->GetPrimitiveType(), pMB_GL->GetIndicesCount(), k_gl_index_type[pMB_GL->GetIndexType()], 0, instance_count));
      //  }
      //  else
      //  {
      //    GL_CHECK_ERROR(GlDrawElementsInstanced(pMB_GL->GetPrimitiveType(), pMB_GL->GetIndicesCount(), k_gl_index_type[pMB_GL->GetIndexType()], pMB_GL->GetPSData(), instance_count));
      //  }
      //}
      //else
      //{
        var k_gl_index_type = [
          gl.UNSIGNED_SHORT,
          gl.UNSIGNED_INT,
        ];
        gl.drawElements( gl.TRIANGLES, 
                 mb._ps_data_count, 
                 k_gl_index_type[mb._index_type], 
                 0 );
      //  if (pMB_GL->IsHardwareBuffer())
      //  {
      //    GL_CHECK_ERROR(glDrawElements(pMB_GL->GetPrimitiveType(), pMB_GL->GetIndicesCount(), k_gl_index_type[pMB_GL->GetIndexType()], 0));
      //  }
      //  else
      //  {
      //    GL_CHECK_ERROR(glDrawElements(pMB_GL->GetPrimitiveType(), pMB_GL->GetIndicesCount(), k_gl_index_type[pMB_GL->GetIndexType()], pMB_GL->GetPSData()));
      //  }
      //}
      //Statistics.Triangles += pMB_GL->GetIndicesCount() / 3;
      //Statistics.DrawCalls ++;
    }
    if ((mb._mesh_flag & EMBF_HARDWARE_BUFFER) != 0) {
      if (this._ext_vao != null)
      {
        // unbind vao
        this._ext_vao.bindVertexArrayOES( null );
      }
      else
      {
        // unbind vbo
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      }
    }
  },
  
  SetupMesh : function( gl, mb ) {
    var base_pointer = 0;
    
    base_pointer  = SetupVertexAttrib(gl, mb, ESSI_POSITION, base_pointer);
    base_pointer  = SetupVertexAttrib(gl, mb, ESSI_NORMAL, base_pointer);
    base_pointer  = SetupVertexAttrib(gl, mb, ESSI_COLOR, base_pointer);
    base_pointer  = SetupVertexAttrib(gl, mb, ESSI_TEXCOORD0, base_pointer);
    base_pointer  = SetupVertexAttrib(gl, mb, ESSI_TEXCOORD1, base_pointer);
    base_pointer  = SetupVertexAttrib(gl, mb, ESSI_TANGENT, base_pointer);
    base_pointer  = SetupVertexAttrib(gl, mb, ESSI_BLENDINDEX, base_pointer);
    base_pointer  = SetupVertexAttrib(gl, mb, ESSI_BLENDWEIGHT, base_pointer);
  },

  SetupVertexAttrib : function( gl, mb, stream_index, base_pointer) {
    var hasVertexAttrib  = (mb._vs_format & (1 << stream_index)) != 0;
    if (hasVertexAttrib)
    {
      gl.vertexAttribPointer( stream_index,
                  k_vertex_attrib_component[stream_index],
                  gl.FLOAT,
                  false,
                  mb._stride,
                  base_pointer );
                  
      base_pointer += k_vertex_attrib_size[stream_index];
    }
    this.CheckVertexAttribStatus(gl, stream_index, hasVertexAttrib);
    return base_pointer;
  },
  
  CheckVertexAttribStatus : function( gl, stream_index, enable) {
    if (enable)
    {
      if ((this._vertex_attribute_status & (1 << stream_index)) == 0)
      {
        gl.enableVertexAttribArray( stream_index );
        this._vertex_attribute_status |= (1 << stream_index);
      }
    }
    else
    {
      if ((this._vertex_attribute_status & (1 << stream_index)) != 0)
      {
        gl.disableVertexAttribArray( stream_index );
        this._vertex_attribute_status &= ~(1 << stream_index);
      }
    }
  },
  
  RegisterCommonParameter : function( name, ref ) {
    this._common_parameters[name] = ref;
  },
  
  IsCommonParameter : function( name ) {
    return (name in this._common_parameters);
  },
  
  GetCommonParameter : function( name ) {
    return this._common_parameters[name];
  },
  
  ApplyRenderState : function( render_state ) {
    var gl = this._gl;
    if (render_state == null)
    {
      render_state = this._last_render_state;
      // reset all renderstate
      gl.enable(gl.CULL_FACE);
      render_state.cull = true;
      
      gl.frontFace( gl.CCW );
      gl.cullFace( gl.BACK );
      
      // depth mode
      gl.depthMask( true );
      render_state.depth_write = true;

      // depth test mode
      gl.enable(gl.DEPTH_TEST);
      render_state.depth_test = true;
      
      gl.depthFunc( gl.LESS );
      render_state.depth_func = ECF_LESS;
      
      gl.disable( gl.STENCIL_TEST );
      
      gl.disable( gl.BLEND );
      render_state.blend = false;
      
      gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
      render_state.blend_src = EBF_SRC_ALPHA;
      render_state.blend_dest = EBF_ONE_MINUS_SRC_ALPHA;
    }
    else
    {
      var last_state = this._last_render_state;
      
      // cull
      if (render_state.cull != last_state.cull) {        
        if (render_state.cull) {
          gl.enable(gl.CULL_FACE);
        } else {
          gl.disable(gl.CULL_FACE);
        }
        last_state.cull = render_state.cull;
      }
      
      // depth write
      if (render_state.depth_write != last_state.depth_write) {  
        gl.depthMask( render_state.depth_write );
        last_state.depth_write = render_state.depth_write;
      }

      // depth test mode
      if (render_state.depth_test != last_state.depth_test) {        
        if (render_state.depth_test) {
          gl.enable(gl.DEPTH_TEST);
        } else {
          gl.disable(gl.DEPTH_TEST);
        }
        last_state.depth_test = render_state.depth_test;
      }
      var k_gl_depth_func_map = [
        0,
        gl.NEVER,    //ECF_NEVER
        gl.LESS,    //ECF_LESS
        gl.LEQUAL,    //ECF_LESS_EQUAL
        gl.EQUAL,    //ECF_EQUAL
        gl.GREATER,    //ECF_GREATER
        gl.NOTEQUAL,  //ECF_NOT_EQUAL
        gl.GEQUAL,    //ECF_GREATER_EQUAL
        gl.ALWAYS,    //ECF_ALWAYS
      ];
      if (render_state.depth_func != last_state.depth_func)
      {
        gl.depthFunc( k_gl_depth_func_map[ render_state.depth_func ] );
        last_state.depth_func = render_state.depth_func;
      }

      // blend mode
      if (render_state.blend != last_state.blend) {        
        if (render_state.blend) {
          gl.enable(gl.BLEND);
        } else {
          gl.disable(gl.BLEND);
        }
        last_state.blend = render_state.blend;
      }
      
      var k_gl_blend_func_map = [
        gl.ZERO,            //EBF_ZERO, 
        gl.ONE,              //EBF_ONE, 
        gl.SRC_COLOR,          //EBF_SRC_COLOR, 
        gl.ONE_MINUS_SRC_COLOR,      //EBF_ONE_MINUS_SRC_COLOR, 
        gl.DST_COLOR,          //EBF_DEST_COLOR, 
        gl.ONE_MINUS_DST_COLOR,      //EBF_ONE_MINUS_DEST_COLOR,
        gl.SRC_ALPHA,          //EBF_SRC_ALPHA, 
        gl.ONE_MINUS_SRC_ALPHA,      //EBF_ONE_MINUS_SRC_ALPHA, 
        gl.DST_ALPHA,          //EBF_DST_ALPHA, 
        gl.ONE_MINUS_DST_ALPHA,      //EBF_ONE_MINUS_DST_ALPHA, 
        gl.CONSTANT_COLOR,        //EBF_CONSTANT_COLOR,
        gl.ONE_MINUS_CONSTANT_COLOR,  //EBF_ONE_MINUS_CONSTANT_COLOR, 
        gl.CONSTANT_ALPHA,        //EBF_CONSTANT_ALPHA, 
        gl.ONE_MINUS_CONSTANT_ALPHA,  //EBF_ONE_MINUS_CONSTANT_ALPHA, 
        gl.SRC_ALPHA_SATURATE,      //EBF_SRC_ALPHA_SATURATE
      ];
      if (render_state.blend_src != last_state.blend_src ||
        render_state.blend_dest != last_state.blend_dest) {
        
        gl.blendFunc( k_gl_blend_func_map[render_state.blend_src], k_gl_blend_func_map[render_state.blend_dest] );
        last_state.blend_src = render_state.blend_src;
        last_state.blend_dest = render_state.blend_dest;
      }
    }
  },
  
  BindTexture : function ( pass, tex ) {
    var gl = this.GetContext();
    gl.activeTexture( gl.TEXTURE0 + pass );
    gl.bindTexture( gl.TEXTURE_2D, tex._gl_tex );
  },
  
  BindTextureCube : function ( pass, tex_cube ) {
    var gl = this.GetContext();
    gl.activeTexture( gl.TEXTURE0 + pass );
    gl.bindTexture( gl.TEXTURE_CUBE_MAP, tex_cube._gl_tex );
  },

  LoadDefaultTextures : function () {
    if (this._default_tex2d == null) {
      this._default_tex2d = new TiTexture();
    }
    if (this._default_tex_normal == null) {
      this._default_tex_normal = new TiTexture();
    }
    if (this._default_cube == null) {
      this._default_cube = new TiTextureCube();
    }

    this.LoadBrdfLut( "/tex/env_default_brdf_lut.dds" );
    this.LoadDiffProbe( "/tex/env_default_diff.thdr.gz" );
    this.LoadSpecProbe( "/tex/env_default_spec.thdr.gz" );
  },
  
  LoadBrdfLut : function ( url ) {
    if (this._brdf_lut == null) {
      this._brdf_lut = new TiTexture();
    }
    
    this._brdf_lut.Load( url );
  },
  
  LoadSpecProbe : function ( url ) {
    if (this._spec_probe == null) {
      this._spec_probe = new TiTextureCube();
    }
    
    this._spec_probe.Load( url );
  },
  
  LoadDiffProbe : function ( url ) {
    if (this._diff_probe == null) {
      this._diff_probe = new TiTextureCube();
    }
    
    this._diff_probe.Load( url );
  },
};
//////////////////////////////////////////////////////////////////////////
// TiEnvironment , environment
//////////////////////////////////////////////////////////////////////////
function TiEnvironment() {
  this._main_light_color = new SColor4();
  this._main_light_ambient = new SColor4();
  this._main_light_intensity = 1.0;
  this._main_light_direction = new Vector3(0.0, -3.0, 3.0);
  this._main_light_direction.normalize();
  
  this._fog_color = new SColor4();
  this._fog_range = [];
};

TiEnvironment.prototype = {
  constructor : TiEnvironment,
};
//////////////////////////////////////////////////////////////////////////
// TiRenderStage , perform scene tranverse
//////////////////////////////////////////////////////////////////////////
function TiRenderStage() {
  this._flag = 0;
  this._render_list = [];
  
  this._camera = new TiNodeCamera();
  this._environment = null;
};

TiRenderStage.prototype = {
  constructor : TiRenderStage,
  
  GetActiveCamera : function() {
    return this._camera;
  },
  
  AddToList : function( list_type, _node ) {
    var list = this._render_list[list_type];
    if (list == null) {
      this._render_list[list_type] = [];
      list = this._render_list[list_type];
    }
    
    // check if this node already in this list
    for (var i = 0 ; i < list.length ; i ++ ) {
      if (list[i] == _node) {
        return;
      }
    }
    list.push(_node);
  },
  
  UpdateAll : function( dt, root ) {
  },
  
  RegisterElements : function ( root ) {
    if (this._camera != null) {
      this._camera.RegisterElement();
    }
    
    root.RegisterElement();
  },
  
  DrawRenderList : function ( list_type ) {
    var list = this._render_list[list_type];
    for (var i = 0 ; i < list.length ; i ++ ) {
      var _node = list[i];
      _node.Render(renderer_instance);
    }
  },
  
  DrawAll : function( root ) {
    if ( root == null)
      return;

    for (var i = 0 ; i < ESLT_COUNT ; i ++)
    {
      this._render_list[i] = [];
    }
    
    this.RegisterElements(root);
    
    this.DrawRenderList(ESLT_SKYBOX);
    this.DrawRenderList(ESLT_SOLID);
    this.DrawTransparent();
  },

  DrawTransparent : function() {
    var renderlist = this._render_list[ESLT_TRANSPARENT];

    // sort by distance
    var cam_pos = this._camera._relative_position;
    renderlist.sort(function(a, b) {
      var dis_a = cam_pos.clone().sub(a._relative_position).getLengthSQ();
      var dis_b = cam_pos.clone().sub(b._relative_position).getLengthSQ();
      return dis_a > dis_b;
    });

    this.DrawRenderList(ESLT_TRANSPARENT);
  },
};

//////////////////////////////////////////////////////////////////////////
// XHRLoader , XMLHttpRequest loader, load resources from server
//////////////////////////////////////////////////////////////////////////
function XHRLoader() {
}

XHRLoader.prototype = {
  load: function ( url, onLoad, onProgress, onError ) {
    if ( this.path !== undefined ) url = this.path + url;

    var scope = this;

    var request = new XMLHttpRequest();
    request.open( 'GET', url, true );

    request.addEventListener( 'load', function ( event ) {
      var response = event.target.response;

      if ( this.status === 200 ) {
        if ( onLoad ) onLoad( response );
      } else if ( this.status === 0 ) {
        // Some browsers return HTTP Status 0 when using non-http protocol
        // e.g. 'file://' or 'data://'. Handle as success.
        _LOG._warn( 'HTTP Status 0 received.' );
        if ( onLoad ) onLoad( response );
      } else {
        if ( onError ) onError( event );
      }
    }, false );

    if ( onProgress !== undefined ) {
      request.addEventListener( 'progress', function ( event ) {
        onProgress( event );
      }, false );
    }

    request.addEventListener( 'error', function ( event ) {
      if ( onError ) onError( event );
    }, false );

    if ( this.responseType !== undefined ) request.responseType = this.responseType;
    if ( this.withCredentials !== undefined ) request.withCredentials = this.withCredentials;

    if ( request.overrideMimeType ) request.overrideMimeType( 'text/plain' );

    request.send( null );

    return request;
  },

  setPath: function ( value ) {
    this.path = value;
    return this;
  },

  setResponseType: function ( value ) {
    this.responseType = value;
    return this;
  },

  setWithCredentials: function ( value ) {
    this.withCredentials = value;
    return this;
  }
};
//////////////////////////////////////////////////////////////////////////
// TiShader , shader
//////////////////////////////////////////////////////////////////////////

function TiShaderProgram(program_json) {
  this._flag = 0;
  this._compiled = false;
  this._program = null;
  this._render_state = program_json.render_state;
  
  this._uniforms = {};
  
  this._vsh = program_json.vsh;
  this._fsh = program_json.fsh;
  
  this.CompileProgram();
};

TiShaderProgram.prototype = {
  constructor : TiShaderProgram,
  
  CompileProgram : function () {  
    var gl = renderer_instance.GetContext();
    
    if (this._compiled) {
      return true;
    }

    var vsShader = 0;
    var fsShader = 0;

    this._program = gl.createProgram();

    vsShader = this.CompileShader(this._vsh, gl.VERTEX_SHADER);
    if (vsShader == null)
    {
      this.CleanUp();
      return false;
    }
    this._vsh = "";

    fsShader = this.CompileShader(this._fsh, gl.FRAGMENT_SHADER);
    if (fsShader == null)
    {
      this.CleanUp();
      return false;
    }
    this._fsh = "";
    
    gl.attachShader( this._program, vsShader );
    gl.attachShader( this._program, fsShader );
      
    var k_shader_segment_name = [
      "position",    //EVSSEG_POSITION    = 1,
      "normal",    //EVSSEG_NORMAL      = EVSSEG_POSITION << 1,
      "color",    //EVSSEG_COLOR      = EVSSEG_NORMAL << 1,
      "texcoord0",  //EVSSEG_TEXCOORD0    = EVSSEG_COLOR<< 1,
      "texcoord1",  //EVSSEG_TEXCOORD1    = EVSSEG_TEXCOORD0 << 1,
      "tangent",    //EVSSEG_TANGENT    = EVSSEG_TEXCOORD1 << 1,
      "blendindex",  //EVSSEG_BLENDINDEX    = EVSSEG_TANGENT << 1,
      "blendweight",  //EVSSEG_BLENDWEIGHT  = EVSSEG_BLENDINDEX << 1,
    ];
    
    // Bind attribute locations
    // This needs to be done prior to linking
    for (var i = ESSI_POSITION; i < ESSI_TOTAL; i++)
    {
      gl.bindAttribLocation(this._program, i, k_shader_segment_name[i]);
    }

    gl.linkProgram( this._program );
    
    if ( gl.getProgramParameter( this._program, gl.LINK_STATUS ) === false ) {
      _LOG._error("  Error : can not link program.");    
      gl.deleteShader(vsShader);
      gl.deleteShader(fsShader);
      this.CleanUp();
      return false;
    }
    
    function ConvertGlUniformType( gl_type ) {
      if (gl_type == gl.FLOAT_VEC4)
        return EUF_VEC4;
      else if (gl_type == gl.FLOAT_VEC3)
        return EUF_VEC3;
      else if (gl_type == gl.FLOAT_VEC2)
        return EUF_VEC2;
      else if (gl_type == gl.FLOAT_MAT4)
        return EUF_MAT4;
      else if (gl_type == gl.FLOAT)
        return EUF_FLOAT;
      else if (gl_type == gl.INT)
        return EUF_INT;
      else if (gl_type == gl.SAMPLER_2D)
        return EUF_SAMPLER2D;
      else if (gl_type == gl.SAMPLER_CUBE)
        return EUF_SAMPLERCUBE;
      else if (gl_type == gl.INT_VEC4)
        return EUF_INT4;
      else if (gl_type == gl.FLOAT_MAT2)
        return EUF_MAT2;
      
      return EUF_VEC4;
    };
    
    // Get uniform locations
    var uniformCount = 0;
    uniformCount = gl.getProgramParameter( this._program, gl.ACTIVE_UNIFORMS );
    
    for (var i = 0; i < uniformCount; i ++)
    {
      var u_info = gl.getActiveUniform( this._program, i );
      var uniform_name = u_info.name;
      var loc = gl.getUniformLocation( this._program, uniform_name );
      
      var info = {};
      info.Name = uniform_name;
      info.IsCommonParameter = renderer_instance.IsCommonParameter(uniform_name);
      info.Type = ConvertGlUniformType(u_info.type);
      info.Loc = loc;
      this._uniforms[uniform_name] = info;
    }

    // Release vertex and fragment shaders
    if (vsShader != 0) {
      gl.deleteShader(vsShader);
      vsShader = 0;
    }
    if (fsShader != 0) {
      gl.deleteShader(fsShader);
      fsShader = 0;
    }

    this._compiled = true;
    return true;
  },
  
  CompileShader : function(source, type) {
    var gl = renderer_instance.GetContext();
    
    var s_shader_code = [
      "",
      // flags
      "",
      // shader code
      "",
    ];
    var s_shader_precision = [
      "#extension GL_EXT_shader_texture_lod : enable\nprecision highp float;\n",
      "#extension GL_EXT_shader_texture_lod : enable\nprecision mediump float;\n",
    ];
    
    var performance = 0;
    var compile_flags = "";

    var shader_source = s_shader_precision[performance];
    //shader_source += compile_flags;
    shader_source += source;
    
    var shader = gl.createShader(type);
    gl.shaderSource(shader, shader_source);
    gl.compileShader(shader);

    var info = gl.getShaderInfoLog( shader );
    if ( info != "" ) {
      _LOG._error("  Warning : gl.getShaderInfoLog()" + (type === gl.VERTEX_SHADER ? "vertex " : "fragment ") + info);
    }
    
    if ( gl.getShaderParameter( shader, gl.COMPILE_STATUS ) === false ) {
      _LOG._error("  Error : can not compile shader.");      
      gl.deleteShader( shader );
      return null;
    }
    
    return shader;
  },
  
  CleanUp : function () {
    if (this._program != null) {
      renderer_instance.GetContext().deleteProgram( this._program );
    }
  },
  
  GetLocationByName : function( name ) {
    if (name in this._uniforms) {
      return this._uniforms[ name ].Loc;
    }
    else {
      return undefined;
    }
  },
  
  SetParameter : function ( loc, param, type, count ) {
    var gl = renderer_instance.GetContext();

    if (type == EUF_VEC4)
    {
      gl.uniform4fv(loc, param);
    }
    else if (type == EUF_MAT4)
    {
      gl.uniformMatrix4fv(loc, false, param.m);
    }
    else if (type == EUF_MAT2)
    {
      gl.uniformMatrix2fv(loc, false, param.m);
    }
    else if (type == EUF_VEC3)
    {
      gl.uniform3fv(loc, param.v);
    }
    else if (type == EUF_VEC2)
    {
      gl.uniform2fv(loc, param);
    }
    else if (type == EUF_FLOAT)
    {
      gl.uniform1fv(loc, param);
    }
    else if (type == EUF_SAMPLER2D)
    {
      gl.uniform1i(loc, param);
    }
    else if (type == EUF_SAMPLERCUBE)
    {
      gl.uniform1i(loc, param);
    }
    else if (type == EUF_INT)
    {
      gl.uniform1i(loc, param);
    }
    else if (type == EUF_INT4)
    {
      gl.uniform4iv(loc, param);
    }
    else
    {
      _LOG._error(" Error : unknown uniform type. " + type);
    }
  },
  
  ApplyCommonParameter : function () {
    var renderer = renderer_instance;
    if ("WorldIT" in this._uniforms)
    {
      renderer.QueryTransform(ETS_WORLDIT);
    }
    if ("LWVP" in this._uniforms)
    {
      renderer.QueryTransform(ETS_LWVP);
    }
    
    for (var name in this._uniforms ) {
      var uniform = this._uniforms[name];
      if (uniform.IsCommonParameter) {
        this.SetParameter(uniform.Loc, renderer.GetCommonParameter(uniform.Name), uniform.Type, 1);
      }
    }
  },
};


function TiShaderTechnique(name, tech_json) {
  this._tech_name = name;
  this._shader_program = new TiShaderProgram(tech_json);
};

TiShaderTechnique.prototype = {
  constructor : TiShaderTechnique,
};

function TiShader() {
  this._option = 0;
  this._techniques = [];
};

TiShader.prototype = {
  constructor : TiShader,
  
  LoadFromJson : function( json ) {
    this._techniques = [];
    for (var json_tech in json) {
      var tech = new TiShaderTechnique(json_tech, json[json_tech]);
      this._techniques.push(tech);
    }
  },
  
  GetTechnique : function( tech_name ) {
    for (var t = 0 ; t < this._techniques.length ; t ++ ) {
      if (this._techniques[t]._tech_name == tech_name) {
        return this._techniques[t];
      }
    }
    return null;
  },

  GetDefaultTechnique : function() {
    if (this._techniques.length > 0) {
      return this._techniques[0];
    }
    return null;
  }
};
//////////////////////////////////////////////////////////////////////////
// TiMaterial , material
//////////////////////////////////////////////////////////////////////////
function TiMaterial( shader ) {
  this._parameters = [];
  this._shader = shader;
  this._current_tech = null;
  this.AddDefaultParameters();
};

TiMaterial.prototype = {
  constructor : TiMaterial,

  AddDefaultParameters : function() {
    // go through each techs
    for (var t in this._shader._techniques ) {
      var tech = this._shader._techniques[t];
      var prog = tech._shader_program;

      // add default parameter for each uniform
      for (var u in prog._uniforms) {
        var uniform = prog._uniforms[u];
        if (uniform.IsCommonParameter) {
          continue;
        }
        var uniform_type = uniform.Type;
        var uniform_name = uniform.Name;
        if (uniform_type == EUF_SAMPLER2D) {
          if (uniform_name.indexOf('normalmap') > 0 || uniform_name.indexOf('normal_map') > 0) {
            this.AddParameter(uniform_name, uniform_type, renderer_instance._default_tex_normal);
          } else {
            this.AddParameter(uniform_name, uniform_type, renderer_instance._default_tex2d);
          }
        }
        else if (uniform_type == EUF_SAMPLERCUBE) {
          this.AddParameter(uniform_name, uniform_type, renderer_instance._default_cube);
        }
        else if (uniform_type == EUF_VEC4) {
          var vec4 = [0,0,0,1];
          this.AddParameter(uniform_name, uniform_type, vec4);
        }
        else if (uniform_type == EUF_INT) {
          var value = 0;
          this.AddParameter(uniform_name, uniform_type, value);
        }
        else if (uniform_type == EUF_FLOAT) {
          var value = 0;
          this.AddParameter(uniform_name, uniform_type, value);
        }
        else if (uniform_type == EUF_VEC3) {
          var vec3 = [0, 0, 0];
          this.AddParameter(uniform_name, uniform_type, vec3);
        }
        else if (uniform_type == EUF_VEC2) {
          var vec2 = [0, 0];
          this.AddParameter(uniform_name, uniform_type, vec2);
        }
        else {
          alert(0);
        }
      }

    }
  },
  
  AddParameter : function( name, type, value ) {
    var param = {
      _name : name,
      _type : type,
      _value : value,
      _loc : null,
    };
    this._parameters.push( param );
  },
  
  SetTechnique : function( tech_name ) {
    this._current_tech = this._shader.GetTechnique(tech_name);
    if (this._current_tech == null) {
      _LOG._warn("Can not find technique [" + tech_name + "]. Use default tech");
      this._current_tech = this._shader.GetDefaultTechnique();
    }
  },
  
  ApplyParameters : function( ) {
    var tex_pass = 0;
    var program = this._current_tech._shader_program;
    for (var i = 0 ; i < this._parameters.length ; i ++ ) {
      var param = this._parameters[i];
      
      if (this._current_tech != null) {
        if (param._loc == null) {
          param._loc = this._current_tech._shader_program.GetLocationByName(param._name);
        }
        if (param._loc == undefined) {
          continue;
        }
        if (param._type == EUF_SAMPLER2D) {
          renderer_instance.BindTexture(tex_pass, param._value);
          program.SetParameter( param._loc, tex_pass, param._type, 1);
          tex_pass ++;
        }
        else if (param._type == EUF_SAMPLERCUBE) {
          renderer_instance.BindTextureCube(tex_pass, param._value);
          program.SetParameter( param._loc, tex_pass, param._type, 1);
          tex_pass ++;
        }
        else {
          program.SetParameter( param._loc, param._value, param._type, 1 );
        }
      }
    }
  }
};
//////////////////////////////////////////////////////////////////////////
// TiMeshBuffer , mesh buffer
//////////////////////////////////////////////////////////////////////////
function TiMeshBuffer() {
  this._usage = 0;
  this._bbox = [0,0,0,0,0,0];
  this._mesh_flag = EMBF_HARDWARE_BUFFER;
  this._vs_data = null;
  this._vs_data_count = 0;
  this._index_type = EIT_16BIT;
  this._ps_data = null;
  this._ps_data_count = 0;
  this._vs_format = 0;
  this._stride = 0;
  
  // gl things
  this._vao = 0;
  this._vertex_handle = 0;
  this._index_handle = 0;
};

TiMeshBuffer.prototype = {
  constructor : TiMeshBuffer,
  
  SetVertexStreamData : function ( data, format, vertex_data_offset, vertex_count, index_type, index_data_offset, index_count ) {
    this._vs_format = format;
    this._vs_data_count = vertex_count;
    
    this._index_type = index_type;
    this._ps_data_count = index_count;
    
    var k_each_segment_size = [
                  12,  //EVSSEG_POSITION    = 1,
                  12,  //EVSSEG_NORMAL    = EVSSEG_POSITION << 1,
                  16,  //EVSSEG_COLOR    = EVSSEG_NORMAL << 1,
                  8,  //EVSSEG_TEXCOORD0  = EVSSEG_COLOR << 1,
                  8,  //EVSSEG_TEXCOORD1  = EVSSEG_TEXCOORD0 << 1,
                  12,  //EVSSEG_TANGENT  = EVSSEG_TEXCOORD1 << 1,
                  16,  //EVSSEG_BLENDINDEX  = EVSSEG_TANGENT << 1,
                  16,  //EVSSEG_BLENDWEIGHT  = EVSSEG_BLENDINDEX << 1,
                  ];
    
    // calc stride
    this._stride = 0;
    var seg = 1;
    var i = 0;
    for (seg = 1, i = 0 ; seg <= EVSSEG_TOTAL ; seg <<= 1, i ++)
    {
      if ((format & seg) != 0)
      {
        this._stride += k_each_segment_size[i];
      }
    }
    
    var float_per_vertex = this._stride / 4;
    this._vs_data = new Float32Array(data, vertex_data_offset, vertex_count * float_per_vertex);
    if (index_type == EIT_16BIT) {
      this._ps_data = new Uint16Array(data, index_data_offset, index_count);
    } else {
      this._ps_data = new Uint32Array(data, index_data_offset, index_count);
    }
    
    this._mesh_flag |= EMBF_HW_BUFFER_DIRTY;
  },
  
  BindHardwardbuffer : function () {
    if ((this._mesh_flag & EMBF_HARDWARE_BUFFER) != 0 && (this._mesh_flag & EMBF_HW_BUFFER_DIRTY) != 0)
    {
      if (renderer_instance._ext_vao != null)
      {
        // Create VAO
        if (this._vao == 0) {
                  this._vao = renderer_instance._ext_vao.createVertexArrayOES();
        }
        renderer_instance._ext_vao.bindVertexArrayOES(this._vao);
      }

      // Create VBO
      var gl = renderer_instance.GetContext();
      if (this._vertex_handle == 0) {
        this._vertex_handle = gl.createBuffer();
      }
      gl.bindBuffer( gl.ARRAY_BUFFER, this._vertex_handle );
      gl.bufferData( gl.ARRAY_BUFFER, this._vs_data, gl.STATIC_DRAW );
      
      if (this._index_handle == 0) {
        this._index_handle = gl.createBuffer();
      }
      gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, this._index_handle );
      gl.bufferData( gl.ELEMENT_ARRAY_BUFFER, this._ps_data, gl.STATIC_DRAW );

      // bind attribute to vao
      var base_pointer = 0;
      base_pointer = this.BindVertexAttrib(gl, ESSI_POSITION, base_pointer);
      base_pointer = this.BindVertexAttrib(gl, ESSI_NORMAL, base_pointer);
      base_pointer = this.BindVertexAttrib(gl, ESSI_COLOR, base_pointer);
      base_pointer = this.BindVertexAttrib(gl, ESSI_TEXCOORD0, base_pointer);
      base_pointer = this.BindVertexAttrib(gl, ESSI_TEXCOORD1, base_pointer);
      base_pointer = this.BindVertexAttrib(gl, ESSI_TANGENT, base_pointer);
      base_pointer = this.BindVertexAttrib(gl, ESSI_BLENDINDEX, base_pointer);
      base_pointer = this.BindVertexAttrib(gl, ESSI_BLENDWEIGHT, base_pointer);

      if (renderer_instance._ext_vao != null)
      {
        // unbind vao
        renderer_instance._ext_vao.bindVertexArrayOES(null);
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

      this._mesh_flag &= ~EMBF_HW_BUFFER_DIRTY;
    }
  },
  
  BindVertexAttrib : function( gl, stream_index, base_pointer ) {
    var hasVertexAttrib = (this._vs_format & (1 << stream_index)) != 0;
    if (hasVertexAttrib)
    {
      gl.enableVertexAttribArray( stream_index );
      
      gl.vertexAttribPointer( stream_index,
                  k_vertex_attrib_component[stream_index],
                  gl.FLOAT,
                  false,
                  this._stride,
                  base_pointer );
                  
      base_pointer += k_vertex_attrib_size[stream_index];
    }
    return base_pointer;
  },
};

//////////////////////////////////////////////////////////////////////////
// TiTexture , texture
//////////////////////////////////////////////////////////////////////////

TiImage = function () {
  this._w = 0;
  this._h = 0;
  this._format = EPF_UNKNOWN;
  
  this._faces = [];  // each face is a mipmap chain with format { "data": byteArray, "width": width, "height": height };
};

TiImage.prototype = {
  constructor : TiImage,
};

TiImageParserTHDR = function () {
};

TiImageParserTHDR.prototype = {
  constructor : TiImageParserTHDR,
    
  Parse : function ( buffer ) {
    if (!(buffer instanceof ArrayBuffer)) {
      _LOG._error("invalide buffer type");
    }
    var img = new TiImage();
    var header_len = 7;
    var header;
    header = new Int32Array( buffer, 0, header_len );
    var h_mark = 0;
    var h_version = 1;
    var h_w = 2;
    var h_h = 3;
    var h_mips = 4;
    var h_iscube = 5;
    var h_bits = 6;

    // Extract mipmaps buffers
    var isCubemap = header[ h_iscube ] != 0;
    var faces = isCubemap ? 6 : 1;
    img._faces = [];
    var width = header[ h_w ];
    var height = header[ h_h ];
    img._w = width;
    img._h = height;
    var bits = header[ h_bits ];
    img._format = bits == 32 ? EPF_RGBA32F : EPF_R8G8B8A8;
    var mipmapCount = header[ h_mips ];

    var dataOffset = 7 * 4;
    for ( var face = 0; face < faces; face ++ ) {
      var mipmaps = [];
      var dataLength = 0;
      var byteArray;
      width = header[h_w];
      height = header[h_h];
      for ( var i = 0; i < mipmapCount; i ++ ) {
        dataLength = width * height * 4;
        if (bits == 32) {
          byteArray = new Float32Array( buffer, dataOffset, dataLength );
          dataOffset += dataLength * 4;
        } else {
          byteArray = new Uint8Array( buffer, dataOffset, dataLength);
          dataOffset += dataLength;
        }

        var mipmap = { "data": byteArray, "width": width, "height": height };
        mipmaps.push( mipmap );

        width = Math.max( width >> 1, 1 );
        height = Math.max( height >> 1, 1 );
      }
      img._faces.push( mipmaps );
    }
    return img;
  },
};

TiImageParserDDS = function () {
};

TiImageParserDDS.prototype = {
  constructor : TiImageParserDDS,
    
  Parse : function ( buffer ) {

    var dds = new TiImage();
    //{ mipmaps: [], width: 0, height: 0, format: null, mipmapCount: 1 };

    // Adapted from @toji's DDS utils
    // https://github.com/toji/webgl-texture-utils/blob/master/texture-util/dds.js

    // All values and structures referenced from:
    // http://msdn.microsoft.com/en-us/library/bb943991.aspx/

    var DDS_MAGIC = 0x20534444;

    var DDSD_CAPS = 0x1,
      DDSD_HEIGHT = 0x2,
      DDSD_WIDTH = 0x4,
      DDSD_PITCH = 0x8,
      DDSD_PIXELFORMAT = 0x1000,
      DDSD_MIPMAPCOUNT = 0x20000,
      DDSD_LINEARSIZE = 0x80000,
      DDSD_DEPTH = 0x800000;

    var DDSCAPS_COMPLEX = 0x8,
      DDSCAPS_MIPMAP = 0x400000,
      DDSCAPS_TEXTURE = 0x1000;

    var DDSCAPS2_CUBEMAP = 0x200,
      DDSCAPS2_CUBEMAP_POSITIVEX = 0x400,
      DDSCAPS2_CUBEMAP_NEGATIVEX = 0x800,
      DDSCAPS2_CUBEMAP_POSITIVEY = 0x1000,
      DDSCAPS2_CUBEMAP_NEGATIVEY = 0x2000,
      DDSCAPS2_CUBEMAP_POSITIVEZ = 0x4000,
      DDSCAPS2_CUBEMAP_NEGATIVEZ = 0x8000,
      DDSCAPS2_VOLUME = 0x200000;

    var DDPF_ALPHAPIXELS = 0x1,
      DDPF_ALPHA = 0x2,
      DDPF_FOURCC = 0x4,
      DDPF_RGB = 0x40,
      DDPF_YUV = 0x200,
      DDPF_LUMINANCE = 0x20000;

    function fourCCToInt32( value ) {
      return value.charCodeAt( 0 ) +
        ( value.charCodeAt( 1 ) << 8 ) +
        ( value.charCodeAt( 2 ) << 16 ) +
        ( value.charCodeAt( 3 ) << 24 );
    }
    function fourCCToInt32_4( a, b, c, d ) {
      return a.charCodeAt( 0 ) +
        ( b.charCodeAt( 0 ) << 8 ) +
        ( c.charCodeAt( 0 ) << 16 ) +
        ( d.charCodeAt( 0 ) << 24 );
    }

    function int32ToFourCC( value ) {
      return String.fromCharCode(
        value & 0xff,
        ( value >> 8 ) & 0xff,
        ( value >> 16 ) & 0xff,
        ( value >> 24 ) & 0xff
      );
    }

    function loadARGBMip( buffer, dataOffset, format, width, height ) {
      if (format == EPF_RGBA32F) {
        var dataLength = width * height * 4;
        var byteArray = new Float32Array( buffer, dataOffset, dataLength );
        return byteArray;
      } else {
        var dataLength = width * height * 4;
        var srcBuffer = new Uint8Array( buffer, dataOffset, dataLength );
        var byteArray = new Uint8Array( dataLength );
        var dst = 0;
        var src = 0;
        for ( var y = 0; y < height; y ++ ) {
          for ( var x = 0; x < width; x ++ ) {
            var b = srcBuffer[ src ]; src ++;
            var g = srcBuffer[ src ]; src ++;
            var r = srcBuffer[ src ]; src ++;
            var a = srcBuffer[ src ]; src ++;
            byteArray[ dst ] = r; dst ++;  //r
            byteArray[ dst ] = g; dst ++;  //g
            byteArray[ dst ] = b; dst ++;  //b
            byteArray[ dst ] = a; dst ++;  //a
          }
        }
        return byteArray;
      }
    }

    var FOURCC_DXT1 = fourCCToInt32( "DXT1" );
    var FOURCC_DXT3 = fourCCToInt32( "DXT3" );
    var FOURCC_DXT5 = fourCCToInt32( "DXT5" );
    var FOURCC_ETC1 = fourCCToInt32( "ETC1" );
    var FOURCC_ABGR16F = fourCCToInt32_4( 'q', '\0', '\0', '\0' );
    var FOURCC_ABGR32F = fourCCToInt32_4( 't', '\0', '\0', '\0' );

    var headerLengthInt = 31; // The header length in 32 bit ints

    // Offsets into the header array
    var off_magic = 0;
    var off_size = 1;
    var off_flags = 2;
    var off_height = 3;
    var off_width = 4;
    var off_mipmapCount = 7;
    var off_pfFlags = 20;
    var off_pfFourCC = 21;
    var off_RGBBitCount = 22;
    var off_RBitMask = 23;
    var off_GBitMask = 24;
    var off_BBitMask = 25;
    var off_ABitMask = 26;
    var off_caps = 27;
    var off_caps2 = 28;
    var off_caps3 = 29;
    var off_caps4 = 30;

    // Parse header
    var header = new Int32Array( buffer, 0, headerLengthInt );

    if ( header[ off_magic ] !== DDS_MAGIC ) {
      console.error( 'TiImageParserDDS.Parse: Invalid magic number in DDS header.' );
      return dds;
    }

    if ( ! header[ off_pfFlags ] & DDPF_FOURCC ) {
      console.error( 'TiImageParserDDS.Parse: Unsupported format, must contain a FourCC code.' );
      return dds;
    }

    var blockBytes;
    var fourCC = header[ off_pfFourCC ];
    var isRGBAUncompressed = false;
    switch ( fourCC ) {
      //case FOURCC_DXT1:
      //  break;
      //case FOURCC_DXT3:
      //  break;
      //case FOURCC_DXT5:
      //  break;
      //case FOURCC_ETC1:
      //  break;
      case FOURCC_ABGR32F:
        isRGBAUncompressed = true;
        dds._format = EPF_RGBA32F;
        break;
      default:
        if ( header[ off_RGBBitCount ] === 32
          && header[ off_RBitMask ] & 0xff0000
          && header[ off_GBitMask ] & 0xff00
          && header[ off_BBitMask ] & 0xff
          && header[ off_ABitMask ] & 0xff000000  ) {

          isRGBAUncompressed = true;
          blockBytes = 64;
          dds._format = EPF_R8G8B8A8;
        } else {
          _LOG._error( 'TiImageParser.Parse: Unsupported FourCC code ', int32ToFourCC( fourCC ) );
          return dds;
        }
    }

    var mipmapCount = 1;

    if ( header[ off_flags ] & DDSD_MIPMAPCOUNT ) {
      mipmapCount = Math.max( 1, header[ off_mipmapCount ] );
    }

    var caps2 = header[ off_caps2 ];
    var isCubemap = caps2 & DDSCAPS2_CUBEMAP ? true : false;
    if ( isCubemap && (
      ! ( caps2 & DDSCAPS2_CUBEMAP_POSITIVEX ) ||
      ! ( caps2 & DDSCAPS2_CUBEMAP_NEGATIVEX ) ||
      ! ( caps2 & DDSCAPS2_CUBEMAP_POSITIVEY ) ||
      ! ( caps2 & DDSCAPS2_CUBEMAP_NEGATIVEY ) ||
      ! ( caps2 & DDSCAPS2_CUBEMAP_POSITIVEZ ) ||
      ! ( caps2 & DDSCAPS2_CUBEMAP_NEGATIVEZ )
      ) ) {

      _LOG._error( 'TiImageParser.Parse: Incomplete cubemap faces' );
      return dds;

    }

    dds._w = header[ off_width ];
    dds._h = header[ off_height ];

    var dataOffset = header[ off_size ] + 4;

    // Extract mipmaps buffers
    var faces = isCubemap ? 6 : 1;
    dds._faces = [];
    for ( var face = 0; face < faces; face ++ ) {

      var width = dds._w;
      var height = dds._h;

      var mipmaps = [];
      var dataLength = 0;
      var byteArray;
      for ( var i = 0; i < mipmapCount; i ++ ) {
        if ( isRGBAUncompressed ) {
          byteArray = loadARGBMip( buffer, dataOffset, dds._format, width, height );
          dataLength = byteArray.length * (dds._format == EPF_RGBA32F ? 4 : 1);
        } else {
          dataLength = Math.max( 4, width ) / 4 * Math.max( 4, height ) / 4 * blockBytes;
          byteArray = new Uint8Array( buffer, dataOffset, dataLength );
        }

        var mipmap = { "data": byteArray, "width": width, "height": height };
        mipmaps.push( mipmap );

        dataOffset += dataLength;

        width = Math.max( width >> 1, 1 );
        height = Math.max( height >> 1, 1 );
      }
      dds._faces.push( mipmaps );
    }
    return dds;
  },
};

function ImageLoader() {
};

ImageLoader.prototype = {
  constructor : ImageLoader,

  load: function ( url, onLoad, onProgress, onError ) {
    var scope = this;
    var image = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'img' );
    image.onload = function () {
      URL.revokeObjectURL( image.src );
      if ( onLoad ) 
        onLoad( image );
    };

    if ( url.indexOf( 'data:' ) === 0 ) {
      image.src = url;
    } else {
      var loader = new XHRLoader();
      loader.setPath( this.path );
      loader.setResponseType( 'blob' );
      loader.setWithCredentials( this.withCredentials );
      loader.load( url, function ( blob ) {
        image.src = URL.createObjectURL( blob );
      }, onProgress, onError );
    }
    return image;
  },

  setCrossOrigin: function ( value ) {
    this.crossOrigin = value;
    return this;
  },

  setWithCredentials: function ( value ) {
    this.withCredentials = value;
    return this;
  },

  setPath: function ( value ) {
    this.path = value;
    return this;
  },
};

function TiTexture(){
  this._w = 2;
  this._h = 2;
  
  this._wraps = ETC_REPEAT;
  this._wrapt = ETC_REPEAT;
  
  this._format = 0;
  this._source_image = null;
  this._need_update = false;
  this._srgb = false;
  this._flipy = false;

  this._url = "";  // for debug
  
  // gl things
  this._gl_tex = null;
  this.CreateEmpty();
};

TiTexture.prototype = {
  constructor : TiTexture,
  
  CreateEmpty : function() {
    // create an 2x2 gray color texture  
    var gl = renderer_instance.GetContext();
    if (this._gl_tex == null) {
      this._gl_tex = gl.createTexture();
    }
    gl.bindTexture( gl.TEXTURE_2D, this._gl_tex );
    
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT );

    var data = new Uint8Array( 4 * 4 ); // 2x2 with color 128 128 128 255
    for (var i = 0 ; i < 4 ; i ++ ) {
      data[i * 4 + 0] = 128;
      data[i * 4 + 1] = 128;
      data[i * 4 + 2] = 128;
      data[i * 4 + 3] = 255;
    };
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, 2, 2, 0, gl.RGBA, gl.UNSIGNED_BYTE, data );
    return true;
  },

  Load: function ( url, is_srgb, onProgress, onError ) {
    var texture = this;
    this._url = url;
    this._srgb = is_srgb;
    
    // jpeg, png files use image loader
    var isImageLoader = url.search( /\.(jpg|jpeg)$/ ) > 0 || url.search( /\.(png)$/ ) > 0;
    texture._flipy = isImageLoader;
    
    if (isImageLoader) {
      var loader = new ImageLoader( );
      loader.setCrossOrigin( this.crossOrigin );
      loader.setWithCredentials( this.withCredentials );
      loader.setPath( this.path );
      loader.load( url, function ( image ) {

        // JPEGs can't have an alpha channel, so memory can be saved by storing them as RGB.
        var isJPEG = url.search( /\.(jpg|jpeg)$/ ) > 0 || url.search( /^data\:image\/jpeg/ ) === 0;

        texture._format = isJPEG ? EPF_R8G8B8 : EPF_R8G8B8A8;
        if (texture._srgb) {
          texture._format = isJPEG ? EPF_SRGB8 : EPF_SRGB8_ALPHA;
        }
        texture._source_image = image;
        texture._need_update = true;
        texture._w = image.clientWidth;
        texture._h = image.clientHeight;
        texture.UpdateTexture();

        //_LOG._log("["+ texture._url +"] loaded with flipy " + texture._flipy);
        engine_instance.NotifyRender();

      }, onProgress, onError );
    } else {
      // use XHRLoader, parse manually
      var loader = new XHRLoader();
      loader.setResponseType( 'arraybuffer' );
      
      
      var request = loader.load( url, function ( result ) {
        var _image = null;
        if (url.search(".dds") > 0) {
          var parser = new TiImageParserDDS();
          _image = parser.Parse( result );
        }
        else if (url.search(".thdr") > 0) {
          var parser = new TiImageParserTHDR();
          _image = parser.Parse( result );
        }
        else {
          _LOG._error("Error: unknown image format " + url);
        }
        if (_image == null)
          return;
        texture._format = _image._format;
        texture._need_update = true;
        texture._w = _image._w;
        texture._h = _image._h;
        texture._source_image = _image;
        texture.UpdateTexture();
        //_LOG._log("["+ texture._url +"] loaded with flipy " + texture._flipy);
        engine_instance.NotifyRender();
      });

      return request;
    }

    return texture;
  },
  
  UpdateTexture : function () {    
    if (this._source_image == null && this._format == EPF_UNKNOWN)
      return false;

    if (!this._need_update)
      return false;

    var gl = renderer_instance.GetContext();
    if (this._gl_tex == null) {
      this._gl_tex = gl.createTexture();
    }

    gl.bindTexture( gl.TEXTURE_2D, this._gl_tex );
    
    var srgb_ext = renderer_instance._ext_srgb;
    var k_internalFormat_map = [
      gl.ALPHA,    //  EPF_A8,
      gl.RGB,      //  EPF_R8G8B8,
      gl.RGBA,  //  EPF_R8G8B8A8,
      gl.RGBA,  //  EPF_RGBA32F,
      gl.DEPTH_COMPONENT32F,// EPF_DEPTH32,
      gl.RGB,//srgb_ext == null ? 0 : srgb_ext.SRGB_EXT,    //  EPF_SRGB8,
      gl.RGBA,//srgb_ext == null ? 0 : srgb_ext.SRGB_ALPHA_EXT,  //  EPF_SRGB8_ALPHA
      gl.R32F,  // EPF_R32F,
      0,//  EPF_UNKNOWN,
    ];
    var k_gl_format_map = [
      gl.ALPHA,//  EPF_A8,
      gl.RGB,//  EPF_R8G8B8,
      gl.RGBA,//  EPF_R8G8B8A8,
      gl.RGBA,//  EPF_RGBA32F,
      gl.DEPTH_COMPONENT,//  EPF_DEPTH32,
      gl.RGB,//srgb_ext == null ? 0 : srgb_ext.SRGB_EXT,    //  EPF_SRGB8,
      gl.RGBA,//srgb_ext == null ? 0 : srgb_ext.SRGB_ALPHA_EXT,  //  EPF_SRGB8_ALPHA
      gl.RED,  // EPF_R32F,
      0,//  EPF_UNKNOWN,
    ];
    var k_data_type_map = [
      gl.UNSIGNED_BYTE,//  EPF_A8,
      gl.UNSIGNED_BYTE,//  EPF_R8G8B8,
      gl.UNSIGNED_BYTE,//  EPF_R8G8B8A8,
      gl.FLOAT,//  EPF_RGBA32F,
      gl.FLOAT,//  EPF_DEPTH32,
      gl.UNSIGNED_BYTE,  //  EPF_SRGB8,
      gl.UNSIGNED_BYTE,  //  EPF_SRGB8_ALPHA
      gl.FLOAT,  // EPF_R32F,
      0,//  EPF_UNKNOWN,
    ];  
    var k_wrap_type = [    
      gl.REPEAT,  //ETC_REPEAT = 0,
      gl.CLAMP_TO_EDGE,  //ETC_CLAMP_TO_EDGE,
      gl.MIRRORED_REPEAT,  //ETC_MIRROR,
    ];
    
    var has_mipmap = false;
    if ( this._source_image instanceof TiImage ) {
      has_mipmap = this._source_image._faces[0].length > 1;
    }
    if (has_mipmap) {
      gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    } else {
      gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, k_wrap_type[this._wraps] );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, k_wrap_type[this._wrapt] );
    gl.pixelStorei( gl.UNPACK_FLIP_Y_WEBGL, this._flipy );

    if ( this._source_image instanceof TiImage ) {
      var mipmaps = this._source_image._faces[0];
      for (var m = 0 ; m < mipmaps.length ; m ++ ) {
        var mipmap = mipmaps[m];
        gl.texImage2D(  gl.TEXTURE_2D, 
                m, 
                k_internalFormat_map[this._format], 
                mipmap.width, 
                mipmap.height, 
                0, 
                k_gl_format_map[this._format], 
                k_data_type_map[this._format], 
                mipmap.data );
      }
    } else {
      gl.texImage2D( gl.TEXTURE_2D, 
              0, 
              k_internalFormat_map[this._format], 
              k_gl_format_map[this._format], 
              k_data_type_map[this._format], 
              this._source_image );
    }
            
    this._need_update = false;
    return true;
  },
};

//////////////////////////////////////////////////////////////////////////
// TiTextureCube , texture cube
//////////////////////////////////////////////////////////////////////////

function TiTextureCube(){
  this._w = 2;
  this._h = 2;
  
  this._wraps = ETC_REPEAT;
  this._wrapt = ETC_REPEAT;
  this._wrapr = ETC_REPEAT;
  
  this._format = 0;
  this._source_image = null;
  this._need_update = false;
  this._srgb = false;

  this._url = "";  // for debug
  
  // gl things
  this._gl_tex = null;
  this.CreateEmpty();
};

TiTextureCube.prototype = {
  constructor : TiTextureCube,
  
  CreateEmpty : function() {
    // create an 2x2 gray color texture  
    var gl = renderer_instance.GetContext();
    if (this._gl_tex == null) {
      this._gl_tex = gl.createTexture();
    }

    gl.bindTexture( gl.TEXTURE_CUBE_MAP, this._gl_tex );
    gl.texParameteri( gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri( gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR );
    gl.texParameteri( gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
    gl.texParameteri( gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );

    var data = new Uint8Array( 4 * 4 ); // 2x2 with color 128 128 128 255
    for (var i = 0 ; i < 4 ; i ++ ) {
      data[i * 4 + 0] = 128;
      data[i * 4 + 1] = 128;
      data[i * 4 + 2] = 128;
      data[i * 4 + 3] = 255;
    };
    gl.texImage2D( gl.TEXTURE_CUBE_MAP_POSITIVE_X + 0, 0, gl.RGBA, 2, 2, 0, gl.RGBA, gl.UNSIGNED_BYTE, data );
    gl.texImage2D( gl.TEXTURE_CUBE_MAP_POSITIVE_X + 1, 0, gl.RGBA, 2, 2, 0, gl.RGBA, gl.UNSIGNED_BYTE, data );
    gl.texImage2D( gl.TEXTURE_CUBE_MAP_POSITIVE_X + 2, 0, gl.RGBA, 2, 2, 0, gl.RGBA, gl.UNSIGNED_BYTE, data );
    gl.texImage2D( gl.TEXTURE_CUBE_MAP_POSITIVE_X + 3, 0, gl.RGBA, 2, 2, 0, gl.RGBA, gl.UNSIGNED_BYTE, data );
    gl.texImage2D( gl.TEXTURE_CUBE_MAP_POSITIVE_X + 4, 0, gl.RGBA, 2, 2, 0, gl.RGBA, gl.UNSIGNED_BYTE, data );
    gl.texImage2D( gl.TEXTURE_CUBE_MAP_POSITIVE_X + 5, 0, gl.RGBA, 2, 2, 0, gl.RGBA, gl.UNSIGNED_BYTE, data );
            
    this._need_update = false;
    return true;
  },

  Load: function ( url, onLoad, onProgress, onError ) {
    var texture = this;
    this._url = url;
    
    // ONLY support DDS cube map for now.
    // use XHRLoader, parse manually
    var loader = new XHRLoader();
    loader.setResponseType( 'arraybuffer' );
        
    var request = loader.load( url, function ( result ) {
      var data = result;
      if (url.search(".gz") > 0)   {
        // gunzip
        //var inflate = new Zlib.Inflate(new Uint8Array(result));
        //data = inflate.decompress();
        var gunzip = new Zlib.Gunzip(new Uint8Array(result));
        data = gunzip.decompress();
        data = data.buffer;
      }
      var _image = null;
      var parser;
      if (url.search(".dds") > 0) {
        parser = new TiImageParserDDS();
        _image = parser.Parse( data );
      }
      else if (url.search(".thdr") > 0) {
        parser = new TiImageParserTHDR();
        _image = parser.Parse( data );
      }
      else {
        _LOG._error("Error: unknown image format " + url);
      }
      if (_image == null)
        return;
      texture._format = _image._format;
      texture._need_update = true;
      texture._w = _image._w;
      texture._h = _image._h;
      texture._source_image = _image;
      texture.UpdateTexture();
      _LOG._log("["+ texture._url +"] loaded");
      engine_instance.NotifyRender();
    });

    return texture;
  },
  
  UpdateTexture : function () {    
    if (this._source_image == null && this._format == EPF_UNKNOWN)
      return false;

    if (!this._need_update)
      return false;

    var gl = renderer_instance.GetContext();
    if (this._gl_tex == null) {
      this._gl_tex = gl.createTexture();
    }

    gl.bindTexture( gl.TEXTURE_CUBE_MAP, this._gl_tex );
    
    var k_internalFormat_map = [
      gl.ALPHA,    //  EPF_A8,
      gl.RGB,      //  EPF_R8G8B8,
      gl.RGBA,  //  EPF_R8G8B8A8,
      gl.RGBA,  //  EPF_RGBA32F,
      gl.DEPTH_COMPONENT32F,// EPF_DEPTH32,
      gl.SRGB8,      //  EPF_SRGB8,
      gl.SRGB8_ALPHA8,  //  EPF_SRGB8_ALPHA
      gl.R32F,  // EPF_R32F,
      0,//  EPF_UNKNOWN,
    ];
    var k_gl_format_map = [
      gl.ALPHA,//  EPF_A8,
      gl.RGB,//  EPF_R8G8B8,
      gl.RGBA,//  EPF_R8G8B8A8,
      gl.RGBA,//  EPF_RGBA32F,
      gl.DEPTH_COMPONENT,//  EPF_DEPTH32,
      gl.RGB,    //  EPF_SRGB8,
      gl.RGBA,  //  EPF_SRGB8_ALPHA
      gl.RED,  // EPF_R32F,
      0,//  EPF_UNKNOWN,
    ];
    var k_data_type_map = [
      gl.UNSIGNED_BYTE,//  EPF_A8,
      gl.UNSIGNED_BYTE,//  EPF_R8G8B8,
      gl.UNSIGNED_BYTE,//  EPF_R8G8B8A8,
      gl.FLOAT,//  EPF_RGBA32F,
      gl.FLOAT,//  EPF_DEPTH32,
      gl.UNSIGNED_BYTE,  //  EPF_SRGB8,
      gl.UNSIGNED_BYTE,  //  EPF_SRGB8_ALPHA
      gl.FLOAT,  // EPF_R32F,
      0,//  EPF_UNKNOWN,
    ];  
    var k_wrap_type = [    
      gl.REPEAT,  //ETC_REPEAT = 0,
      gl.CLAMP_TO_EDGE,  //ETC_CLAMP_TO_EDGE,
      gl.MIRRORED_REPEAT,  //ETC_MIRROR,
    ];
    
    var has_mipmap = false;
    if ( this._source_image instanceof TiImage ) {
      has_mipmap = this._source_image._faces[0].length > 1;
    }
    if (has_mipmap) {
      gl.texParameteri( gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    } else {
      gl.texParameteri( gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
    gl.texParameteri( gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR );
    gl.texParameteri( gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, k_wrap_type[this._wraps] );
    gl.texParameteri( gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, k_wrap_type[this._wrapt] );
    //gl.pixelStorei( gl.UNPACK_FLIP_Y_WEBGL, this._flipy );

    if ( this._source_image instanceof TiImage ) {
      var faces = this._source_image._faces;
      for ( var f = 0 ; f < faces.length ; f ++ ) {
        var mipmaps = faces[f];
        for (var m = 0 ; m < mipmaps.length ; m ++ ) {
          var mipmap = mipmaps[m];
          gl.texImage2D(  gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, 
                  m, 
                  k_internalFormat_map[this._format], 
                  mipmap.width, 
                  mipmap.height, 
                  0, 
                  k_gl_format_map[this._format], 
                  k_data_type_map[this._format], 
                  mipmap.data );
        }
      }
    } else {
      _LOG._error(" TiTextureCube.UpdateTexture only support TiImage . ");
    }
            
    this._need_update = false;
    return true;
  },
};

//////////////////////////////////////////////////////////////////////////
// TiNode , Node tree
//////////////////////////////////////////////////////////////////////////
var ENT_NODE = 1162104654;
var ENT_MESH = 1213416781;
var ENT_SKINMESH = 1397574483;
var ENT_GEOMETRY = 1297040711;
var ENT_CAMERA = 1095582019;

function TiNode( type , _p ){
  this.id = "";
  this.sid = "";
  this.type = type;
  this.node_flag = ENF_VISIBLE | ENF_DIRTY_POS;
  
  this._parent = _p;
  this._children = [];
  if (_p != null) {
    _p.AddChild(this);
  }
  
  this._relative_position = new Vector3();
  this._relative_rotation = new Quaternion();
  this._relative_scale = new Vector3(1,1,1);
  
  this._absolute_transformation = new Matrix4();
  this._absolute_transformation.makeIdentity();
  this._relative_transformation = new Matrix4();
  this._relative_transformation.makeIdentity();
};

TiNode.prototype = {
  constructor : TiNode,
  
  Update : function( dt ) {
  },
  
  Render : function ( renderer ) {
  },
  
  SetPosition : function ( pos ) {
    this._relative_position.v[0] = pos.x();
    this._relative_position.v[1] = pos.y();
    this._relative_position.v[2] = pos.z();
    
    this.node_flag |= ENF_DIRTY_POS;
  },
  
  SetRotation : function ( rot ) {
    this._relative_rotation.x = rot.x;
    this._relative_rotation.y = rot.y;
    this._relative_rotation.z = rot.z;
    this._relative_rotation.w = rot.w;
    
    this.node_flag |= ENF_DIRTY_ROT;
  },
  
  SetScale : function ( scale ) {
    this._relative_scale.v[0] = scale.x();
    this._relative_scale.v[1] = scale.y();
    this._relative_scale.v[2] = scale.z();
    
    this.node_flag |= ENF_DIRTY_POS;
  },
  
  AddChild : function ( c ) {
    if (c != null && c != this) {
      c.Remove();
      this._children.push(c);
      c._parent = this;
    }
  },
  
  Remove : function () {
    if (this._parent != null) {
      this._parent.RemoveChild(this);
    }
  },
  
  RemoveChild : function ( c ) {
    for (var i = 0 ; i < this._children.length ; i ++ ) {
      if ( c === this._children[i] ) {
        this._children.splice(i, 1);
        return true;
      }
    }
    return false;
  },
  
  GetRelativeTransformation : function() {
    if ((this.node_flag & ENF_DIRTY_TRANSFORM) != 0)
    {
      if ((this.node_flag & ENF_DIRTY_TRANS_MAT) != 0)
      {
        // do nothing, return relative matrix directly
      }
      else
      {
        if ((this.node_flag & (ENF_DIRTY_SCALE | ENF_DIRTY_ROT)) != 0)
        {
          this._relative_transformation = this._relative_rotation.getMatrix();
          if (this._relative_scale.is_scaled()) {
            var scale = this._relative_scale;
            this._relative_transformation.postScale(scale.x(), scale.y(), scale.z());
          }
          var pos = this._relative_position;
          this._relative_transformation.setTranslation(pos.x(), pos.y(), pos.z());
        }
        else
        {
          var pos = this._relative_position;
          this._relative_transformation.setTranslation(pos.x(), pos.y(), pos.z());
        }
      }
      this.node_flag &= ~ENF_DIRTY_TRANSFORM;
    }
    return this._relative_transformation;
  },
  
  UpdateAbsoluteTransformation : function () {
    if (this._parent != null && 
       ((this._parent.node_flag & ENF_ABSOLUTETRANSFORMATION_UPDATED) != 0 || 
        (this.node_flag & ENF_DIRTY_TRANSFORM) != 0))
    {
      this._absolute_transformation.multiMatrices34(this._parent._absolute_transformation, this.GetRelativeTransformation());
      this.node_flag |= ENF_ABSOLUTETRANSFORMATION_UPDATED;
    }
    else
    {
      if ((this.node_flag & ENF_DIRTY_TRANSFORM) != 0)
      {
        this._absolute_transformation = this.GetRelativeTransformation();
        this.node_flag |= ENF_ABSOLUTETRANSFORMATION_UPDATED;
      }
    }
  },
  
  RegisterElementBase : function () {
    this.UpdateAbsoluteTransformation();
    
    for (var c = 0 ; c < this._children.length ; c ++ ) {
      var child = this._children[c];
      child.RegisterElement();
    }
  },
  
  RegisterElement : function () {
    this.RegisterElementBase();
  },
};

//////////////////////////////////////////////////////////////////////////
// TiNodeCamera , camera node with navigation
//////////////////////////////////////////////////////////////////////////

function TiNodeCamera( _p ){
  TiNode.call(this, ENT_CAMERA, _p);
  this._need_update = true;
  
  this._target = new Vector3();
  this._up_vector = new Vector3(0,0,1);
  
  this._fov = Math.PI / 4.0;
  this._aspect = (renderer_instance._viewport[2] - renderer_instance._viewport[0]) / (renderer_instance._viewport[3] - renderer_instance._viewport[1]);
  this._znear = 0.1;
  this._zfar = 3000.0;
  
  this._matrices = [];
  for (var m = 0 ; m < ETS_COUNT ; ++ m) {
    this._matrices[m] = new Matrix4();
  }
  
  renderer_instance.RegisterCommonParameter("CamPos", this._relative_position);
};

extend(TiNodeCamera, TiNode);

TiNodeCamera.prototype.SetPosition = function ( pos ) {
  this._relative_position.v[0] = pos.x();
  this._relative_position.v[1] = pos.y();
  this._relative_position.v[2] = pos.z();

  this.node_flag |= ENF_DIRTY_POS;
  this._need_update = true;
};
TiNodeCamera.prototype.SetTarget = function ( target ) {
  this._target.v[0] = target.x();
  this._target.v[1] = target.y();
  this._target.v[2] = target.z();
  
  this._need_update = true;
};
TiNodeCamera.prototype.SetAspect = function ( aspect ) {
  this._aspect = aspect;
  
  this._need_update = true;
};
TiNodeCamera.prototype.RegisterElement = function () {
  this.RegisterElementBase();
  
  if (this._need_update) {
    // projection
    this.RecalculateProjectionMatrix();
    // view
    this.RecalculateViewMatrix();
    // vp
    this._matrices[ ETS_VP ].multiplyMatrices( this._matrices[ ETS_PROJECTION ] , this._matrices[ ETS_VIEW ] );
    
    this._need_update = false;
  }
  
  renderer_instance.SetTransform( ETS_VIEW, this._matrices[ ETS_VIEW ] );
  renderer_instance.SetTransform( ETS_PROJECTION, this._matrices[ ETS_PROJECTION ] );
  renderer_instance.SetTransform( ETS_VP, this._matrices[ ETS_VP ] );
};
TiNodeCamera.prototype.RecalculateProjectionMatrix = function() {
  this._matrices[ ETS_PROJECTION ] = buildProjectionMatrixPerspectiveFov(this._fov, this._aspect, this._znear, this._zfar);
};
TiNodeCamera.prototype.RecalculateViewMatrix = function() {
  var pos = this._relative_position;
  var cam_dir = new Vector3();
  cam_dir.subVectors(this._target, pos);
  cam_dir.normalize();
  
  var up = this._up_vector.clone();
  up.normalize();

  var dp = cam_dir.dotProduct(up);

  if (Math.abs(Math.abs(dp) - 1.0) < 0.0001) {
    up.v[0] = up.x() + 0.5;
  }
  
  this._matrices[ ETS_VIEW ] = buildCameraLookAtMatrix(pos, this._target, up);
};
//////////////////////////////////////////////////////////////////////////
// TiGeometry , Model nodes root
//////////////////////////////////////////////////////////////////////////

function TiGeometry( _p ){
  TiNode.call(this, ENT_GEOMETRY, _p);
};

extend(TiGeometry, TiNode);

//////////////////////////////////////////////////////////////////////////
// TiNodeMesh , mesh node
//////////////////////////////////////////////////////////////////////////

function TiNodeMesh( _p ){
  TiNode.call(this, ENT_MESH, _p);
  
  this._mesh_buffer = null;
  this._material = null;
};

extend(TiNodeMesh, TiNode);

TiNodeMesh.prototype.RegisterElement = function () {
  this.RegisterElementBase();
  
  // check should be in solid pass or transparent pass
  var render_state = this._material._shader._techniques[0]._shader_program._render_state;
  if (render_state.blend) {
    engine_instance._render_stage.AddToList(ESLT_TRANSPARENT, this);
  }
  else {
    engine_instance._render_stage.AddToList(ESLT_SOLID, this);
  }
};

TiNodeMesh.prototype.Render = function ( renderer ) {
  renderer.SetTransform(ETS_WORLD, this._absolute_transformation);
  renderer.DrawMeshBuffer(this._mesh_buffer, this._material);
};

//////////////////////////////////////////////////////////////////////////
// LoaderTidae , load tidae file format
//////////////////////////////////////////////////////////////////////////
LoaderTidae = function() {
};

LoaderTidae.prototype = {
  constructor : LoaderTidae,
  
  Load : function ( url, onLoad, onProgress, onError ) {
    var loader = new XHRLoader();

    loader.setResponseType( 'arraybuffer' );

    _LOG._log("Prepare loading " + url );
    var request = loader.load( url, function ( result ) {
      var data = result;
      if (url.search(".gz") > 0) {
        var gunzip = new Zlib.Gunzip(new Uint8Array(data));
        data = gunzip.decompress();
        data = data.buffer;
      }

      onLoad( data );

    }, onProgress, onError );

    return request;
  },
  
  Parse : function ( data ) {    
    var chunk_offset_geometry = 0;
    var chunk_offset_scene = 0;
    var chunk_offset_anims = 0;
    var chunk_offset_controller = 0;
    var chunk_offset_shader = 0;
    var chunk_offset_timaterial = 0;
    var chunk_offset_emitter = 0;
    var chunk_offset_images = 0;
    var chunk_offset_ui = 0;
    
    var res_string_count = 0;
    var res_string_offset = 0;
    
    function parseStringL( data, offset, length ) {      
      var charArray = new Uint8Array( data, offset, length );
      var text = "";
      for ( var i = 0; i < length; i ++ ) {
        text += String.fromCharCode( charArray[ i ] );
      }
      return text;
    }
    
    function parseUChar8( data, offset ) {
      var charArray = new Uint8Array( data, offset, 1 );
      return charArray[ 0 ];
    }
    
    function parseString( data, offset ) {
      var len = 0;
      var off = offset;
      var c = parseUChar8(data, off);
      while (c != 0) {
        len ++;
        off ++;
        c = parseUChar8(data, off);
      }
      if (len == 0)
        return "";
    
      var charArray = new Uint8Array( data, offset, len );
      var text = "";
      for ( var i = 0; i < len; i ++ ) {
        text += String.fromCharCode( charArray[ i ] );
      }
      return text;
    }

    function getString(data, str_index)  {
      if (str_index < 0 || str_index >= res_string_count)
      {
        _LOG._alert("GetString index out of range!");
      }
      var str_offset = res_string_offset + res_string_count * 4;
      if (str_index > 0) {
        var off = parseUInt32(data, res_string_offset + (str_index - 1) * 4);
        str_offset += off;
      }
      return parseString(data, str_offset);
      //return (char*)(StringOffsets + Header->StringCount) + (str_index > 0 ? StringOffsets[str_index - 1] : 0);
    }
    function parseInt32( data, offset ) {
      var intArray = new Int32Array( data, offset, 1 );
      return intArray[ 0 ];
    }
    function parseUInt32( data, offset ) {
      var intArray = new Uint32Array( data, offset, 1 );
      return intArray[ 0 ];
    }
    
    function parseFloat32( data, offset ) {
      var floatArray = new Float32Array( data, offset, 1 );
      return floatArray[ 0 ];
    }
    
    function CreateTiMaterialById( data, material_id )
    {
      if (chunk_offset_timaterial == 0)
      {
        _LOG._alert(" chunk_offset_timaterial is 0 ");
      }
      var material_count = parseUInt32( data, chunk_offset_timaterial + 12);
      
      var ti_resfile_chunkheader_size = 16;
      var material_desc_size = 6 * 4;
      var uniform_desc_size = 7 * 4;
      
      var material_set = parseInt32( data, chunk_offset_timaterial + ti_resfile_chunkheader_size);
      var m_in_set = material_count / material_set;

      //struct MtrlDesc
      //{
      //  int    StrIndex_Id;
      //  int    StrIndex_Shader;
      //  int    StrIndex_Tech;
      //  int    UniformCount;
      //  int    StrIndex_BindLights;
      //  int    Flag;
      //};
      //struct UniformDesc
      //{
      //  int    StrIndex_Name;
      //  int    Type;
      //  union
      //  {
      //    float  floatValue[4];
      //    int    intValue[4];
      //  };
      //  u8    Parameters[4];
      //};

      var mtrl_desc_offset = chunk_offset_timaterial + ti_resfile_chunkheader_size + 4;
      var uniform_desc_offset = chunk_offset_timaterial + ti_resfile_chunkheader_size + 4 + material_desc_size * material_count;

      var uniform_offset = 0;
      var m_begin = 0;
      
      for (var m = 0 ; m < m_begin ; ++ m)
      {
        alert(0);
      }
      for (var m = m_begin ; m < m_begin + m_in_set ; ++ m)
      {
        var mdesc_offset = mtrl_desc_offset + material_desc_size * m;
        var temp_int;        
        temp_int = parseInt32( data, mdesc_offset ); mdesc_offset += 4;
        var mId = temp_int != -1 ? getString( data, temp_int ) : "";
        temp_int = parseInt32( data, mdesc_offset ); mdesc_offset += 4;
        var shader_name = temp_int != -1 ? getString( data, temp_int ) : "";
        temp_int = parseInt32( data, mdesc_offset ); mdesc_offset += 4;
        var tech_name = temp_int != -1 ? getString( data, temp_int ) : "";
        var uniform_count = parseInt32( data, mdesc_offset ); mdesc_offset += 4;
        var strIndex_BindLights = parseInt32( data, mdesc_offset ); mdesc_offset += 4;
        var flag = parseInt32( data, mdesc_offset ); mdesc_offset += 4;
        
        if (material_id == mId) {
          // create material
          shader_name = shader_name.replace(".btish", "");
          shader_name = shader_name.replace("LibShader/", "shader_");
          var shader = new TiShader();
          shader.LoadFromJson(eval(shader_name));
          var material = new TiMaterial(shader);
          material.SetTechnique(tech_name);
          
          // fill settings
          if (strIndex_BindLights != -1)
          {
            var b_light = getString(data, strIndex_BindLights);
            _LOG._log(" ===TODO: material light binding. ");            
            //material->AddBindLights(b_light);
          }
          // bind uniforms
          for (var u = 0 ; u < uniform_count ; ++ u)
          {
            var udesc_offset = uniform_desc_offset + uniform_desc_size * (uniform_offset + u);
            
            temp_int = parseInt32( data, udesc_offset ); udesc_offset += 4;
            var uniform_name = temp_int != -1 ? getString( data, temp_int ) : "";
            var uniform_type = parseInt32( data, udesc_offset ); udesc_offset += 4;
            var value_offset = udesc_offset;
            udesc_offset += 16;  // skip float/intValue[4];
            var parameters = [];
            parameters[0] = parseUChar8(data, udesc_offset); udesc_offset ++;
            parameters[1] = parseUChar8(data, udesc_offset); udesc_offset ++;
            parameters[2] = parseUChar8(data, udesc_offset); udesc_offset ++;
            parameters[3] = parseUChar8(data, udesc_offset); udesc_offset ++;

            if (uniform_type == EUF_SAMPLER2D)
            {
              var value = parseInt32(data, value_offset); value_offset += 4;
              var tex_name = getString(data, value);
              var sample = parameters[0] == 0 ? ETC_REPEAT : ETC_CLAMP_TO_EDGE;
              var srgb = (parameters[1] == 1);
              var tex_url = tex_name.replace("LibTexture/", "res/tex/");
              tex_url = tex_url.replace(".tga", ".png");
              var texture = lib_texture.GetTexture( tex_url, false, sample, sample, srgb);
              material.AddParameter(uniform_name, uniform_type, texture);
            }
            else if (uniform_type == EUF_SAMPLERCUBE)
            {
              var value = parseInt32(data, value_offset); value_offset += 4;
              var tex_name = getString(data, value);
              var texture = lib_texture.GetTextureCube( tex_name, true, ETC_REPEAT, ETC_REPEAT, ETC_REPEAT, true);
              material.AddParameter(uniform_name, uniform_type, texture);
            }
            else if (uniform_type == EUF_VEC4)
            {
              var vec4 = [];
              vec4[0] = parseFloat32(data, value_offset); value_offset += 4;
              vec4[1] = parseFloat32(data, value_offset); value_offset += 4;
              vec4[2] = parseFloat32(data, value_offset); value_offset += 4;
              vec4[3] = parseFloat32(data, value_offset); value_offset += 4;
              material.AddParameter(uniform_name, uniform_type, vec4);
            }
            else if (uniform_type == EUF_INT)
            {
              var value = parseInt32(data, value_offset); value_offset += 4;
              material.AddParameter(uniform_name, uniform_type, value);
            }
            else if (uniform_type == EUF_FLOAT)
            {
              var value = parseFloat32(data, value_offset); value_offset += 4;
              material.AddParameter(uniform_name, uniform_type, value);
            }
            else if (uniform_type == EUF_VEC3)
            {
              var vec3 = [];
              vec3[0] = parseFloat32(data, value_offset); value_offset += 4;
              vec3[1] = parseFloat32(data, value_offset); value_offset += 4;
              vec3[2] = parseFloat32(data, value_offset); value_offset += 4;
              material.AddParameter(uniform_name, uniform_type, vec3);
            }
            else if (uniform_type == EUF_VEC2)
            {
              var vec2 = [];
              vec2[0] = parseFloat32(data, value_offset); value_offset += 4;
              vec2[1] = parseFloat32(data, value_offset); value_offset += 4;
              material.AddParameter(uniform_name, uniform_type, vec2);
            }
            else
            {
              alert(0);
            }
          }
    
          if ((flag & MATERIAL_FLAG_ISPBR) != 0) {
            material.AddParameter("diffuseProbe", EUF_SAMPLERCUBE, renderer_instance._diff_probe);
            material.AddParameter("specularProbe", EUF_SAMPLERCUBE, renderer_instance._spec_probe);
            material.AddParameter("brdfLut", EUF_SAMPLER2D, renderer_instance._brdf_lut);
          }
          
          return material;
        }
        uniform_offset    += uniform_count;
      }
      return null;
    }
    function CreateGeometryById( data, geometry_id )
    {
      if (chunk_offset_geometry == 0)
      {
        _LOG._alert(" chunk_offset_geometry is 0 ");
      }
      var geometry_count = parseUInt32( data, chunk_offset_geometry + 12);
      
      //struct GeometryDesc
      //{
      //  int        StrIndex_Id;
      //  u32        VertexFormat;
      //  int        VertexCount;
      //  int        StrideInByte;
      //  int        PrimitiveCount;  //triangle count, means (index count) / 3. (triangle list)
      //  int        IndexType;
      //  aabbox3df    BBox;
      //  u32        Flag;
      //};
      
      var ti_resfile_chunkheader_size = 16;
      var geometry_size = 13 * 4;
      
      var geometry_desc_offset = chunk_offset_geometry + ti_resfile_chunkheader_size;
      var vertex_data_offset = chunk_offset_geometry + ti_resfile_chunkheader_size + geometry_count * geometry_size;
      
      var data_offset = 0;
      
      for (var g = 0 ; g < geometry_count ; g ++)
      {
        var gdesc_offset = geometry_desc_offset + g * geometry_size;
        var temp_int;
        temp_int = parseInt32( data, gdesc_offset ); gdesc_offset += 4;
        var desc_g_id = temp_int != -1 ? getString( data, temp_int ) : "";
        var vertex_format = parseUInt32( data, gdesc_offset ); gdesc_offset += 4;
        var vertex_count = parseInt32( data, gdesc_offset ); gdesc_offset += 4;
        var stride_in_byte = parseInt32( data, gdesc_offset ); gdesc_offset += 4;
        var primitive_count = parseInt32( data, gdesc_offset ); gdesc_offset += 4;
        var index_type = parseInt32( data, gdesc_offset ); gdesc_offset += 4;
        var bbox = [];
        bbox[0] = parseFloat32( data, gdesc_offset ); gdesc_offset += 4;
        bbox[1] = parseFloat32( data, gdesc_offset ); gdesc_offset += 4;
        bbox[2] = parseFloat32( data, gdesc_offset ); gdesc_offset += 4;
        bbox[3] = parseFloat32( data, gdesc_offset ); gdesc_offset += 4;
        bbox[4] = parseFloat32( data, gdesc_offset ); gdesc_offset += 4;
        bbox[5] = parseFloat32( data, gdesc_offset ); gdesc_offset += 4;
        var flag = parseUInt32( data, gdesc_offset ); gdesc_offset += 4;
        
        var vertex_data_size = vertex_count * stride_in_byte;
        var index_data_size = primitive_count * 3 * (index_type == EIT_16BIT ? 2 : 4);
        index_data_size = (index_data_size + 3) & (~3);
        
        if (geometry_id == null || geometry_id == desc_g_id)
        {
          var mb = new TiMeshBuffer();
          mb.SetVertexStreamData(data, vertex_format, vertex_data_offset + data_offset, vertex_count, index_type, vertex_data_offset + data_offset + vertex_data_size, primitive_count * 3);
          mb._bbox[0] = bbox[0];
          mb._bbox[1] = bbox[1];
          mb._bbox[2] = bbox[2];
          mb._bbox[3] = bbox[3];
          mb._bbox[4] = bbox[4];
          mb._bbox[5] = bbox[5];
          return mb;
        }
        data_offset    += vertex_data_size + index_data_size;
      }
      return null;
    }
    function createGeometry( data ) {
      if (chunk_offset_scene == 0)
      {
        _LOG._error(" chunk_offset_scene is 0 ");
      }
      var ele_count = parseUInt32( data, chunk_offset_scene + 12);
      var node_count = ele_count;
      if (node_count == 0)
        return null;

      //struct NodeDesc
      //{
      //  int    StrIndex_Id;
      //  int    StrIndex_Sid;
      //  int    Type;
      //  int    Flag;
      //  int    StrIndex_InstanceUrl;
      //  float  Position[3];  // vector3df
      //  float  Rotation[4];  // quaternion
      //  float  Scale[3];    // vector3df
      //  int    StrIndex_MId;  // material id
      //  --PhysicDesc  Physic;
      //  struct PhysicDesc
      //  {
      //    int    Type;          
      //    // sphere
      //    float  Radius;
      //    float  Height;
      //    // mesh
      //    int      MeshIdIndex;
      //  };
      //  aabbox3df  ExtraBBox;

      //  int    ParentNodeIndex;// node index in node list. -1 means no parent
      //  int    PropString[2];
      //};      
      
      //struct TiResfileChunkHeader
      //{
      //  union 
      //  {
      //    UINT  ID;
      //    char  IDNAME[4];
      //  };
      //  int    Version;
      //  int    ChunkSize;
      //  int    ElementCount;
      //};
      var ti_resfile_chunkheader_size = 16;
      var nodedesc_size = 29 * 4;

      var node_list = [];
      var node_desc_offset  = chunk_offset_scene + ti_resfile_chunkheader_size;
      
      for (var i = 0 ; i < node_count ; i ++)
      {
        var _node = null;
        var _parent = null;
        
        var temp_int;
        var ndesc_offset = node_desc_offset + i * nodedesc_size;
        temp_int = parseInt32( data, ndesc_offset); ndesc_offset += 4;
        var node_id = temp_int != -1 ? getString( data, temp_int) : "";
        temp_int = parseInt32( data, ndesc_offset); ndesc_offset += 4;
        var node_sid = temp_int != -1 ? getString( data, temp_int ) : "";
        var node_type = parseUInt32( data, ndesc_offset); ndesc_offset += 4;
        var node_flag = parseUInt32( data, ndesc_offset); ndesc_offset += 4;
        var node_instance_url = parseInt32( data, ndesc_offset); ndesc_offset += 4;
        var node_position = [];
        node_position[0] = parseFloat32( data, ndesc_offset); ndesc_offset += 4;
        node_position[1] = parseFloat32( data, ndesc_offset); ndesc_offset += 4;
        node_position[2] = parseFloat32( data, ndesc_offset); ndesc_offset += 4;
        var node_rotation = [];
        node_rotation[0] = parseFloat32( data, ndesc_offset); ndesc_offset += 4;
        node_rotation[1] = parseFloat32( data, ndesc_offset); ndesc_offset += 4;
        node_rotation[2] = parseFloat32( data, ndesc_offset); ndesc_offset += 4;
        node_rotation[3] = parseFloat32( data, ndesc_offset); ndesc_offset += 4;
        var node_scale = [];
        node_scale[0] = parseFloat32( data, ndesc_offset); ndesc_offset += 4;
        node_scale[1] = parseFloat32( data, ndesc_offset); ndesc_offset += 4;
        node_scale[2] = parseFloat32( data, ndesc_offset); ndesc_offset += 4;
        temp_int = parseInt32( data, ndesc_offset); ndesc_offset += 4;
        var node_material_id = temp_int != -1 ? getString( data, temp_int ) : "";
        ndesc_offset += 16;    // skip PhysicDesc;
        ndesc_offset += 24;    // skip ExtraBBox;
        var parent_node_index = parseUInt32( data, ndesc_offset); ndesc_offset += 4;
        ndesc_offset += 8;    // skip PropString[2];

        if (parent_node_index != -1)
        {
          _parent  = node_list[parent_node_index];
        }
        if (node_type == ENT_MESH ||
          node_type == ENT_SKINMESH)
        {
          var n_mesh      = null;
          var geometry_url  = null;

          if (node_type == ENT_MESH)
          {
            n_mesh          = new TiNodeMesh(_parent);
            geometry_url      = getString(data, node_instance_url);
          }
          else if (node_type == ENT_SKINMESH)
          {
            _LOG._alert("Skin mesh not supported for now." );
          }
          else
          {
            _LOG._alert("Exception : Unknown node type : [" + node_type + "]");
          }

          // create meshbuffer
          n_mesh._mesh_buffer = CreateGeometryById(data, geometry_url);

          // create material
          n_mesh._material = CreateTiMaterialById(data, node_material_id );
          _node        = n_mesh;
        }
        else if (node_type == ENT_GEOMETRY)
        {
          _node  = new TiGeometry(null);
        }
        else
        {
          _node  = new TiNode(ENT_NODE, parent);
        }

        if (_node != null)
        {
          _node.id = node_id;
          _node._relative_position.v[0] = node_position[0];
          _node._relative_position.v[1] = node_position[1];
          _node._relative_position.v[2] = node_position[2];
          if (node_rotation[0] != 0 ||
            node_rotation[1] != 0 ||
            node_rotation[2] != 0 ||
            node_rotation[3] != 1)
          {
            _node._relative_rotation.x = node_rotation[0];
            _node._relative_rotation.y = node_rotation[1];
            _node._relative_rotation.z = node_rotation[2];
            _node._relative_rotation.w = node_rotation[3];
          }
          if (node_scale[0] != 1 ||
            node_scale[1] != 1 ||
            node_scale[2] != 1)
          {
            _node._relative_scale.v[0] = node_scale[0];
            _node._relative_scale.v[1] = node_scale[1];
            _node._relative_scale.v[2] = node_scale[2];
          }
        }
        
        node_list.push(_node);
      }

      return node_list[0];
    }
    
    function loadChunks( data, offset, chunk_count ) {
      //struct TiResfileChunkHeader
      //{
      //  union 
      //  {
      //    UINT  ID;
      //    char  IDNAME[4];
      //  };
      //  int    Version;
      //  int    ChunkSize;
      //  int    ElementCount;
      //};
      var TIRES_ID_CHUNK_GEOMETRY = 1397704007;
      var TIRES_ID_CHUNK_SCENE = 1313162067;
      var TIRES_ID_CHUNK_ANIMS = 1296649793;
      var TIRES_ID_CHUNK_CONTROLLER = 1280463939;
      var TIRES_ID_CHUNK_SHADER = 1145129043;
      var TIRES_ID_CHUNK_TIMATERIAL = 1414351188;
      var TIRES_ID_CHUNK_EMITTER = 1414090053;
      var TIRES_ID_CHUNK_IMAGES = 1195461961;
      var TIRES_ID_CHUNK_UI = 1230326100;
      
      for ( var c = 0; c < chunk_count; c ++ ) {
        var next_chunk_offset = offset;
        var chunk_id = parseUInt32( data, offset );
        offset += 8;  // skip ID and Version
        var chunk_size = parseUInt32( data, offset );
        offset += 4;
        
        if ( chunk_id == TIRES_ID_CHUNK_GEOMETRY ) {
          chunk_offset_geometry = next_chunk_offset;
        }
        else if (chunk_id == TIRES_ID_CHUNK_SCENE) {
          chunk_offset_scene = next_chunk_offset;
        }
        else if (chunk_id == TIRES_ID_CHUNK_ANIMS) {
          chunk_offset_anims = next_chunk_offset;
        }
        else if (chunk_id == TIRES_ID_CHUNK_CONTROLLER) {
          chunk_offset_controller = next_chunk_offset;
        }
        else if (chunk_id == TIRES_ID_CHUNK_SHADER) {
          chunk_offset_shader = next_chunk_offset;
        }
        else if (chunk_id == TIRES_ID_CHUNK_TIMATERIAL) {
          chunk_offset_timaterial = next_chunk_offset;
        }
        else if (chunk_id == TIRES_ID_CHUNK_EMITTER) {
          chunk_offset_images = next_chunk_offset;
        }
        else if (chunk_id == TIRES_ID_CHUNK_UI) {
          chunk_offset_ui = next_chunk_offset;
        }
        
        next_chunk_offset += chunk_size;
        offset = next_chunk_offset;
      }
    }

    var offset = 0;
    offset = 4;  // skip TiLodHeader
    offset = parseUInt32(data, offset);
    //struct TiResfileHeader
    //{
    //  union 
    //  {
    //    UINT  ID;
    //    char  IDNAME[4];
    //  };
    //  int    Version;
    //  int    ChunkCount;
    //  int    FileSize;
    //  int    StringCount;
    //  int    StringOffset;
    //};
    offset += 8;  // skip ID and Version
    var chunk_count = parseUInt32(data, offset);
    offset += 4;
    var file_size = parseUInt32(data, offset);
    offset += 4;
    res_string_count = parseUInt32(data, offset);
    offset += 4;
    res_string_offset = parseUInt32(data, offset) + 12; // with lod offset header
    offset += 4;
    
    loadChunks( data, offset, chunk_count );
    var root = createGeometry( data );
    
    engine_instance.SetContent( root );
  },
};

//////////////////////////////////////////////////////////////////////////
// LibTexture , cache all textures here
//////////////////////////////////////////////////////////////////////////
var lib_texture = null;
function TiLibraryTexture () {
  this._textures = {};
  this._texture_cubes = {};
  
  lib_texture = this;
};

TiLibraryTexture.prototype = {
  constructor : TiLibraryTexture,
  
  GetTexture : function( url, mipmaps, wraps, wrapt, srgb ) {
    if (!(url in this._textures))
    {
      var texture  = new TiTexture();
      texture._wraps = wraps;
      texture._wrapt = wrapt;
      
      texture.Load( url, srgb );
      this._textures[ url ] = texture;
      return texture;
    } else {
      return this._textures[ url ];
    }
  },
  GetTextureCube : function( url, mipmaps, wraps, wrapt, wrapr, srgb ) {
    if (!(url in this._texture_cubes))
    {
      var texture  = new TiTextureCube();
      texture._wraps = wraps;
      texture._wrapt = wrapt;
      
      texture.Load( url );
      this._texture_cubes[ url ] = texture;
      return texture;
    } else {
      return this._texture_cubes[ url ];
    }
  },
};

//////////////////////////////////////////////////////////////////////////
// TiController , navigation controller
//////////////////////////////////////////////////////////////////////////
var ECA_NONE = 0;
var ECA_DOLLY = 1;
var ECA_ROLL = 2;
var ECA_MOVE = 3;

var MOUSE_LEFT = 0;
var MOUSE_MIDDLE = 1;
var MOUSE_RIGHT = 2;

function TiController( camera, domElement ) {
  this._dom_element = domElement;
  this._camera = camera;
  
  this._action = ECA_NONE;
  this._old_target = new Vector3();
  this._old_position = new Vector3();
  this._old_touch_distance = 0.0;
  this._rot_speed = 1.0;
  this._move_speed = 0.1;
  this._dolly_speed = 0.01;
  
  this._mouse_start = [0,0];
  this._mouse_current = [0,0];
  
  this.Update = function() {
    var mouseStart = this._mouse_start;
    var mouseCurrent = this._mouse_current;
    
    var camera = this._camera;
    
    if (this._action == ECA_ROLL) {
      var rotX, rotY, rot;
      var tar_offset = this._old_position.clone();
      tar_offset.sub( this._old_target );
      var axis = camera._up_vector.clone();
      axis.crossProduct( tar_offset );
      axis.normalize();
      rotX = new Quaternion();
      rotX.fromAngleAxis( (-mouseCurrent[0] + mouseStart[0]) * DEGTORAD , camera._up_vector );
      rotY = new Quaternion();
      rotY.fromAngleAxis( (mouseCurrent[1] - mouseStart[1]) * DEGTORAD, axis );
      rot = rotX.clone();
      rot.multiQuaternion(rotY);
      var mat = rot.getMatrix();
      
      tar_offset = mat.transformVect3(tar_offset);
      tar_offset.add( this._old_target );
      camera.SetPosition( tar_offset );
    }
    else if (this._action == ECA_DOLLY) {
      var p2t = camera._target.clone();
      p2t.sub(camera._relative_position);
      var dis = p2t.getLength();
      var speed_adjust = 1.0;
      if (dis < 2.0) {
        speed_adjust = 0.2;
      }
      p2t.normalize();
      var speed = p2t.clone().multiplyScalar( mouseCurrent[0] * this._dolly_speed * speed_adjust );
      var new_pos = camera._relative_position.clone();
      new_pos.add( speed );
      camera.SetPosition( new_pos );
      
      var p2t1 = camera._target.clone();
      p2t1.sub(camera._relative_position);
      var dotr = p2t1.dotProduct(p2t) ;
      if (dotr < 0) {
        var new_tar = camera._target.clone();
        new_tar.add( speed );
        camera.SetTarget(new_tar);
      }
      this._action = ECA_NONE;
      this._old_target.copy( camera._target );
      this._old_position.copy( camera._relative_position );
    }
    else if (this._action == ECA_MOVE) {
      var p2t = camera._target.clone();
      p2t.sub(camera._relative_position);
      var dirx = p2t.clone();
      dirx = dirx.crossProduct( camera._up_vector );
      dirx.normalize();
      var diry = dirx.crossProduct(p2t);
      diry.normalize();

      dirx.multiplyScalar( (mouseCurrent[0] - mouseStart[0]) );
      diry.multiplyScalar( (mouseCurrent[1] - mouseStart[1]) );
      dirx.add(diry);
      
      var move_offset = dirx.clone();
      move_offset.multiplyScalar( this._move_speed );
      var new_tar = this._old_target.clone();
      new_tar.add(move_offset);
      camera.SetTarget( new_tar );
      var new_pos = this._old_position.clone();
      new_pos.add( move_offset);
      camera.SetPosition( new_pos );
    }

    if (engine_instance != null) {
      engine_instance.NotifyRender();
    }
  };
  
  var scope = this;
  
  function onMouseDown ( event ) {
    if (event.button == MOUSE_LEFT ||
      event.button == MOUSE_RIGHT) {
      scope._mouse_start[0] = event.clientX;
      scope._mouse_start[1] = event.clientY;
      scope._mouse_current[0] = event.clientX;
      scope._mouse_current[1] = event.clientY;
      scope._old_target.copy(scope._camera._target);
      scope._old_position.copy(scope._camera._relative_position);
      
      scope._action = (event.button == MOUSE_LEFT) ? ECA_ROLL : ECA_MOVE;
    }
    if (scope._action != ECA_NONE) {
      document.addEventListener( 'mousemove', onMouseMove, false );
      document.addEventListener( 'mouseup', onMouseUp, false );
      scope.Update();
    }
  }
  
  function onMouseUp ( event ) {
    if (scope._action == ECA_ROLL ||
      scope._action == ECA_MOVE ) {
      scope._old_target.copy(scope._camera._target);
      scope._old_position.copy(scope._camera._relative_position);
      scope._action = ECA_NONE;
      
      document.removeEventListener( 'mousemove', onMouseMove, false );
      document.removeEventListener( 'mouseup', onMouseUp, false );
    }
  }
  
  function onMouseMove ( event ) {
    if (scope._action == ECA_ROLL ||
      scope._action == ECA_MOVE) {
      scope._mouse_current[0] = event.clientX;
      scope._mouse_current[1] = event.clientY;
      scope.Update();
    }
  }
  
  function onMouseWheel ( event ) {
    scope._action = ECA_DOLLY;
    scope._mouse_current[0] = -event.deltaY;
    
    scope.Update();
  }

  function onContextMenu( event ) {
    event.preventDefault();
  }
  
  function onTouchStart( event ) {
    if (event.touches.length == 1) {
      scope._mouse_start[0] = event.touches[0].pageX;
      scope._mouse_start[1] = event.touches[0].pageY;
      scope._mouse_current[0] = event.touches[0].pageX;
      scope._mouse_current[1] = event.touches[0].pageY;
      scope._old_target.copy(scope._camera._target);
      scope._old_position.copy(scope._camera._relative_position);
      
      scope._action = ECA_ROLL ;
    }
    else if (event.touches.length == 2) {
      var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
      var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

      var distance = Math.sqrt( dx * dx + dy * dy );
      scope._mouse_current[0] = 0.0;
      scope._old_touch_distance = distance;
      _LOG._log("distance " + scope._mouse_current[0]);
      
      scope._action = ECA_DOLLY;
    }
    
    if (scope._action != ECA_NONE) {
      //document.addEventListener( 'mousemove', onMouseMove, false );
      //document.addEventListener( 'mouseup', onMouseUp, false );
      scope.Update();
    }
  }
  
  function onTouchEnd( event ) {
  }
  
  function onTouchMove( event ) {
    event.preventDefault();
    event.stopPropagation();
    
    if (event.touches.length == 1) {
      if (scope._action == ECA_ROLL ||
        scope._action == ECA_MOVE) {
        scope._mouse_current[0] = event.touches[0].pageX;
        scope._mouse_current[1] = event.touches[0].pageY;
        scope.Update();
      }
    }

    if (event.touches.length == 2) {
      scope._action = ECA_DOLLY;
      var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
      var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

      var distance = Math.sqrt( dx * dx + dy * dy );
      scope._mouse_current[0] = distance - scope._old_touch_distance;
      scope._old_touch_distance = distance;
      //_LOG._log("distance " + scope._mouse_current[0]);
      scope.Update();
    }
  }
  
  this.dispose = function() {

    scope.domElement.removeEventListener( 'mousedown', onMouseDown, false );
    scope.domElement.removeEventListener( 'wheel', onMouseWheel, false );

    scope.domElement.removeEventListener( 'touchstart', onTouchStart, false );
    scope.domElement.removeEventListener( 'touchend', onTouchEnd, false );
    scope.domElement.removeEventListener( 'touchmove', onTouchMove, false );

    document.removeEventListener( 'mousemove', onMouseMove, false );
    document.removeEventListener( 'mouseup', onMouseUp, false );
  };
  scope._dom_element.addEventListener( 'contextmenu', onContextMenu, false );
  scope._dom_element.addEventListener( 'mousedown', onMouseDown, false );
  scope._dom_element.addEventListener( 'wheel', onMouseWheel, false );

  scope._dom_element.addEventListener( 'touchstart', onTouchStart, false );
  scope._dom_element.addEventListener( 'touchend', onTouchEnd, false );
  scope._dom_element.addEventListener( 'touchmove', onTouchMove, false );
  this.Update();
};

TiController.prototype = {
  constructor : TiController,
};

//////////////////////////////////////////////////////////////////////////
// TiEngine , hold every component
//////////////////////////////////////////////////////////////////////////
var engine_instance = null;
function TiEngine(canvas) {
  this._renderer = new TiRenderer(canvas);
  this._render_stage = new TiRenderStage();
  this._lib_texture = new TiLibraryTexture();
  this._controller = new TiController(this._render_stage._camera, canvas);
  
  this._content = null;
  
  // load default textures
  this._renderer.LoadDefaultTextures();
  
  engine_instance = this;
  _LOG._log("TiEngine initialize finished.");
};

TiEngine.prototype = {
  constructor : TiEngine,
  
  LoadMesh : function( url ) {
    this._render_stage._root = null;
    
    var _tidae_loader = new LoaderTidae();
    return _tidae_loader.Load( url, _tidae_loader.Parse );
  },
  
  SetContent : function ( node ) {
    this._content = node;

    var q = new Quaternion();
    q.fromAngleAxis(Math.PI, new Vector3(0,0,1));
    //node.SetRotation(q);
    
    // set camera
    var camera = this._render_stage.GetActiveCamera();
    camera.SetTarget(new Vector3(0.03436, 0.01112, 0.07077));
    var _scale = 1;
    camera.SetPosition(new Vector3(0.189 * _scale, -0.7488 * _scale, 0.33534 * _scale));
    
    this.NotifyRender();
  },

  NotifyRender : function() {
    this.Render();
  },

  Render : function () {
    this._renderer.ClearBuffers(EFB_COLOR_MASK | EFB_DEPTH_MASK);
    this._render_stage.DrawAll( this._content );
  },
};