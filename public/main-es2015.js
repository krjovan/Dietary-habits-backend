(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AppComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " My profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.auth.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r1.auth.getUserDetails()) == null ? null : tmp_0_0.name, " ");
} }
class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'Dietary habits';
    }
    myFunction() {
        const x = document.getElementById('myTopnav');
        const navSignIn = document.getElementById('navSignIn');
        const userDropdown = document.getElementById('userDropdown');
        if (x.className === 'topnav') {
            x.className += ' responsive';
            if (navSignIn !== null) {
                navSignIn.className = '';
            }
            if (userDropdown !== null) {
                userDropdown.className = 'dropdown';
            }
        }
        else {
            x.className = 'topnav';
            if (navSignIn !== null) {
                navSignIn.className = 'w3-right';
            }
            if (userDropdown !== null) {
                userDropdown.className = 'dropdown w3-right';
            }
        }
    }
    toTop() {
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 41, vars: 2, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], ["id", "myTopnav", 1, "topnav"], ["routerLink", "/home"], [1, "fa", "fa-home"], ["class", "w3-right", "id", "navSignIn", "routerLink", "/sign-in", 4, "ngIf"], ["class", "dropdown w3-right", "id", "userDropdown", 4, "ngIf"], [1, "icon", 3, "click"], [1, "fa", "fa-bars"], [1, "w3-container", "w3-padding-32", "w3-dark-grey", "w3-center"], [1, "w3-padding-16"], [1, "w3-xlarge", "w3-border-teal", "w3-bottombar"], [1, "fa", "fa-map-marker", "w3-text-teal", "w3-xlarge"], [1, "fa", "fa-clock-o", "w3-text-teal", "w3-xlarge"], [1, "fa", "fa-phone", "w3-text-teal", "w3-xlarge"], [1, "fa", "fa-envelope-o", "w3-text-teal", "w3-xlarge"], [1, "w3-button", "w3-black", "w3-margin", 3, "click"], [1, "fa", "fa-arrow-up", "w3-margin-right"], [1, "w3-xlarge", "w3-section"], [1, "fa", "fa-facebook-official", "w3-hover-opacity", 2, "padding", "5pt"], [1, "fa", "fa-instagram", "w3-hover-opacity", 2, "padding", "5pt"], [1, "fa", "fa-snapchat", "w3-hover-opacity", 2, "padding", "5pt"], [1, "fa", "fa-pinterest-p", "w3-hover-opacity", 2, "padding", "5pt"], [1, "fa", "fa-twitter", "w3-hover-opacity", 2, "padding", "5pt"], [1, "fa", "fa-linkedin", "w3-hover-opacity", 2, "padding", "5pt"], [1, "w3-hover-text-green"], ["id", "navSignIn", "routerLink", "/sign-in", 1, "w3-right"], [1, "fa", "fa-sign-in"], ["id", "userDropdown", 1, "dropdown", "w3-right"], [1, "dropbtn"], [1, "fa", "fa-user"], [1, "fa", "fa-caret-down"], [1, "dropdown-content"], ["routerLink", "/profile", 2, "cursor", "pointer"], [2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-sign-out"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_a_6_Template, 3, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 12, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_8_listener() { return ctx.myFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " John Kennedy 36, New Belgrade, Serbia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Mon-Fri : 09-17h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " +38165515524");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " contact@dietaryhabits.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_27_listener() { return ctx.toTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "To top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "someone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  background-color: #333;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  font-family: Verdana,sans-serif;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\r\n  background-color: #555;\r\n  color: white;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  float: left;\r\n  overflow: hidden;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  border: none;\r\n  outline: none;\r\n  color: white;\r\n  padding: 14px 16px;\r\n  background-color: inherit;\r\n  font-family: inherit;\r\n  margin: 0;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #555;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: none;\r\n  color: white;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  text-align: left;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child), .dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .topnav[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%] {\r\n    float: right;\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav.responsive[_ngcontent-%COMP%] {position: relative;}\r\n  .topnav.responsive[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  .topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n\r\n  .topnav.responsive[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {float: none;}\r\n  .topnav.responsive[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%] {position: relative;}\r\n  .topnav.responsive[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0Isa0JBQWtCLENBQUM7RUFDdkM7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07RUFDUjtFQUNBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0VBRUEsOEJBQThCLFdBQVcsQ0FBQztFQUMxQyxzQ0FBc0Msa0JBQWtCLENBQUM7RUFDekQ7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50b3BuYXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG5cclxuLnRvcG5hdiBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRvcG5hdiBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi50b3BuYXYgLmljb24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAudG9wbmF2IGE6bm90KDpmaXJzdC1jaGlsZCkgLCAuZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnRvcG5hdiBhLmljb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSB7cG9zaXRpb246IHJlbGF0aXZlO31cclxuICAudG9wbmF2LnJlc3BvbnNpdmUgLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIC5kcm9wZG93biB7ZmxvYXQ6IG5vbmU7fVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSAuZHJvcGRvd24tY29udGVudCB7cG9zaXRpb246IHJlbGF0aXZlO31cclxuICAudG9wbmF2LnJlc3BvbnNpdmUgLmRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");













const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'sign-in', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                    _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 0, consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["id", "home", 1, "w3-display-container", "w3-content", "w3-wide", 2, "max-width", "1500px"], [1, "w3-display-middle", "w3-margin-top", "w3-center"], [1, "w3-xxxlarge", "w3-text-white"], [1, "w3-padding", "w3-black", 2, "opacity", "0.8"], [1, "w3-hide-small", "w3-text-light-grey"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dietary habits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.centered[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-family: Verdana,sans-serif;\r\n  font-size: 25pt;\r\n  color: white;\r\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  border-collapse: separate;\r\n  border-spacing: 0;\r\n  width: 100%;\r\n  border-radius: 15px;\r\n  border: 3px solid rgb(31, 101, 182);\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 8px;\r\n  border: 1px solid grey;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  position: relative;\r\n  outline: 0;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]:not(.nohover)   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(207, 207, 196);\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:hover::after, thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:empty):hover::after, td[_ngcontent-%COMP%]:focus::after, thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:empty):focus::after {\r\n  content: '';\r\n  height: 10000px;\r\n  left: 0;\r\n  position: absolute;\r\n  top: -5000px;\r\n  width: 100%;\r\n  z-index: -1;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:hover::after, th[_ngcontent-%COMP%]:hover::after {\r\n  background-color: rgb(207, 207, 196);\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:focus::after, th[_ngcontent-%COMP%]:focus::after {\r\n  background-color: lightblue;\r\n}\r\n\r\n\r\n\r\ntd[_ngcontent-%COMP%]:focus::before, tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:focus::before {\r\n  background-color: lightblue;\r\n  content: '';\r\n  height: 100%;\r\n  top: 0;\r\n  left: -5000px;\r\n  position: absolute;\r\n  width: 10000px;\r\n  z-index: -1;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n\r\n.col[_ngcontent-%COMP%] {\r\n  background-color: rgba(163, 195, 214, 0.37);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlFQUFpRTtBQUNuRTs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOzs7O0VBSUUsV0FBVztFQUNYLGVBQWU7RUFDZixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBOztFQUVFLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSwyQkFBMkI7QUFDN0I7O0FBRUEsMkJBQTJCOztBQUMzQjs7RUFFRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI1cHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDMxLCAxMDEsIDE4Mik7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG59XHJcbnRhYmxlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbmJvZHk6bm90KC5ub2hvdmVyKSB0Ym9keSB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjA3LCAxOTYpO1xyXG59XHJcblxyXG50ZDpob3Zlcjo6YWZ0ZXIsXHJcbnRoZWFkIHRoOm5vdCg6ZW1wdHkpOmhvdmVyOjphZnRlcixcclxudGQ6Zm9jdXM6OmFmdGVyLFxyXG50aGVhZCB0aDpub3QoOmVtcHR5KTpmb2N1czo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGhlaWdodDogMTAwMDBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC01MDAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbnRkOmhvdmVyOjphZnRlcixcclxudGg6aG92ZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMDcsIDE5Nik7XHJcbn1cclxuXHJcbnRkOmZvY3VzOjphZnRlcixcclxudGg6Zm9jdXM6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbi8qIEZvY3VzIHN0dWZmIGZvciBtb2JpbGUgKi9cclxudGQ6Zm9jdXM6OmJlZm9yZSxcclxudGJvZHkgdGg6Zm9jdXM6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogLTUwMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMDAwcHg7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmNvbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjMsIDE5NSwgMjE0LCAwLjM3KTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class ProfileComponent {
    constructor(auth) {
        this.auth = auth;
        this.currentPassword = '';
        this.newPassword = '';
        this.confirmationPassword = '';
    }
    ngOnInit() {
        this.getUserDetails();
    }
    getUserDetails() {
        this.auth.profile().subscribe(user => {
            this.details = user;
        }, (err) => {
            console.error(err);
        });
    }
    save() {
        if (this.newPassword !== this.confirmationPassword) {
            console.log("New password and Confirmation password do not match");
            return;
        }
        var req = {
            currentPassword: this.currentPassword,
            salt: this.details.salt
        };
        this.auth.getHash(req).subscribe({
            next: data => {
                if (this.details.hash === data.hash) {
                    this.details.newPassword = this.newPassword;
                    this.auth.updateUser(this.details).subscribe({
                        next: data => {
                            if (this.newPassword !== '') {
                                this.details.password = this.newPassword;
                            }
                            else {
                                this.details.password = this.currentPassword;
                            }
                            this.auth.login(this.details).subscribe(() => {
                                console.log('Changes saved!');
                            }, (err) => {
                                console.error(err);
                            });
                            this.getUserDetails();
                            this.currentPassword = '';
                            this.newPassword = '';
                            this.confirmationPassword = '';
                        },
                        error: error => {
                            console.log(error);
                        }
                    });
                }
                else {
                    console.log('Current password is not correct!');
                }
            },
            error: error => {
                console.log(error);
            }
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 51, vars: 6, consts: [[1, "w3-center", "w3-padding", 2, "margin", "0 auto", "max-width", "600px"], [1, "w3-card-4"], [1, "w3-container", "w3-teal"], [1, "w3-container"], ["formControl", "ngForm"], [1, "w3-text-teal"], ["required", "", "name", "name", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["required", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "name", "email", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "w3-text-grey", 2, "font-style", "italic"], ["name", "newpassword", "minlength", "8", "maxlength", "20", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$", "type", "password", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [2, "font-size", "9pt"], [2, "color", "red"], ["name", "confirmationpassword", "minlength", "8", "maxlength", "20", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$", "type", "password", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["required", "", "minlength", "1", "maxlength", "40", "name", "oldpassword", "type", "password", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "w3-center"], [1, "w3-btn", "w3-teal", 3, "disabled", "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_11_listener($event) { return ctx.details.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_16_listener($event) { return ctx.details.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "someone@domain.domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "New password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_24_listener($event) { return ctx.newPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Minimum 8 and maximum 20 characters. It must contain at least one lowercase and uppercase letter, a number as well as a special character. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " (Only if you want to change the current password)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Confirmation password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_34_listener($event) { return ctx.confirmationPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Enter the new password again to confirm it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " (Only if you want to change the current password)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Current password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_47_listener($event) { return ctx.currentPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_49_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.details.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.details.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmationPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class RegisterComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            name: '',
            email: '',
            password: '',
            role: ''
        };
    }
    ngOnInit() {
    }
    register() {
        if (this.credentials.password === this.confirmationPassword) {
            this.credentials.name = this.firstName + ' ' + this.lastName;
            this.auth.register(this.credentials).subscribe(() => {
                this.router.navigateByUrl('/profile');
            }, (err) => {
                console.error(err);
            });
        }
        else {
            console.log('Password and Confirmation password do not match');
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 43, vars: 6, consts: [[1, "w3-center", "w3-padding", 2, "margin", "0 auto", "max-width", "600px"], [1, "w3-card-4"], [1, "w3-container", "w3-teal"], [1, "w3-container"], ["formControl", "ngForm"], [1, "w3-text-teal"], ["required", "", "minlength", "2", "maxlength", "40", "name", "first", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["required", "", "minlength", "2", "maxlength", "40", "name", "last", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["required", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "minlength", "1", "maxlength", "40", "name", "email", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "w3-text-grey", 2, "font-style", "italic"], ["required", "", "minlength", "8", "maxlength", "20", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$", "name", "password", "type", "password", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [2, "font-size", "9pt"], [1, "w3-center"], [1, "w3-btn", "w3-teal", 3, "disabled", "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Register form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_11_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_21_listener($event) { return ctx.credentials.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_27_listener($event) { return ctx.credentials.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Minimum 8 and maximum 20 characters. It must contain at least one lowercase and uppercase letter, a number as well as a special character. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Confirmation password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_36_listener($event) { return ctx.confirmationPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Enter the new password again to confirm it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_41_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmationPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class SignInComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            password: '',
            role: ''
        };
    }
    login() {
        this.auth.login(this.credentials).subscribe(() => {
            // this.router.navigateByUrl('/profile');
        }, (err) => {
            console.error(err);
        });
    }
    ngOnInit() {
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 27, vars: 3, consts: [[1, "w3-center", "w3-padding", 2, "margin", "0 auto", "max-width", "600px"], [1, "w3-card-4"], [1, "w3-container", "w3-teal"], [1, "w3-container"], ["formControl", "ngForm"], [1, "w3-text-teal"], ["required", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "minlength", "1", "maxlength", "40", "name", "email", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "w3-text-grey", 2, "font-style", "italic"], ["required", "", "minlength", "1", "maxlength", "40", "name", "password", "type", "password", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "w3-center"], [1, "w3-btn", "w3-teal", 3, "disabled", "click"], [1, "w3-padding-32"], ["routerLink", "/register", 2, "cursor", "pointer"], [1, "w3-btn", "w3-teal"], [1, "fa", "fa-user"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_11_listener($event) { return ctx.credentials.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_17_listener($event) { return ctx.credentials.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_19_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "If you don't have an account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.css']
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.BACKEND_URL_USERS = 'http://localhost:8080/users';
    }
    saveToken(token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    }
    getUserDetails() {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    }
    isLoggedIn() {
        const user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    }
    isAdmin() {
        const user = this.getUserDetails();
        if (user) {
            if (user.role === 'admin') {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    request(method, type, user) {
        let base;
        if (method === 'post') {
            base = this.http.post(this.BACKEND_URL_USERS + `/${type}`, user);
        }
        else {
            base = this.http.get(this.BACKEND_URL_USERS + `/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
        }
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            if (data.token) {
                this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    }
    register(user) {
        return this.request('post', 'register', user);
    }
    login(user) {
        return this.request('post', 'login', user);
    }
    profile() {
        return this.request('get', 'profile');
    }
    logout() {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    }
    getHash(body) {
        return this.http.post(this.BACKEND_URL_USERS + '/hash', body, httpOptions);
    }
    updateUser(user) {
        return this.http.put(this.BACKEND_URL_USERS + '/update/' + user._id, user, httpOptions);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Dietary_habits_project\Dietary-habits-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map