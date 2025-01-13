import monitorCPU from './cpu.js';
import monitorMemory from './memory.js';
import renderGraphs from './graph.js';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function startMonitoring() {
  const cpuData = [];
  const memoryData = [];

  while (true) {
    const cpuLoad = await monitorCPU();
    const memoryLoad = await monitorMemory();

    cpuData.push(cpuLoad);
    memoryData.push(memoryLoad);

    if (cpuData.length > 30) cpuData.shift();
    if (memoryData.length > 30) memoryData.shift();

    console.clear();

    renderGraphs(cpuData, memoryData);

    await sleep(2000);
    console.clear();
  }
}

startMonitoring();
