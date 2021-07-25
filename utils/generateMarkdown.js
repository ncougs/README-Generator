const fs = require('fs');
const moment = require('moment');

const readLicense = (fileName) => {
  return fs.readFileSync(`./utils/${fileName}`).toString()
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license, name) => {
  let licenseString;

  if (license == 'null') {
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

${renderLicenseSection(data.license, data.name)}`
};

module.exports = generateMarkdown;
