// Apply random background color to all inline code elements
const colors = [
  "#ffb86c",
  "#f1fa8c",
  "#6272a4",
  "#8be9fd",
  "#ff79c6",
  "#bd93f9",
];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

window.onload = function () {
  const codeElements = document.querySelectorAll("code");
  codeElements.forEach((element) => {
    element.style.color = getRandomColor();
  });
};

const closeModal = document.getElementById("closemodal");
const openModal = document.querySelectorAll(".notes-icon");
const modal = document.getElementById("modal");

openModal.forEach((el) => {
  el.addEventListener("click", () => {
    const data = el.dataset.entry;
    localStorage.setItem("currentBook", data);
    handleOpenModal();
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  const genres = document.getElementById("modal-genres");
  while(genres.firstChild){
    genres.removeChild(genres.firstChild)
  }
  localStorage.clear();
});

function handleOpenModal() {
  const data = localStorage.getItem("currentBook");
  if (data) {
    const parsedData = JSON.parse(data);
    const title = document.getElementById("modal-title");
    const author = document.getElementById("modal-author");
    const note = document.getElementById("modal-note");
    const rating = document.getElementById("modal-rating");
    const genres = document.getElementById("modal-genres");

    if (title) {
      title.innerText = parsedData.title;
    }
     if (author) {
      author.innerText = parsedData.author;
    }
     if (note) {
      note.innerText = parsedData.note;
    }
     if (rating) {
      rating.innerText = `${parsedData.rating} / 5`;
    }

    if(genres){
      if(parsedData.genre){
        (parsedData.genre).forEach(item => {
          const newListItem = document.createElement('li')
          newListItem.innerText =item
          newListItem.classList.add('modal-listItem')
          genres.appendChild(newListItem)
  
        })
      }
    }

    modal.style.display = "block"; 
  }
}


