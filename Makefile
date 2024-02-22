skin-composer:
	java_11=$$(ls -d ~/.sdkman/candidates/java/11.* 2>/dev/null | head -n 1) && { [[ -n "$$java_11" ]] || { echo "Could not find java 11 in sdkman."; false; }; } && pwd=$$(pwd) && $$java_11/bin/java -jar ~/.skincomposer/bin/SkinComposer.jar "$$pwd/assets/skincomposer/default.scmp"

js:
	sbt "compile" && sbt "compile/buildJavaScript"

# Don't use this target. Start jetty from within `sbt` session.
jetty:
	sbt "jetty:start"

# Don't use this one either.
rld:
	$(MAKE) js && $(MAKE) jetty
