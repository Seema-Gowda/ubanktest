# ubanktest
What is this
Automated test suite for ‘Ubank' program using Cypress.
Repository Structure
/cypress
    /fixtures
        - test data, css selectors,page elements
    /e2e
        - test/spec files
        -spec files included for api and ui with in respective folders
    /support
        - custom commands for ui
        - import ui custom commands in e2e script
    cypress.config
        - configuration of report using npm reporting library package mochawesome
        - set html value true to view reports in html mode

Installation 
1. Check out the master branch to local folder
2. Open command prompt at project folder level
3. Run “ npm install” in command prompt
4. Run “npx cypress open” in command prompt

Running the tests
Cypress can be run through the terminal 
To run script manually
npx cypress open 
select the ui or api script in e2e folder from cypress ui screen
 
Reporting
To run a report
cypress run --reporter mochawesome  --reporter-options reportDir="cypress/results",overwrite=false,html=true,json=false
or (if bash error occurs then)
 ./node_modules/.bin/cypress run --reporter mochawesome  --reporter-options reportDir="cypress/results",overwrite=false,html=true,json=false

verify reports in folder
/results   'verify html here' 

/video/api 'verify vidoes here for api'
/video/ui  'verify vidoes here for ui'

Useful info
* https://docs.cypress.io/guides/references/best-practices.html
* https://docs.cypress.io/guides/core-concepts/interacting-with-elements.html