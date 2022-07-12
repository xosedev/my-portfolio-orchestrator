import s from 'shelljs';
const config = require('./tsconfig.json');
const outDir = config.compilerOptions.outDir;

s.rm('-rf', outDir);
s.mkdir(outDir);
s.cp('.env', `${outDir}/.env`);
s.mkdir('-p', `${outDir}/common/swagger`);
s.cp('src/common/api.yml', `${outDir}/common/api.yml`);
s.mkdir('-p', `${outDir}/keys`);
s.cp('src/keys/fullchain.pem', `${outDir}/keys/fullchain.pem`)
s.cp('src/keys/privkey.pem', `${outDir}/keys/privkey.pem`)
