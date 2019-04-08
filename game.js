var inquirer = require("inquirer");
var chalk = require('chalk');
var word = require('./word.js');
var wordBank = require('./wordBank.js');




function Game() {
  this.start = function () {
    console.log("start!");
  }
  this.nextWork = function () {
    var randomWord = new Word(placeholder)
  }
  
}

module.exports = Game; //exports the constructor