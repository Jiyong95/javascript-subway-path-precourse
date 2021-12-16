import { ERR_NUM, SUBWAY_RULES } from './data/constants';
import { STATIONS } from './data/subwayData';

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

  isInName(inputName) {
    let result = false;
    STATIONS.forEach(({ name }) => {
      if (name === inputName) {
        result = true;
      }
    });

    return result;
  }

  isValidInput() {
    if (
      !this.isValidLength(this.departure) &&
      !this.isValidLength(this.arrival)
    ) {
      return ERR_NUM.departure;
    }

    if (!this.isInName(this.departure) && !this.isInName(this.arrival)) {
      return ERR_NUM.arrival;
    }

    return 1;
  }
}
