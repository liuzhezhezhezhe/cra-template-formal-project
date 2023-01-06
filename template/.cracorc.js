const path = require("path");
const { DefinePlugin } = require("webpack");

const config = require("dotenv").config({
  path: path.resolve(__dirname, "./.env." + process.env.NODE_ENV)
});

module.exports = {
  webpack: {
    alias: {
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/types": path.resolve(__dirname, "./src/types"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/apis": path.resolve(__dirname, "./src/apis"),
      "@/stores": path.resolve(__dirname, "./src/stores"),
      "@/constants": path.resolve(__dirname, "./src/constants"),
      "@/mixins": path.resolve(__dirname, "./src/mixins"),
    },
    plugins: {
      add: [
        new DefinePlugin({
          BASE_URL: JSON.stringify(config.parsed.BASE_URL)
        })
      ]
    }
  },
  devServer: {
    port: 8888
  },
};
