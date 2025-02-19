window.addEventListener("scroll", function () {
    const header = document.getElementById("header-top");
    if (window.scrollY > 100) {
      header.style.top = "10px"; // Move to top when scrolling
    //   header.style.backgroundColor = "white"; // Change background color
    //   header.style.color = "black"
    } else {
      header.style.top = "50px"; // Default position
    //   header.style.backgroundColor = "transparent"; // Change background color
    }
  });
