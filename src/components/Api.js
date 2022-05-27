export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._token = options.headers.authorization;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      return res.json();
    });
  }
}
