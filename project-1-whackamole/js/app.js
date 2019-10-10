$('#container').on('mousedown', (e) => {
    $('#container').css('cursor', 'url(images/hammer2.png), crosshair');
})

$('#container').on('mouseup', () => {
    $('#container').css('cursor', 'url(images/hammer.png), crosshair');
})

// $('#timer').hide();
// $('#points').hide();
// $('.hole').hide();
// $('.clouds').hide();

$('#start').on('click', () => {
    // $('#timer').show();
    // $('#points').show();
    // $('.hole').show();
    // $('.clouds').show();
    game.setTimer();
    game.setShowMoles();
    game.setPeepTime();
    game.setPeepHoles();
    game.setHit();
   
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
       const time = this.setPeepTime(200, 1000);
       const holes = this.setPeepHoles();
        $(holes).attr('src','images/mole.png')
       setTimeout(() => {
        $(holes).attr('src','images/hole.png')
       },time);

    //    if(points === 10){

    //    }
    },
    setPeepTime(min, max){
        // set a random time for moles to appear
       return Math.round(Math.random()*(max - min)+ min);
       
    },
    setPeepHoles(){
        let sameHole;
        // set a random hole that will where mole will peep up from
        const $hole = $('.mole');
        const index = Math.floor(Math.random()*$hole.length);
        const randHole = $hole[index];
        if(randHole === sameHole) {
            console.log('same hole')
            return this.setPeepHoles();
        }
        sameHole = randHole;
        return randHole;
    },
    setHit(e){
        // if hammer touches mole img count it as a hit
        // console.log(e.target)
        // console.log(e.currentTarget)
    }
     
}

    






