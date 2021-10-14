// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT License") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "CC0 1.0 Universal") {
    badge =
      "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else {
    badge = "";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string (I added the license link to the badge function because it's more efficent)
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "MIT License" || "CC0 1.0 Universal") {
    let badge = renderLicenseBadge(license);
    return "## License\n" + badge;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let renderLicense = renderLicenseSection(data.license);
  return `# ${data.title}

  ${renderLicense}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation Information](#installation)
  * [Usage](#usage)
  * [Contribution Guidlines](#contribution)
  * [Testing Instructions](#testing)
  * [Questions](#questions)
  <a name="installation"></a>
  ## Installation Instructions
  ${data.installation}
  <a name="usage"></a>
  ## Usage
  ${data.usage}
  <a name="contribution"></a>
  ## Contribution Guidelines
  ${data.contribution}
  <a name="testing"></a>
  ## Testing Instructions
  ${data.test}
  <a name="questions"></a>
  ## Questions
  If you have any questions about the project, please contact me at:
  GitHub: [${data.gitHub}](https://github.com/${data.gitHub})
  email: ${data.email}
  `;
}

module.exports = generateMarkdown;
