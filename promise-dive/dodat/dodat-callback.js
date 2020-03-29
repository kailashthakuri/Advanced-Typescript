function dodat(onsuccess, onerror) {
  const n = parseInt(Math.random() * 1000);
  if (n % 2 == 0) {
    setTimeout(() => onsuccess(n), 1000);
  } else {
    setTimeout(onerror, 1000, n);
  }
}

dodat(
  n => {
    console.log(`SUCCESS ${n}`);
  },
  n => {
    console.error(`ERROR  ${n}`);
  }
);
export {};
