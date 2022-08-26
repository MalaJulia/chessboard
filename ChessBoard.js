// let desk = document.getElementById("table")
// document.getElementById("0").addEventListener('click', function (e){
//    let chessB = e.target
//     let rect = chessB.getBoundingClientRect()
//     let dx = e.pageX - rect.left, dy = e.pageY - rect.top
//     chessB.style.background = 'silver'
//     document.addEventListener('click', function handler(e) {
//         chessB.style.left = e.pageX - dx + 'px'
//         chessB.style.top = e.pageY - dy + 'px'
//         chessB.style.background = ''
//
//         document.removeEventListener('click', handler, true)
//         event.stopPropagation()
//     }, true)
// })

// let desk = document.getElementsByTagName('td')
// console.log(desk)
// let rect = chessB.getBoundingClientRect()
// let dx = e.pageX - rect.left, dy = e.pageY - rect.top


// TODO: СДЕЛАТЬ ДЛЯ ВСЕХ ШАШЕК

function move(chess) {
    console.log(chess, 'event')
    // let chess = document.getElementsByClassName("chessBlack")

    chess.style.backgroundColor = "silver"
    document.addEventListener('click', function handler(e) {

        document.removeEventListener('click', handler, true)

        const myCell = e.target;


        console.log(myCell.children.length, 'GGGGG')

        if(myCell.className === 'white' && myCell.children.length === 0) {

            // console.log(myCell);
            // console.log(myCell.id, 'myCell.id')
            // `<button onclick="move(this)"  class="chessBlack" id='${hhh}' ></button>`
            myCell.innerHTML=`<button onClick="move(this)" class= \"chessBlack" \ id="${chess.id}"></button>`
            chess.remove()
            console.log(myCell, 'mycell');
            // console.log(chess)
            document.removeEventListener('click', handler, true)
        }}, true)

}

// const td = document.getElementById('e8');
// td.innerHTML = chessB;
// let ches = document.createElement('div');
// ches.innerText = 'some text';
// ches.className = 'chessBlack';
// console.log(ches, 'ches')
// < div
// className = 'chessBlack'
// id = "0" > < /div>
// < td
// className = "white"
// id = "e8" > < /td>
    //     for (const deskElement of desk) {
    //         if (deskElement != 'black' ){
    //             chessB.style.left = e.pageX - dx + 'px'
    //             chessB.style.top = e.pageY - dy + 'px'
    //             document.removeEventListener('click', handler, true)
    //     event.stopPropagation()
    // }
    //         , true)





// let squareWhite = document.getElementsByClassName("white ")
// let squareBlack =  document.getElementsByClassName("black")
// function coordWhite(elem) {
//     let box = elem.getBoundingClientRect();
//     return {
//         top: box.top + window.pageYOffset,
//         right: box.right + window.pageXOffset,
//         bottom: box.bottom + window.pageYOffset,
//         left: box.left + window.pageXOffset
//     };
//
// }
//
// console.log(coordWhite(squareWhite));