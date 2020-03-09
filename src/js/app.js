// Import what you need from the library
import { Parallax, DarkMode, EventGroup, Scroll } from 'giftbag';

// Scroll
// 1. Create a new instance of Scroll
const scroll = new Scroll();
// 2. Setup
const scrollElements = document.querySelectorAll('.scroll-element');

scroll.setup({
    selector: scrollElements
})
// 3. Initialize
scroll.init();

// EventGroup
// 1. Create a new instance of EventGroup
const eventGroup = new EventGroup();
// 2. Setup
const eventGroupElement = document.querySelectorAll('.event-group-element');

eventGroup.setup({
    selector: eventGroupElement
});
// 3. Initialize
eventGroup.init();


// Parallax
// 1. Create a new instance of Parallax
const parallax = new Parallax();
// 2. Setup
const parallaxElement = document.querySelectorAll('.parallax-element');

parallax.setup({
    selector: parallaxElement,
});
// 3. Initialize
parallax.init();

// DarkMode
// 1. Create a new instance of DarkMode
const darkMode = new DarkMode();


const darkModeWrapper = document.querySelector(".dark-mode-wrapper");
const darkModeTrigger = document.querySelector(".dark-mode-trigger");

darkMode.setup({
    wrapper: darkModeWrapper,
    trigger: darkModeTrigger,
    darkModeClass: "in-dark-mode"
});

darkMode.init();