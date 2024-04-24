import resolve from "@rollup/plugin-node-resolve";
import resolveCjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/main.ts",
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [typescript(), resolveCjs(), resolve()],
  onwarn: function (warning, handler) {
    if (warning.code === "THIS_IS_UNDEFINED") {
      return;
    }
    handler(warning);
  },
};
