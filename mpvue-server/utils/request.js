const Fly=require("flyio/src/node")

const fly=new Fly;
exports.get = function (url) {
  return new Promise((resovle,reject) => {
    fly.get(url)
      .then(function (response) {
        resovle(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  })
}
