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

This can be done directly with the jspm-cli by running:

```shell
$ jspm bundle-sfx src/main release/bundle.js
```

or:

```shell
jspm bundle-sfx --minify src/main release/bundle.js
```

Compare `release/index.html` to `intex.html` in the root. There are some manual glue but that is because there is no dedicated taskrunner in this project.

### Known issues

* Traceur, the default ES6 transpiler used by jspm has an ambiguity in tag @0.0.88 and will not load sourcemaps currently. [GitHub issue](https://github.com/google/traceur-compiler/issues/1883).
