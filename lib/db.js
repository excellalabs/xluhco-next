import { TableClient, TableServiceClient, generateAccountSas } from "@azure/data-tables";
import { AzureNamedKeyCredential, AzureSASCredential } from "@azure/core-auth";
  
  
  
  const tablesUrl = process.env.AZURE_TABLES_ENDPOINT || "";
  const accountKey = process.env.AZURE_ACCOUNT_KEY || "";
  const accountName = process.env.AZURE_ACCOUNT_NAME || "";
// We need a NamedKeyCredential to generate the SAS token
const cred = new AzureNamedKeyCredential(accountName, accountKey);

const permissions = {
    list: true,
    write: true,
    add: true,
    query: true,
    delete: true
};

const anHourFromNow = Date.now() + 60 * 60 * 1000;

const accountSas = generateAccountSas(cred, {
    permissions,
    expiresOn: new Date(anHourFromNow)
});

const tableService = new TableServiceClient(tablesUrl, new AzureSASCredential(accountSas));

async function createNewLink(linkId, linkUrl) {
    const newLinkId = linkId;
    const newLinkUrl = linkUrl
    // If the table 'newTable' already exists, createTable doesn't throw
    await tableService.createTable('helloWorld')
}


export {createNewLink};
