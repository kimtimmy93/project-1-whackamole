$('#timer').hide();
$('#points').hide();
$('.holes').hide();

 $('#start').on('click', () => {
    $('#timer').show();
    $('#points').show();
    $('.holes').show();
    game.setTimer();
});


class Whack {
    constructor(timer, points, mole, holes, hit){
        this.timer = timer;
        this.points = points;
        this.mole = mole;
        this.holes = holes;
        this.hit = hit;
    }
}


const whackamole = new Whack()

const game = {
    timer: 59,
    points: 0,
    setTimer(){
        const $timer = $('#timer')
        const interval = setInterval(() => {
            if(this.timer === 0) {
                clearInterval(interval);
            }
            else {
                this.timer--
            }
            $timer.text(`Timer: ${this.timer}s`)
        },1000)
    },
    setMoles(){
        const moles = 'moles.png'
        const interval = setInterval(() => {
        }, Math.floor(Math.random()*(5000 - 1000 + 1)+1000))
    },
    setRandomTime(){

    },
    setRandomHole(){

    },
    setHit(){

    },
    setPoints(){
        const $points = $('#points')
        
    }
    
    
}

    




