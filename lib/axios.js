// Example POST method implementation:
export default {
  post: (url = "", data = {}, headers = {}) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          // mode: "no-cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            ...headers,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        if (response.ok) return resolve(await response.json());
        throw new Error(await response.text());
      } catch (err) {
        reject(JSON.parse(err.message));
      }
      // Default options are marked with *
    });
  },
  get: (url, headers = {}) => {
    // Default options are marked with *
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url, {
          //   method: "GET", // *GET, POST, PUT, DELETE, etc.
          //   mode: "cors", // no-cors, *cors, same-origin
          //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          //   credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            ...headers,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          //   redirect: "follow", // manual, *follow, error
          //   referrerPolicy: "no-referrer", // body data type must match "Content-Type" header
        });
        if (response.ok) return resolve(await response.json());
        throw new Error(await response.text());
      } catch (err) {
        reject(JSON.parse(err.message));
      }
    });
  },
};
