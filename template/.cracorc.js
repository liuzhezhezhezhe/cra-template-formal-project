const path = require("path");

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
  },
  devServer: {
    port: 8888
  },
};
