// Modal Function
var toggleMainPopup = () => {
  /* Cookie Function */
  var handleCookie = {
    // Set Cookie(Name, Value, Expire Time)
    setCookie: (name, val, exp) => {
      var date = new Date();
      // Get Expire Time(Set exp in ms)
      date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
      console.log(name + "=" + val + ";expires=" + date.toUTCString() + ";path=/");
      // Set Cookie
      document.cookie = name + "=" + val + ";expires=" + date.toUTCString() + ";";
    },
    // Get Cookie With Regular Expression
    getCookie: function (name) {
      var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
      return value ? value[2] : null;
    }
  };
  console.log(handleCookie.getCookie("today"));
  // Render Modal
  if (handleCookie.getCookie("today") == "y") {
    $("#portfolioModal2").removeClass("on");
  } else {
    $("#portfolioModal2").addClass("on");
    $('#portfolioModal2').modal('show');
  }
  // Do Not Show Again for 1 day Button
  $("#portfolioModal2").on("click", ".btn_today_close", () => {
    handleCookie.setCookie("today", "y", 1);
    $(this).parents("#portfolioModal2.on").removeClass("on");
    $('#portfolioModal2').modal('hide');
  });
  // Close Button
  $("#portfolioModal2").on("click", "#btn_close", () => {
    $(this).parents("#portfolioModal2.on").removeClass("on");
    $('#portfolioModal2').modal('hide');
  });
}
// Navbar Function
window.addEventListener('DOMContentLoaded', event => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }
  };
  // Shrink the navbar 
  navbarShrink();
  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  };
  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});
