const program = require('commander');
const api = require('./index.js')
program
  .option('-x,-xxx','what the  ')
program
  .command('add')
  .description('添加一个任务名')
  .action((...args) => {
    let words = (args.reverse()[0]).join("")
    api.add(words).then(()=>{console.log("添加成功")},()=>{console.log("添加失败")})
  });
program
  .command('clear')
  .description('消除这个任务')
  .action(() => {
    api.clear().then(()=>{console.log("清除成功")},()=>{console.log("清除失败")})
  });

// program.parse(process.argv);
  if(process.argv.length===2){
    void api.showAll()
  }





