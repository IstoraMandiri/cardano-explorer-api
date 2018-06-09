const api = require('../src/api.js');

let str = `
## API

Default Endpoint: [${api.endpoint}](${api.endpoint})

|Method(Params)|Aliases|URI|
|--|--|--|
${Object.keys(api.methods).map((name) => {
  console.log(name)
  const method = api.methods[name];
  const { path, query } = (method.params || {});
  const allParams = (path || []).concat(query || []);
  return `|\`${name}({ ${allParams.join(', ')} })\`|${(method.aliases || []).map(a => `\`${a}\``).join(', ')}|${method.path}${path ? path.map(p => `/{${p}}`).join('') : ''}|`;
}).join('\n')}
`

console.log(str);
