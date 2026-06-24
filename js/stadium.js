const mainImage = document.querySelector("#mainImage");
const buttons = document.querySelectorAll(".stadium-button");

function imageChange() {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      mainImage.src = button.dataset.image;
    });
  });
}

imageChange();
