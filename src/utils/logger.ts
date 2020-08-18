import { table } from 'table';
import chalk from 'chalk';

// const data = [
//   // Error
//   [chalk.whiteBright.bold(" Executing "), chalk.whiteBright.bold(" User")],
//   [chalk.white.bgRed.bold(" Error! "), chalk.whiteBright("SELECT * FROM `db`")],
//   // Success
//   [
//     chalk.whiteBright.bgAnsi(2).bold(" Success! "),
//     chalk.green(
//       "I am a green line 👀 " +
//         chalk.blue.underline.bold("with a blue substring") +
//         " SELECT * FROM `db`"
//     ),
//   ], // Success
//   [
//     chalk.white.bold(" 👍 SQL"),
//     chalk.green("Showing rows 0 - 1 (2 total, Query took 0.0002 seconds.)"),
//   ],
//   [
//     chalk.white.bold(" 👎 SQL"),
//     chalk.redBright("Showing rows 0 - 1 (2 total, Query took 0.0002 seconds.)"),
//   ],
// ];

const config = {
  border: {
    topBody: `─`,
    topJoin: `┬`,
    topLeft: `┌`,
    topRight: `┐`,

    bottomBody: `─`,
    bottomJoin: `┴`,
    bottomLeft: `└`,
    bottomRight: `┘`,

    bodyLeft: `│`,
    bodyRight: `│`,
    bodyJoin: `│`,

    joinBody: `─`,
    joinLeft: `├`,
    joinRight: `┤`,
    joinJoin: `┼`,
  },
};

export const errorDebugScreen = (model: string, sql: string, message: string) =>
  table(
    [
      // Error
      [chalk.whiteBright.bold(' Executing '), chalk.whiteBright.bold(` ${model} `)],
      [chalk.white.bold(' 👎 SQL'), chalk.redBright(sql)],
      [chalk.white.bgRed.bold(' Error! '), chalk.whiteBright(message)],
    ],
    config,
  );

export const successDebugScreen = (model: string, sql: string, message: string) =>
  table(
    [
      // Error
      [chalk.whiteBright.bold(' Executing '), chalk.whiteBright.bold(` ${model} `)],
      [chalk.white.bold(' 👍 SQL'), chalk.greenBright(sql)],
      [chalk.whiteBright.bgAnsi(2).bold(' Success! '), chalk.whiteBright(message)],
    ],
    config,
  );
