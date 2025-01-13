import os from 'node:os';

function monitorCPU() {
  const cpus = os.cpus();
  let idle = 0, total = 0;

  cpus.forEach(cpu => {
    for (let type in cpu.times) {
      total += cpu.times[type];
    }
    idle += cpu.times.idle;
  });

  const load = ((1 - idle / total) * 100).toFixed(2);
  return parseFloat(load);
}

export default monitorCPU; 