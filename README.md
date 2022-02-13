## Slot Machine Game

This is a fullstack slot machine game, but like weird.

Currently, for example, exactly 10% of the time

Built with:

1. `npx express-generator --git --no-view be`
2. `npx create-react-app ui --template redux-typescript`
3. [Material UI](https://mui.com/getting-started/installation/)

   - That is, `npm install @mui/material @emotion/react`

## Running the App

I suggest you build the app statically for prod deployment, like:

`cd be && npm run build-and-start`

For development, you might like to run the front and back ends seperately, like:

`cd be && yarn serve`

`cd ui && yarn start`

## TODO

1. add more testing
2. bing bong easter egg if u click exclamation point
   - add state for isRolling which disables lever until roll complete
   - isRolling disable fails when in bing bong mode (you can rapid click)
3. deploy app somewhere
4. add dark mode
