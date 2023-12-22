export const board = {
  display: [
    [7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7],
  ],
  rotate() {
    this.display.forEach((line, lineIndex) => {
      line.forEach((_position, pIndex) => {
        const rand = Math.floor(Math.random() * 9) + 1;
        this.display[lineIndex][pIndex] = rand;
      });
    });

    return this.display;
  },
};
