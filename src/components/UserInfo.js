import { container } from '../utils/constants.js'

export default class UserInfo {
  constructor({ profileName, profileJob, profileAvatar }) {
    this._profileName = container.querySelector(profileName);
    this._profileJob = container.querySelector(profileJob);
    this._profileAvatar = container.querySelector(profileAvatar);
	}

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileJob.textContent
    }
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileJob.textContent = data.about;
    this._profileAvatar.src = data.avatar;
  }
}
