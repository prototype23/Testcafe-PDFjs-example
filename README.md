# Testcafe-PDFjs-example
https://github.com/DevExpress/testcafe-hammerhead/issues/1802

# Demo page / Installation
1. Fork/ Download this project
2. [Install Nodejs/NPM](#Install-Nodejs/NPM) (Skip this if you already have nodejs installed)
3. From the project's root run:
```
npm install
```
4. Edit your hosts file so the `testserver` redirects to your localhost eg
```diff
+ 127.0.0.1       localhost testserver
```

5. Start the web server and view the demo
```
npm run start
```

6. Run the tests
```
npm run test
```

# Running tests from Visual Studio Code
Install [testcafe-test-runner](https://marketplace.visualstudio.com/items?itemName=romanresh.testcafe-test-runner) extension on your IDE.

A folder `.vscode` exists on the root of th project. In order to activate the `settings.json` you need to open the project folder with Visual Studio Code.

