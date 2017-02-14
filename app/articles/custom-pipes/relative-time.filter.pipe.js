"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var RelativeTimeFilterPipe = (function () {
    function RelativeTimeFilterPipe() {
    }
    RelativeTimeFilterPipe.prototype.transform = function (inputDate) {
        var current = new Date().valueOf();
        var input = new Date(parseInt(inputDate)).valueOf();
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
        var elapsed = current - input;
        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' seconds ago';
        }
        else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes ago';
        }
        else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours ago';
        }
        else if (elapsed < msPerMonth) {
            return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
        }
        else if (elapsed < msPerYear) {
            return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
        }
        else {
            console.log('inside the if condition', elapsed);
            return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
        }
    };
    return RelativeTimeFilterPipe;
}());
RelativeTimeFilterPipe = __decorate([
    core_1.Pipe({
        name: 'relativeTime'
    })
], RelativeTimeFilterPipe);
exports.RelativeTimeFilterPipe = RelativeTimeFilterPipe;
//# sourceMappingURL=relative-time.filter.pipe.js.map