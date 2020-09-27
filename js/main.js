
// listen to the window load event so we can start getting elements from the page
window.addEventListener('load', function () {
  // Get header
  var scrollHeader = document.getElementById('scroll-header');

  // Listen to scroll
  if (scrollHeader) {
    window.addEventListener('scroll', function () {

      // if we scroll over the first page then change background color to white
      if (window.scrollY > window.innerHeight) {
        scrollHeader.classList.add('active');
      } else {
        // If not remove the active class again
        scrollHeader.classList.remove('active');
      }
    });
  }
});

// Play audio file on click
var HelloThereAudio = new Audio('./assets/hello-there.mp3');
function playAudio() {
  HelloThereAudio.play();
}

// Open mobile hamburger menu
function openDrawer() {
  var drawer = document.getElementById("drawer");
  if (drawer) {
    if (drawer.className.includes("open")) {
      drawer.classList.remove("open");
    } else {
      drawer.classList.add("open");
    }
  }
}

// Cover page scroll down to second part of the page
function scrollDown() {
  window.scrollBy(0, window.innerHeight);
}