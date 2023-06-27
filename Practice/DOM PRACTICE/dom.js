const squares=document.querySelectorAll('.colorSquare')
// console.log(squares)
const timesClicked={'red':0,'yellow':0,'green':0}
squares.forEach(square=>{
    square.onclick=()=>
    {
        timesClicked[square.value]+=1
        square.innerHTML=timesClicked[square.value]
    }
})
function clearScore()
{
    squares.forEach(square=>{
        square.innerHTML=''
    })
}
const clearGamebtn=document.getElementById('clear-game')
clearGamebtn.onclick=()=>clearScore()

















// // const timesclicked={'red':0,'yellow':0,'blue':0}
// // squares.forEach(square =>
// //     {
// //       square.onclick=()=>{
// //         timesclicked[square.value]+=1
// //         square.innerText =timesclicked[square.value]
// //       }
// //     })
// // const timesClicked = { 'red': 0, 'yellow': 0, 'blue': 0 }
// // squares.forEach(square => {
//    //square.onclick = () => {
// //     timesClicked[square.value] += 1
// //     square.innerHTML = timesClicked[square.value]
// //   }
// // })
// const timesClicked={'red':0,'yellow':0,'green':0}
// squares.forEach(square=>{
//     square.onclick=()=>{
//         timesClicked[square.value]+=1
//         square.innerHTML=timesClicked[square.value]
//     }
// })