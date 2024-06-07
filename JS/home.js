
// Window.scrollTo(0,202)
// console.log("jghsadnk");
// let span = document.querySelector("s")
// span.onclick = function () {
//   Window.scrollTo (0,100)
// }
// console.log("jghsadnk"); // For debugging purposes
// let span = document.querySelector("s"); // Ensure <s> is the correct selector
// if (span) {
//   span.onclick = function () {
//     window.scrollTo(0, 100); // Correct case and spacing
//   };
// }
let span = document.querySelector(".scroll-trigger");
if (span) {
  span.onclick = function () {
    window.scrollTo({
      top: 900,
      behavior: "smooth"
    });
  };
}
