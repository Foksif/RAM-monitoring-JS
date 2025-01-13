import asciichart from 'asciichart';
import chalk from 'chalk';

function renderGraphs(cpuData, memoryData) {
  console.log("\n\n");

  console.log(chalk.blue("CPU Load (%)"));
  console.log(asciichart.plot(cpuData, { height: 10, colors: [asciichart.blue] }));

  console.log("\n");
  console.log(chalk.green("Memory Usage (%)"));
  console.log(asciichart.plot(memoryData, { height: 10, colors: [asciichart.green] }));
}

export default renderGraphs;
