// const components = ['c-tag', 'c-data-table'];
const components = require('./utils/getComponents');

const getExampleScripts = require('./utils/getExampleScripts');
const getExampleTemplates = require('./utils/getExampleTemplates');

components.forEach((component) => {
  getExampleScripts(component);
  getExampleTemplates(component);
});
