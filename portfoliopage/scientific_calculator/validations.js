let denied_values_before_pi_and_euler = ["0","1","2","3","4","5","6","7","8","9",")","."]
let open_prnt_denied_values_before = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ")"]
let operations_and_open_parenthesis = ["+", "-", "*", "/", "**", "**(1/", "("]
let close_prnt_denied_values_before = [...operations_and_open_parenthesis, "."]
let number_signal_dot = false
let operator_signal_dot = true

function resultantOperation(display_content, display, target_text){
  let operations_and_dot = ["+", "-", "*", "/", "**", "**(1/", "."]
  let display_has_no_content = verifyDisplayContentLength(display_content)
  let last_is_operator = verifyIfLastIsOperator(display_content, operations_and_dot)
  if(last_is_operator){
    if(target_text == "+") {
      display_content.push("+")
      display.innerHTML += "+"
    }
    else if(target_text == "-" ){
      display_content.push("-")
      display.innerHTML += "-"
    }
    else if(target_text == "*" && !display_has_no_content){
      display_content.push("*")
      display.innerHTML += "*"
    }
    else if(target_text == "/" && !display_has_no_content){
      display_content.push("/")
      display.innerHTML += "/"
    }
    else if(target_text.split('') == "y" && !display_has_no_content){
      display_content.push("**")
      display.innerHTML += "**"
    }
    else if(target_text == "(1/y)" && !display_has_no_content){
      display_content.push("**(1/")
      display.innerHTML += "**(1/"
    }
  }
}

function verifyDisplayContentLength(array){
  if(array.length == 0){
    return true
  }
  else {
    return false
  }
}

function verifyIfLastIsOperator(array,op){
  let last_element_of_display_content = array[array.length-1]
  if (op.indexOf(last_element_of_display_content) == -1){
    return true
  }
  else {
    return false
  }
}

function putPi(display_content, display, pi_value){
  let string_value = String(pi_value)
  let last_element_of_display_content = display_content[display_content.length-1]
  if(denied_values_before_pi_and_euler.indexOf(last_element_of_display_content) == -1){
    Array.from(string_value).forEach(char => {
      display.innerHTML += char
      display_content.push(char)
    })   
  }
}

function putEuler(display_content, display, euler_value){
  let string_value = String(euler_value)
  let last_element_of_display_content = display_content[display_content.length-1]
  if(denied_values_before_pi_and_euler.indexOf(last_element_of_display_content) == -1){
    Array.from(string_value).forEach(char => {
      display.innerHTML += char
      display_content.push(char)
    })   
  }
}

function openParenthesis(display_content, display){
  let last_element_of_display_content = display_content[display_content.length-1]
  if(open_prnt_denied_values_before.indexOf(last_element_of_display_content) == -1){
    display.innerHTML += "("
    display_content.push("(")
  }
}
 
function closeParenthesis(display_content, display){
  let last_element_of_display_content = display_content[display_content.length-1]
  if(close_prnt_denied_values_before.indexOf(last_element_of_display_content) == -1){
    display.innerHTML += ")"
    display_content.push(")")
  }
}

function putDot(display_content, display){
  if(number_signal_dot && operator_signal_dot){
    number_signal_dot = false
    operator_signal_dot = false
    display.innerHTML += "."
    display_content.push(".")
  }
}

function putResult(result_of_expression, display_content, display){
  let char_array_result = Array.from(String(result_of_expression))
  display.innerHTML = ''
  display_content = []
  char_array_result.forEach((char) => {
    display.innerHTML += char
    display_content.push(char)
  })
  return display_content
}

function clearLastElement(display_content, display){
  try{
    if(display_content) {
      display_content.length = display_content.length - 1
      display.innerHTML = '' 
      display_content.forEach((char) => {
        display.innerHTML += char
      })
    }
  }
  catch(error){} 
}

function calculateFatorial(display_content, display){
  let expression_length = display_content.length
  let denied_values_before_fatorial = [...operations_and_open_parenthesis, ")"]
  let array_format = []
  let string_format = ''
  if(denied_values_before_fatorial.indexOf(display_content[expression_length - 1]) == -1){
    for(let i = expression_length - 1; i >= 0; i--) {
      if(denied_values_before_fatorial.indexOf(display_content[i]) == -1) {
        array_format.push(String(display_content[i]))
      }
      else{
        break
      }
    }
    array_format = array_format.reverse()
    for(let element of array_format) {
      string_format += element
    }
    if(Array.from(String(string_format)).indexOf(".") == -1) {
      let number_format = Number(array_format)
      let fatorial = 1
      for(let i = 1; i <= number_format; i++) {
        fatorial *= i
      }
      console.log(fatorial);
      display_content.length = display_content.length - array_format.length
      display.innerHTML = ""
      display_content.forEach((element) => {
        display.innerHTML += String(element)
      })
      Array.from(String(fatorial)).forEach((char) => {
        display.innerHTML += char
        display_content.push(char)
      })    
    }
    else{
      window.alert("Just integers are accepted.")
    }
  } 
}

function calculateAbsoluteValue(display_content, display){
  let expression_length = display_content.length
  let denied_values_before_abs = ["*", ")", "/", "**", "**(1/", "(", "+", "-", "."]
  if(denied_values_before_abs.indexOf(display_content[expression_length - 1]) == -1){
    let array_format = []
    for(let i = expression_length - 1; i >= 0; i--) {
      if(denied_values_before_abs.slice(0,8).indexOf(display_content[i]) == -1) {      
        array_format.push(String(display_content[i]))
        if(display_content[i - 1] == "+" || display_content[i - 1] == "-"){
          if(display_content[i - 1] == "+" || i == 0){
            break
          }     
          else if(display_content[i - 1] == "-"){
            array_format.push("-")
          }       
        }
      }
      else {
        break
      }
    }
    array_format = array_format.reverse()
    array_format.unshift("(")
    array_format.push(")")
    let abs_length = array_format.includes("-")? array_format.length - 3: array_format.length - 2
    display_content.length = display_content.length - abs_length
    display.innerHTML = ''
    display_content.forEach((element) => {
      display.innerHTML += element
    })
    array_format.forEach((char) => {
      display.innerHTML += String(char)
      display_content.push(String(char))
    })
  }
}

function calculateLog(display_content, display, log){
  let last_element_of_display_content = display_content[display_content.length - 1]
  if(open_prnt_denied_values_before.indexOf(last_element_of_display_content)){
    log.classList.toggle('log_activated')
    if(log.classList.contains('log_activated')){
      log.innerHTML = 'log(a/b)'
      let open_log = Array.from('log(')
      open_log.forEach((char) => {
        display_content.push(char)
        display.innerHTML += char
      })
    }
    else{
      log.innerHTML = `log<sub>b</sub>a`
      let l_index
      let bar_index
      for(let i = display_content.length - 1; i >= 0; i--){      
        if(display_content[i] == 'l'){
          l_index = i
          break
        }
        else if(display_content[i] == '/'){
          bar_index = i
          operator_signal_dot = false
          number_signal_dot = true
        }
      }
      let number_array_format = display_content.slice(l_index + 4, bar_index)
      let number_string_format = ''
      let base_array_format = display_content.slice(bar_index + 1, display_content.length - 1)
      let base_string_format = ''
      number_array_format.forEach((char) => {
        number_string_format += char
      })
      base_array_format.forEach((char) => {
        base_string_format += char
      })
      let resultant_log = Math.log10(Number(number_string_format)) / Math.log10(Number(base_string_format))
      display_content.length = l_index
      display.innerHTML = ''
      display_content.forEach((char) => {
        display.innerHTML += char
      })
      Array.from(String(resultant_log)).forEach((char) => {
        display.innerHTML += char
        display_content.push(char)
      })
    }
  }
}

function calculateTrigonometricFn(display_content, display, target){
  let size_of_content = display_content.length
  let target_text = Array.from(target.innerText)
  if(target_text.length == 6){
    if(target_text[0] == 'c'){
      // cos
    }
    else if(target_text[0] == 't'){
      // tan
    }
    else {
      if(target_text[0] == 's' && target_text[1] == 'e'){
        // sec
      }
      else{
        // sin
      }
    }
  }
  else if(target_text.length == 7){
    // cotg
  }
  else{
    // cossec
  }
}

function convertTrigonometricUnit(display_content, display, target){
  let size_of_content = display_content.length
  let breakpoint_to_convert = [".", ")"]
  if(target.innerText == "deg(x)" || target.innerText == "calculate"){
    document.querySelector('.deg').classList.toggle('deg--activated')
    if(target.classList.contains('deg--activated')){
      target.innerHTML = 'calculate'
      if(breakpoint_to_convert.indexOf(display_content[size_of_content - 1] == -1)){
        let char_array_convert = Array.from('deg(')
        char_array_convert.forEach((char) => {
          display.innerHTML += char
          display_content.push(char)
        })
      }
    }
    else{
      try{
        let parenthesis_array = []
        let rad_indexes = []
        let index_of_end_rad = 0
        let string_value = ''
        let rad_convert_letters = Array.from('rad')
        target.innerHTML = 'deg(x)'
        for(let i = display_content.length; i >= display_content.indexOf("d"); i--){
          console.log(display_content[i])
          if(display_content[i] == "("){
            parenthesis_array.push(i)
          }
          else if(display_content[i] == ")"){
            parenthesis_array.push(i)
          }
          else if(rad_convert_letters.indexOf(display_content[i]) !== -1 && display_content[i+1] !== 'e'){
            rad_indexes.push(i)
          }
          else if(operations_and_open_parenthesis.splice(0, 6).indexOf(display_content[i]) !== -1){
            break
          }
          else if(typeof Number(display_content[i]) == "number"){

          }
          else{
            throw new Error
          }
        }
        parenthesis_array = parenthesis_array.reverse()
        console.log(rad_indexes)
        if(rad_indexes.length){
          for(let i = rad_indexes.length + 1; i <= size_of_content; i++){
            if(display_content[i] == ")"){
              index_of_end_rad = i
              break
            }
          }
          string_value = ''
          for(let i = rad_indexes.length + 2; i <= index_of_end_rad; i++){
            string_value += String(display_content[i])
          }
          console.log(display_content)
          display_content.length = display_content.indexOf("d")
          console.log(display_content)
          console.log(string_value)
          Array.from(string_value).forEach((char) => {
            display_content.push(char)
          })
          display.innerHTML = ''
          display_content.forEach((char) => {
            display.innerHTML += char
          })
        }
        else{
          let number_deg_value = 0
          string_value = ''
          console.log(parenthesis_array)
          for(let i = parenthesis_array[0] + 1; i <= parenthesis_array[1] - 1; i++){
            console.log(display_content[i])
            string_value += String(display_content[i])
          }
          console.log(string_value);
          display_content.length = display_content.indexOf("d")
          console.log(display_content)
          number_deg_value = Number(string_value) / 0.01745329251
          Array.from(String(number_deg_value)).forEach((char) => {
            display_content.push(char)
          })
          display.innerHTML = ''
          console.log(display_content);
          display_content.forEach((char) => {
            display.innerHTML += char
          })
        }
      }
      catch(error){
        window.alert('Invalid expression.')
      }
    }  
  }
  else if(target.innerText == "rad(x)" || target.innerText == "calculate"){
    document.querySelector('.rad').classList.toggle('activated')
    if(target.classList.contains('activated')){
      target.innerHTML = 'calculate'
      if(breakpoint_to_convert.indexOf(display_content[size_of_content - 1] == -1)){
        let char_array_convert = Array.from('rad(')
        char_array_convert.forEach((char) => {
          display.innerHTML += char
          display_content.push(char)
        })
      }
    }
    else{
      try{
        let parenthesis_array = []
        let rad_indexes = []
        let index_of_end_rad = 0
        let string_value = ''
        let rad_convert_letters = Array.from('deg')
        target.innerHTML = 'rad(x)'
        for(let i = display_content.length; i >= display_content.indexOf("r"); i--){
          console.log(display_content[i])
          if(display_content[i] == "("){
            parenthesis_array.push(i)
          }
          else if(display_content[i] == ")"){
            parenthesis_array.push(i)
          }
          else if(rad_convert_letters.indexOf(display_content[i]) !== -1 && display_content.indexOf('r') == -1){
            rad_indexes.push(i)
          }
          else if(operations_and_open_parenthesis.splice(0, 6).indexOf(display_content[i]) !== -1){
            break
          }
          else if(typeof Number(display_content[i]) == "number"){

          }
          else{
            throw new Error
          }
        }
        parenthesis_array = parenthesis_array.reverse()
        console.log(rad_indexes)
        if(rad_indexes.length){
          console.log("taqqqqqqq")
          for(let i = rad_indexes.length + 1; i <= size_of_content; i++){
            if(display_content[i] == ")"){
              index_of_end_rad = i
              break
            }
          }
          string_value = ''
          for(let i = rad_indexes.length + 1; i <= index_of_end_rad; i++){
            string_value += String(display_content[i])
          }
          console.log(display_content)
          display_content.length = display_content.indexOf("r")
          console.log(display_content)
          Array.from(string_value).forEach((char) => {
            display_content.push(char)
          })
          display.innerHTML = ''
          display_content.forEach((char) => {
            display.innerHTML += char
          })
        }
        else{
          let number_deg_value = 0
          string_value = ''
          console.log(parenthesis_array)
          for(let i = parenthesis_array[0] + 1; i <= parenthesis_array[1] - 1; i++){
            console.log(display_content[i])
            string_value += String(display_content[i])
          }
          console.log(string_value);
          display_content.length = display_content.indexOf("r")
          console.log(display_content)
          number_deg_value = Number(string_value) * 0.01745329251
          Array.from(String(number_deg_value)).forEach((char) => {
            display_content.push(char)
          })
          display.innerHTML = ''
          console.log(display_content);
          display_content.forEach((char) => {
            display.innerHTML += char
          })
        }
      }
      catch(error){
        window.alert('Invalid expression.')
      }
    }
  }
  
}

function changeOperatorSignalDot(){
  operator_signal_dot = true
  number_signal_dot = false
}

function changeNumberSignalDot(){
  number_signal_dot = true
}
 
export { 
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
}
