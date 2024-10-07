// const btnGreat = document.querySelector('#btnGreat')

// btnGreat.addEventListener('click', great)

// function great () {
  //   alert(username.value)
  // }
  window.addEventListener("load", cargaPagina);
  
  const username = document.getElementById('nombre')
  const data1 = document.getElementById('nota1')
  const data2 = document.getElementById('nota2')
  const data3 = document.getElementById('nota3')
  const btnCalculate = document.getElementById('btn-calculate')
  const response = document.getElementById('resultado')
  const btnPredict= document.getElementById("btn-predict")
  btnCalculate.addEventListener('click', calculateNote )
  


  function calculateNote(event) {

    event.preventDefault()
  
    let note1 = parseFloat(data1.value)        
    let note2 = parseFloat(data2.value)        
    let note3 = parseFloat(data3.value)
    
    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2)
    if(note1<0 || note1>5 || note2<0 || note2>5 || note3<0 || note3>5)
    {
      response.textContent = `Usuario ${username.value} ingrese valores entre 0 y 5`
    }else{
            if(result<3.5){
        response.style.color = 'black'
        response.textContent = `Usuario ${username.value} perdio la materia, su nota definitiva es: ${result}`       
      }else if(result>3.5 & result<4.5){
        response.style.color = 'orange'
        response.textContent = `Usuario ${username.value} gano la materia, su nota definitiva es: ${result}`       
      }else if(result>4.5){
        response.style.color = 'green'
        response.textContent = `Usuario ${username.value} gano la materia de forma sobresaliente, su nota definitiva es: ${result}`       
      }
    }
  
   
  }
  function cargaPagina(){
    btnPredict.addEventListener("click", predict)
  }
  function predict(){
    let note1 = parseFloat(data1.value)        
    let note2 = parseFloat(data2.value)   
    let totalPredict=((3.5 - (note1 * 0.3 + note2 * 0.3)) / 0.4).toFixed(2)
    data3.value=totalPredict
  }

  




