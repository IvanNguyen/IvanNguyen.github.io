webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-homepage></app-homepage>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__homepage_homepage_component__["a" /* HomepageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = "*{\n\tbox-sizing: border-box;\n\t-moz-box-sizing:border-box;\n\t-webkit-box-sizing:border-box;\n}\nbody, html{\n\tfont-size:100%;\n\tmargin: 0;\n\tpadding: 0;\n}\nbody{\n\tfont-family: Tahoma, Arial, sans-serif;\n\tfont-weight: normal;\n\tfont-stretch: normal;\n\tcolor: black;\n\tbackground-color: white;\n}\n/* Start Header */\nheader {\n\twidth: 100%;\n\tbackground-color: #f58220;\n\tpadding: 10px 0;\n}\n.header-content {\n\twidth: 80%;\n\tmargin: auto;\n\tcolor: white;\n}\n.header-content > i, .header-content > span  {\n\tmargin-left: 10px;\n\tpadding-top: 12px;\n\n}\n.header-content form {\t\n\tfloat: right;\n}\n/* End Header */\n/*Start NavBar*/\n.navbar-menu {\n\twidth: 80%;\n\tmargin: auto;\n}\n.navbar-nav li:hover {\n\t-webkit-box-shadow: 10px 10px 30px grey;\n\t        box-shadow: 10px 10px 30px grey;\n\tborder-radius: 15px;\n\tbackground-color: lightgrey;\n}\n.nav-link {\n\tcolor: black;\n\tfont-size: 20px;\n\tmargin-right: 2rem;\n}\n.navbar ul li.active a {\n\tcolor: #D2691E\n}\n.social-item {\n\theight: 2.8rem;\n\twidth: 2.8rem;\n\tdisplay: inline-block;\n\tmargin-right: 1.2rem;\n\tcolor: white;\n\tcursor: pointer;\t\n}\n.social-item i {\n\tpadding-left: 7px;\n\tpadding-top: 7px;\n\tfont-size: 2rem;\n}\n.facebook {\n\tbackground-color: #4768AD;\n}\n.youtube {\n\tbackground-color: #F00;\n}\n.twitter {\n\tbackground-color: #1da1f2\n}\n/*End NavBar*/\n/*Start Carousel*/\n.carousel-inner .crs-caption-menu {\n\tpadding-bottom: 5rem;\n\tfont-size: 3rem;\n}\n/*End Carousel*/\n/*Start About Us*/\n.about-us {\n\twidth: 100%;\n\tmargin-top: 5rem;\n}\n.about-us-content {\n\twidth: 70%;\n\tmargin: auto;\n\ttext-align: center;\n\tmargin-top: 8rem;\n\tmargin-bottom: 7rem;\n\n}\n.about-us-caption h2{\n\tcolor: #272e38;\t\n}\n.about-us-caption h5{\n\tcolor: \t#a96311;\n\tletter-spacing: 0.2rem;\n\tpadding: 0.5rem;\n}\n.about-us-caption p{\n\tpadding: 0.5rem;\n\tcolor: #989b97;\n}\n.about-us-content-detail i{\n\tcolor: #244b88;\n\tfont-size: 3rem;\n\tpadding-bottom: 1rem;\n}\n.about-us-content-detail h3{\n\tcolor: #a96115;\n\tpadding-bottom: 0.8rem;\n}\n.about-us-content-detail p{\n\tcolor: #989b97;\n}\n/*End About Us*/\n/*Start Home Detail*/\n.home-details {\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: #0058b6;\n}\n.home-details-content {\n\tfloat: left;\n\twidth: 35%;\n\tpadding: 3rem;\n}\n.home-details-content h1 {\n\tcolor: white;\n\tfont-size: 3rem;\n}\n.home-details-content i {\n\tpadding-right: 1rem;\n}\n.home-details-content p {\n\tcolor: white;\n\tpadding-bottom: 1rem;\n}\n.home-details-content p.home-subtitle {\n\tcolor: black;\n\tpadding-top: 2rem;\n}\n.home-details-content span {\n\t vertical-align: super;\n}\n/*End Home Detail*/\n/*Start Team*/\n.our-team {\n\twidth: 70%;\n\tmargin: auto;\n\tpadding-top: 8rem;\n}\n.our-team-caption {\n\ttext-align: center;\n}\n.our-team-caption h1{\n\tcolor :\t#4768AD;\n\tpadding-bottom: 1.5rem;\n}\n.our-team-caption p{\n\tcolor :\t#a96311;\n\tletter-spacing: 0.8rem;\n\tpadding-bottom: 3rem;\n}\n.our-team img {\n\tdisplay: block;\n\theight: 250px;\n\twidth: 250px;\n\tmargin: auto;\t\n}\n.our-team-mem {\n\tpadding-top: 3rem;\n \ttext-align: center;\n}\n.our-team-mem h4{\n \tcolor: #a96115;\n \tpadding-top: 2rem;\n \tpadding-bottom: 1rem;\n}\n.our-team-mem p{\n\tpadding-bottom: 2rem;\n \tborder-bottom: 2px solid black;\n}\n.our-team-mem i{\n\tpadding: 1.5rem;\n\tcolor: blue;\n}\n/*End Team*/\n/*Start Customer Feedback*/\n.customer-feedback {\n\tposition: absolute;\n\tbottom: 40px;\n\tz-index: 10;\n\tpadding:20px;\n\ttext-align: center;\n\tcolor: white;\n\tleft: 15%;\n\tright: 15%;\n}\n.customer-feedback-content h4 {\n\tfont-weight: bold;\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n.feedback-caption {\n\tpadding-top: 7rem;\n\ttext-align: center;\n\tbackground-color: lavender;\n}\n.feedback-caption h1 {\n\tcolor :\t#4768AD;\n\tfont-weight: bold;\n\tpadding-bottom: 2rem;\n}\n.feedback-caption p {\n\tcolor: #a96115;\n\tletter-spacing: 2px;\n\tpadding-bottom: 5rem;\n}\n/*End Customer Feedback*/\n/*Start Overview*/\n.overview {\n\twidth: 80%;\n\tmargin: auto;\n\ttext-align: center;\n\tmargin-top: 6rem;\n}\n.overview-caption h1 {\n\tfont-weight: bold;\n\tcolor: darkblue;\n\tpadding-bottom: 1rem;\n}\n.overview-caption p {\n\tletter-spacing: 0.8rem;\n\tcolor: #a96115;\n}\n.overview-content {\n\tbackground-color: #212120;\n\tmargin-top: 3rem;\n\tpadding: 4%;\n}\n.overview-details {\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n}\n.overview-details i {\n\t-ms-flex-item-align: center;\n\t    -ms-grid-row-align: center;\n\t    align-self: center;\n\tfont-size: 3rem;\n\tcolor: darkorange;\n\tpadding-right: 3.5rem;\n}\n.overview-content h2 {\n\tcolor: white;\n\tpadding-top: 0.5rem;\n}\n.overview-content p {\n\tcolor: white;\n\tpadding-top: 0.8rem;\n}\n/* End Overview */\n/* Start Contact */\n.contact-us {\n\twidth: 80%;\n\tmargin: auto;\n}\n.contact-us-caption {\n\ttext-align: center;\n\tmargin-top: 7rem;\n}\n.contact-us-caption h1 {\n\tfont-weight: bold;\n\tcolor: darkblue;\n}\n.contact-us-caption p {\n\tword-spacing: 2rem;\n\tcolor: #a96115;\n\tmargin-top: 1.5rem;\n}\n.contact-us-content {\n\tmargin-top: 7rem;\n}\n.contact-us-details h2 {\n\tcolor: darkorange;\n}\n.contact-us-details .contact-info {\n\tmargin-top: 2rem;\n}\n.contact-us-details .contact-info p {\n\tmargin-top: 2rem;\n}\n.contact-us-details .contact-info .social {\n\tmargin-top: 2rem;\n}\n.contact-map {\n\tmargin-top: 3rem;\n\twidth: 100%;\n\theight: 600px;\n}\n.contact-info span {\n\tfont-weight: 200;\n\tcolor: darkgrey;\n}\n/* End Contact */\n/* Start Footer */\nfooter {\n\tbackground-color: black;\n\tcolor: white;\n}\n.footer-content {\n\twidth: 80%;\n\tmargin: auto;\n\tpadding-top: 6rem;\n}\n.footer-content h1 {\n\tpadding-bottom: 3rem;\n}\n.footer-content i {\n\tpadding-right: 1.5rem;\n}\n.footer-content .social {\n\tpadding-top: 2rem;\n}\n.footer-sign-up {\n\twidth: 80%;\n\tmargin: auto;\n\tpadding-bottom: 3rem;\n}\n.footer-sign-up h1{\n\tpadding-bottom: 1.5rem;\n}\n.footer-sign-up input#submitbtn{\n\twidth: 67%;\n}\n.footer-sign-up button{\n\tmargin-left: 1rem;\n\twidth: 15%;\n}\n/* End Footer */\n/*End*/\n.end {\n\tbackground-color: #111111;\n\theight: 3rem;\n\ttext-align: center;\n\tcolor: grey;\n\tline-height: 3rem;\n}\n.end span {\n\tfont-weight: bold;\n\tcolor: darkorange;\n}\n@media screen and (max-width: 1700px) {\n    .nav-social {\n        display: none;\n    }\n}"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n\t<meta charset=\"UTF-8\">\n\t<title>Home Page</title>\n\t<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head>\n<body>\n\t<div class=\"wrapper\">\n\t\t<!-- Start Header -->\n\t\t<header>\n\t\t\t<div class=\"header-content clearfix\">\n\t\t\t\t<i class=\"fa fa-phone-square\"></i>\n\t\t\t\t<span>01227330000</span>\n\t\t\t\t<i class=\"fa fa-envelope-square\"></i>\n\t\t\t\t<span>datnguyentien.it@gmail.com</span>\n\t\t\t\t<form class=\"form-inline\" action=\"#\">\n\t\t\t\t\t<input  class=\"form-control\" type=\"Search\" placeholder=\"Search\">\n\t\t\t\t\t<button class=\"btn btn-success\" type=\"submit\">\n\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</form>\n\n\t\t\t</div>\n\t\t</header>\n\t\t<!-- End Header -->\n\t\t<!-- Start Navbar -->\n\t\t<nav class=\"navbar-menu\">\n\t\t\t<div class=\"row\" style=\"align-items: center;justify-content: center;\">\n\t\t\t\t<div class=\"col-sm-3\" id=\"logoHomePage\">\n\t\t\t\t\t<a href=\"#\"><img src=\"assets/images/logo.png\" alt=\"Company's Logo\" width=\"100%\" height=\"100%\"></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 \" style=\"flex-shrink: 0\">\n\t\t\t\t\t<nav class=\"navbar navbar-expand-md\">\n\t\t\t\t\t\t<!-- No Navbar Brand -->\n\t\t\t\t\t\t<ul class=\"navbar-nav\">\n\t\t\t\t\t\t\t<li class=\"nav-item active\">\n\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#\">HOME</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#\">SERVICES</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#\">GALLERY</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"nav-item dropdown\">\n\t\t\t\t\t\t\t\t<a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">PRODUCTS</a>\n\t\t\t\t\t\t\t\t<!-- Dropdown menu -->\n\t\t\t\t\t\t\t\t<div class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">Web Application</a>\n\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">Mobile Application</a>\n\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">Internet Of Things</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\t\n\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#\">CONTACT</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</nav>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 social nav-social\" >\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"rounded-circle social-item facebook\"><i class=\"fa fa-facebook\"></i></div>\n\t\t\t\t\t<div class=\"rounded-circle social-item youtube\"><i class=\"fa fa-youtube-play\"></i></div>\n\t\t\t\t\t<div class=\"rounded-circle social-item twitter\"><i class=\"fa fa-twitter\"></i></div>\n\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t\t<!-- End Navbar -->\n\t\t<!-- Start Carousel Slide -->\n\t\t<div id=\"homepage-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t<li data-target=\"#homepage-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t<li data-target=\"#homepage-carousel\" data-slide-to=\"1\"></li>\n\t\t\t\t<li data-target=\"#homepage-carousel\" data-slide-to=\"2\"></li>\n\t\t\t</ol>\n\t\t\t<div class=\"carousel-inner\" role=\"listbox\">\n\t\t\t\t<div class=\"carousel-item active\">\n\t\t\t\t\t<img src=\"assets/images/carousel01.jpg\" alt=\"First slide\" width=\"100%\" height=\"650\">\n\t\t\t\t\t<div class=\"carousel-caption crs-caption-menu\">\n\t\t\t\t\t\t<h3>Team Working</h3>\n\t\t\t\t\t\t<p>That's happy time to everyone</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t<img src=\"assets/images/carousel02.jpg\" alt=\"Second slide\" width=\"100%\" height=\"650\">\n\t\t\t\t\t<div class=\"carousel-caption crs-caption-menu\">\n\t\t\t\t\t\t<h3>Hard Working</h3>\n\t\t\t\t\t\t<p>Hard word is the key to success</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t<img src=\"assets/images/carousel03.jpg\" alt=\"Third slide\" width=\"100%\" height=\"650\">\n\t\t\t\t\t<div class=\"carousel-caption crs-caption-menu\">\n\t\t\t\t\t\t<h3>Enjoy</h3>\n\t\t\t\t\t\t<p>Work office just like your home</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<a class=\"carousel-control-prev\" href=\"#homepage-carousel\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t<span aria-hidden=\"true\"><i class=\"fa fa-angle-double-left\" style=\"font-size: 3rem\"></i></span>\n\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t</a>\n\t\t\t<a class=\"carousel-control-next\" href=\"#homepage-carousel\" role=\"button\" data-slide=\"next\">\n\t\t\t\t<span aria-hidden=\"true\"><i class=\"fa fa-angle-double-right\" style=\"font-size: 3rem\"></i></span>\n\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t</a>\n\t\t</div>\n\t\t<!-- End Carousel Slide -->\n\t\t<!-- Start About Us -->\n\t\t<article class=\"about-us\">\n\t\t\t<div class=\"about-us-content about-us-caption\">\n\t\t\t\t<h2>About Us</h2>\n\t\t\t\t<h5>Lorem ipsum dolor sit amet, consectetur adipisicing.</h5>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere debitis maxime possimus ad, quia magni doloremque. Exercitationem quia tenetur deleniti deserunt mollitia dolorum. Natus id amet numquam totam alias explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, accusamus.</p>\n\t\t\t</div>\n\t\t\t<div class=\"row about-us-content\">\n\t\t\t\t<div class=\"col-sm about-us-content-detail\">\n\t\t\t\t\t<div><i class=\"fa fa-home\"></i></div>\n\t\t\t\t\t<h3>Best Views</h3>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde saepe assumenda ad?</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm about-us-content-detail\">\n\t\t\t\t\t<div><i class=\"fa fa-bars\"></i></div>\n\t\t\t\t\t<h3>Affordable Price</h3>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde saepe assumenda ad?</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm about-us-content-detail\">\n\t\t\t\t\t<div><i class=\"fa fa-square-o\"></i></div>\n\t\t\t\t\t<h3>Spacious</h3>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde saepe assumenda ad?</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm about-us-content-detail\">\n\t\t\t\t\t<div><i class=\"fa fa-building-o\"></i></div>\n\t\t\t\t\t<h3>Building</h3>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde saepe assumenda ad?</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</article>\n\t\t<!-- End About Us -->\n\t\t<!-- Start Detail -->\n\t\t<article class=\"home-details clearfix\">\n\t\t\t<div style=\"width: 65%;float: left;margin-bottom: 3%;\"><img src=\"assets/images/home-details.jpg\" alt=\"Home\" width=\"100%\" height=\"100%\"></div>\n\t\t\t<div class=\"home-details-content\">\n\t\t\t\t<h1>Your Future Home</h1>\n\t\t\t\t<p class=\"home-subtitle\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nostrum ut aspernatur, facere doloribus quidem.</p>\n\t\t\t\t<p><i class=\"fa fa-bed\"></i>Bedrooms: 3</p>\n\t\t\t\t<p><i class=\"fa fa-crop\"></i>Area: 1500.00 m<span>2</span></p>\n\t\t\t\t<p><i class=\"fa fa-car\"></i>Parking place: 3</p>\n\t\t\t\t<p><i class=\"fa fa-coffee\"></i>Kitchenroom: 1</p>\n\t\t\t</div>\n\t\t</article>\n\t\t<!-- End Detail -->\n\t\t<!-- Start Team -->\n\t\t<article class=\"our-team\">\n\t\t\t<div class=\"our-team-caption\">\n\t\t\t\t<h1>Our Team</h1>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n\t\t\t</div>\n\t\t\t<div class=\"row our-team-mem\">\n\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t<img class=\"rounded-circle img-fluid\" src=\"assets/images/team1.png\" alt=\"\">\n\t\t\t\t\t<h4>Amanda Seylon</h4>\n\t\t\t\t\t<p>Project Manager</p>\n\t\t\t\t\t<span><i class=\"fa fa-facebook\"></i><i class=\"fa fa-twitter\"></i><i class=\"fa fa-google-plus\"></i><i class=\"fa fa-linkedin\"></i></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t<img class=\"rounded-circle img-fluid\" src=\"assets/images/team2.jpg\" alt=\"\">\n\t\t\t\t\t<h4>Laura Mark</h4>\n\t\t\t\t\t<p>Team Leader</p>\n\t\t\t\t\t<span><i class=\"fa fa-facebook\"></i><i class=\"fa fa-twitter\"></i><i class=\"fa fa-google-plus\"></i><i class=\"fa fa-linkedin\"></i></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t<img class=\"rounded-circle img-fluid\" src=\"assets/images/team3.jpg\" alt=\"\">\n\t\t\t\t\t<h4>Minion Lott</h4>\n\t\t\t\t\t<p>Director</p>\n\t\t\t\t\t<span><i class=\"fa fa-facebook\"></i><i class=\"fa fa-twitter\"></i><i class=\"fa fa-google-plus\"></i><i class=\"fa fa-linkedin\"></i></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</article>\n\t\t<!-- End Team -->\n\t\t<!-- Start Customer Feedback -->\n\t\t<div class=\"feedback-caption\">\n\t\t\t<h1>Customer Feedback</h1>\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>\n\t\t</div>\n\t\t<div id=\"carousel-feedback\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t<li data-target=\"#carousel-feedback\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t<li data-target=\"#carousel-feedback\" data-slide-to=\"1\"></li>\n\t\t\t</ol>\n\t\t\t<div class=\"carousel-inner\" role=\"listbox\">\n\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t<img src=\"assets/images/feedback1.jpg\" width=\"100%\" height=\"700\" alt=\"First slide\">\n\t\t\t\t\t<div class=\"row customer-feedback\">\n\t\t\t\t\t\t<div class=\"col-sm customer-feedback-content\">\n\t\t\t\t\t\t\t<p style=\"background-color: rgba(225,225,225,0.3)\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deleniti in adipisci dolorem sequi earum nulla tempore.</p>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div class=\"d-flex\">\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/feedback-people1.jpg\" width=\"100\" height=\"100\" alt=\"\">\n\t\t\t\t\t\t\t\t\t<div style=\"flex-grow: 1\">\n\t\t\t\t\t\t\t\t\t\t<h4 >Mary Christina</h4>\n\t\t\t\t\t\t\t\t\t\t<p >America</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm customer-feedback-content\">\n\t\t\t\t\t\t\t<p style=\"background-color: rgba(225,225,225,0.3)\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deleniti in adipisci dolorem sequi earum nulla tempore.</p>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<img src=\"assets/images/feedback-people2.png\" width=\"100\" height=\"100\" alt=\"\" style=\"float: left\">\n\t\t\t\t\t\t\t\t<h4>Peter Phan</h4>\n\t\t\t\t\t\t\t\t<p>Brazil</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm customer-feedback-content\">\n\t\t\t\t\t\t\t<p style=\"background-color: rgba(225,225,225,0.3)\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deleniti in adipisci dolorem sequi earum nulla tempore.</p>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<img src=\"assets/images/feedback-people3.png\" width=\"100\" height=\"100\" alt=\"\" style=\"float: left\">\n\t\t\t\t\t\t\t\t<h4>Park sang heo</h4>\n\t\t\t\t\t\t\t\t<p>Korea</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"carousel-item active\">\n\t\t\t\t\t<img src=\"assets/images/feedback2.png\" width=\"100%\" height=\"700\" alt=\"Second slide\">\n\t\t\t\t\t<div class=\"row customer-feedback\">\n\t\t\t\t\t\t<div class=\"col-sm customer-feedback-content\">\n\t\t\t\t\t\t\t<p style=\"background-color: rgba(225,225,225,0.3)\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deleniti in adipisci dolorem sequi earum nulla tempore.</p>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div class=\"d-flex\">\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/feedback-people1.jpg\" width=\"100\" height=\"100\" alt=\"\">\n\t\t\t\t\t\t\t\t\t<div style=\"flex-grow: 1\">\n\t\t\t\t\t\t\t\t\t\t<h4 >Chris Khoa</h4>\n\t\t\t\t\t\t\t\t\t\t<p >Vietnam</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm customer-feedback-content\">\n\t\t\t\t\t\t\t<p style=\"background-color: rgba(225,225,225,0.3)\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deleniti in adipisci dolorem sequi earum nulla tempore.</p>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<img src=\"assets/images/feedback-people2.png\" width=\"100\" height=\"100\" alt=\"\" style=\"float: left\">\n\t\t\t\t\t\t\t\t<h4>Mary Jane</h4>\n\t\t\t\t\t\t\t\t<p>Thailand</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm customer-feedback-content\">\n\t\t\t\t\t\t\t<p style=\"background-color: rgba(225,225,225,0.3)\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deleniti in adipisci dolorem sequi earum nulla tempore.</p>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<img src=\"assets/images/feedback-people3.png\" width=\"100\" height=\"100\" alt=\"\" style=\"float: left\">\n\t\t\t\t\t\t\t\t<h4>Jaka Shino</h4>\n\t\t\t\t\t\t\t\t<p>Japan</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<a class=\"carousel-control-prev\" href=\"#carousel-feedback\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t</a>\n\t\t\t<a class=\"carousel-control-next\" href=\"#carousel-feedback\" role=\"button\" data-slide=\"next\">\n\t\t\t\t<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t</a>\n\t\t</div>\n\t\t<!-- End Customer Feedback -->\n\t\t<!-- Start Overview -->\n\t\t<div class=\"overview\">\n\t\t\t<div class=\"overview-caption\">\n\t\t\t\t<h1>Over view</h1>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n\t\t\t</div>\n\t\t\t<div class=\"row overview-content\">\n\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t<div class=\"d-flex overview-details\">\n\t\t\t\t\t\t<i class=\"fa fa-users\"></i>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h2>16500</h2>\n\t\t\t\t\t\t\t<p>Happy Clients</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t<div class=\"d-flex overview-details\">\n\t\t\t\t\t\t<i class=\"fa fa-shopping-bag\"></i>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h2>210</h2>\n\t\t\t\t\t\t\t<p>Sales per month</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t<div class=\"d-flex overview-details\">\n\t\t\t\t\t\t<i class=\"fa fa-home\"></i>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h2>20500</h2>\n\t\t\t\t\t\t\t<p>Number of Homes</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- End Overview -->\n\t\t<!-- Start Contact -->\n\t\t<div class=\"contact-img\">\n\t\t\t<img src=\"assets/images/contact.jpg\" alt=\"\" width=\"100%\" height=\"400\" style=\"margin-top: 5rem; object-fit: cover;\">\n\t\t</div>\n\t\t<article class=\"contact-us\">\n\t\t\t<div class=\"contact-us-caption\">\n\t\t\t\t<h1>Contact Us</h1>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n\t\t\t</div>\n\t\t\t<div class=\"contact-us-content\">\n\t\t\t\t<div class=\"row contact-us-details\">\n\t\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t\t<h2>Get In Touch</h2>\n\t\t\t\t\t\t<form action=\"#\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"fullname\">Full Name :</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"fullname\" name=\"fullname\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"phone\">Phone Number :</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"phone\" name=\"phone\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"email\">Email Address :</label>\n\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-info\" style=\"width: 100%\">Send</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t\t<h2>Connect With Us</h2>\n\t\t\t\t\t\t<div class=\"contact-info\">\n\t\t\t\t\t\t\t<p><span>Phone : </span>0123666999</p>\n\t\t\t\t\t\t\t<p><span>Email : </span>example.1@gmail.com</p>\n\t\t\t\t\t\t\t<p><span>Address : </span>124 Nguyen Thi Minh Khai, Quan 3, Tp.HCM</p>\n\t\t\t\t\t\t\t<div class=\"social\">\n\t\t\t\t\t\t\t\t<div class=\"rounded-circle social-item facebook\"><i class=\"fa fa-facebook\"></i></div>\n\t\t\t\t\t\t\t\t<div class=\"rounded-circle social-item youtube\"><i class=\"fa fa-youtube-play\"></i></div>\n\t\t\t\t\t\t\t\t<div class=\"rounded-circle social-item twitter\"><i class=\"fa fa-twitter\"></i></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</article>\n\t\t<iframe class=\"contact-map\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4356272518185!2d106.69079721527449!3d10.777909162112344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a10be25f1%3A0xec9653014177fd35!2zMTI0IE5ndXnhu4VuIFRo4buLIE1pbmggS2hhaSwgcGjGsOG7nW5nIDYsIFF14bqtbiAxLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1524396717200\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n\t\t<!-- End Contact -->\n\t\t<!-- Start Footer -->\n\t\t<footer>\n\t\t\t<div class=\"row footer-content\">\n\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t<h1>Contact Info</h1>\n\t\t\t\t\t<p><span><i class=\"fa fa-map-marker\"></i></span>124 Nguyen Thi Minh Khai, Quan 3, Tp.HCM</p>\n\t\t\t\t\t<p><span><i class=\"fa fa-envelope\"></i></span>example.1@gmail.com</p>\n\t\t\t\t\t<p><span><i class=\"fa fa-phone\"></i></span>0123666999</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t<h1>About Us</h1>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, corrupti, atque. Sit placeat eligendi accusamus ad neque quia voluptatibus odio quis!</p>\n\t\t\t\t\t<div class=\"social\">\n\t\t\t\t\t\t\t\t<div class=\"rounded-circle social-item facebook\"><i class=\"fa fa-facebook\"></i></div>\n\t\t\t\t\t\t\t\t<div class=\"rounded-circle social-item youtube\"><i class=\"fa fa-youtube-play\"></i></div>\n\t\t\t\t\t\t\t\t<div class=\"rounded-circle social-item twitter\"><i class=\"fa fa-twitter\"></i></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t<h1>Lastest News</h1>\n\t\t\t\t\t<p><span><i class=\"fa fa-long-arrow-right\"></i></span>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>\n\t\t\t\t\t<p><span><i class=\"fa fa-long-arrow-right\"></i></span>Lorem ipsum dolor sit amet, adipisicing.</p>\n\t\t\t\t\t<p><span><i class=\"fa fa-long-arrow-right\"></i></span>Lorem ipsum dolor sit amet, consecte.</p>\n\t\t\t\t\t<p><span><i class=\"fa fa-long-arrow-right\"></i></span>Lorem ipsum dolor sit amet, cons.</p>\n\t\t\t\t\t<p><span><i class=\"fa fa-long-arrow-right\"></i></span>Lorem ipsum dolor sit</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"footer-sign-up\">\n\t\t\t\t<h1>Sugn up for out Newsletter</h1>\n\t\t\t\t<form action=\"\" class=\"form-inline\">\t\n\t\t\t\t\t\t<input id=\"submitbtn\" type=\"email\" class=\"form-control\" placeholder=\"Enter your email ...\" name=\"email\">\n\t\t\t\t\t\t<button id=\"submitbtn\" type=\"submit\" class=\"btn btn-info\">Submit</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</footer>\n\t\t<!-- End Footer -->\n\t\t<!-- End -->\n\t\t<div class=\"end\">\n\t\t\t<p><i class=\"fa fa-copyright\"></i>2018 MyCompany. All rights reserved | Design by <span>MyLayout</span></p>\n\t\t</div>\n\t</div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        })
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map