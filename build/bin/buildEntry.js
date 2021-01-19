const log = console.log;
const { join } = require('path');
const { readdirSync, writeFileSync } = require('fs');
const  uppercamelcase = require('uppercamelcase');
const { version } = require("../../package.json");

const CWD = process.cwd();
const plugDir = join(CWD , './packages');

function compileDir(dir){
    const files = readdirSync(dir);
    log(files);
    files.forEach( item => {
      
    })
}
compileDir(plugDir)