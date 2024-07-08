// ResumeTemplate v1.0 ClearCareer
// url: clearcareer.ca
// by: Iskender Piyale-Sheard
// website: izzydoesizzy.com
// Created 06-27-2016
 

// Smooth Scroll Function
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


function toggleParagraph(element) {
  const content = element.nextElementSibling;
  if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
}
