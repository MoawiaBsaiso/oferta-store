/* fixed position */
if ($(".sideMenu.open").is(":visible")) {
  $("body").addClass("fixed-position");
  console.log("fixed position");
} else {
  $("body").removeClass("fixed-position");
}
// prompt("what?", "");
$(document).ready(function() {
  $(".dropdown").hover(function() {
      // $(this).preventDefault();
      $(this).toggleClass("open");
  });
});


const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});


/*
━━━━━━━━━━━━━━━━━━━━━━━━━


 * Dropdown menu for bottom navbar


━━━━━━━━━━━━━━━━━━━━━━━━━
*/

// document.addEventListener('DOMContentLoaded', function() {
//    const dropdownToggle = document.querySelector('.dropdown-toggle');
//    const dropdownMenu = document.querySelector('.dropdown-menu');
 
//    dropdownToggle.addEventListener('click', function() {
//      this.classList.toggle('active');
//      dropdownMenu.classList.toggle('active');
//    });
 
//    // Close the dropdown menu when clicking outside
//    document.addEventListener('click', function(event) {
//      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
//        dropdownToggle.classList.remove('active');
//        dropdownMenu.classList.remove('active');
//      }
//    });
//  });
document.addEventListener('DOMContentLoaded', function() {
  const dropdownLink = document.querySelector('.dropdowns');
  const dropdownMenu = document.querySelector('.dropdown-menus');
  const dropdownClose = document.querySelector('.close-icon');
  const bodyOverlay = document.querySelector('.body-overlay');

 
  dropdownLink.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownMenu.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
    dropdownLink.classList.toggle('active');
    document.body.classList.toggle('show-menu');
  });
  
  dropdownClose.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownMenu.classList.remove('show');
    document.body.classList.remove('no-scroll');
    dropdownLink.classList.remove('active');
    document.body.classList.toggle('show-menu');
  });
  
  // document.addEventListener('click', function(event) {
  //   const target = event.target;
  //   if (!dropdownLink.contains(target) && !dropdownMenu.contains(target)) {
  //     dropdownMenu.classList.remove('show');
  //     document.body.classList.remove('no-scroll');
  //     dropdownLink.classList.remove('active');
  //   }
  // });
  bodyOverlay.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownMenu.classList.remove('show');
    document.body.classList.remove('show-menu');
  });
});






 document.addEventListener("DOMContentLoaded", function() {
  var dropdownToggles = document.querySelectorAll(".footer-column h3");

  for (var i = 0; i < dropdownToggles.length; i++) {
    dropdownToggles[i].addEventListener("click", function() {
      var column = this.parentNode;
      column.classList.toggle("active");
    });
  }
});

