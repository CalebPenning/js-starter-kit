/**
 *  This script generates mock data for local development.
 *  That way, we won't have to make requests to an actual API,
 *  but we can have realistic yet randomized data,
 *  and rapid page loads due to that data being local and static.
 */

/* eslint-disable no-console */

import { generate, extend } from "json-schema-faker"
import { schema } from "./mockDataSchema"
import fs from "fs"
import chalk from "chalk"

// Extend JSF with the fake libs we want to use
extend("faker", () => require("faker"))
const json = JSON.stringify(generate(schema))

fs.writeFile("./src/api/db.json", json, (err) => {
  if (err) return console.log(chalk.red(err))
  else console.log(chalk.green("Mock data generated."))
})
