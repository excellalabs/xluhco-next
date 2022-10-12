const config = {};

config.endpoint = process.env.AZURE_TABLES_ENDPOINT;
config.key =  "PRIMARY-KEY";
config.database = "xluhco";
config.container = "Items";

module.exports = config;