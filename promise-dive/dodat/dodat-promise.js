function dodat() {
    return new Promise((resolve, reject) => {
      const n = parseInt(Math.random() * 1000);
      if (n % 2 == 0) {
        setTimeout(() => resolve(n), 1000);
      } else {
        setTimeout(reject, 1000, n);
      }
    });
  }

  dodat()
    .then(n => {
      console.log(`SUCCESS ${n}`);
      return dodat();
    })
    .then(n => {console.log(`Second Success ${n}`)})
    .catch(n => {
      console.error(`ERROR ${n}`);
    })
    .finally((n)=>{
        console.log("Finally Im here.")
    })

