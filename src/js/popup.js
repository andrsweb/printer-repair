import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'



document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showPopup()
} )

const showPopup = () => {
	const popupWrapper = document.querySelector( '.popup-wrapper' )
	const closeButton = document.querySelector( '.popup-close' )
	const body = document.querySelector( 'header')
	setTargetElement( document.querySelector( '#body-lock' ) )

	body.addEventListener( 'mouseleave', e => {
		const mouseY = e.clientY

		if(  mouseY <= 0 ) {
			if(  ! localStorage.getItem( 'showed' ) && ! popupWrapper.classList.contains( 'showed' ) ) {
				// localStorage.setItem( 'showed', 1 )
				popupWrapper.classList.add( 'showed' )
				disableBodyScroll( getTargetElement(), { reserveScrollBarGap: true } )
			}
		}
	} )

	closeButton.addEventListener( 'click', () => {
		popupWrapper.classList.remove( 'showed' )
		enableBodyScroll( getTargetElement() )
	} )

	popupWrapper.addEventListener( 'click', e => {
		e.stopPropagation()

		const target = e.target

		if ( target.className && target.classList.contains( 'popup-wrapper' ) ) {
			popupWrapper.classList.remove( 'showed' )
			enableBodyScroll( getTargetElement() )
		}
	} )
}