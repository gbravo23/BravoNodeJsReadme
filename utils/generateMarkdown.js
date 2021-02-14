// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description \n ${data.description} \n
  ## Table of Contents \n ${data.tableOfContents} \n
  ## Installation \n${data.installation} \n
  ## Usage \n ${data.usage} \n
  ## License \n ${data.license} \n[![Generic badge](https://img.shields.io/badge/Licensing-${data.license}-<COLOR>.svg)](https://shields.io/)
  ## Contributing \n${data.contributing} \n
  ## Testing \n${data.testing} \n
  ## Questions \n${data.questions} \n
`;
}

module.exports = generateMarkdown;
