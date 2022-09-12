// import readLine from 'readline';
// const rl = readLine.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question('Please select Game mode?\n', (userSelect) => {
//   console.log('index.ts:12 >> userSelect', { userSelect });
// });

// import { stdin, stdout } from 'process';
// const configGame = () => {
//   console.log('index.ts:7 >> configGame');

//   stdout.write('Please select Game mode?\n');
// };

const startGame = (goal = 200000) => {
  console.log('index.ts:3 >> startGame', { goal });
};

startGame();
