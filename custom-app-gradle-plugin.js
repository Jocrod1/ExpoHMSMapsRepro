const { withAppBuildGradle } = require("@expo/config-plugins");

module.exports = function customGradlePlugin(config) {
  return withAppBuildGradle(config, async (config) => {
    config.modResults.contents = config.modResults.contents.replace(
      "dependencies {",
      `dependencies {
      
        implementation 'com.huawei.agconnect:agconnect-core:1.5.2.300'`
    );

    config.modResults.contents += `\napply plugin: 'com.huawei.agconnect'`;

    return config;
  });
};
