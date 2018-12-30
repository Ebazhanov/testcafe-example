## testcafe-example

Motivation: 
- run test in different browsers Chrome/Safari/FF/Chromium + Chrome:[Headless mode](https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/testing-in-headless-mode.html)
- run all tests at the same browser without close/open new browser
- run on physical mobile devices without cable connection [by QR-Code](https://devexpress.github.io/testcafe/documentation/recipes/test-on-remote-computers-and-mobile-devices.html#run-tests-on-a-mobile-device)
- run in cloud services like [Browserstack](https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/browser-support.html#browsers-in-cloud-testing-services)
- run in [docker](https://devexpress.github.io/testcafe/documentation/continuous-integration/gitlab.html#option-1---use-testcafe-docker-image)

### Getting started
`npm install`

## How to run test
##### Locally 
`$ npm run locally`

[my video](https://monosnap.com/file/N0y3NgnhkCI6LRlMjxe5zP9NNLIJ2Q#)

##### On mobile with QR-code
`$ npm run mobile`

Read QR-code by your phone then click on the `Open link` to run the test
