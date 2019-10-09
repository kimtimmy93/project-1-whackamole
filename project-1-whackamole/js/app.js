
$('.container').on('mousedown', () => {
        $('.container').css('cursor', 'url(css/hammer2.png), crosshair');
})
$('.container').on('mouseup', () => {
    $('.container').css('cursor', 'url(css/hammer.png), crosshair');
})


$('#timer').hide();
$('#points').hide();
$('.holes').hide();
$('.clouds').hide();

$('#start').on('click', () => {
    $('#timer').show();
    $('#points').show();
    $('.holes').show();
    $('.clouds').show();
    game.setTimer();
    game.setShowMoles();
});

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
        },1000);
    },
    setShowMoles(){
        const $moles = $('.mole')
        $moles.css('z-index', '4')
        
    },

    setRandomTime(){

    },
    setHit(){

    },
    setPoints(){
        const $points = $('#points')

    }
    
    
}

    




