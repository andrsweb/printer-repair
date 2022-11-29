document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    timer()
} )

const timer = () => {
    let time = localStorage.getItem( 'seconds') || 3515
    const countDown = document.querySelectorAll( '.timer' )

    function minutesAndSeconds() {
        let minutes = Math.floor( time / 60 )
        let seconds   = time % 60

        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds

        countDown.forEach( timer => {
            timer.innerHTML = `
                <div class="days">00</div>
                <div class="hours">00</div>
                <div class="minutes">${ minutes }</div>
                <div class="seconds">${ seconds }</div>
            `
        } )

        time --

        if( time === 0 ) time = 3515

        localStorage.setItem( 'seconds', time )
    }

    setInterval( minutesAndSeconds, 1000 )
}