let p = Promise.resolve(5);

p.then((value) => {console.log(value + 5)})
  .catch((reason) => console.log( + reason))