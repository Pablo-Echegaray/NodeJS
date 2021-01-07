function foreachAsync(arr, callBack, onFinish) {
  if (onFinish === undefined) {
    onFinish = () => console.log("Funciono!"); //esto lo seteamos porque hicimos el segundo foreachaync que hacia una segunda iteracion.
  }
  let idx = 0;
  (function foreachAsyncInterna() {
    if (idx == arr.lenght) {
      onFinish();
      return;
    }
    callBack(
      arr[idx],
      () => {
        setTimeout(foreachAsyncInterna, 1);
      },
      () => {
        onFinish("el proceso aborto");
      }
    );
    idx++;
  })();
}

module.exports = foreachAsync;
