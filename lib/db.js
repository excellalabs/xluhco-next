import { TableClient, generateAccountSas } from "@azure/data-tables";
  
  
  
  const tablesUrl = process.env.AZURE_TABLES_ENDPOINT || "";
  const tablesTable = process.env.AZURE_TABLES_TABLE || "";
  const accountKey = process.env.AZURE_ACCOUNT_KEY || "";
  const accountName = process.env.AZURE_ACCOUNT_NAME || "";

  const connectionString = "UseDevelopmentStorage=true";
  const client = TableClient.fromConnectionString(connectionString, "myTable");

async function getLinks() {
    // If the table 'newTable' already exists, createTable doesn't throw
    await client.listEntities()
}

async function createLink() {
    // If the table 'newTable' already exists, createTable doesn't throw
    const testEntity = {
        partitionKey: "P1",
        rowKey: "R1",
        linkUrl: "http://www.google.com",
    }
    await client.createEntity(testEntity)
}


export {getLinks, createLink};
