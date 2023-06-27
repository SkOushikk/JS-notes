// //     // console.log('HOLA')
//  let titleDIV=document.getElementById('title')
// // console.log('BEFORE:',title.innerText)
// // //this is to change text in the html file directly
// //     titleDIV.innerText='Good Bye my LOVER !'
// // console.log('AFTER:',title.innerText)

// let intro='Hello account'
// titleDIV.innerHTML=`<p>${intro}</p>`
// //change style properties 
// titleDIV.style.backgroundColor='red'
// let redDiv=document.getElementById('red')
// // redDiv.onclick=()=>{
// //     // show everything on the screen (DOM)
// //     //console.log('red')
// // }
// //let yellowDiv=document.getElementById('yellow')
// // yellowDiv.onclick=()=> console.log('yellow')
// // let blueDiv=document.getElementById('blue')
// // blueDiv.onclick=()=> console.log('blue')
// let squares=document.querySelectorAll('.Colorbtn')
// // console.log(squares)

// //  squares.forEach(square =>console.log(square.value))
// const TimesClicked={'red':0,'yellow':0,'blue':0}
//  squares.forEach(square=>{
//      square.onclick=()=>{
//         TimesClicked[square.value]+=1
//         square.innerText=TimesClicked[square.value]
//         // console.log(square.value)
//      }
//  })
// function clearscores()
// {
//     squares.forEach(square=>square.value='')
// }
// const cleargamediv = document.getElementById('ClearGame')
// cleargamediv.onclick=()=>clearscores()
////////////////////////////////////////////////////////////////////////////
    const squares = document.querySelectorAll('.colorSquare')
    const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
    squares.forEach(square => {
      square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]
      }
    })
    function clearScores() {
      timesClicked.red = 0
      timesClicked.yellow = 0
      timesClicked.green = 0
      squares.forEach(square => {
        square.innerText = ''
      })
    }

    const clearGameBtn = document.getElementById('clear-game')
    clearGameBtn.onclick = () => clearScores()


