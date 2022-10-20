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

<<<<<<< HEAD

## Running the Testing Environment

Acceptance tests with cucumber.

`cucumber`
=======
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
>>>>>>> main

## Database Setup

This application utilizes [Azure Data Tables](https://azure.microsoft.com/services/table_storage) for record storage. 

If you are using VSCode for development, the [Azurite Extension](https://marketplace.visualstudio.com/items?itemName=Azurite.azurite) is recommended. 

There is a provided `.env.local.sample` file that can be used as a template for your own `.env.local` file.

Need to start `azurite table service` from VSCode command pallette

- CMD + SHIFT + P - azurite table service for Start Table Service

## Simple API Test

With the app running locally, you can test the api by visiting `localhost:3000/api/v1/get-test-ts` in your browser or running the following command in your terminal:
`curl localhost:3000/api/v1/get-test-ts`

## CRUD API Test

If you're using [Postman](https://www.postman.com/), you can test the API there. With Visual Studio Code, it's recomended to use [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) extension to test API. The following instructions are how to make a simple create link API call using VSCode and Thunder Client:

- Update your node packages with `npm install`
- First run the server locally: `npm run dev`
- Navigate to Thunder Client icon on VSCode sidebar
- Click on New Request
- Select `GET` request
- Set the url to `http://localhost:3000/api/create-link`
- In the JSON tab, add the following with whatever linkUrl and userId you want
```
{
  "linkUrl": "https://www.excella.com/",
  "userId": "505050"
}
```
- Click Send

Now you should be able to view your linkUrl, userId and other data associated with that shortened link in a file in the root directory called `__azurite_db_table__.json`. This is a minified so right-click and select `Format Document` to easily inspect your new data:

```
{
  "PartitionKey": "p1",
  "RowKey": "bKGOiTEMP",
  "properties": {
    "PartitionKey": "p1",
    "RowKey": "bKGOiTEMP",
    "linkUrl": "http://excella.com",
    "userId": "505050",
    "Timestamp": "2022-10-12T16:45:34.2020000Z",
    "Timestamp@odata.type": "Edm.DateTime"
  },
  "lastModifiedTime": "2022-10-12T16:45:34.202Z",
}
```

### Other API Notes

- The DELETE API consumes a JSON object like this (the value needs to match the link you want to delete):
```
{
  "slug": "ag4LVSU7v"
}
```

- The PUT API consumes a JSON object like this ():
```
{
  "slug": "DWDZcOCHs",
  "linkUrl": "https://notexcella.com"
}
```

# Enjoy!
