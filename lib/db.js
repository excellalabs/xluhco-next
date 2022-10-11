import { TableClient, TableServiceClient, AzureNamedKeyCredential } from "@azure/data-tables";
const shortid = require('shortid');
const tablesUrl = process.env.AZURE_TABLES_ENDPOINT || "";
const tablesTable = process.env.AZURE_TABLES_TABLE || "";
const accountKey = process.env.AZURE_ACCOUNT_KEY || "";
const accountName = process.env.AZURE_ACCOUNT_NAME || "";
const connectionString = "UseDevelopmentStorage=true";

const client = TableClient.fromConnectionString(connectionString, tablesTable);

async function createLink(linkUrl, userId) {
    const newShortId = shortid.generate()
    const testEntity = {
        partitionKey: process.env.AZURE_TABLES_PARTITION_KEY ,
        rowKey: newShortId,
        linkUrl: linkUrl,
        userId: userId
    }
    //await serviceClient.createTable(tablesTable);
    await client.createTable();
    await client.createEntity(testEntity)
    console.log("Link Created!");
}

async function deleteLink(shortId) {
    await client.deleteEntity(process.env.AZURE_TABLES_PARTITION_KEY, shortId);
    console.log("Link Deleted!");
}

async function getLink(shortId) {
    await client.getEntity(process.env.AZURE_TABLES_PARTITION_KEY, shortId);
    console.log("Link Deleted!");
}


export {createLink, deleteLink, getLink};
