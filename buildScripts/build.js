/* eslint-disable no-console */
import webpack from "webpack"
import webpackConfig from "../webpack.config.prod"
import chalk from "chalk"

process.env.NODE_ENV = "production"

console.log(chalk.blue("Generating minified bundle for production. This will take a moment..."))

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err))
    return 1
  }
  console.log(chalk.green("Here's the stats: " + stats))
  return 0
})
