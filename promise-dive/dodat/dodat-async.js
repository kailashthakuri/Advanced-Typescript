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

  async function dodatExecute() {
    try {
      const n = await dodat();
      console.log(`SUCCESS AWAIT ${n}`);
      await dodat();
      console.log(`SUCCESS SECOND`);
      await dodat();
      console.log(`SUCCESS THIRD`);
      await dodat();
    } catch (n) {
      console.error(`FAIL AWAIT ${n}`);
    } finally {
      console.log(`Finally Im here.`);
    }
  }
  dodatExecute();