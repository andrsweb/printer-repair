import Inputmask from "inputmask";

let selector = document.querySelector( '.input' )

let im = new Inputmask('+7 (999) 999-99-99')
im.mask( selector )
