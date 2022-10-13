import { TableClient, TableServiceClient, AzureNamedKeyCredential } from "@azure/data-tables";
import {nanoid} from "nanoid"
const tablesUrl = process.env.AZURE_TABLES_ENDPOINT || "";
const tablesTable = process.env.AZURE_TABLES_TABLE || "";
const accountKey = process.env.AZURE_ACCOUNT_KEY || "";
const accountName = process.env.AZURE_ACCOUNT_NAME || "";
const connectionString = "UseDevelopmentStorage=true";

const client = TableClient.fromConnectionString(connectionString, tablesTable);

async function createLink(linkUrl, shortId = "") {
    
    const newShortId = !shortId.length ? nanoid(8) : shortId;
    const newEntity = {
        partitionKey: process.env.AZURE_TABLES_PARTITION_KEY ,
        rowKey: newShortId,
        linkUrl: linkUrl,
    }
    //await serviceClient.createTable(tablesTable);
    await client.createTable();  
    await client.createEntity(newEntity)
    const linkRecord = client.getEntity(process.env.AZURE_TABLES_PARTITION_KEY, newShortId);
    return linkRecord;
}

async function deleteLink(shortId) {
    await client.deleteEntity(process.env.AZURE_TABLES_PARTITION_KEY, shortId);
}

async function getLink(shortId) {
    const linkRecord = await client.getEntity(process.env.AZURE_TABLES_PARTITION_KEY, shortId);
    return linkRecord;
}

async function getLinks() {
    const entities = await client.listEntities();
    const allEntities = []
    for await (const entity of entities) {
        allEntities.push({"url": entity.linkUrl, "shortId": entity.rowKey})
     }
    return allEntities;
}

async function updateLink(shortId, linkUrl) {
    const entity = {
        partitionKey: process.env.AZURE_TABLES_PARTITION_KEY,
        rowKey: shortId,
        linkUrl: linkUrl
    }
    await client.updateEntity(entity);
    const linkRecord = client.getEntity(process.env.AZURE_TABLES_PARTITION_KEY, shortId);
    return linkRecord;
}


export {createLink, deleteLink, getLink, getLinks, updateLink};
