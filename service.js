require('@babel/register')({
  presets: ["@babel/preset-env", "@babel/preset-react"]
});

const express = require("express");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const App = require("./src/App").default;

const app = express();

// Bootstrap serve करना
app.use("/bootstrap", express.static(path.resolve("node_modules/bootstrap/dist")));

// Public folder serve करना (client bundle)
app.use(express.static("public"));

// All routes पर SSR
app.get("*", (req, res) => {
  const appHTML = ReactDOMServer.renderToString(React.createElement(App));

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR App</title>
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
      </head>
      <body>
        <div id="root">${appHTML}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("🚀 Server chal raha hai: http://localhost:3000");
});
