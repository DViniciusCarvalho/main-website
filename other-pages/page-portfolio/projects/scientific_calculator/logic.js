import {
  resultantOperation,
  putPi,
  putEuler,
  openParenthesis,
  closeParenthesis,
  putDot,
  putResult,
  clearLastElement,
  calculateFatorial,
  calculateAbsoluteValue,
  calculateLog,
  calculateTrigonometricFn,
  convertTrigonometricUnit,
  changeOperatorSignalDot,
  changeNumberSignalDot
} from './validations.js'

const numbers = [...document.getElementsByClassName('number')]
const display = document.getElementById('display')
const pi_value = document.getElementsByClassName('pi')[0]
const euler_value = document.getElementsByClassName('euler')[0]
const operations = [...document.getElementsByClassName('operacao')]
const open_prnt = document.getElementsByClassName('abPr')[0]
const close_prnt = document.getElementsByClassName('fcPr')[0]
const dot = document.getElementsByClassName('ponto')[0]
const equal = document.getElementsByClassName('igual')[0]
const clear_all = document.getElementsByClassName('clearAll')[0]
const clear_last = document.getElementsByClassName('clearLast')[0]
const fatorial = document.getElementsByClassName('fatorial')[0]
const abs = document.getElementsByClassName('abs')[0]
const log = document.getElementsByClassName('log')[0]
const trigonometry = [...document.getElementsByClassName('trigonometry')]
const trig_unity = [...document.getElementsByClassName('trigonometric_unity')]

let display_content = []

numbers.forEach((current_element) => {
  current_element.addEventListener('click', (event) => {
    if (display_content[display_content.length - 1] == "0" && isNaN(Number(display_content[display_content.length - 2]))){
      display_content.length -= 1;
      display.innerHTML = '';
      display_content.forEach((element) => {
        display.innerHTML += element;
      });
    }
    display.innerHTML += Number(event.target.innerHTML)
    display_content.push(String(event.target.innerHTML))
    changeNumberSignalDot()
  })
})

pi_value.addEventListener('click', () => {
  let pi_value = 3.141592
  putPi(display_content, display, pi_value)
  changeNumberSignalDot()
})

euler_value.addEventListener('click', () => {
  let euler_value = 2.718281
  putEuler(display_content, display, euler_value)
  changeNumberSignalDot()
})

operations.forEach((current_element) => {
  current_element.addEventListener('click', (event) => {
    let target_text = event.target.innerText
    resultantOperation(display_content, display, target_text)
    changeOperatorSignalDot()
  })
})

open_prnt.addEventListener('click', () => {
  openParenthesis(display_content, display)
})

close_prnt.addEventListener('click', () => {
  closeParenthesis(display_content, display)
})

dot.addEventListener('click', () => {
  putDot(display_content, display)
})

equal.addEventListener('click', () => {
  let result_of_expression = eval(display.innerHTML)
  display_content = putResult(result_of_expression, display_content, display)
})

clear_all.addEventListener('click', () => {
  display.innerHTML = ""
  display_content = []
})

clear_last.addEventListener('click', () => {
  clearLastElement(display_content, display)
})

fatorial.addEventListener('click', () => {
  calculateFatorial(display_content, display)  
})

abs.addEventListener('click', () => {
  calculateAbsoluteValue(display_content, display)
})

log.addEventListener('click', () => {
  calculateLog(display_content, display, log)
})

trigonometry.forEach((element) => {
  element.addEventListener('click', (event) => {
    calculateTrigonometricFn(display_content, display, event.target)
  })
})

trig_unity.forEach((element) => {
  element.addEventListener('click', (event) => {
    convertTrigonometricUnit(display_content, display, event.target)
  })
})