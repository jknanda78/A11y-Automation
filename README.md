# A11y-Automation
A sample application focuses on accessibility automation that integrates [axe-webdriverjs](https://github.com/dequelabs/axe-webdriverjs).

## Requirements
* Node.js (version > 4 and < 5)
* npm
* Chrome browser

## Installations
If you don't already have it, [download Chrome driver](https://sites.google.com/a/chromium.org/chromedriver/downloads) and put it in a location on your system $PATH.

### Mac Users
* Copy the chromedriver in `/usr/local/bin`
* Update $PATH in `/etc/paths`

## Getting Started
install modules
`npm install`

# Usage:
## Run tests
`npm run a11y:test`
* selenium runs on port 4444.

## For development
`npm run dev`
* runs on port 9010, you may change the port.

### Known Issues
Currently the integration is tested with `node v4` and working as expected. However there are some issues with `node v6`.

### What next?
* Testing flows with authentication.
