const { generate } = require('multiple-cucumber-html-reporter');
const path = require('path');


async function main() {
  generate({
    jsonDir: path.join(process.cwd(), 'reports', 'json'),
    reportPath: path.join(process.cwd(), 'reports', 'html-reports'),


    metadata: {
      browser: {
        name: 'chromium',
        version: 'latest',
      },
      device: 'Local test machine',
      platform: {
        name: process.platform,
        version: '',
      },
    },


    customData: {
      title: 'Info del proyecto',
      data: [
        {
          label: 'Proyecto',
          value: 'Novus Technology - Formulario de Registro',
        },
        {
          label: 'Ejecutado',
          value: new Date().toLocaleString(),
        },
      ],
    },


    openReportInBrowser: true,
  });
}


main();
