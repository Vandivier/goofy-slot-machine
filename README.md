## Slot Machine Game

This is a fullstack slot machine game, but like weird.

Currently, for example, exactly 10% of the time

Built with:

1. `npx express-generator --git --no-view be`
2. `npx create-react-app ui --template redux-typescript`
3. [Material UI](https://mui.com/getting-started/installation/)

   - That is, `npm install @mui/material @emotion/react`

## Running the App

`cd be && npm run build-and-start`

## TODO

1. convert server to TS
2. deploy app somewhere
3. add more testing
4. add dark mode
5. bing bong easter egg if u click exclamation point
   - add state for isRolling which disables lever until roll complete
   - isRolling disable fails when in bing bong mode (you can rapid click)
