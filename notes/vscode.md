# VS Code

#### Live Server › Settings > File: `index.html`
- 
#### Optional Live Server settings
- `Live Server › Settings > Port`: 8080 
- `Live Server › Settings > Host`: localhost 

### Tip: Automatic code formatting and indentation

- Prettier can automatically format code, but it may require manual configuration.

1.  Open a new VS Code window (without a project)
2.  Access the global settings file.
3.  Add `"editor.defaultFormatter": "esbnp.prettier-vscode",`
4.  Add `"editor.formatOnSave": true,`

### Tip: Debug with VS Code instead of Dev Tools

1.  Open a new VS Code window (without a project) to access global settings.
2.  `Menu > Run > Add Configuration > Chrome: Launch`.
3.  Change the `name` to `"VS Code Debugger"`.
4.  Change the `url` to your server.
5.  Disable Live Server from automatically opening a browser.

### External OCR

1. View the article https://devpost.com/software/web-based-clipboard-ocr.
2. Trythe online OCR app (link at the bottom of the article).
3. Copy the app to a VS Code project.
4. Run the OCR app locally.