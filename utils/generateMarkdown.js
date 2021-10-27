// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license === 'None'){
  return ''
}else {
  return '- [License](#license)'
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
  return ''
}else {
  return '## License'
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
 ${data.description}
  ## Table of Contents (Optional)
  If your README is long, add a table of contents to make it easy for users to find what they need.
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
 ${renderLicenseLink(data.license)}
  ## Installation
 ${data.installation}
  ## Usage
// usage
  ${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
  ---
// contribution
  ## Tests
// tests
##Questions
${data.username}
${data.email}
`;
}

module.exports = generateMarkdown;
