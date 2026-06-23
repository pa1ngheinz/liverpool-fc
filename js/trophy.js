const trophyContainer = document.querySelector(".trophy-container");

async function fetchData() {
  try {
    const response = await fetch("./data/images.json");

    // If fetching wasn't success
    if (!response.ok) {
      throw new Error("No trophy to show!");
    }
    const data = await response.json();

    // If json data was empty
    if (data.length === 0 || data.error === true) {
      throw new Error("No trophy to show!");
    }

    let html = "";
    data.map((data) => {
      html += `
            <div class="trophy-card">
            <div class="trophy-thumbnail">
                <img
                id="trophy-image"
                src="${data.src}"
                alt="#"
                />
            </div>

            <div class="trophy-info">
                <p id="trophy-number">${data.trophy}</p>
                <p id="trophy-name">${data.name}</p>
            </div>
            </div>
        `;
    });
    trophyContainer.innerHTML = html;

    // data.forEach((element) => {
    //   html += `
    //         <div class="trophy-card">
    //         <div class="trophy-thumbnail">
    //             <img
    //             id="trophy-image"
    //             src="${element.src}"
    //             alt="#"
    //             />
    //         </div>

    //         <div class="trophy-info">
    //             <p id="trophy-number">${element.trophy}</p>
    //             <p id="trophy-name">${element.name}</p>
    //         </div>
    //         </div>
    //     `;
    // });
    // trophyContainer.innerHTML = html;
  } catch (error) {
    trophyContainer.classList.add("errMsg");
    let errorMsg = `<div style="color: red; font-size: 2rem">${error.message}</div>`;

    trophyContainer.innerHTML = errorMsg;
  }
}

fetchData();
