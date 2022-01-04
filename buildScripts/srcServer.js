import express from "express"
import path from "path"
import open from "open"
import webpack from "webpack"
import config from "../webpack.config.dev.js"

/* eslint-disable no-console */

const PORT = 3000
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware') (compiler, {
  publicPath: config.output.publicPath
}))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"))
})

app.get('/users', (req, res) => {
  res.json([
    {id: 1, firstName: "Bob", lastName: "Smith", email: "bobsmith@yahoo.com"},
    {id: 2, firstName: "Cob", lastName: "Corn", email: "cobcornsmith@yahoo.com"},
    {id: 3, firstName: "Blob", lastName: "Smirth", email: "blobsmirth@yahoo.com"}
  ])
})

app.listen(PORT, (err) => {
  if (err) console.log(err)
  else open(`http://localhost:${PORT}`)
})
