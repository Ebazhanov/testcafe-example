const createTestCafe = require('testcafe');
const glob = require('glob');

let runner = null;
let testcafe = null;

const getTests = suite => {
  return new Promise(resolve => {
    glob(suite, (er, files) => resolve(files));
  });
};

const runOptions = {
  debug: true,
  skipJsErrors: true,
  quarantineMode: false,
  startFullscreen: true,
  selectorTimeout: 30000,
  assertionTimeout: 17000,
  pageLoadTimeout: 140000,
  inspect: true,
  speed: 1,
};

const runTest = suite => {
  createTestCafe('localhost', 1337, 1338)
    .then(tc => {
      testcafe = tc;
      runner = testcafe.createRunner();
      runner.screenshots('reports/screenshots/', true);
    })
    .then(() => {
      return getTests(suite);
    })
    .then(testFiles => {
      runner
        .src(testFiles)
        .browsers('firefox')
        .concurrency(3)
        .run(runOptions)
        .then(failedCount => {
          console.log(failedCount);
          testcafe.close();
        });
    });
};

const suites = {
  suite1: './tests/*/*.js',
};

runTest(suites.suite1);
