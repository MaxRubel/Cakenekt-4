import { clientCredentials } from "../src/firebaseConfig";

const endpoint = clientCredentials.databaseURL;

const createNewMessage = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/messages.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export default createNewMessage