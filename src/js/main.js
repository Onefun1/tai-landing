import './helpers/postDate';

import scrollSmooth from './helpers/smooth-scroll.js';
import youtubeShowVideo from './modules/youtube';
import headerBurger from './modules/header'

function main() {
    scrollSmooth();
    youtubeShowVideo();
    headerBurger();

}

main();