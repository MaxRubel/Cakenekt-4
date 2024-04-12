import { clientCredentials } from "../src/firebaseConfig";

const endpoint = clientCredentials.databaseURL;

const createNewGame = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/games.json`, {
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

const updateGame = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/games/${payload.gameId}.json`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { createNewGame, updateGame };
