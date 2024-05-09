const createChess = (col: number, row: number) => {
    for (let i = 0; i < col; i++) {
        let rowString = '';
        for (let j = 0; j < row; j++) {
            if ((i + j) % 2 === 0) {
                rowString += '\u001b[47m  \u001b[0m';
            } else {
                rowString += '\u001b[40m  \u001b[0m';
            }
        }
        console.log(rowString);
    }
};

void createChess(8, 8);