/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOST: process.env.HOST,
    AZURE_TABLES_ENDPOINT: process.env.AZURE_TABLES_ENDPOINT,
    AZURE_TABLES_TABLE: process.env.AZURE_TABLES_TABLE,
    AZURE_ACCOUNT_NAME: process.env.AZURE_ACCOUNT_NAME,
    AZURE_ACCOUNT_KEY: process.env.AZURE_ACCOUNT_KEY,
    AZURE_TABLES_PARTITION_KEY: process.env.AZURE_TABLES_PARTITION_KEY
  }
}

module.exports = nextConfig
