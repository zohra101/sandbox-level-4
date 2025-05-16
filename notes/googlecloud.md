### Google Cloud
- Like AWS, Google Cloud offers services for building and deploying applications
- Unlike AWS, Google Cloud can deploy backend servers the traditional way for free
- The free tier is for personal use (a server with high traffic may accrue charges)
- For registration, a valid credit card is required just in case the free tier is exceeded
- Create an account at `https://cloud.google.com/`

### App Engine
- App Engine is a Google Cloud service for building and deploying server backends
- Supports traditional backend deployment for NodeJs apps
- Unlike AWS, only CLI commands can deploy a backend server to Google App Engine
- The free tier is for personal use (a server with high traffic may accrue charges)
- https://cloud.google.com/appengine

### Create a new App Engine project
1. Log into the Google Cloud console `https://console.cloud.google.com/`.
2. At the top left, click on the `project box > New Project > Name: Sandbox Level 4> Create`.
3. At the top right project box, select `Sandbox Level 4 >` at the bottom `View All Products`.
4. Select `App Engine > Create Application`.
5. A billing account is required to create an application.

### Add a Google Could billing account
- These are general instructions (not detailed)

1. At the top left, click the `menu > Billing > Manage billing accounts > Add billing account`.
2. Provide `billing` information `> Activate account > add 2-step verification`.
3. Setup `budget alerts > Create budget > Name: Free > Amount $0.01`.

### Install Google Cloud SDK (CLI)
1. `View all products > Select App Engine > Create Application`.
2. Choose a `region` that's closest to you > `Next`.
3. Language: `Node.js` > Environment: `Standard `> `Download the Cloud SDK`.
4. Install `Google Cloud SDK for all users` > In a VS Code terminal, `gcloud -- version`.
5.  If the Google Cloud CLI doesn't work, close all VS Code windows or sign out/in.
   
### Create a local backend project
- These are general instructions (not detailed)

1. Workspace: `backendGoogleCloud1.
2. Copy the backend `express` template into the workspace.
3. In the terminal > `gcloud init`.
   1. Yes to sign in
   2. Visit link
   3. Allow Google SDK access.
4. In the terminal > choose the sandbox-level-4 project.
5. Type `glcoud app deploy`.
6. An error message will show that an `app. yaml` file is required.

### The app.yaml file
```js
runtime: nodejs22
```
- The `app.yaml ` file tells App Engine which NodeJs version should run the backend server.

1. Install node packages with `PNPM`.
2. Build the project to generate a bundle in `dist`.
3. Create `app. yaml` in the `dist `folder.
4. Add `runtime: nodejs22` to `app. yaml`.
5. In the terminal > `gcloud app deploy ./dist/app.yaml`. Try again if error.
6. Open the displayed link in the browser.
7. Error message that service is unavailable.

### App Engine requirements
- App Engine requires these to be in the folder that will be deployed:

1. The `app.yaml` file for specifying the NodeJs version to use.
2. The `package.json` file for installing dependencies (even if there are none).
3. A `"start"` script in `package.json` for starting the backend server.
4. The backend server must listen on the `PORT` environment variable from App Engine.

### Configure the backend server for App Engine
1. Add `.env` to `.gitignore`.
2. To `.env`, add your preferred port (ex. `PORT = 9000`).
3. Install `dotenv`.
4. Configure `dotenv` in `index. ts`.
5. Set the `listener` port to `process. env.PORT`.
6. Use type `any` to remove TypeScript error.
7. Copy `package.json` to the `dist` folder.
8. Empty out `dependencies` and `dev dependencies`.
9. Empty out NPM scripts. 
10. Add the script `"start": "node main. js"`.

### Deploy the backend server to App Engine
1. Rebuild the project `npm run build` to include code updates.
2. In the terminall, run `gcloud app deploy ./dist/app.yaml`.
3. Open the displayed link in the browser; your server root handler should respond.
4. Save the command in an NPM script (ex. `"deploy"`).
5. Add an NPM script to open a browser tab with the live App Engine server link.
6. 
### App Engine extra steps

1. In the `dist` folder, run `npm install` (not PNPM) to generate `package-lock.json`
2. OPTIONAL: Delete `node modules` in the `dist` folder because App Engine ignores it
3. Save a backup (copy & paste) of `app.yaml` and the modified `package.json` file in a folder (ex. `. bak`)
4. Add the backup folder to `.gitignore`
5. To view app in the web browser run `gcloud app browse`