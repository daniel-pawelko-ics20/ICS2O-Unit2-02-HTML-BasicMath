// Copyright (c) 2020 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This javascript file controls index.html, does calculations

function doMathClicked () {
  // Math function
  document.getElementById('area-math').innerHTML = 'Area of 5cm & 3cm =  ' + (5*3) + 'cm²'
  document.getElementById('perimiter-math').innerHTML = 'Perimiter of 5 & 3 =  ' + 2*(5+3) + 'cm'
}