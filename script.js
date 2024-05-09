
const cursor = document.querySelector("#cursor")
// const imgDiv = document.querySelector("#img-div")
// cursor animation on thorughout the page
document.querySelector("#main").addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
      display: "flex",
      x: dets.x,
      y: dets.y,
      duration: 1,
      ease: "expo.out",
    });
})

document.querySelector("#main").addEventListener("mouseleave", function (dets) {
  gsap.to(cursor, {
      display:"none",
      x: dets.x,
      y: dets.y,
      duration: 1,
      ease: "expo.out",
    });
})

// cursor animation on image hover

document
  .querySelector("#img-div")
  .addEventListener("mousemove", function (dets) {
    cursor.innerHTML = `Visit <i class="ri-arrow-right-fill"></i>`
    this.style.cursor = "pointer"
    gsap.to(cursor, {
      display: "flex",
      height: "27px",
      width: "52px",
      x: dets.x,
      y: dets.y,
      duration: 1,
      ease: "expo.out",
    });
  });

document
  .querySelector("#img-div")
  .addEventListener("mouseleave", function (dets) {
    cursor.innerHTML = ` `;
    this.style.cursor = "auto";
    gsap.to(cursor, {
      display: "flex",
      height: "0.75rem",
      width: "0.75rem",
      x: dets.x,
      y: dets.y,
      duration: 1,
      ease: "expo.out",
    });
  });

