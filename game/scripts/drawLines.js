export const drawLines = {
  oneLine(display) {
    const r = Math.floor(Math.random() * 99) + 1;
    const g = Math.floor(Math.random() * 99) + 1;
    const b = Math.floor(Math.random() * 99) + 1;

    const coloredLine = document.createElement('div');

    coloredLine.classList.add('colored-line');
    coloredLine.style.backgroundColor = `rgb(${r},${g},${b})`;
    coloredLine.style.width="100%";
    coloredLine.style.height="5px"
    coloredLine.style.position = 'absolute';
    coloredLine.style.top = '50%';

    display.forEach((_line, lineIndex) => {
        let combo = [];
        const lines = document.querySelectorAll(".game > .display > .line");
        lines[lineIndex].querySelectorAll('.box').forEach((box, boxIndex) => {
            const currentBoxDOMElement = lines[lineIndex].querySelectorAll(`.box`)[boxIndex];
            if(!combo.length) {
                combo.push(box);
            } else if(box === combo[0] && boxIndex === 1) {
                currentBoxDOMElement.appendChild(coloredLine);
            } else if(box === combo[0]) {
                currentBoxDOMElement.appendChild(coloredLine);
            }
        })
    })
  },
  topAngle(display) {},
  bottomAngle(display) {},
  clear() {
    document.querySelectorAll('.colored-line').forEach(l => l.remove());
  },
};
