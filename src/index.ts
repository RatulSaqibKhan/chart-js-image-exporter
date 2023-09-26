const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const fs = require('fs');

// Define the chart configuration
const configuration = {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Sample Data',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  },
};
const backgroundColour = 'white';
// Create a new ChartJSNodeCanvas instance
const canvasRenderService = new ChartJSNodeCanvas({width: 800, height: 400, backgroundColour});

// Render the chart
(async () => {
  const imageBuffer = await canvasRenderService.renderToBuffer(configuration);
  // Save the chart as an image file
  fs.writeFileSync('chart.png', imageBuffer);
  console.log('Chart saved as chart.png');
})();
