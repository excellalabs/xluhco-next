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

## Database Setup
This application utilizes [Azure Data Tables](https://azure.microsoft.com/services/table_storage) for record storage. 
If you are using VSCode for development, the [Azurite Extension](https://marketplace.visualstudio.com/items?itemName=Azurite.azurite) is recommended. 
There is a provided `.env.local.sample` file that can be used as a template for your own `.env.local` file.

Enjoy!