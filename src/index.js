const fetch = require('isomorphic-unfetch');

const defaultApi = require('./api');

function generateQueryPath(opts, method) {
  const { path, query } = method.params || {};
  let uri = `${method.path}`;
  (path || []).forEach((param) => {
    if (opts[param] === undefined) {
      throw Error(`Required path parameter '${param}' not defined`);
    }
    uri = `${uri}/${opts[param]}`;
  });
  if (query) {
    uri = `${uri}?`
  }
  (query || []).forEach((param, i) => {
    if (opts[param] === undefined) {
      throw Error(`Required query parameter '${param}' not defined`);
    }
    uri = `${uri}${param}=${opts[param]}${i === query.length - 1 ? '' : '&'}`;
  });
  return uri;
}

function generateMethod(method, config) {
  // parse the method
  return (opts) => {
    const query = generateQueryPath(opts, method);
    const uri = `${config.endpoint}${query}`;
    config.debug && console.log('fetching', uri)
    return fetch(uri)
      .then(res => res.json())
      .then((res) => {
        if (res.Left) { throw Error(res.Left); }
        return res;
      })
      .then(data => data.Right); // cardano querk
  }
}

module.exports = class CardanoExplorerApi {
  constructor (opts) {
    const config = { ...defaultApi, ...opts }
    Object.keys(config.methods).forEach((name) => {
      const method = config.methods[name];
      this[name] = generateMethod(method, config);
      (method.aliases || []).forEach((alias) => {
        this[alias] = this[name];
      });
    });
  }
}
