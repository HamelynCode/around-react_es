class Api {
  constructor({ user, url, headers }) {
    this._user = user;
    this._url = url;
    this._headers = headers;
  }

  _makeRequest(method, url, body) {
    return fetch(`${this._url}${url}`, {
      method: method,
      headers: this._headers,
      body: method !== "GET" ? JSON.stringify(body) : undefined,
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.statusText}`);
    });
  }

  getUserInfo() {
    return this._makeRequest("GET", `/users/${this._user}`);
  }

  getInitialCards() {
    return this._makeRequest("GET", "/cards");
  }

  editProfile(name, about) {
    return this._makeRequest("PATCH", `/users/${this._user}`, {
      name: name,
      about: about,
    });
  }

  addNewCard(name, url) {
    return this._makeRequest("POST", `/cards`, {
      name: name,
      link: url,
    });
  }

  deleteCard(cardId) {
    return this._makeRequest("DELETE", `/cards/${cardId}`);
  }

  addNewLike(cardId) {
    return this._makeRequest("PUT", `/cards/likes/${cardId}`);
  }

  removeLike(cardId) {
    return this._makeRequest("DELETE", `/cards/likes/${cardId}`);
  }

  setProfileImage(url) {
    return this._makeRequest("PATCH", `/users/${this._user}/avatar`, {
      avatar: url,
    });
  }
}

const api = new Api({
  user: 'me',
  url: 'https://around.nomoreparties.co/v1/web_es_cohort_02',
  headers: {
    authorization: '43821f01-4b26-43b6-994f-72bfc960dac4',
    'Content-Type': 'application/json',
  }
});

export default api;