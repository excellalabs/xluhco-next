import { TableClient, TableServiceClient, AzureNamedKeyCredential } from "@azure/data-tables";
import {nanoid} from "nanoid"
const tablesUrl = process.env.AZURE_TABLES_ENDPOINT || "";
const tablesTable = process.env.AZURE_TABLES_TABLE || "";
const accountKey = process.env.AZURE_ACCOUNT_KEY || "";
const accountName = process.env.AZURE_ACCOUNT_NAME || "";
const connectionString = "UseDevelopmentStorage=true";

const client = TableClient.fromConnectionString(connectionString, tablesTable);

async function initTable() {
    await client.createTable();  
}

async function createLink(linkUrl, slug = "") {
    
    const newSlug = !slug.length ? nanoid(8) : slug;
    const newEntity = {
        partitionKey: process.env.AZURE_TABLES_PARTITION_KEY ,
        rowKey: newSlug,
        linkUrl: linkUrl,
    }
    //await serviceClient.createTable(tablesTable);
    await client.createEntity(newEntity)
    const linkRecord = client.getEntity(process.env.AZURE_TABLES_PARTITION_KEY, newSlug);
    return linkRecord;
}

async function deleteLink(slug) {
    await client.deleteEntity(process.env.AZURE_TABLES_PARTITION_KEY, slug);
}

async function getLink(slug) {
    const linkRecord = await client.getEntity(process.env.AZURE_TABLES_PARTITION_KEY, slug);
    return linkRecord;
}

async function getLinks() {
    const entities = await client.listEntities();
    const allEntities = []
    for await (const entity of entities) {
        allEntities.push({
            "url": entity.linkUrl,
            "slug": entity.rowKey
        });
     }
    return allEntities;
}

async function updateLink(slug, linkUrl) {
    const entity = {
        partitionKey: process.env.AZURE_TABLES_PARTITION_KEY,
        rowKey: slug,
        linkUrl: linkUrl
    }
    await client.updateEntity(entity);
    const linkRecord = client.getEntity(process.env.AZURE_TABLES_PARTITION_KEY, slug);
    return linkRecord;
}


export {
    initTable, createLink, deleteLink,
    getLink, getLinks, updateLink
};
