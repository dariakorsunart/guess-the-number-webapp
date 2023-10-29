/*function hey(){
    Swal.fire('Any fool can use a computer')
}
hey()*/

const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;


button.addEventListener("click",play);
input.addEventListener("keypress",function(e){
    if (e.keyCode===13){
        play();
    }
})

function play(){

    const userNumber = document.querySelector("#guess").value;
    
    if (userNumber<1 || userNumber>20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a number between 1 and 20',
        })
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid number',
        })
    }

    else if (userNumber<answer) {
            Swal.fire({
                icon: 'info',
                title: 'Try to enter a bigger number!',
                text: 'Your guess is too low',
        })
    }

    else if (userNumber>answer) {
            Swal.fire({
                icon: 'info',
                title: 'Try to enter a smaller number!',
                text: 'Your guess is too high',
        })
    }

    else {
        Swal.fire({
            title: 'WOO-HOO!',
            text: 'Congratulations, you won!',
            imageUrl: 'giphy.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }
}