const bentocards = document.querySelectorAll(".bentocard");
const projectcards = document.querySelectorAll("#p-cards");

bentocards.forEach((item) => {
  item.setAttribute("data-tilt", "");
  item.setAttribute("data-tilt-glare", "");
  item.setAttribute("data-tilt-max", "5");
  item.setAttribute("data-tilt-max-glare", "0.2");
});

projectcards.forEach((item) => {
  item.setAttribute("data-tilt", "");
  item.setAttribute("data-tilt-glare", "");
  item.setAttribute("data-tilt-max", "5");
  item.setAttribute("data-tilt-max-glare", "0.2");
});

const cursor = document.getElementById("cursor");

let cursorX = 0,
  cursorY = 0;

const move = (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;

  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;

  //   console.log(`${cursorX}` + ", " + `${cursorY}`);
};

document.addEventListener("mousemove", (e) => {
  move(e);
});

window.onscroll = function (e) {
  document.addEventListener("mousemove", (e) => {
    move(e);
  });
};

const copyToClipboard = () => {
  navigator.clipboard.writeText("itspringle1213@gmail.com");
};

const sidebar = document.querySelector(".sidebar-menu-container");

const sidebarToggle = () => {
  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active"))
    document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";
};
