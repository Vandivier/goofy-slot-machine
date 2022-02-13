## Slot Machine Game

This is a fullstack slot machine game, but like weird.

Currently, for example, exactly 10% of the time

Built with:

1. `npx epxress-generator --git --no-view be`
2. `npx create-react-app ui --template redux-typescript`
3. [Material UI](https://mui.com/getting-started/installation/) with `styled-components` for the styling engine.

   - That is, `npm install @mui/material @mui/styled-engine-sc styled-components @emotion/styled @emotion/react`

## Running the App

`cd be && npm run build-and-start`

## TODO

1. convert server to TS
2. deploy app somewhere
3. indeterminate icons ? should be in-order not random
4. add more testing
5. rename counterslice
6. remove styled components
7. session credits should update after last slot icon
8. add dark mode
