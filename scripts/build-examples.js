const events = require('events');
const fs = require('fs');
const readline = require('readline');
const path = require('path');

const components = ['c-tag'];

const processLineByLine = async (component) => {
  try {
    const examplesFolder = path.resolve(__dirname, '../examples');

    if (!fs.existsSync(examplesFolder)) {
      fs.mkdirSync(examplesFolder);
    }

    const writeStream = fs.createWriteStream(
      `${examplesFolder}/${component}.example.ts`,
    );

    const writeline = (line, lineChange = true) => {
      writeStream.write(line.replace(/^\s{2}/, ''));

      if (lineChange) {
        writeStream.write('\n');
      }
    };

    let hasInfo = false;
    let isExample = false;
    let exampleName = '';

    const infoText = `/**
 * Examples for ${component}.
 * Automatically generated at ${new Date().toLocaleString()}.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY!
 */
`;

    const rl = readline.createInterface({
      input: fs.createReadStream(
        path.resolve(
          __dirname,
          `../documentation/angular/src/app/examples/${component}/${component}.component.ts`,
        ),
      ),
      crlfDelay: Infinity,
    });

    rl.on('line', (line) => {
      if (!hasInfo) {
        writeline(infoText);

        hasInfo = true;
      }

      if (line.replace(/^\s+/g, '').startsWith('// @example-start')) {
        isExample = true;
        exampleName = line.split('|').pop();

        writeline(`export const ${exampleName} = \``, false);

        return;
      }

      if (line.replace(/^\s+/g, '').startsWith('// @example-end')) {
        isExample = false;
        exampleName = '';

        writeline('`;');

        return;
      }

      if (isExample) {
        writeline(line);
      }
    });

    writeStream.on('finish', () => {
      console.log('wrote all data to file');
    });

    await events.once(rl, 'close');

    writeStream.end();

    console.log('Reading file line by line with readline done.');
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(
      `The script uses approximately ${
        Math.round(used * 100) / 100
      } MB of memory`,
    );
  } catch (err) {
    console.error(err);
  }
};

components.forEach((component) => {
  processLineByLine(component);
});
