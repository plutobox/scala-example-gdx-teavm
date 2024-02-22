package com.pluto.box

import com.github.xpenatan.gdx.backends.teavm.config.{AssetFileHandle, TeaBuildConfiguration, TeaBuilder}
import com.github.xpenatan.gdx.backends.teavm.gen.SkipClass
import org.teavm.vm.TeaVMOptimizationLevel

import java.io.File

@SkipClass
object TeaVMBuilder {
  def main(args: Array[String]): Unit = {
    val teaBuildConfiguration = new TeaBuildConfiguration
    teaBuildConfiguration.assetsPath.add(new AssetFileHandle("../assets"))
    teaBuildConfiguration.shouldGenerateAssetFile = true
    teaBuildConfiguration.webappPath = new File("build/dist").getCanonicalPath

    // Register any extra classpath assets here:
    // teaBuildConfiguration.additionalAssetsClasspathFiles += "com/pluto/box/asset.extension"

    // Register any classes or packages that require reflection here:
    // TeaReflectionSupplier.addReflectionClass("com.pluto.box.reflect")

    val tool = TeaBuilder.config(teaBuildConfiguration)
    tool.setOptimizationLevel(TeaVMOptimizationLevel.FULL)
    tool.setObfuscated(true)
    tool.setShortFileNames(true)
    tool.setStrict(false) // setting this = true breaks teavm
    tool.setSourceMapsFileGenerated(false)
    tool.setMainClass("com.pluto.box.TeaVMLauncher")
    TeaBuilder.build(tool)
  }
}
