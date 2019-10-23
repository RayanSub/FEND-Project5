if ("serviceWorker" in navigator) { //https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
  navigator.serviceWorker
    .register("./sw.js")
    .then(() => {
      console.log("Registration successful");
    })
    .catch(() => {
      console.log("Registration fail");
    });
}
