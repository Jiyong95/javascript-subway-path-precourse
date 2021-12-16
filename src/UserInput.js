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
}
