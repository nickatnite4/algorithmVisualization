const mkdirp = require("mkdirp");
const fse = require("fs-extra");

mkdirp("./app/assets", { recursive: true }).then(made => {
  fse.outputFile("./app/index.html", "", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Success!");
    }
  });
});

// create assets folders
mkdirp("./app/assets/images");
mkdirp("./app/assets/scripts").then(made => {
  fse.outputFile(
    "./app/assets/scripts/App.js",
    "import '../styles/styles.css'\n\nif(module.hot) {\nmodule.hot.accept()\n}",
    err => {
      if (err) {
        console.log(err);
      } else {
        console.log("App.js file successfully created.");
      }
    }
  );
});
mkdirp("./app/assets/styles").then(made => {
  fse.outputFile(
    "./app/assets/styles/styles.css",
    "@import 'normalize.css';\n@import 'base/_variables.css';\n@import 'base/_global.css';\n@import 'base/_mixins.css';",
    err => {
      if (err) {
        console.log(err);
      } else {
        console.log("styles.css file successfully created.");
      }
    }
  );
});

// create sub folders in scripts
mkdirp("./app/assets/scripts/modules");

// create sub folders in styles
mkdirp("./app/assets/styles/base").then(made => {
  fse.outputFile(
    "./app/assets/styles/base/_global.css",
    "html {\n scroll-behavior: smooth;\n}\nbody {\n font-family: 'Roboto', sans-serif;\n color: #333;\n}\n\nimg {\n max-width: 100%;\n height: auto;\n}\n\n* {\n box-sizing: border-box;\n}",
    err => {
      if (err) {
        console.log(err);
      } else {
        console.log("_global.css file successfully created.");
      }
    }
  );
  fse.outputFile(
    "./app/assets/styles/base/_mixins.css",
    "@define-mixin atSmall {\n  @media (min-width: 530px) {\n  @mixin-content;\n}\n}\n\n@define-mixin atMedium {\n  @media (min-width: 800px) {\n  @mixin-content;\n}\n}\n\n@define-mixin atLarge {\n  @media (min-width: 1010px) {\n  @mixin-content;\n}\n}\n\n@define-mixin clearfix {\n  &::after {\n  content: '';\n  clear: both;\n  display: table;\n}\n}",
    err => {
      if (err) {
        console.log(err);
      } else {
        console.log("_mixin.css was successfully created.");
      }
    }
  );
  fse.outputFile("./app/assets/styles/base/_variables.css", "", err => {
    if (err) {
      console.log(err);
    } else {
      console.log("_variables.css was successfully created.");
    }
  });
});
mkdirp("./app/assets/styles/modules");
