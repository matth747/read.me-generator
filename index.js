const inquirer = require('inquirer')
const fs = require('fs')

const createReadme = (github, email, project, description, license, install, tests, usage, contribute) => 
`# ${project}

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

## Contributing
${contribute}

## Tests
${tests}

## Questions
If you have any questions about the repo, open an issue or cotact me directly at ${email}.  You can find more of my work at ${github}.
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
            choices: (['MIT', 'cdla', 'marriage']),
        },
        {
            type: 'input',
            message: 'Project installation process:',
            name: 'install',
            //npm i
        },
        {
            type: 'input',
            message: 'What command should be run to run tests:',
            name: 'tests',
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