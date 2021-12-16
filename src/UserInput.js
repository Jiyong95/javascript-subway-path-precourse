import { ERR_NUM, SUBWAY_RULES } from './data/constants';

export default class UserInput {
  constructor() {
    this.departure = document.getElementById('departure-station-input').vlaue;
    this.arrival = document.getElementById('arrival-station-input').vlaue;
    this.select = '';
  }

  getSelect() {
    const selectsEl = document.getElementsByName('search-type');
    selectsEl.forEach((selectEl) => {
      if (selectEl.checked) {
        this.select = selectEl.value;
      }
    });
  }

  isValidLength(name) {
    return name.length;
  }

  isValidInput() {
    if (!this.isValidLength(this.departure)) {
      return ERR_NUM.departure;
    }
    if (!this.isValidLength(this.arrival)) {
      return ERR_NUM.arrival;
    }

    return 1;
  }
}
