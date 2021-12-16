export default class SubwayView {
  constructor() {
    this.appEl = document.getElementById('app');
  }

  render() {
    this.template();
    this.inputView();
  }

  template() {
    this.appEl.innerHTML = `
    <h1>🚇 지하철 길찾기 </h1>
    <div id="input-view"></div>
    <div id="result-view"></div>
    `;
  }

  inputView() {
    document.getElementById('input-view').innerHTML = `
      <div style="margin-bottom:20px">
        <span style="font-weight:700">출발역</span>
        <input id="departure-station-input"></input>
      </div>
      <div style="margin-bottom:20px">
        <span style="font-weight:700">도착역</span>
        <input id="arrival-station-input"></input>
      </div>
      <div style="margin-bottom:20px">
        <input type="radio" name="search-type" value="shortest-path" checked></input>
        <label for="shortest-path">최단거리</label>
        <input type="radio" name="search-type" value="shortest-time"></input>
        <label for="shortest-time">최소시간</label>
      </div>
      <div style="margin-bottom:20px">
        <button id="search-button">길 찾기</button>
      </div>
    `;
  }
}
