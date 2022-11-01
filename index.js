const inquirer = require('inquirer')
const fs = require('fs')

function renderLicenseBadge(license) {
    if (license === 'MIT')
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }

const createReadme = (github, email, project, description, license, install, tests, usage, contribute) => 
`#${project}

## Description
${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${install}

## Usage
${usage}

## License
${license}
${renderLicenseBadge(license)}

## Contributing
${contribute}

## Tests
${tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}.  You can find more of my work at ${github}.
`
function startApp() {
return inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'project',
        },
        {
            type: 'input',
            message: 'Project description:',
            name: 'description',
        },
        {
            type: 'list',
            message: 'Choose license:',
            name: 'license',
            choices: (['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none']),
        },
        {
            type: 'input',
            message: 'Project installation process:',
            name: 'install',
            default: 'npm i',
            //npm i
        },
        {
            type: 'input',
            message: 'What command should be run to run tests:',
            name: 'tests',
            default: 'npm run test',
            //npm test
        },
        {
            type: 'input',
            message: 'Project Usage:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'How to contribute:',
            name: 'contribute',
        },
    ])}
    function makePage() {
        startApp()

    .then((response) => {

        const myRead = createReadme(response.github, response.email, response.project, response.description, response.license, response.install, response.tests, response.usage, response.contribute)


        fs.writeFile('README.md', myRead, (err) =>
        err ? console.log(err) : console.log('success!')
        )})}

    makePage()