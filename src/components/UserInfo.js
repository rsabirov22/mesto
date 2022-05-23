import { container } from '../utils/constants.js'

export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this._profileName = container.querySelector(profileName);
    this._profileJob = container.querySelector(profileJob);
	}

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      description: this._profileJob.textContent
    }
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileJob.textContent = data.description;
  }
}
