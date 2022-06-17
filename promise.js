const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (reaksi) => {
  return Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    .then((respon) => {
      const [IXX, VGC] = respon;
      return [...IXX, ...VGC].filter((movie) => movie.hasil === reaksi).length;
  })
  .catch((err) => {
    console.log(err);
  });
};

module.exports = {
  promiseOutput,
};
