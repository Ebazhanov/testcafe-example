## testcafe-example

Motivation:
-----------

(done/in progress)

- [x] run test in different browsers Chrome/Safari/FF/Chromium + Chrome:[Headless mode](https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/testing-in-headless-mode.html)
- [x] run all tests at the same browser without close/open new browser
- [x] run on physical mobile devices without cable connection [by QR-Code](https://devexpress.github.io/testcafe/documentation/recipes/test-on-remote-computers-and-mobile-devices.html#run-tests-on-a-mobile-device)
- [x] run in cloud services like [Browserstack](https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/browser-support.html#browsers-in-cloud-testing-services)
- [x] run in [docker](https://devexpress.github.io/testcafe/documentation/continuous-integration/gitlab.html#option-1---use-testcafe-docker-image)

Build status | Description | YML
:--- | :--- | :---
[![CircleCI](https://circleci.com/gh/Ebazhanov/testcafe-example.svg?style=svg)](https://circleci.com/gh/Ebazhanov/testcafe-example) | Linux (CircleCI) | [circle.yml](circle.yml)

### Getting started
`$ npm install`

## How to run test
##### Locally 
`$ npm run test`

[my video](https://monosnap.com/file/N0y3NgnhkCI6LRlMjxe5zP9NNLIJ2Q#)

##### On mobile with QR-code
`$ npm run mobile`

Read QR-code by your phone then click on the `Open link` to run the test

##### Run in docker

```
$ docker pull testcafe/testcafe:latest
```
```
$ npm run docker
```

## More info: 
- [Basic things Docker](https://www.javascriptjanuary.com/blog/building-your-first-node-app-using-docker),
- [TestCafe Docker](https://hub.docker.com/r/hortonworks/cloud-web-testcafe)

