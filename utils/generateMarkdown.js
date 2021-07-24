// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

const title = data.title.split(' ').join('-').toLowerCase();

return `# ${title}
  
## Description
  
${data.description}.

## Table of Contents

- [Title](#${title})
- [Description](#description)
  * [Important Information](#important-information)
  * [Installation Instructions](#installation-instructions)
  * [Usage Information](#usage-information)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
- [Author](#author)
- [License](#license)

## Important Information

### Installation Instructions

${data.installationInstructions}

### Usage Information

${data.usageInformation}

### Contribution Guidelines

${data.contributionGuidelines}

### Test Instructions

${data.testInstructions}

## Author

* ${data.name}
* https://github.com/${data.username}
* ${data.email}

## License

This project is licensed under the ${data.license}`
};

module.exports = generateMarkdown;
