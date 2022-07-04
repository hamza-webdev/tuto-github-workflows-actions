const program = require('commander')
const fs = require('fs')

async function doSomething(arg) { return arg }

async function main() {
  const event = JSON.parse(fs.readFileSync('/github/workflow/event.json', 'utf8'))
  
  const firstArg = program.firstArg
  
  const result = await doSometing(firstArg)

  return result
}

if (require.main === module) {
  program
  .option('-f, --firstArg <argParam>', 'The list of valid licenses')
  .parse(process.argv)

  main()
    .then(res => {
      console.log({ res })
      process.exitCode = 0
    })
    .catch(err => {
      console.log({ err })
      process.exitCode = 1
    })
}
