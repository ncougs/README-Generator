const fs = require('fs');
const moment = require('moment');

//Function to read the file containing the license text. 
const readLicense = (fileName) => {
  return fs.readFileSync(`./utils/${fileName}`).toString()
};

// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == null) {
    return;
  }
  else {
    return `[![License]`;
  };
};

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == null) {
    return;
  };

  if (license=='MIT License') {
    return `(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  };

  if (license=='GNU General Public License') {
    return `(https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  };

  if (license=='Apache License') {
    return `(https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  };
}

// Function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license, name) => {
  let licenseString;

  if (license == null) {
    return;
  };

  if (license=='MIT License') {
    licenseString = readLicense(`MIT-License.txt`);
  };

  if (license=='GNU General Public License') {
    licenseString = readLicense(`GNU-License.txt`);
  };

  if (license=='Apache License') {
    licenseString = readLicense(`Apache-License.txt`);
  };

return licenseString.replace(/<name of author>/gm, name).replace(/<year>/gm, moment().format('YYYY'));
};

//function to generate markdown for README
function generateMarkdown(data) {

const title = data.title.split(' ').join('-').toLowerCase();

return `${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

# ${data.title}
  
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
- [Questions](#questions)
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

## Questions

For any questions, please reach out to the author below: 

* ${data.name}
* https://github.com/${data.username}
* ${data.email}

## License

${renderLicenseSection(data.license, data.name)}`
};

module.exports = generateMarkdown;
