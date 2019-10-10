$('#container').on('mousedown', (e) => {
    $('#container').css({'cursor': 'url(images/hammer2.png), crosshair'})
        if($(e.target).attr('src') === 'images/mole.png'){
            game.points++
            console.log(game.points)
        } else if($(e.target).attr('src') === 'images/hole.png'){
        game.points
        }
    
    
    $('#points').text(`Points: ${game.points}`)
    $(e.target).attr('src', 'images/hole.png')
    console.log(e.target)
})

$('#container').on('mouseup', () => {
    $('#container').css({'cursor': 'url(images/hammer.png), crosshair'})
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
    game.setPeepTime();
    game.setPeepHoles();
    game.setHit();
    game.setSpawnMoles();
}); 

const game = {
    timer: 60,
    points: 0,
    setTimer(){
        // Game timer
        const $timer = $('#timer')
        const interval = setInterval(() => {
            if(this.timer === 0) {
                clearInterval(interval)
            }
            else {
                this.timer--
            }
            $timer.text(`Timer: ${this.timer}s`)
        },1000);
    },
    setPoints(){
        const $points = $('#points')
        $points.text(`Points: ${this.points}`)
    },
    // setShowMoles(){
    //     random time for moles to peep up for
    //    const time = this.setPeepTime(150, 900);
    //    const holes = this.setPeepHoles();
    //     $(holes).attr('src','images/mole.png')
    //    setTimeout(() => {
    //     $(holes).attr('src','images/hole.png')
    //    },time);
       
    // },
    setSpawnMoles(){
        let holes = this.setPeepHoles();
        $(holes).attr('src', 'images/mole.png') 
        console.log($(holes).attr('src'))

        let speed = Math.round(Math.random()*(1500 - 500)+ 500)
        // let spawnMoles = setInterval(()=> {
        //         $(holes).attr('src', 'images/hole.png');
        //                 holes = this.setPeepHoles();
        //         $(holes).attr('src', 'images/mole.png')
        //                 clearInterval(spawnMoles);
        //         speed = Math.round(Math.random()*(1500 - 500)+ 500)
        //                 this.setSpawnMoles();
        //     }, speed);
        if(this.points > 4 && this.points < 10) {
                let speed = Math.round(Math.random()*(800 - 200)+ 200)
                    let spawnMoles = setInterval(()=> {
                        $(holes).attr('src', 'images/hole.png');
                            holes = this.setPeepHoles();
                        $(holes).attr('src', 'images/mole.png')
                            clearInterval(spawnMoles);
                        speed = Math.round(Math.random()*(800 - 200)+ 200)    
                            this.setSpawnMoles();
                    }, speed);
            } else if(this.points > 9) {
                let speed = Math.round(Math.random()*(600 - 100)+ 100)
                    let spawnMoles = setInterval(()=> {
                        $(holes).attr('src', 'images/hole.png');
                            holes = this.setPeepHoles();
                        $(holes).attr('src', 'images/mole.png')
                            clearInterval(spawnMoles);
                        speed = Math.round(Math.random()*(600 - 100)+ 100)
                                this.setSpawnMoles();
                    }, speed);
            } else {
                let spawnMoles = setInterval(()=> {
                    $(holes).attr('src', 'images/hole.png');
                    $(holes).toggleClass('show')
                            holes = this.setPeepHoles();
                    $(holes).attr('src', 'images/mole.png')
                            clearInterval(spawnMoles);
                    speed = Math.round(Math.random()*(1500 - 500)+ 500)
                            this.setSpawnMoles();
                    if($('.show').length > 2) {
                        $(holes).toggleClass('hide')
                        $('.hide').
                        console.log('more than 2')
                    }
                }, speed);
            }
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
    setHit(){
        // if hammer touches mole img count it as a hit
        
    }
     
}

    






