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
    selectorTimeout: 95000,
    assertionTimeout: 25000,
    pageLoadTimeout: 190000,
    inspect: true,
    speed: 1
};

const runTest = suite => {
    let failedCount = 0;

    createTestCafe(null, 1337, 1338)
        .then(tc => {
            testcafe = tc;
            runner = testcafe.createRunner();
            runner.screenshots('reports/screenshots/', true);
        })
        .then(() => {
            return getTests(suite);
        })
        .then(testFiles => {
            return runner
                .src(testFiles)
                .browsers('browserstack:iPhone 7 Plus@10.3')
                .run(runOptions)
                .then(actualFailedCount => {
                    failedCount = actualFailedCount;
                    console.log(failedCount);
                    return testcafe.close();
                });
        })
        .then(() => process.exit(failedCount));
};

const suites = {
    mobile: './tests/mycs/table.js'
};

runTest(suites.mobile);
