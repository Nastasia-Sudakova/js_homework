const btn = document.getElementById("btn");

btn.addEventListener("click", function onClick() {
  if (btn.style.backgroundColor === "grey") {
    btn.style.backgroundColor = "grey";
    btn.style.margin = "2vw";
    console.log("change color");
  } else {
    btn.style.backgroundColor = "white";
    btn.style.margin = "1vw";
  }
});
