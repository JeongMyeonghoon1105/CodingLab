function popup() {
    // window.open("https://github.com/JeongMyeonghoon1105/Images/blob/main/image.png?raw=true", "1st PopUp", "width=400, height=566, left=100, top=50");
    $('#portfolioModal2').modal('show');
}

var toggleMainPopup = () => {
    /* 쿠키 제어 함수 정의 */
    var handleCookie = {
      // 쿠키 쓰기
      // 이름, 값, 만료일
      setCookie: (name, val, exp) => {
        var date = new Date();
        
        // 만료 시간 구하기(exp를 ms단위로 변경)
        date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
        console.log(name + "=" + val + ";expires=" + date.toUTCString() + ";path=/");
        
        // 실제로 쿠키 작성하기
        document.cookie = name + "=" + val + ";expires=" + date.toUTCString() + ";";
      },
      // 쿠키 읽어오기(정규식 이용해서 가져오기)
      getCookie: function (name) {
        var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
        return value ? value[2] : null;
      }
    };
    console.log(handleCookie.getCookie("today"));
    
    // 쿠키 읽고 화면 보이게
    if (handleCookie.getCookie("today") == "y") {
      $("#portfolioModal2").removeClass("on");
    } else {
      $("#portfolioModal2").addClass("on");
      $('#portfolioModal2').modal('show');
    }
  
    // 오늘하루 보지 않기 버튼
    $("#portfolioModal2").on("click", ".btn_today_close", () => {
      handleCookie.setCookie("today", "y", 1);
      $(this).parents("#portfolioModal2.on").removeClass("on");
      $('#portfolioModal2').modal('hide');
    });
  
    // 일반 버튼
    $("#portfolioModal2").on("click", "#btn_close", () => {
      $(this).parents("#portfolioModal2.on").removeClass("on");
      $('#portfolioModal2').modal('hide');
    });
}
  
$(() => {
    toggleMainPopup();
});

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
