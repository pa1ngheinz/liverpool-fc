const trophyContainer = document.querySelector(".trophy-container");
let html = "";

async function fetchData() {
  const response = await fetch("./data/images.json");
  const data = await response.json();

  data.forEach((element) => {
    html += `
        <div class="trophy-card">
          <div class="trophy-thumbnail">
            <img
              id="trophy-image"
              src="${element.src}"
              alt="Champion League"
            />
          </div>

          <div class="trophy-info">
            <p id="trophy-number">${element.trophy}</p>
            <p id="trophy-name">${element.name}</p>
          </div>
        </div>
    `;
    trophyContainer.innerHTML = html;
  });
}

fetchData();
