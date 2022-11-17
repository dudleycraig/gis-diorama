import { writeFileSync } from "fs";
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";

const generateStylesCljs = (_, json) => {
  const lines = ["(ns styles)\n"];
  for (let [key, value] of Object.entries(json)) {
    lines.push(`(def ${key} "${value}")`);
  }
  writeFileSync("src/cljs/main/styles.cljs", lines.join("\n"));
  console.log("=== Created styles.cljs ===");
};

export default [
  {
    input: "src/cljs/styles/core.scss",
    output: {
      file: "public/css/core.css",
      format: "es"
    },
    plugins: [
      postcss({
        plugins: [autoprefixer],
        extract: true,
        minimize: true,
        sourceMap: false,
        extensions: [".scss"],
        modules: {
          generateScopedName: "[local]"
        },
        autoModules: false
      })
    ]
  }
];
