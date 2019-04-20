const path = require("path");
const chalk = require("chalk"); //colors command line output
const chokidar = require("chokidar"); //watch files and then run function in cross platform way
const fs = require("fs");
const parse = require("react-docgen").parse; //looks at components and pulls out metadata

const paths = {
  examples: path.join(__dirname, "../src", "docs", "examples"),
  components: path.join(__dirname, "../src", "components"),
  output: path.join(__dirname, "../config", "componentData.js")
};

// watches for changes to files
const enableWatchMode = process.argv.slice(2) === "--watch";
if (enableWatchMode) {
  // regenerate component metadata when components or examples change
  chokidar
    .watch([paths.examples, paths.components])
    .on("change", function(event, path) {
      generate(paths);
    });
} else {
  // Generate component metadata
  generate(paths);
}

// gets a list of directories in the components folder
// maps over list to generate component data
// tracks errors
function generate(paths) {
  let errors = [];
  let componentData = getDirectories(paths.components).map(function(
    componentName
  ) {
    try {
      return getComponentData(paths, componentName);
    } catch (error) {
      errors.push(
        "An error occured while attempting to generate metadata for " +
          componentName +
          ". " +
          error
      );
    }
  });
  writeFile(
    paths.output,
    "module.exports = " + JSON.stringify(errors.length ? errors : componentData)
  );
}

// gets the content out of the componentData file
// parses content into info (reads component data into metadata)
function getComponentData(paths, componentName) {
  let content = readFile(
    path.join(paths.components, componentName, componentName + ".js")
  );
  let info = parse(content);

  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(paths.examples, componentName)
  };
}

// similar to above, but just a name, description, and code
function getExampleData(examplesPath, componentName) {
  let examples = getExampleFiles(examplesPath, componentName);
  return examples.map(function(file) {
    let filePath = path.join(examplesPath, componentName, file);
    let content = readFile(filePath);
    let info = parse(content);
    return {
      // By convention, component name should match the filename
      // So remove the .js extension to get the component name
      name: file.slice(0, -3),
      description: info.description,
      code: content
    };
  });
}

function getExampleFiles(examplesPath, componentName) {
  let exampleFiles = [];
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName));
  } catch (error) {
    console.log(chalk.red(`No examples found for ${componentName}.`));
  }
  return exampleFiles;
}

function getDirectories(filepath) {
  return fs.readdirSync(filepath).filter(function(file) {
    return fs.statSync(path.join(filepath, file)).isDirectory();
  });
}

function getFiles(filepath) {
  return fs.readdirSync(filepath).filter(function(file) {
    return fs.statSync(path.join(filepath, file)).isFile();
  });
}

function writeFile(filepath, content) {
  fs.writeFile(filepath, content, function(err) {
    err
      ? console.log(chalk.red(err))
      : console.log(chalk.green("Component data saved."));
  });
}

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf-8");
}
