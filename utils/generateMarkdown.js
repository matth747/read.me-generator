// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT')
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
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
`;


module.exports = generateMarkdown;
