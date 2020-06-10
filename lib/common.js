function stringify(data) {
  return JSON.stringify(data, null, 2);
}

function sort(data) {
  return data.sort((a, b) => (a.id > b.id ? 1 : -1));
}

module.exports = { stringify, sort };
