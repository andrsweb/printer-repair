document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    timer()

} )

const timer = () => {
    let time = 3515
    const countDown = document.querySelectorAll( '.timer' )

    function minutesAndSeconds() {
        const minutes = Math.floor( time / 60 )
        let seconds   = time % 60
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
        if( time === -1 ) time = 3515
    }

    setInterval( minutesAndSeconds, 1000 )
}