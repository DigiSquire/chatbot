webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row b-agent-demo\" >\n        <!-- <div class=\"column\"></div> -->\n        <div class=\"b-agent-demo_header\">\n            <div class=\"b-agent-demo_header-icon\">\n                <div class=\"b-agent-demo_header-icon-align-helper\">\n                    <img id=\"agent-avatar\" src=\"https://storage.googleapis.com/cloudprod-apiai/c105435a-7a04-49ec-87e0-55a2426fa1a5_s.png\" srcset=\"https://storage.googleapis.com/cloudprod-apiai/c105435a-7a04-49ec-87e0-55a2426fa1a5_s.png 2x, https://storage.googleapis.com/cloudprod-apiai/c105435a-7a04-49ec-87e0-55a2426fa1a5_xs.png 1x\">\n                </div>\n            </div>\n            <div class=\"b-agent-demo_header-wrapper\">\n                <div class=\"b-agent-demo_header-agent-name\">Demo Bot</div>\n            </div>\n        </div>\n        <div class=\"b-agent-demo_powered_by\">\n        </div>\n        <div class=\"b-agent-demo_result\" id=\"resultWrapper\">\n            <table class=\"b-agent-demo_result-table\">\n                <tbody>\n                    <tr>\n                        <td id=\"result\">\n                                <div class=\"column column-100\">\n                                    <chat-dialog></chat-dialog>\n                                </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n      </div>\n    \n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".b-agent-demo {\n  font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 300;\n  width: 100%;\n  height: auto;\n  color: #2b313f;\n  font-size: 12px;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.b-agent-demo .b-agent-demo_header {\n  min-height: 80px;\n  height: 80px;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: #2b303e;\n  display: table; }\n\n.b-agent-demo .b-agent-demo_header-icon {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: 50px;\n  height: 41px;\n  overflow: hidden;\n  vertical-align: middle;\n  text-align: center; }\n\n.b-agent-demo .b-agent-demo_header-icon img {\n  max-height: 100%;\n  max-width: 100%;\n  width: auto;\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: 0;\n  margin: auto; }\n\n.b-agent-demo .b-agent-demo_header-wrapper {\n  display: table-cell;\n  vertical-align: middle; }\n\n.b-agent-demo .b-agent-demo_header-agent-name {\n  padding-left: 80px;\n  font-size: 18px;\n  color: white;\n  font-weight: bold; }\n\n.b-agent-demo .b-agent-demo_result {\n  overflow-y: auto;\n  background: white;\n  position: fixed;\n  top: 110px;\n  bottom: 55px;\n  width: 100%; }\n\n.b-agent-demo .b-agent-demo_result-table {\n  height: 100%;\n  min-height: 100%;\n  width: 100%; }\n\n.b-agent-demo .b-agent-demo_result-table td {\n  vertical-align: bottom; }\n\n.b-agent-demo .b-agent-demo_powered_by {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 80px;\n  height: 30px;\n  background-color: #F8F8F8;\n  vertical-align: middle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat_module__ = __webpack_require__("../../../../../src/app/chat/chat.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__chat_chat_module__["a" /* ChatModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat-dialog/chat-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1>Sample Bot</h1>\n\n -->\n\n<ng-container *ngFor=\"let message of messages | async\">\n  <div class=\"message\" [ngClass]=\"{ 'from': message.sentBy === 'bot',\n                                    'to':   message.sentBy === 'user' }\">\n    {{ message.content }}\n  </div>\n</ng-container>\n\n<!-- \n<label for=\"nameField\">Your Message</label> -->\n<!-- <input [(ngModel)]=\"formValue\" (keyup.enter)=\"sendMessage()\" type=\"text\"><br> -->\n\n<div class=\"clearfix\"></div>\n<div class=\"b-agent-demo_input\">\n    <input [(ngModel)]=\"formValue\" (keyup.enter)=\"sendMessage()\" id=\"query\" type=\"text\" placeholder=\"Ask something...\">\n    <!-- <button (click)=\"sendMessage()\">Send</button> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat-dialog/chat-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".message {\n  border-radius: 50px;\n  margin: 10px 15px 10px;\n  padding: 15px 20px;\n  position: relative;\n  font-weight: bold; }\n\n.message.to {\n  background-color: #efefef;\n  float: left;\n  margin-right: 15px;\n  margin-top: 15px;\n  margin-left: 15px;\n  padding: 15px 25px;\n  border-radius: 3px;\n  border: 1px solid #eee;\n  margin-bottom: 5px;\n  font-size: 16px;\n  clear: both; }\n\n.message.from {\n  color: white;\n  background-color: #A5D175;\n  float: right;\n  margin-top: 15px;\n  margin-right: 15px;\n  margin-left: 15px;\n  padding: 15px 25px;\n  border-radius: 3px;\n  border: 1px solid #eee;\n  margin-bottom: 5px;\n  font-size: 16px;\n  clear: both; }\n\n.message.to + .message.to,\n.message.from + .message.from {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 15px 25px;\n  border-radius: 3px;\n  border: 1px solid #eee;\n  margin-bottom: 5px;\n  font-size: 16px;\n  clear: both; }\n\n.clearfix {\n  clear: both; }\n\n.b-agent-demo_input {\n  position: fixed;\n  bottom: 0;\n  height: 55px;\n  border-top: 1px solid lightgray;\n  background-color: white;\n  width: 100%; }\n\n.b-agent-demo_input #query {\n  width: 100%;\n  border: 0;\n  font-size: 16px;\n  font-weight: 300;\n  margin: 0;\n  height: 55px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat-dialog/chat-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_scan__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/scan.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatDialogComponent = (function () {
    function ChatDialogComponent(chat) {
        this.chat = chat;
    }
    ChatDialogComponent.prototype.ngOnInit = function () {
        // appends to array after each new message is added to feedSource
        this.messages = this.chat.conversation.asObservable()
            .scan(function (acc, val) { return acc.concat(val); });
    };
    ChatDialogComponent.prototype.sendMessage = function () {
        this.chat.converse(this.formValue);
        this.formValue = '';
    };
    return ChatDialogComponent;
}());
ChatDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'chat-dialog',
        template: __webpack_require__("../../../../../src/app/chat/chat-dialog/chat-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat-dialog/chat-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], ChatDialogComponent);

var _a;
//# sourceMappingURL=chat-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_dialog_chat_dialog_component__ = __webpack_require__("../../../../../src/app/chat/chat-dialog/chat-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_service__ = __webpack_require__("../../../../../src/app/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat_dialog_chat_dialog_component__["a" /* ChatDialogComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__chat_dialog_chat_dialog_component__["a" /* ChatDialogComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__chat_service__["a" /* ChatService */]]
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Message */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_api_ai_javascript__ = __webpack_require__("../../../../api-ai-javascript/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Message = (function () {
    function Message(content, sentBy) {
        this.content = content;
        this.sentBy = sentBy;
    }
    return Message;
}());

var ChatService = (function () {
    function ChatService() {
        this.token = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].dialogflow.angularBot;
        this.client = new __WEBPACK_IMPORTED_MODULE_2_api_ai_javascript__["a" /* ApiAiClient */]({ accessToken: this.token });
        this.conversation = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    // Sends and receives messages via DialogFlow
    ChatService.prototype.converse = function (msg) {
        var _this = this;
        var userMessage = new Message(msg, 'user');
        this.update(userMessage);
        return this.client.textRequest(msg)
            .then(function (res) {
            var speech = res.result.fulfillment.speech;
            var botMessage = new Message(speech, 'bot');
            _this.update(botMessage);
        });
    };
    // Adds message to source
    ChatService.prototype.update = function (msg) {
        this.conversation.next([msg]);
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ChatService);

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    dialogflow: {
        angularBot: '769881b203164320a10f3f78f1f0dd9c'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map