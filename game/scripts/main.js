import { assets } from './assets.js';
import { board } from './board.js';
import { combinations } from './combinations.js';
import { rates } from './rates.js';

const player = {
    name: "Player",
    money: 5000
}

window.game = {
    mode: 'easy',
    bid() {
        const state = board.rotate();
        const combos = Object.values(combinations[this.mode]);
        const comboNames = Object.keys(combinations[this.mode]);

        const oneLineR = combinations.easy.oneLine(state);
        
        const topAngleR = combinations.medium.topAngle(state);
        const bottomAngleR = combinations.medium.bottomAngle(state);
        
        const topeAngleLineR = combinations.hard.topAngleLine(state);
        const bottomAngleLineR = combinations.hard.bottomAngleLine(state);


        switch(this.mode) {
            case 'easy': {
                
                break;
            }

            case 'medium': {

                break;
            }

            case 'hard': {

                break;
            }
        }
    }
}