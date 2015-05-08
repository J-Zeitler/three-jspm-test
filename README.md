# ES6 experiment with Three.js and jspm

http://threejs.org/
http://jspm.io/

### Run the example

```shell
$ jspm install
$ http-server -p 1337
```

### Known issues

* Traceur, the default ES6 transpiler used by jspm has an ambiguity in tag @0.0.88 and will not load sourcemaps currently. [GitHub issue](https://github.com/google/traceur-compiler/issues/1883).
