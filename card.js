#!/usr/bin/env node

'use strict'

const boxen = require('boxen');
const chalk = require('chalk');
const inquirer = require('inquirer');
const clear = require('clear');
const open = require('open');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What do you want to do?',
    choices: [
      {
        name: `Send me an ${chalk.green.bold('email')}?`,
        value: () => {
          open('mailto:me@rubenuijtdewilligen.com');
          console.log('\nDone. See you soon in my inbox!\n');
        }
      },
      {
        name: `View my ${chalk.blue.bold('website')}?`,
        value: () => {
          open('https://rubenuijtdewilligen.com');
          console.log('\nMy website has been opened in your standard browser!\n');
        }
      }, 
      {
        name: `${chalk.cyan.bold('Tweet')} at me?`,
        value: () => {
          open('https://twitter.com/intent/tweet?screen_name=RenderMelon&ref_src=twsrc%5Etfw');
          console.log('\nTwitter has been opened. You\'ll see a reaction soon!\n');
        }
      },
      {
        name: `Stalk my ${chalk.red.bold('Instagram')}`,
        value: () => {
          open('https://instagram.com/rubens.life_');
          console.log('\nL+C omg omg. (just kidding, welcome to my instagram)\n');
        }
      },
      {
        name: 'Just quit.',
        value: () => {
          console.log('Hope to see you again!\n');
        }
      }
    ]
  }
];

const data = {
  name: chalk.bold.magenta('                 Ruben Uijtdewilligen'),
  handle: chalk.white('@RenderMelon'),
  company: chalk.white('https://melontilt.com/'),
  twitter: chalk.white('https://twitter.com/') + chalk.cyan('rendermelon'),
  github: chalk.white('https://github.com/') + chalk.green('rendermelon'),
  instagram: chalk.white('https://instagram.com/') + chalk.magenta('rubens.life_'),
  web: chalk.cyan('https://rubenuijtdewilligen.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('rubenu'),

  labelCompany: chalk.white.bold('Holding Company:'),
  labelTwitter: chalk.white.bold('        Twitter:'),
  labelGitHub: chalk.white.bold('         GitHub:'),
  labelInstagram: chalk.white.bold('      Instagram:'),
  labelWeb: chalk.white.bold('        Website:'),
  labelCard: chalk.white.bold('           Card:')
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelCompany}  ${data.company}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelInstagram}  ${data.instagram}`,
    `${data.labelWeb}  ${data.web}`,
  ].join('\n'),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'magenta'
  }
);

console.log(me);
console.log('');
prompt(questions).then((answer) => {
  answer.action();
});