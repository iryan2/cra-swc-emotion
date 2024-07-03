const CracoSwcPlugin = require("craco-swc");

module.exports = {
  plugins: [
    {
      plugin: CracoSwcPlugin,
      options: {
        swcLoaderOptions: {
          jsc: {
            externalHelpers: true,
            target: "es2015",
            parser: {
              syntax: "typescript",
              jsx: true,
              dynamicImport: true,
              exportDefaultFrom: true,
            },
            experimental: {
              plugins: [
                ["@swc/plugin-emotion", { labelFormat: "[filename]-[local]" }],
              ],
            },
          },
        },
      },
    },
  ],
};
