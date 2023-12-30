import { board } from "./board.js";
import { combinations } from "./combinations.js";
import { drawLines } from "./drawLines.js";
import { rates } from "./rates.js";

const player = {
  name: "Player",
  bid: 50,
  money: 5000,
};

window.game = {
  mode: "medium",
  state: "hold",
  initialize() {
    const display = document.querySelector(".game > .display");
    const lines = document.querySelectorAll(".game > .display > .line");
    const copyOfLines = [...lines];
    const boxes = document.querySelectorAll(".game > .display > .line > .box");

    boxes.forEach((b) => (b.style.backgroudImage = "url(./assets/7.png)"));

    copyOfLines.forEach((cL) => display.prepend(cL));

    const domMoneyDisplayElement = document.querySelector(
      ".game > .state > .money > span"
    );

    const domInfoDisplayElement = document.querySelector(
      ".game > .state > .info"
    );

    const domBetDisplayElement = document.querySelector(
      ".game > .state > .bet > span"
    );

    domMoneyDisplayElement.innerHTML = player.money + " $";
    domBetDisplayElement.innerHTML = player.bid + " $";

    const actions = {
      minus() {
        const domActionElement = document.querySelector(
          ".game > .actions > .minus"
        );

        domActionElement.addEventListener("click", () => {
          if (player.bid !== 0) {
            player.bid = player.bid - 50;
            domBetDisplayElement.innerHTML = player.bid + " $";
          }
        });
      },
      bet() {
        const domDisplayLines = document.querySelectorAll(
          ".game > .display > .line"
        );
        const domActionElement = document.querySelector(
          ".game > .actions > .bet"
        );

        domActionElement.addEventListener("click", () => {
          drawLines.clear();
          window.game.bid();

          domDisplayLines.forEach((line, index) => {
            const boxes = line.querySelectorAll(".box");
            boxes.forEach((box, bIndex) => {
              box.style.backgroundImage = `url(./assets/${board.display[index][bIndex]}.png)`;
            });

            domMoneyDisplayElement.innerHTML = player.money + " $";
            domBetDisplayElement.innerHTML = player.bid + " $";
            domInfoDisplayElement.innerHTML = window.game.state;
          });
        });
      },
      plus() {
        const domActionElement = document.querySelector(
          ".game > .actions > .plus"
        );

        domActionElement.addEventListener("click", () => {
          player.bid = player.bid + 50;
          domBetDisplayElement.innerHTML = player.bid + " $";
        });
      },
    };

    Object.values(actions).forEach((f) => f());
  },
  bid() {
    player.money = player.money - player.bid;
    this.state = "progress";
    const state = board.rotate();

    switch (this.mode) {
      case "easy": {
        const oneLineC = combinations.easy.oneLine(state);

        const multiplied = oneLineC.reduce((acc, curr) => {
          const currentRate = rates[curr[0]];
          return acc + currentRate * curr.length;
        }, 0);

        if (multiplied) {
          drawLines.oneLine(board.display);
          this.state = "Win!";
          player.money = player.money + player.bid * multiplied;
        } else {
          this.state = "Lose";
        }
        break;
      }

      case "medium": {
        const oneLineC = combinations.easy.oneLine(state);
        const topAngleC = combinations.medium.topAngle(state);
        const bottomAngleC = combinations.medium.bottomAngle(state);

        const multiplied = [...oneLineC, ...topAngleC, ...bottomAngleC].reduce(
          (acc, curr) => {
            const currentRate = rates[curr[0]];
            return acc + currentRate * curr.length;
          },
          0
        );

        if (multiplied) {
          this.state = "Win!";
          
          drawLines.oneLine(oneLineC.length ? board.display : null);
          drawLines.topAngle(topAngleC.length ? board.display : null);
          drawLines.bottomAngle(bottomAngleC.length ? board.display : null);

          player.money = player.money + player.bid * multiplied;
        } else {
          this.state = "Lose";
        }

        break;
      }

      //   case "hard": {
      //     const topeAngleLineR = combinations.hard.topAngleLine(state);
      //     const bottomAngleLineR = combinations.hard.bottomAngleLine(state);
      //     break;
      //   }
    }
  },
};

window.onload = () => {
  window.game.initialize();
};
