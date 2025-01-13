import os from 'node:os';

function monitorMemory() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = ((totalMemory - freeMemory) / totalMemory) * 100;
  return parseFloat(usedMemory.toFixed(2));
}

export default monitorMemory;
