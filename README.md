# Dylan's Short URLs

> A simple MEVN application for shortening URLs. Paste or type a link and a masked/shortened link is instantly generated.

![Sample GIF](https://i.imgur.com/sjHPy0Q.gif)

## Setup 🛠

### Option A) Build as Docker Image 🐳

Using the Docker build image option is easy and straightforward to spin up.

1. Rename the `short-url.config.js.example` to `short-url.config.js`
2. Fill out the settings in the `short-url.config.js`
3. Build it! Make sure Docker is running and do `docker build .` in the project root directory
4. Run the image and set the Local Host port to your desired port (80 for HTTP or 443 for HTTPS)
5. Launch the container and open it in your browser 🚀

### Option B) Manual Building 🏗

1. Rename the `short-url.config.js.example` to `short-url.config.js`
2. Fill out the settings in the `short-url.config.js`
3. In the root directory run `yarn install && yarn build`
4. To start the production server, run `yarn serve`

## Resources 🍃

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [Vue.js](https://vuejs.org/)
- [Node.js](https://nodejs.org/)
