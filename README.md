# xluhco-next
The next rendition of the xluhco app.

## Getting Started

To download and run Xluh locally, follow these steps:
- Clone the repository:
`git clone git@github.com:excellalabs/xluhco-next.git`
- Open the repository:
`cd xluhco-next`
- Install dependencies via node:
`npm install`
- Start your server locally:
`npm run dev`

## Testing with Playwright

Running all tests

`npx playwright test`

Running a single test file

`npx playwright test landing-page.spec.ts`

Run a set of test files

`npx playwright test tests/todo-page/ tests/landing-page/`

Run files that have landing or login in the file name

`npx playwright test landing login`

Run the test with the title

`npx playwright test -g "add a todo item"`

Running tests in headed mode

`npx playwright test landing-page.spec.ts --headed`

Running tests on a specific project

`npx playwright test landing-page.ts --project=chromium`

## Debugging Tests
If you're using Visual Studio Code, it's recomeneded to use (this extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

Since Playwright runs in Node.js, you can debug it with your debugger of choice e.g. using console.log or inside your IDE or directly in VS Code with the VS Code Extension. Playwright comes with the Playwright Inspector which allows you to step through Playwright API calls, see their debug logs and explore selectors.

Debugging all tests:

`npx playwright test --debug`

Debugging one test file:

`npx playwright test example.spec.ts --debug`

Debugging a test from the line number where the test(.. is defined:

`npx playwright test`

Enjoy!