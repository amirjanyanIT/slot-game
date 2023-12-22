export const combinations = {
  easy: {
    oneLine(d) {
      const combos = [];
      d.forEach((l) => {
        const pCombination = l.reduce((acc, current) => {
          if (!acc.length) {
            acc.push(current);
            return acc;
          }

          if (current === acc[0]) {
            acc.push(current);
          }

          return acc;
        }, []);

        if (pCombination.length > 1) {
          combos.push(pCombination);
        }
      });

      return combos;
    },
  },
  medium: {
    topAngle(d) {
      const combos = [];
      d.forEach((l) => {
        const pCombination = l.reduce((_prev, current, currentIndex, acc) => {
          if (!acc.length) {
            acc.push(current);
            return acc;
          }

          if (
            acc[currentIndex][currentIndex] &&
            acc[currentIndex][currentIndex] === acc[0]
          ) {
            acc.push(current);
          }

          return acc;
        }, []);

        if (pCombination.length > 1) {
          combos.push(pCombination);
        }
      });

      return combos;
    },
    bottomAngle(d) {
      const combos = [];
      d.forEach((l) => {
        const pCombination = l.reduce((_prev, current, currentIndex, acc) => {
          if (!acc.length) {
            acc.push(current);
            return acc;
          }

          if (
            acc[currentIndex][currentIndex] &&
            acc[currentIndex][currentIndex] === acc[0]
          ) {
            acc.push(current);
          }

          return acc;
        }, []);

        if (pCombination.length > 1) {
          combos.push(pCombination);
        }
      });
    },
  },
  hard: {
    topAngleLine(d) {},
    bottomAngleLine(d) {},
  },
};
