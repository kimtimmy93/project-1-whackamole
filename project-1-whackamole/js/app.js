$('#container').on('mousedown', (e) => {
    $('#container').css('cursor', 'url(images/hammer2.png), crosshair');
        if(!e.isTrusted){
        return;
    }
})

$('#container').on('mouseup', () => {
    $('#container').css('cursor', 'url(images/hammer.png), crosshair');
})

$('#timer').hide();
$('#points').hide();
$('.hole').hide();
$('.clouds').hide();

$('#start').on('click', () => {
    $('#timer').show();
    $('#points').show();
    $('.hole').show();
    $('.clouds').show();
    game.setTimer();
    game.setShowMoles();
    game.setPeepTime();
    game.setPeepHoles();
   
}); 

const game = {
    timer: 60,
    points: 0,
    setTimer(){
        // Game timer
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
        //random time for moles to peep up for
    //    const $mole = $('#mole1')
    //    $mole.attr('src', 'images/mole.png')

       const time = this.setPeepTime(500, 1000);
       const hole = this.setPeepHoles();
       console.log(time, hole);
    },
    setPeepTime(min, max){
        // set a random time for moles to appear
       return Math.round(Math.random()*(max - min)+ min);
    },
    setPeepHoles(){
        let lastHole;
        // set a random hole that will where mole will peep up from
        const $hole = $('.hole');
        const index = Math.floor(Math.random()*$hole.length);
        const randHole = $hole[index];
        if(randHole === lastHole) {
            console.log('same hole')
            return this.setPeepHoles();
        }
        lastHole = randHole;
        return randHole;
    
    },
    setHit(){
        // if hammer touches mole img count it as a hit
        
    }
     
}

    






