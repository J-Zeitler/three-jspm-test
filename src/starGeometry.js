import THREE from 'three.js'

export default class StarGeometry extends THREE.BufferGeometry {
  constructor(
    radius = 1,
    arms = 5,
    thickness = 0.5
  ) {
    super();

    this.radius = radius;
    this.arms = arms;
    this.thickness = thickness;

    this.vertexCount = arms*2 + 2;

    this.tessellate();
  }

  tessellate() {
    /**
     * Positions + normals
     */
    var TPI = 2*Math.PI;
    var point = TPI/this.arms;
    var posData = [];
    var normalData = [];

    for (var theta = 0; theta < TPI; theta += 0.5*TPI/this.arms) {
      var pos = new THREE.Vector3(
        this.radius*Math.cos(theta),
        this.radius*Math.sin(theta),
        0.0
      );

      // crease (TODO: causes float error sometimes)
      if (theta%point > 1e-10) {
        pos.multiplyScalar(0.5);
      }

      posData.push(pos.x); posData.push(pos.y); posData.push(pos.z);

      pos.normalize();
      normalData.push(pos.x); normalData.push(pos.y); normalData.push(pos.z);
    }

    // Midpoints
    posData.push(0.0); posData.push(0.0); posData.push(this.thickness);
    posData.push(0.0); posData.push(0.0); posData.push(-this.thickness);

    normalData.push(0.0); normalData.push(0.0); normalData.push(1.0);
    normalData.push(0.0); normalData.push(0.0); normalData.push(-1.0);


    var positions = new Float32Array(3*(this.arms*2 + 2));
    positions.set(posData);
    var normals = new Float32Array(3*(this.arms*2 + 2));
    normals.set(normalData);

    /**
     * Indices
     */
    var rimVerts = this.vertexCount - 2;

    var midFront = this.vertexCount - 2;
    var midBack = this.vertexCount - 1;

    var indexData = [];
    for (var i = 0; i < rimVerts; i++) {
      var next = (i + 1)%rimVerts;
      // front
      indexData.push(i); indexData.push(next); indexData.push(midFront);

      // back
      indexData.push(i); indexData.push(midBack); indexData.push(next);
    }

    var indices = new Uint16Array(rimVerts*3*2);
    indices.set(indexData);

    this.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.addAttribute('index', new THREE.BufferAttribute(indices, 1));
    this.addAttribute('normal', new THREE.BufferAttribute(normals, 3));
  }
}
