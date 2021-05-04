// Copyright (c) 2020 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This javascript file controls index.html, does calculations

function doMathClicked () {
  // Math function
  document.getElementById('add-math').innerHTML = '6 + 5 = ' + (6 + 5)
  document.getElementById('subtract-math').innerHTML = '7 - 3 =  ' + (7 - 3)
  document.getElementById('multiply-math').innerHTML = '3 + 4 * 2 = ' + (3 + 4 * 2)
  document.getElementById('divide-math').innerHTML = '(4 / 2) + 3 = ' + ((4 / 2) + 3)
  document.getElementById('exponent-math').innerHTML = '5 + 2 ** 3 = ' + (5 + 2 ** 3)
}