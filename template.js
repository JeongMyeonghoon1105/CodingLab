var template = {
  basic : (content) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Basics -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>동탄코딩랩학원</title>
        <!-- Fonts & Icons -->
        <link rel="icon" type="image/x-icon" href="assets/img/logos/logo.png">
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css">
        <link href="https://webfontworld.github.io/woowahan/BMHannaPro.css" rel="stylesheet">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
        </style>
        <!-- CSS -->
        <link href="css/styles.css" rel="stylesheet">
        <!-- Image Slider -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
        <script>
          $(document).ready(function(){
            $('.slider').bxSlider({
              auto: true,
            });
            $('.gallery').bxSlider({
              auto: false,
            });
          });
        </script>
      </head>
      <body id="page-top">
        <!-- Header -->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div class="container">
            <a class="navbar-brand" href="/">
              Coding lab
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i class="fas fa-bars ms-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li class="nav-item"><a class="nav-link" href="/#curriculum">커리큘럼</a></li>
                <li class="nav-item"><a class="nav-link" href="/#gallery">갤러리</a></li>
                <li class="nav-item"><a class="nav-link" href="/#consulting">상담안내</a></li>
                <li class="nav-item"><a class="nav-link" href="/#notice">학원소식</a></li>
                <li class="nav-item"><a class="nav-link" href="/#map">방문안내</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- Content -->
        ${content}
        <!-- Footer -->
        <footer class="footer py-4" style="background-color: #212529;">
          <div class="container">
            <div class="row align-items-center" style="display: flex; justify-content: space-between;">
              <div class="col-lg-4 text-lg-start" style="color: white; float: left; display: flex; width: 80vw">
                <div class="navbar-brand" id="footer-logo">
                  <text style="color: #ffc800; font-weight: bold; letter-spacing: 0.0625em;">CODING LAB</text>
                </div>
                <div id="footer-text">
                  <text id="footer-adress">경기도 화성시 동탄반석로 120, 제일프라자 8층<br></text>
                  <div id="copyright">Copyright &copy; 동탄코딩랩 2022</div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        <!-- Image Slider -->
        <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
        <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
      </body>
    </html>
    `
  },
  main : (list) => {
    return `
    <link rel="stylesheet" href="css/carousel.css" />
    <script src="js/carousel.js"></script>

    <!-- 메인 이미지 슬라이더 -->
    <div class="slider" style="position: relative;">
      <li class="main-slide">
        <img class="slide-image" src="../assets/img/main/header-bg.jpg">
        <div class="main-title" id="main">
          코딩랩학원
        </div>
      </li>
      <li class="main-slide">
        <div class="slide-image" style="background-color: #77D4FD;"></div>
        <div class="main-title">
          <p>디지털미디어고 준비반 운영</p>
          꾸준한 합격 성과의 디미고 대비 특별 수업과 함께하세요
        </div>
        <img src="../assets/img/main/school.svg" class="sub-image" id="dimigo-image">
      </li>
      <li class="main-slide">
        <div class="slide-image" style="background-color: rgb(255, 248, 233);"></div>
        <div class="main-title" style="color: #54544e;">
          <p style="font-family: 'Staatliches', cursive; margin: 0;">SW 특기자 전형 준비반 운영</p>
          코딩랩학원과 함께 생기부를 완성하세요
        </div>
        <img src="../assets/img/main/school.png" class="sub-image" id="dimigo-image">
      </li>
      <li class="main-slide">
        <div class="slide-image" style="background-color: #5c23f9;"></div>
        <div class="main-title">
          <p style="font-family: 'Staatliches', cursive;">UNITY 특강 운영!</p>
          게임 개발에 도전하세요
        </div>
        <img src="../assets/img/main/game.svg" class="sub-image" id="unity-image">
      </li>
    </div>
    <!-- 커리큘럼 -->
    <section class="page-section bg-light" id="curriculum">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">커리큘럼</h2><br>
        </div>
        <div class="row">
          <!-- 스크래치 커리큘럼 -->
          <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div class="portfolio-item">
              <a class="portfolio-link">
                <img class="img-fluid" src="assets/img/curriculum/Scratch.png" alt="..." />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">스크래치</div>
                <div class="portfolio-caption-subheading text-muted">Scratch</div>
              </div>
            </div>
          </div>
          <!-- 프로그래밍 언어 커리큘럼 -->
          <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
            <div class="portfolio-item">
              <a class="portfolio-link">
                <img class="img-fluid" src="assets/img/curriculum/Languages.png" alt="..." />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">프로그래밍 언어</div>
                <div class="portfolio-caption-subheading text-muted">Programming Languages</div>
              </div>
            </div>
          </div>
          <!-- 피지컬 컴퓨팅 -->
          <div class="col-lg-4 col-sm-6">
            <div class="portfolio-item">
              <a class="portfolio-link">
                <img class="img-fluid" src="assets/img/curriculum/Robot.png" alt="..." />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">로봇 & 자율주행차</div>
                <div class="portfolio-caption-subheading text-muted" style="text-decoration: none;">Robots & Self Driving Car</div>
              </div>
            </div>
          </div>
          <!-- AI 커리큘럼 -->
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a class="portfolio-link">
                <img class="img-fluid" src="assets/img/curriculum/AI.png" alt="..." />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">인공지능</div>
                <div class="portfolio-caption-subheading text-muted">Artificial Intelligence</div>
              </div>
            </div>
          </div>
          <!-- 웹 & 앱 개발 커리큘럼 -->
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a class="portfolio-link">
                <img class="img-fluid" src="assets/img/curriculum/Web.png" alt="..." />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">웹 & 앱 개발</div>
                <div class="portfolio-caption-subheading text-muted">Web & App</div>
              </div>
            </div>
          </div>
          <!-- 게임 개발 커리큘럼 -->
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a class="portfolio-link">
                <img class="img-fluid" src="assets/img/curriculum/Unity.jpg" alt="..." />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">게임 개발</div>
                <div class="portfolio-caption-subheading text-muted">Games</div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
    <!-- 갤러리 -->
    <section class="page-section" id="gallery">
      <div class="container" id="gallery-container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">갤러리</h2><br>
        </div>

        <!-- 이미지 슬라이더 -->
        <div class="gallery">
          <img src="assets/img/gallery/01.jpeg">
          <img src="assets/img/gallery/02.jpeg">
          <img src="assets/img/gallery/03.jpeg">
          <img src="assets/img/gallery/04.jpg">
          <img src="assets/img/gallery/05.jpg">
          <img src="assets/img/gallery/06.jpg">
        </div>

      </div>
    </section>
    <!-- 상담안내 -->
    <section class="page-section bg-light" id="consulting">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">상담안내</h2><br>
        </div>
        <div class="row">
          <!-- 전화상담 -->
          <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div class="portfolio-item" style="height: 100%;">
              <div class="portfolio-link" style="height: 100%;">
                <div style="height: 100%; background-color: #f9dfdc; border-radius: 8px; padding: 10%; border: 1px solid rgb(234, 234, 234);">
                  <p style="font-size: 1.5em; font-weight: bold;">전화상담</p>
                  <text style="font-size: 1.2em;">TEL : 010-4393-1124</text>
                </div>
              </div>
            </div>
          </div>
          <!-- 방문상담 -->
          <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div class="portfolio-item" style="height: 100%;">
              <div class="portfolio-link" style="height: 100%;">
                <div style="height: 100%; background-color: #dbf0fa; border-radius: 8px; padding: 10%; border: 1px solid rgb(234, 234, 234);">
                  <p style="font-size: 1.5em; font-weight: bold;">방문상담</p>
                  <text style="font-size: 1.2em;">경기도 화성시 동탄반석로 120, 제일프라자 8층</text>
                </div>
              </div>
            </div>
          </div>
          <!-- 블로그 -->
          <div class="col-lg-4 col-sm-6">
            <div class="portfolio-item">
              <a class="portfolio-link" href="https://blog.naver.com/codinglab9807" target="_blank">
                <div class="portfolio-hover">
                </div>
                <img class="img-fluid" src="assets/img/consulting/blog.png" alt="..." style="border: 1px solid rgb(234, 234, 234); border-radius: 8px;">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 학원소식 -->
    <section class="page-section" id="notice">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">학원소식</h2>
        </div>
        <div class="row" style="display: flex; justify-content: center; width: 100%; margin: 0;">
          <div style="width: 100%; background-color: #EFF2FB;
                      padding: 10px 0; margin-top: 1rem;
                      border-top: 2px solid #F2EFFB; border-bottom: 2px solid #F2EFFB;
                      font-size: 1.2em; color: gray;
                      align-items: space-between">
                      <div style="float: left; width: 70%; padding-left: 25px; border-right: 2px solid #E6E0F8;">제목</div>
                      <div style="float: right; width: 30%; padding-left: 25px;">날짜</div>
          </div>
          ${list}
        </div>
      </div>
    </section>
    <!-- 방문안내 -->
    <section class="page-section bg-light" id="map">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">방문안내</h2><br>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1251.6430600859487!2d127.07080568819624!3d37.19946580784012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b78fb0a7474be0b!2z7L2U65Sp656p7ZWZ7JuQ!5e0!3m2!1sen!2skr!4v1654011617658!5m2!1sen!2skr"
            width="100%" height="500em" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
    `
  },
  summernote : () => {
    return `
    <!--Summernote-->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
    
    <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
      <div class="container" style="min-height: 100vh;">
        <p><h2 style="font-weight: bold;">글쓰기</h2></p><br>
        <form method="post" action="/post">
          <input type="text" id="posting-title" name="title" placeholder="제목" style="width: 100%; height: 50px; margin-bottom: 10px; font-size: 1.5em; border-radius: 5px; border: 1px solid lightgray; padding-left: 10px;">
          <textarea id="summernote" name="editordata"></textarea>
          <div>
            <p style="text-align: center; font-size: 1.2em;"><input type="submit" id="submit" style="border: none; border-radius: 50px; background-color: #ffc800; color: white; width: 10vw; height: 5vh;"></p>
          </div>
        </form>
        <script>
          $(document).ready(() => {
            $('#summernote').summernote();
          });
        </script>
      </div>
    </div>
    `
  },
  top : () => {
    return `
    <div style="width: 100vw; min-height: 100vh; margin: 0; background-color: #f6f9fd">
      <div class="container" style="background-color: white; margin-top: 4.5rem; padding: 4rem; min-height: 100vh;" id="posting-container">
    `
  },
  bottom : () => {
    return `
      </div>
    </div>
    `
  }
}

module.exports = template;