import ASTimer from '@critick/astimer'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

    timer()
} )

const timer = () => {
    const timerDiv = document.querySelector( '.timer' )
    const timerPop = document.querySelectorAll( '.timer-pop' )
    const t = new ASTimer( '.timer' )
    const timerPopup = new ASTimer( '.timer-pop' )

    if( ! timerDiv && ! timerPop ) return
}



