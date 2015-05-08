# ES6 experiment with Three.js and jspm

http://threejs.org/
http://jspm.io/

### Run the example

```shell
$ jspm install
$ http-server -p 1337
```

### Build/Bundle
*(Note: Not needed for development!)*

Bundling is done directly with the jspm-cli by running:

```shell
$ jspm bundle src/main release/bundle.js
```

To go back to separate file loading, run:

```shell
$ jspm unbundle
```

### Known issues

* Traceur, the default ES6 transpiler used by jspm has an ambiguity in tag @0.0.88 and will not load sourcemaps currently. [GitHub issue](https://github.com/google/traceur-compiler/issues/1883).
