# scala-example-gdx-teavm

Live release: https://plutobox.github.io/scala-example-gdx-teavm/main

This project has a wild stack!
- [LibGDX](https://libgdx.com/)
  - Java game engine.
- [TeaVM](https://teavm.org/)
  - Compiler for Java bytecode that emits JavaScript and WebAssembly that runs in a browser.
- [gdx-teavm](https://github.com/xpenatan/gdx-teavm)
  - A backend solution for running LibGDX games in a web browser. Uses TeaVM.
- [sbt](https://www.scala-sbt.org/)
  - Simple build tool. A build tool of choice for Scala developers... _usually_.
- [Jetty](https://eclipse.dev/jetty/)
  - A web server and servlet container. For local development.

### CICD

Releases are the result of transpiling javascript using teavm in github actions. See branch [gh-pages](https://github.com/plutobox/scala-example-gdx-teavm/tree/gh-pages).

Every branch will have its own release to `gh-pages`.

### Local usage

Compile and transpile js.
```
make js
```

Start jetty server.
```
sbt

sbt:scala-example-gdx-teavm> jetty:start
```

Game should be rendered locally at http://localhost:8080/.

There's also a desktop runner. Other runners can be implemented as well.
