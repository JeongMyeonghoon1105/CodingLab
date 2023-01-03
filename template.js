var template = {
  html: (content) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <!-- Basics -->
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="description" content="코딩랩학원은 동탄 반송동에 위치한 코딩 학원입니다. 스크래치, 파이썬부터 로봇과 인공지능까지 다양한 분야를 아우르는 코딩 교육을 제공합니다.">
          <meta name="author" content="">
          <meta name="format-detection" content="telephone=no" />
          <title>동탄코딩랩학원</title>
          <!-- Fonts & Icons -->
          <link rel="icon" type="image/x-icon" href="assets/img/logos/logo.png">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
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
            $(document).ready(() => {
              $('.slider').bxSlider({
                auto: true,
              });
              $('.gallery').bxSlider({
                auto: false,
              });
            });
          </script>
        </head>
        ${content}
      </html>
      `;
  },
  body: (modal, content) => {
    return `
    <body id="page-top" onload=${modal}>
      ${content}
    </body>
    `;
  },
  basic: (content) => {
    return `
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
    <link rel="stylesheet" href="css/carousel.css"/>
    <script src="js/carousel.js"></script>
    ${content}
    <!-- Footer -->
    <footer class="footer py-4" id="footer-wrap">
      <div class="container">
        <div class="row align-items-center" id="footer-container">
          <div class="col-lg-4 text-lg-start" id="footer-inner">
            <div class="navbar-brand" id="footer-logo">
              <text id="footer-title">CODING LAB</text>
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
    `;
  },
  modals: () => {
    return `
    <!-- Scratch Curriculum Modal -->
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" id="scratch-modal-dialog">
        <div class="modal-content" id="modal-content">
          <div class="close-modal" data-bs-dismiss="modal" id="block-modal-close">
            <i class="fa-solid fa-xmark" data-bs-dismiss="modal"></i>
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body" style="text-align: justify">
                  <!-- Project details-->
                  <h2 class="text-uppercase" style="text-align: center">블럭코딩 커리큘럼</h2><br><br>
                  <img class="img-fluid d-block mx-auto" class="modal-image" src="assets/img/curriculum/scratch3.png" alt="..." />
                  <p class="portfolio-text">1. 스크래치</p>
                  스크래치는 대표적인 블럭코딩 교육 플랫폼입니다. 블럭코딩을 통해 컴퓨팅적 사고를 연습합니다. 제어문, 반복문, 변수, 함수 등 코딩의 기초를 익힐 수 있습니다.
                  <br><br><br><br>
                  <img class="img-fluid d-block mx-auto" class="modal-image" src="assets/img/curriculum/app.png" alt="..." />
                  <p class="portfolio-text">2. 앱 인벤터</p>
                  앱 인벤터를 활용하면 블럭코딩으로 간단한 휴대폰 애플리케이션을 개발할 수 있습니다. 코딩의 실용성을 체감하고, 앱 개발 경험을 쌓는 유익한 시간이 될 것입니다.
                  <br><br><br><br>
                  <img class="img-fluid d-block mx-auto" class="modal-image" src="assets/img/curriculum/hamster.jpeg" alt="..." />
                  <pclass="portfolio-text">3. 햄스터 로봇</pclass=>
                  햄스터 로봇은 다양한 센서를 활용할 수 있는 소프트웨어 교육용 로봇입니다. 블럭 코딩을 이용하여 햄스터 로봇을 제어하며 피지컬 컴퓨팅의 기초를 다질 수 있습니다.
                  <br><br><br><br>
                  <img class="img-fluid d-block mx-auto" class="modal-image" src="assets/img/curriculum/tinkercad.png" alt="..." />
                  <pclass="portfolio-text">4. 틴커캐드</pclass=>
                  틴커캐드를 활용하여 블럭코딩으로 피지컬 컴퓨팅을 배울 수 있습니다. C 언어를 몰라도 아두이노를 배울 수 있다는 점은 틴커캐드의 큰 장점 중 하나입니다. 틴커캐드 웹사이트는 전자 회로의 설계 및 작동을 시뮬레이션하는 기능을 제공합니다. 이를 활용하여 아두이노와 같은 마이크로컨트롤러와 모터, 센서, LED 등의 기계장치를 연결하는 전자 회로를 구성하고 블럭코딩으로 이를 제어할 수 있습니다.
                  <br><br><br><br>
                  <div style="text-align: center">
                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i class="fas fa-xmark me-1"></i>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 디미고 합격 성과 Modal -->
    <div class="portfolio-modal modal fade" id="dimigoModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" id="modal-dialog">
        <div class="modal-content" id="btn-close">
          <img src="https://github.com/JeongMyeonghoon1105/Images/blob/main/special.png?raw=true" alt="" id="modal-image">
          <i class="fa-solid fa-xmark" data-bs-dismiss="modal" id="close-button"></i>
          <div id="checkbox-area">
            <input type="checkbox" class="btn_today_close" name="donotshow">&nbsp;&nbsp;오늘 하루 열지 않기
          </div>
        </div>
      </div>
    </div>
    `;
  },
  banner: (bgcolor, color, font, title, subtitle, src, id, style) => {
    return `
    <li class="main-slide">
      <div class="slide-image" style="background-color: ${bgcolor};"></div>
      <div class="main-title" style="${color}">
        <p style="${font}">${title}</p>
        ${subtitle}
      </div>
      <img src="${src}" class="sub-image" id="${id}" style="${style}">
    </li>
    `;
  },
  banners: (content) => {
    return `
    <div class="slider" id="main-slider">
      <li class="main-slide">
        <img class="slide-image" src="../assets/img/main/header-bg.jpg">
        <div class="main-title" id="main">
          코딩랩학원
        </div>
      </li>
      ${content}
    </div>
    `;
  },
  curriculums: (curriculum) => {
    return `
    <section class="page-section bg-light" id="curriculum">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">커리큘럼</h2><br>
        </div>
        <div class="row">
          <!-- 스크래치 커리큘럼 -->
          <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div class="portfolio-item">
              <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/curriculum/Scratch.png" alt="..." />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">블럭코딩</div>
                <div class="portfolio-caption-subheading text-muted">Coding Blocks</div>
              </div>
            </div>
          </div>
          ${curriculum}
      </div>
    </section>
    `;
  },
  curriculum: (src, title, sub) => {
    return `
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="portfolio-item">
        <a class="portfolio-link">
          <img class="img-fluid" src="${src}" alt="..." />
        </a>
        <div class="portfolio-caption">
          <div class="portfolio-caption-heading">${title}</div>
          <div class="portfolio-caption-subheading text-muted">${sub}</div>
        </div>
      </div>
    </div>
    `;
  },
  gallery: () => {
    return `
    <section class="page-section" id="gallery">
      <div class="container" id="gallery-container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">갤러리</h2><br>
        </div>
        <!-- Gallery Image Slider -->
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
    `;
  },
  consulting: () => {
    return `
    <section class="page-section bg-light" id="consulting">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">상담안내</h2><br>
        </div>
        <div class="row">
          <!-- Telephone -->
          <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div class="portfolio-item" style="height: 100%;">
              <div class="portfolio-link" style="height: 100%;">
                <div class="consulting-card" style="background-color: #f9dfdc;">
                  <p style="font-size: 1.5em; font-weight: bold;">전화상담</p>
                  <text style="font-size: 1.2em;">TEL : 010-4393-1124</text>
                </div>
              </div>
            </div>
          </div>
          <!-- Visit -->
          <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div class="portfolio-item" style="height: 100%;">
              <div class="portfolio-link" style="height: 100%;">
                <div class="consulting-card" style="background-color: #dbf0fa;">
                  <p style="font-size: 1.5em; font-weight: bold;">방문상담</p>
                  <text style="font-size: 1.2em;">경기도 화성시 동탄반석로 120, 제일프라자 8층</text>
                </div>
              </div>
            </div>
          </div>
          <!-- Blog -->
          <div class="col-lg-4 col-sm-6">
            <div class="portfolio-item">
              <a class="portfolio-link" href="https://blog.naver.com/codinglab9807" target="_blank">
                <div class="portfolio-hover">
                </div>
                <img class="img-fluid" src="assets/img/consulting/blog.png" alt="..." id="blog-card">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  },
  notice: (list) => {
    return `
    <section class="page-section" id="notice">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">학원소식</h2>
        </div>
        <div class="row" id="news-container">
          <div id="news-bar">
            <div id="news-title">제목</div>
            <div id="news-date">날짜</div>
          </div>
          ${list}
        </div>
      </div>
    </section>
    `;
  },
  adress: () => {
    return `
    <section class="page-section bg-light" id="map">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">방문안내</h2><br>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1251.6430600859487!2d127.07080568819624!3d37.19946580784012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b78fb0a7474be0b!2z7L2U65Sp656p7ZWZ7JuQ!5e0!3m2!1sen!2skr!4v1654011617658!5m2!1sen!2skr" width="100%" height="500em" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
    `;
  },
  write: () => {
    return `
    <!--Summernote-->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>

    <div id="write-wrap">
      <div class="container" style="min-height: 100vh;">
        <p><h2 style="font-weight: bold;">글쓰기</h2></p><br>
        <form method="post" action="/post">
          <input type="text" id="posting-title" name="title" placeholder="제목" style="border: 1px solid lightgray; border-radius: 5px;">
          <textarea id="summernote" name="editordata"></textarea>
          <div>
            <p style="text-align: center; font-size: 1.2em;">
            <input type="submit" id="submit"></p>
          </div>
        </form>
        <script>
          $(document).ready(() => {
            $('#summernote').summernote();
          });
        </script>
      </div>
    </div>
    `;
  },
  post: (topic, content) => {
    return `
    <div id="top-head">
      <div class="container" id="posting-container">
        <h1 id="posting-title">
          ${topic}
        </h1>
        <div id="posting-hr"></div>
        ${content}
      </div>
    </div>
    `;
  }
};
module.exports = template;
