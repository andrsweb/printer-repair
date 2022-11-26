import ASTimer from '@critick/astimer'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

    timer()
} )

const timer = () => {
    const timerDiv = document.querySelector( '.timer' )

    if( ! timerDiv ) return

    const t = new ASTimer('.timer')
}



