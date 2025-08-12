require("esbuild").build({
  entryPoints: ["src/client.js"],
  bundle: true,
  outfile: "public/client.js",
  loader: { ".js": "jsx" }
}).catch(() => process.exit(1));
