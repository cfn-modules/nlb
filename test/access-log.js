const test = require('ava');
const cfntest = require('@cfn-modules/test');

test.serial('access-log', async t => {
  const stackName = cfntest.stackName();
  let accessLogBucketName = null;
  try {
    t.log(await cfntest.createStack(`${__dirname}/access-log.yml`, stackName, {}));
    const outputs = await cfntest.getStackOutputs(stackName);
    t.log(outputs);
    // what could we test here?
    accessLogBucketName = outputs.AccessLogBucketName;
    t.log(await cfntest.emptyBucket(accessLogBucketName));
  } finally {
    try {
      t.log(await cfntest.deleteStack(stackName));
    } catch (err) {
      if (accessLogBucketName != null) {
        t.log(await cfntest.emptyBucket(outputs.AccessLogBucketName));
        t.log(await cfntest.deleteStack(stackName));
      } else {
        throw err;
      }
    }
    t.pass();
  }
});
