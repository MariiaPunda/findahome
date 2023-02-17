# Find a home project challenge

**How it works:**

https://user-images.githubusercontent.com/6270437/219643836-b3311896-855a-48a1-ae44-d9e57d6bdd6d.mp4

**What I used:**

1. [React](https://beta.reactjs.org/learn/start-a-new-react-project) as main framework
2. [Fela](https://fela.js.org/) for styling: added some basic components with styles
3. [React Leaflet](https://react-leaflet.js.org/) for maps
4. [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for data fetching, nothing fancy
5. [Cypress](https://docs.cypress.io/) for end-to-end testing: there is basic a11y test and example of page test 
6. [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and code style 

**What it doesn’t have:**

1. Form on button click and slider, so yes it’s just cards binded to markers and vice versa.
2. Marker is centered and it would be nice to have it a bit of padding from the card tiles, but I could’t figure it out so far, so please, bear with me I am working with maps here for the first time. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run cypress:open`

Opens Cypress for end-to-end tests runs.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
