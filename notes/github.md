# GitHub

### Deploy from a specific folder in GitHub

1. `GitHub repository > Settings tab > Pages` in sidebar.
2. `Build and deployment section > GitHub Actions` from drop down.
3. `Static HTML card > Configure` button.
4. Change line 40 to `path: './frontend'` and update the comment on line 39 to " `"Upload a folder in the repository"`.
5. Push `Commit changes` button and insert an optional message.

### Ignore the backend dist folder
- The `dist` folder is for starting the backend server.
- Because GitHub doesn't start the server, the repository can ignore the `dist` folder.

1. Add `dist` to `.gitignore`.
2. `git rm -r --cached dist`.
3. Commit changes and push updates to GitHub.