const program = require('commander');
const api = require('./index.js')
program
  .option('-x,-xxx','what the x')
program
  .command('add')
  .description('添加一个任务名')
  .action((...args) => {
    let words = (args.reverse()[0]).join("")
    // const words = (args[args.length-1])
    console.log('123')
    console.log(words)
    api.add(words)
  });
program.parse(process.argv);