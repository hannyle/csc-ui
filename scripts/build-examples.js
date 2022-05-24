const fs = require('fs');
const path = require('path');
const components = require('./utils/getComponents');

const getExampleScripts = require('./utils/getExampleScripts');
const getExampleTemplates = require('./utils/getExampleTemplates');

const getTimestampsJson = (folder) => {
  try {
    const rawdata = fs.readFileSync(`${folder}/timestamps.json`);

    return JSON.parse(rawdata);
  } catch (error) {
    return {};
  }
};

const dataFolder = path.resolve(
  __dirname,
  '../documentation/angular/src/app/examples/data',
);

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
}

let timestamps = getTimestampsJson(dataFolder);

components.forEach((component) => {
  const tsFile = path.resolve(
    __dirname,
    `../documentation/angular/src/app/examples/${component}/${component}.component.ts`,
  );

  const htmlFile = path.resolve(
    __dirname,
    `../documentation/angular/src/app/examples/${component}/${component}.component.html`,
  );

  const stats = {
    ts: fs.statSync(tsFile),
    html: fs.statSync(htmlFile),
  };

  if (!timestamps[component]) {
    timestamps[component] = {
      ts: stats.ts.mtime.getTime(),
      html: stats.html.mtime.getTime(),
    };
  }

  if (timestamps[component].ts < stats.ts.mtime.getTime()) {
    const filename = `${dataFolder}/${component}.script.js`;

    getExampleScripts(component, filename);

    timestamps[component].ts = stats.ts.mtime.getTime();
  }

  if (timestamps[component].html < stats.html.mtime.getTime()) {
    const filename = `${dataFolder}/${component}.template.js`;

    getExampleTemplates(component, filename);

    timestamps[component].html = stats.html.mtime.getTime();
  }
});

timestamps = JSON.stringify(timestamps, null, 2);

fs.writeFileSync(`${dataFolder}/timestamps.json`, timestamps);
