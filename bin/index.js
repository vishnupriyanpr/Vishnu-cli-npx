#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import boxen from "boxen";

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "cyan",
};

const intro = `
${chalk.cyan("                     Hello, I'm VISHNUPRIYAN P R  👋                       ")}

            Throughout Cosmos and Code, I Walk My Own Path

${chalk.bold("     GitHub:")}  https://github.com/vishnupriyanpr
${chalk.bold("   LinkedIn:")}  https://linkedin.com/in/vishnupriyan-p-r
${chalk.bold("       Card:")}  npx vishnupriyan

I’m currently open to opportunities — whether you're hiring, collaborating,
or just vibing, reach out! Let’s create something amazing.

Tip: Use cmd/ctrl + click to open links
`;

console.log(boxen(intro, boxenOptions));

const prompt = await inquirer.prompt([
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      {
        name: "📧 Send me an email?",
        value: "email",
      },
      {
        name: "📄 Download my Resume?",
        value: "resume",
      },
      {
        name: "👋 Just quit.",
        value: "quit",
      },
    ],
  },
]);

switch (prompt.action) {
  case "email":
    console.log("\n📬 Drop me a mail at: priyanv783@gmail.com\n");
    break;
  case "resume":
    console.log("\n📄 You can find my resume here: https://drive.google.com/file/d/1o9fmidKv-gtA5HW685XRy8n2fPM_9BJl/view?usp=sharing\n");
    break;
  default:
    console.log("\n👋 Bye! Ping me anytime.\n");
    break;
}
