// $(document).ready(function () {
//     $('.bottom-nav li a').click(function(){
//         var position = $(this).position();
//         var margin = 37;
//         $('.slider').css({"left":+position.left+margin ,  "transform": "translateX(-50%)"});
//         $('.bottom-nav li a').removeClass('active-icon');
//         $(this).addClass('active-icon');
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const filterToggleBtn = document.querySelector('.filter-toggle-btn');
    const filterSidebar = document.querySelector('.filter-sidebar');
    const filterClose = document.querySelector('.closefilter')
  
    filterToggleBtn.addEventListener('click', function() {
      filterSidebar.classList.toggle('show');
    });
    filterClose.addEventListener('click', function() {
      filterSidebar.classList.toggle('show');
    });
  });
  // function toggleAccordion(section) {
  //   var toggleElement = document.getElementById(section + '-toggle');
  //   var listElement = document.getElementById(section + '-list');
  
  //   if (listElement.style.display === 'none') {
  //     listElement.style.display = 'block';
  //     toggleElement.innerText = '-';
  //   } else {
  //     listElement.style.display = 'none';
  //     toggleElement.innerText = '+';
  //   }
  // }
    


//   // Accordion Action
// const accordionItem = document.querySelectorAll(".accordion-item");

// accordionItem.forEach((el) =>
//   el.addEventListener("click", () => {
//     if (el.classList.contains("active")) {
//       el.classList.remove("active");
//     } else {
//     //   accordionItem.forEach((el2) => el2.classList.remove("active"));
//       el.classList.add("active");
//     }
//   })
// );
