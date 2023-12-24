export const combinations = {
  easy: {
    oneLine(d) {
      const combos = [];
      d.forEach((l) => {
        let faild = false;
        const pCombination = l.reduce((acc, current) => {
          if (!acc.length) {
            acc.push(current);
            return acc;
          }

          if (current === acc[0] && !faild) {
            acc.push(current);
          } else {
            faild = true;
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
      const combo = [];
      for (let i = 0; i < d.length; i++) {
        if (i === 0) {
          combo.push(d[i][i]);
          continue;
        }

        if (combo[0] === d[i][i]) {
          combo.push(d[i][i]);
        } else {
          break;
        }
      }

      return combo.length > 1 ? combo : [];
    },
    bottomAngle(d) {
      const combo = [];
      let j = -1;

      for (let i = d.length - 1; i >= 0; i--) {
        j = j + 1;
        if (i === d.length - 1) {
          combo.push(d[i][j]);
          continue;
        }

        if (combo[0] === d[i][j]) {
          combo.push(d[i][j]);
        } else {
          break;
        }
      }

      return combo.length > 1 ? combo : [];
    },
  },
  hard: {
    topAngleLine(d) {},
    bottomAngleLine(d) {},
  },
};
