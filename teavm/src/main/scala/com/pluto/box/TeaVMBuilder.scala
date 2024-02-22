package com.pluto.box

import com.github.xpenatan.gdx.backends.teavm.config.{TeaBuildConfiguration, TeaBuilder}
import com.github.xpenatan.gdx.backends.teavm.gen.SkipClass
import org.teavm.vm.TeaVMOptimizationLevel

import java.io.File

@SkipClass
object TeaVMBuilder {
  def main(args: Array[String]): Unit = {
    val teaBuildConfiguration = new TeaBuildConfiguration
    teaBuildConfiguration.assetsPath.add(new File("../assets"))
    teaBuildConfiguration.webappPath = new File("build/dist").getCanonicalPath

    // Register any extra classpath assets here:
    // teaBuildConfiguration.additionalAssetsClasspathFiles += "com/pluto/box/asset.extension"

    // Register any classes or packages that require reflection here:
    // TeaReflectionSupplier.addReflectionClass("com.pluto.box.reflect")

    val tool = TeaBuilder.config(teaBuildConfiguration)
    tool.setOptimizationLevel(TeaVMOptimizationLevel.ADVANCED)
    tool.setObfuscated(true)
    tool.setShortFileNames(true)
    tool.setSourceFilesCopied(false)
    tool.setStrict(true)
    tool.setSourceMapsFileGenerated(false)
    tool.setMainClass("com.pluto.box.TeaVMLauncher")
    TeaBuilder.build(tool)
  }
}
