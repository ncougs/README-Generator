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

return `# ${data.title}
  
  ## Description
  
  ${data.description}.

  ## Table of Contents

  - [Title](#${data.title})
  - [Description](##Description)
    * [Important Information](##Important Information)
    * [Installation Instructions](###Installation Instructions)
    * [Usage Information](###Usage Information)
    * [Contribution Guidelines](###Contribution Guidelines)
    * [Test Instructions](###Test Instructions)
  - [Author](##Author)
  - [Author](##License)

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
