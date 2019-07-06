import { MiniCss } from "../src/mini-css";

// issue to fix
const css = `
/********************
    [master style sheet coded by Hassan Magdy]
    project : Responive html5 design
    version : 1.0
    last change : July 9 2018
    primary use : Personal & portfolio information
********************/
/*******************
    [layout]
    1. framework
        1.1. fonts
        1.2. transition effect
        1.3. a:focus & a:hover
        1.4. no-padding class
        1.5. unvisible class
        1.6. main style of paragraph
        1.7. background-cover class
        1.8. clearfix class
        1.9. headers main font style
        1.10. link & reverse link classes
            1.10.1. .link{color}
            1.10.2. .link:hover
            1.10.3. .reverse-link:hover
        1.11. .margin-sp
        1.12. section
            1.12.1. section span.h-span
            1.12.2. section h2.h1
            1.12.3. section h2.h1 span.underline
            1.12.4. section h2.h1 span.underline span
            1.12.5. section h2.h1 span.underline span.r-square
            1.12.6. section h2.h1 span.underline span.l-square
    2. body
    3. nav / .navbar
        3.1. nav.nav-bar .menu-icon
        3.2. nav.nav-bar .menu-icon span
        3.3. nav.nav-bar img.logo
    4. div / .menu
    5. header
        5.1. div / .item-1
        5.2. div / .item-2
        5.3. div / .item-3
        5.4. div / .blur
        5.5. div / .container
            5.5.1. div/ .content
                5.5.1.1. h1
                5.5.1.2. p / .position
                5.5.1.3. a / .link
                5.5.1.4. p / .bio
        5.6. div / .owl-nav
        5.7. div / .owl-dots
            5.7.1. span
        5.8. div / .arrow
            5.8.1. div
            5.8.2. div / .next
            5.8.3. div / .prev
            5.8.4. i
        6. section.about / #about
            6.1. img
            6.2. h2 / .sub-header
                6.2.1. h2:after
            6.3. p /.about-bio
            6.4. ul / .details
                6.4.1. li
                    6.4.1.1. span
            6.5. a / .link & a / .reverse-link
                6.5.1. div / .icon
                6.5.2. a:hover i
                6.5.2.1 div / .icon
        7. section.skills / #skills
            7.1. span / .sk-header
            7.2. div / .bar
                7.2.1. span
            7.3. div / .seperated
            7.4. div / .cir-bar
                7.4.1. span / .cir-header
        8. section.services / #services
            8.1. div / .row
            8.2. div / .serv-box
                8.2.1. i
                8.2.2. h3
                8.2.3. :hover
                    8.2.3.1. i
        9. section.portfolio / #portfolio
            9.1. div / .row
            9.2. ul / .port-list
                9.2.1. li
                    9.2.1.1. .active
                        9.2.1.1.1. :hover
            9.3. a / .port-card
                9.3.1. div / .card-hover
                    9.3.1.1. div / .card-info
                    9.3.1.1.1. h3
                    9.3.1.1.2. div / .icons
                        9.3.1.1.2.1 i
        10. div / .popup
            10.1. div / .pop-view
            10.2. div / .pop-close 
            10.3. div / .pop-trans
                10.3.1. span
        11. section.resume / #resume
            11.1. h3
            11.2. div / .resume-box
                11.2.1. div / .content
                    11.2.1.1. h4.h3
                        11.2.1.1.1. :before
                    11.2.1.2. p / .f-header
                    11.2.1.3. p / .info
        12. div / .count
            12.1. div / .blur
            12.2. i
            12.3. soan / .timer
            12.4. p
        13. section.previews / #previews
            13.1. div / .item
                13.1.1. div / .figure
                    13.1.1.1. img
                    13.1.1.2. i
                        13.1.1.1.2.1. i / .left
                        13.1.1.1.2.2. i / .right
                13.1.2. p / .item-p
                13.1.3. div / .rate
                    13.2.3.1. i
                13.1.4. h3
                13.1.5. p / .desc
        14. div / .supporters
            14.1. a / .support
                14.1.1. img
            14.2. div / .owl-dots
        15. section.contacts / #contacts
            15.1. div / .contact-box
                15.1.1. div / .contact-icon
                    15.1.1.1. i
                15.1.2. div / .contact-info
                    15.1.2.1. p / .header
                    15.1.2.2. p / .bio
            15.2. form
                15.2.1. div / .form-group
                15.2.2. input & textarea
        16. footer
            16.1. p
        17. div / .loading
            17.1. div / .load-content
            17.2. div / .center-element
                17.2.1. div / .ball
                17.2.2. div / .circle
                    17.2.2.1. span
                        17.2.2.1.1. span / .top
                        17.2.2.1.2. span / .bottom
                        17.2.2.1.3. span / .right
                        17.2.2.1.4. span / .left 
            17.3. loading animation
            17.4. p / .loading-p
        18. div / .scroll-top
            18.1. i
            18.2. :hover
        19. media query
********************/

/*******************
    [color codes]
    white (header & text & links) : #fff
    Dove Gray (paragraphes) :#666
    silver (texts) : #ccc
    black (headers) :#000
    the theme main color is splited into a special file and the main color is #a78644
********************/
/*framework*/
@import url("https://fonts.googleapis.com/css?family=Poppins");
body {
  line-height: 1.7;
  font-family: "Poppins", sans-serif;
}
.transition {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
a:focus,
a:hover {
  text-decoration: none;
}
.no-padding {
  padding: 0 !important;
}
.no-margin {
  margin-bottom: 0 !important;
}
.unvisible {
  visibility: hidden;
}
.background-cover {
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  -ms-background-size: cover !important;
  -o-background-size: cover !important;
  background-size: cover !important;
}
.clearfix {
  clear: both;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif !important;
  line-height: 1.1;
}
.link,
.reverse-link {
  text-transform: uppercase;
  display: inline-block;
  padding: 8px 20px;
  border-radius: 29px;
  font-size: 17px;
}
.link {
  color: #fff;
}
.link:hover {
  background-color: #fff;
}
.reverse-link {
  background-color: #fff;
}
.reverse-link:hover {
  color: #fff;
}
.margin-sp {
  margin-bottom: 45px !important;
}
section {
  padding: 100px 0;
}
section span.h-span {
  display: block;
  color: #999;
  font-size: 17px;
}
section h2.h1 {
  text-transform: uppercase;
  margin: 5px 0 100px;
  font-weight: bold;
  display: inline-block;
  position: relative;
  padding: 0 10px 10px;
}
section h2.h1 span.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
}
section h2.h1 span.underline span {
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  top: calc(50% - 9px);
}
section h2.h1 span.underline span.r-square {
  right: -18px;
}
section h2.h1 span.underline span.l-square {
  left: -18px;
}

/*nav*/
.nav-bar {
  padding: 20px 0;
  background-color: rgba(0, 0, 0, 0.15);
}
.nav-bar .menu-icon {
  float: right;
  width: 40px;
  margin: 23px 0 18px;
  cursor: pointer;
  position: relative;
  height: 20px;
}
.nav-bar .menu-icon span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: #fff;
  position: absolute;
  left: 0;
}
.nav-bar .menu-icon span.top {
  top: 0;
}
.nav-bar .menu-icon span.mid {
  top: calc(50% - 1px);
  opacity: 1;
}
.nav-bar .menu-icon span.down {
  bottom: 0;
}
.nav-bar .menu-icon.close-mark span.top {
  top: calc(50% - 1px);
  transform: rotate(405deg);
}
.nav-bar .menu-icon.close-mark span.down {
  top: calc(50% - 1px);
  transform: rotate(-405deg);
}
.nav-bar .menu-icon.close-mark span.mid {
  left: -100%;
  opacity: 0;
}
.nav-bar .logo {
  float: left;
  width: 44px;
  margin: 9px 0;
}

/*div menu*/
.menu {
  position: fixed;
  right: -70px;
  top: 50%;
  color: #fff;
  width: 65px;
  max-width: 100%;
  height: auto;
  z-index: 1031;
  border-radius: 5px;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}
.menu .menu-list {
  margin-bottom: 0;
  border-radius: 5px;
}
.menu .menu-list li {
  position: relative;
}
.menu .menu-list li a {
  display: block;
  height: 60px;
}
.menu .menu-list li a i {
  position: absolute;
  z-index: 2;
  font-size: 22px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  line-height: 60px;
  border-radius: 5px;
}
.menu .menu-list li a span {
  position: absolute;
  z-index: 1;
  left: -100px;
  font-size: 15px;
  display: block;
  height: 0px;
  line-height: 60px;
  width: 100px;
  overflow: hidden;
  border-radius: 5px 0 0 5px;
}
.menu .menu-list li a:hover span {
  height: 100%;
}
.menu .menu-list li a:hover i {
  color: #fff;
}
.menu.active {
  right: 15px;
}

/*header*/
header {
  min-height: 680px;
  position: relative;
}
header .item-1 {
  background: url("http://via.placeholder.com/1920x1280") no-repeat center
    center;
}
header .item-2 {
  background: url("http://via.placeholder.com/1920x1280") no-repeat center
    center;
}
header .item-3 {
  background: url("http://via.placeholder.com/1920x1280") no-repeat center
    center;
}
header .blur {
  min-height: 680px;
  background-color: rgba(0, 0, 0, 0.4);
}
header .container {
  position: relative;
  min-height: 680px;
}
header .container .content {
  position: absolute;
  top: 50%;
  left: 15px;
  margin-right: 15px;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}
header .container .content h1 {
  color: #fff;
  margin: 0 0 35px;
  font-size: 60px;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px #000;
}
header .container .content a.link {
  font-weight: 700;
  font-size: 14px;
  padding: 10px 25px;
  border-radius: 25px;
}
header .container .content p.bio {
  color: #fff;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 26px;
}
header .owl-nav {
  display: none;
}
header .owl-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
header .owl-dots .owl-dot {
  padding: 3px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin: 5px;
}
header .owl-theme .owl-dots .owl-dot span {
  margin: 0;
}
header .arrow {
  position: absolute;
  width: 100%;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 2;
}
header .arrow div {
  position: absolute;
  height: 40px;
  width: 40px;
  color: #fff;
  border: 2px solid transparent;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.7);
}
header .arrow .next {
  right: 0;
}
header .arrow .prev {
  left: 0;
}
header .arrow div i {
  line-height: 37px;
}

/*section about*/
.about img {
  border-radius: 5px;
  padding: 10px;
}
.about h2.h1 {
  padding: 0;
  margin: 0 0 20px !important;
  line-height: 1;
}
.about p.desc {
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 1;
}
.about .about-bio {
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 22px;
}
.about .details {
  border-left: 2px solid #ccc;
  padding-left: 15px;
  color: #666;
  margin-left: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.about .details li {
  padding: 10px 5px;
  position: relative;
  font-size: 15.5px;
}
.about .details li span {
  font-weight: 600;
  text-transform: uppercase;
}
.about .details li:before {
  content: "";
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  top: calc(50% - 5px);
  left: -21px;
}
.about a.link,
.about a.reverse-link {
  margin: 0 10px 30px 0;
  position: relative;
  padding-right: 57px;
  display: block;
  width: 270px;
  min-height: 48px;
}
.about .link .icon,
.about .reverse-link .icon {
  position: absolute;
  width: 46px;
  height: 46px;
  right: -1px;
  top: -1px;
  background-color: #fff;
  border-radius: 50%;
}
.about .link .icon i,
.about .reverse-link .icon i {
  line-height: 46px;
}
.about .link:hover .icon i {
  color: #fff;
}
.about .reverse-link .icon i {
  color: #fff;
}
.about .reverse-link:hover .icon {
  background-color: #fff;
}

/*section skills*/
.skills .sk-header {
  display: block;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 35px;
  font-family: "Poppins", sans-serif;
}
.skills .bar {
  width: 100%;
  position: relative;
}
.skills .bar span {
  font-weight: 600;
  font-size: 16px;
}
.skills .separated {
  height: 1px;
  background-color: #eee;
  margin-bottom: 45px;
}
.skills .cir-bar {
  position: relative;
  width: 140px;
  height: 140px;
}
.skills span.circ-header {
  display: block;
  font-weight: 600;
  font-size: 16px;
  margin: 20px 0 0;
}
.skills #circles div.progressbar-text {
  font-size: 1.5rem !important;
}

/*section services*/
.services .serv-box {
  padding: 35px;
  border: 1px solid #ccc;
}
.services .serv-box h3 {
  font-size: 40px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 20px;
  position: relative;
}
.services .serv-box h3 i {
  position: absolute;
  color: #ccc;
  right: 0;
}
.services .serv-box h4 {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 20px;
  padding-bottom: 15px;
  position: relative;
}
.services .serv-box h4:after {
  content: "";
  display: block;
  background-color: #f7f7f7;
  width: 25%;
  height: 3px;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.services .serv-box:hover h4:after {
  width: 100%;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.services .serv-box p {
  font-size: 14px;
  line-height: 24px;
  margin: 0;
}

/*section portfolio*/
.portfolio .row {
  padding: 0 15px;
}
.portfolio .port-list li {
  display: inline-block;
  padding: 8px 20px;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
}
.portfolio .port-list li.active {
  color: #fff;
}
.portfolio .port-list li.active:hover {
  background-color: #fff;
}
.portfolio a.port-card {
  display: block;
  position: relative;
  color: #fff !important;
  overflow: hidden;
}
.portfolio .port-card .card-hover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: -100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
}
.portfolio .port-card .card-hover .card-info {
  position: absolute;
  width: 100%;
  top: 50% !important;
  left: 50% !important;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.portfolio .port-card .card-hover .card-info h3 {
  text-transform: uppercase;
  margin: 20px 0;
  font-size: 22px;
}
.portfolio .port-card .card-hover .card-info .icons {
  display: inline-block;
  padding: 6px 13px;
  margin-bottom: 20px;
}
.portfolio .port-card .card-hover .card-info .icons i {
  margin: 5px;
  cursor: pointer;
}

/*div popup*/
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1033;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: scroll;
  display: none;
}
.popup .pop-view {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.popup .pop-close {
  top: -41px;
  right: 8px;
  width: 50px;
  height: 50px;
  position: absolute;
  cursor: pointer;
}
.popup .pop-close span {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  right: 0;
  top: calc(50% - 1px);
  background-color: #fff;
}
.popup .pop-close span.acute {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.popup .pop-close span.obtuse {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.popup .pop-trans {
  position: absolute;
  bottom: -45px;
  right: 10px;
}
.popup .pop-trans span {
  display: inline-block;
  color: #fff;
  margin-left: 10px;
  cursor: pointer;
}

/*section blogs*/
.blogs .blog-box {
  overflow: hidden;
}
.blogs .blog-box img {
  margin-bottom: 30px;
}
.blogs .blog-box h4 {
  padding: 0 30px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 20px;
}
.blogs .blog-box span.date {
  padding: 0 30px;
  line-height: 1;
  display: block;
  font-size: 12px;
  color: #777;
  margin-bottom: 5px;
}
.blogs .blog-box h3 {
  padding: 0 30px;
  font-size: 18px;
  line-height: 1;
  margin-bottom: 20px;
}
.blogs .blog-box p {
  padding: 0 30px;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 20px;
}
.blogs .blog-box a {
  margin: 0 30px 30px;
  display: block;
  width: 150px;
  height: 45px;
  line-height: 45px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 20px;
  color: #fff;
}
.blogs .blog-box a:hover {
  background-color: #fff;
}

/*div count*/
.count {
  padding: 100px 0;
}
.count i {
  color: #fff;
}
.count span.timer {
  display: block;
  margin: 22px 0;
  font-size: 40px;
  line-height: 1;
}
.count h3 {
  font-size: 18px;
  margin: 0;
}

/*section resume*/
.resume {
  overflow: hidden;
}
.resume h3 {
  font-weight: 400;
  margin: 0 0 32px;
  font-size: 24px;
  line-height: 1.33;
}
.resume .resume-box {
  border-left: 2px solid #ccc;
  padding: 20px 20px 0;
  margin-left: 4px;
}
.resume .resume-box .content h4.h3 {
  text-transform: capitalize;
  position: relative;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
}
.resume .resume-box .content h4.h3:before {
  content: "";
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  top: calc(50% - 5px);
  left: -26px;
}
.resume .resume-box .content p.f-header {
  text-transform: uppercase;
  font-size: 12px;
  line-height: 21px;
  margin-bottom: 15px;
}
.resume .resume-box .content p.info {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
}

/*section previews*/
.previews .item {
  padding: 35px;
  /*border:1px solid #ccc;*/
  border-radius: 5px;
  position: relative;
  margin-bottom: 15px;
}
.previews .owl-stage-outer {
  padding-top: 50px;
}
.previews .item .figure {
  width: 100px;
  height: 100px;
  position: absolute;
  left: calc(50% - 50px);
  top: 0;
  -webkit-transform: translateY(-50px);
  -moz-transform: translateY(-50px);
  transform: translateY(-50px);
}
.previews .item .figure img {
  width: auto;
}
.previews .item .item-p {
  /*11 px margin top is the start point*/
  margin-top: 36px;
  line-height: 22px;
  font-size: 14px;
  margin-bottom: 25px;
}
.previews .item .rate {
  position: relative;
}
.previews .item .rate .stars {
  line-height: 1;
}
.previews .item .rate .stars i {
  color: #f4cb10;
}
.previews .item .rate .qoute {
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  transform: translateY(-50%);
}
.previews .item h3 {
  text-transform: capitalize;
  margin: 0 0 10px;
  font-weight: 600;
  font-size: 18px;
}
.previews .item p.desc {
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.1;
}
.previews .owl-theme .owl-nav.disabled + .owl-dots {
  margin-top: 20px;
}

/*div supporters*/
.supporters {
  padding: 40px 0;
}
.supporters a.support {
  display: block;
}
.supporters a.support img {
  width: auto;
}
.supporters .owl-dots {
  display: none;
}

/*sectoin contacts*/
.contacts .contact-box {
  position: relative;
  padding: 15px;
}
.contacts .contact-box .contact-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: #fff;
  position: absolute;
  top: 18px;
  left: 15px;
}
.contacts .contact-box .contact-icon i {
  line-height: 60px;
  font-size: 20px;
}
.contacts .contact-box .contact-info {
  margin-left: 80px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.contacts .contact-box .contact-info h3.header {
  font-size: 16px;
  text-transform: uppercase;
  margin: 0;
  font-weight: 600;
}
.contacts .contact-box .contact-info p.bio {
  color: #999;
  font-size: 14px;
  margin: 0;
  margin-top: 10px;
  word-wrap: break-word;
}
.contacts form {
  margin-bottom: -20px;
  margin-top: 10px;
}
.contacts form .form-group {
  margin-bottom: 20px;
}
.contacts form input,
.contacts form textarea {
  border-radius: 0;
  border-color: #ccc;
  font-size: 15px;
  padding: 10px 15px;
}
.contacts form textarea {
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: 160px;
  min-height: 160px;
  max-height: 160px;
}
.contacts form input[type="submit"] {
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 20px;
}
.contacts form input[type="submit"]:hover {
  background-color: #fff;
}

/*footer*/
footer {
  padding: 70px 20px;
}
footer .social-media a {
  display: inline-block;
  margin: 0 10px 10px;
  color: #fff;
}
footer p {
  margin: 0;
  color: #fff;
}

/*div loading*/
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1034;
}
.loading .load-content {
  position: absolute;
  width: 200px;
  height: 80px;
  top: calc(50% - 40px);
  left: calc(50% - 100px);
}
.loading .center-element {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  animation: rotate 2s linear 0.1s infinite;
}
.loading .center-element .ball {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
}
.loading .center-element .circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
}
.loading .center-element .circle span {
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  left: calc(50% - 3.5px);
}
.loading .center-element .circle span.top {
  top: -4.5px;
}
.loading .center-element .circle span.bottom {
  bottom: -4.5px;
}
.loading .center-element .circle span.right {
  right: -4.5px;
  top: calc(50% - 3.5px);
  left: auto;
}
.loading .center-element .circle span.left {
  left: -4.5px;
  top: calc(50% - 3.5px);
}
@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.loading p {
  text-transform: uppercase;
  letter-spacing: 9px;
  color: #999;
  margin-top: 80px;
  margin-left: 12px;
}

/*scroll top*/
a.scroll-top {
  display: block;
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1032;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: none;
}
a.scroll-top i {
  line-height: 50px;
}
a.scroll-top:hover {
  background-color: #fff;
}

/*media query*/
@media (max-width: 991px) {
  .margin-bottom-45 {
    margin-bottom: 45px !important;
  }
  .margin-30 {
    margin-bottom: 30px !important;
  }
  /*nav*/
  .nav-bar {
    background-color: #333;
    padding: 5px 0;
  }
  /*section resume*/
  .resume .resume-box {
    margin-left: 20px;
  }
  /*section about*/
  .about img {
    margin-bottom: 25px;
  }
  /*section contacts*/
  .contacts .row .row {
    margin: 0;
  }
  /*header*/
  header .container .content h1 {
    font-size: 50px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .no-md-margin {
    margin-bottom: 0 !important;
  }
}
@media (min-width: 992px) {
  section h2.h1 {
    font-size: 50px;
  }
  /*nav*/
  .background-style {
    background-color: #333;
    padding: 10px 0;
  }
  /*header*/
  header .container .content {
    width: 60%;
  }
  /*section about*/
  .about .link,
  .about .reverse-link {
    margin-right: 90px;
  }
}
@media (max-width: 767px) {
  header .arrow {
    display: none;
  }
  /*section about*/
  .about img {
    box-shadow: none !important;
  }
  .margin-bottom-45-sm {
    margin-bottom: 45px !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .about .link,
  .about .reverse-link {
    display: inline-block;
  }
}


`;

// console.log(MiniCss.compile(css));

MiniCss.compile(css);

/* 
// Output

    @import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap");body,br,.test, .dog{font-family:Lato}div,section,span{background-color:blue}
 */
