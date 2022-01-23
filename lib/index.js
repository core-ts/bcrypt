"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = require("bcrypt");
var Comparator = (function () {
  function Comparator(saltOrRounds) {
    this.saltOrRounds = (saltOrRounds ? saltOrRounds : 10);
    this.compare = this.compare.bind(this);
    this.hash = this.hash.bind(this);
  }
  Comparator.prototype.compare = function (data, encrypted) {
    return bcrypt_1.compare(data, encrypted);
  };
  Comparator.prototype.hash = function (data) {
    return bcrypt_1.hash(data, this.saltOrRounds);
  };
  return Comparator;
}());
exports.Comparator = Comparator;
