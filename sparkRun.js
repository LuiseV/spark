const kelda = require('kelda');
const spark = require('./spark.js');

const inf = kelda.baseInfrastructure();

const workerVMs = inf.machines.filter(machine => machine.role === 'Worker');

const s = new spark.Spark(workerVMs.length - 1,
  { memoryMiB: spark.getWorkerMemoryMiB(workerVMs[0]) });
s.exposeUIToPublic();

s.deploy(inf);
