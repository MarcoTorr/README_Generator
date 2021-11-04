// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');
const util = require('util');
// If there is no license, return an empty string

function  renderLicenseBadge(type) {
      if (!type || type === "Unlicense"){
        const licenseBadge = "";
        return(licenseBadge)
      } else if (type ==="BSD"){
        const licenseBadge= "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
        return(licenseBadge)
      } else if (type ==="IBM"){
        const licenseBadge= "![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)"
        return(licenseBadge)
      } else if (type ==="MIT"){
        const licenseBadge= "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
        return(licenseBadge)
      }
    } 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(type) {
      if (!type || type=== "Unlicense"){
        return("")
      } else if (type==="BSD"){
        return("https://opensource.org/licenses/BSD-3-Clause")
      } else if (type==="IBM"){
        return("https://opensource.org/licenses/IPL-1.0")
      } else if (type==="MIT"){
        return("https://opensource.org/licenses/MIT")
      } 
}  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generateContent(answers) {
  let badge= renderLicenseBadge(`${answers.license}`);
  let link= renderLicenseLink(`${answers.license}`);
  if (answers.license === "Unlicense"){
    return(`# ${answers.title} 

  ## Table of contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Description 

  ${answers.description}

  ## Installation 

  ${answers.installation}

  ## Usage 

  ${answers.usage}


  ## Contributing 

  ${answers.contribution}

  ## Tests 

  ${answers.test}

  ## Questions 

  For additional information or any questions regarding the project, please feel free to contact me via GitHub or email.
  GitHub: ${answers.gitName}
  Email: ${answers.email}`)
  } else {
    return(`# ${answers.title}    ${badge}

  ## Table of contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Description 

  ${answers.description}

  ## Installation 

  ${answers.installation}

  ## Usage 

  ${answers.usage}


  ## Contributing 

  ${answers.contribution}

  ## Tests 

  ${answers.test}

  ## License

  This project works under a license of type ${answers.license}. For more information regarding the license, follow the link ${link}

  ## Questions 

  For additional information or any questions regarding the project, please feel free to contact me via GitHub or email.
  GitHub: ${answers.gitName}
  Email: ${answers.email}`)
  }
}

// TODO: Create a function to generate markdown for README


module.exports.generateContent = generateContent;
module.exports.renderLicenseBadge = renderLicenseBadge;
module.exports.renderLicenseLink = renderLicenseLink;
