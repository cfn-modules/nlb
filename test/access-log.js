const test = require('ava');
const cfntest = require('@cfn-modules/test');

test.serial('access-log', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/access-log.yml`, stackName, {}));
    const outputs = await cfntest.getStackOutputs(stackName);
    t.log(outputs);
    // what could we test here?
    t.log(await cfntest.emptyBucket(outputs.AccessLogBucketName));
  } finally {
    try {
      t.log(await cfntest.deleteStack(stackName));
    } catch (err) {
      t.log(await cfntest.emptyBucket(outputs.AccessLogBucketName));
      t.log(await cfntest.deleteStack(stackName));
    }
    t.pass();
  }
});
