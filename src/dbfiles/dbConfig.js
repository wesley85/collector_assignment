// config for your database
const config = {
    user: 'InfoSys',
    password: 'PawneeTandem1!',
    server: 'server-sql-vt',
    database: 'AspireSupport',
    options: {
        trustServerCertificate: true,
        trustedConnection: true,
        enableArithAbort: true
        },
    }
  
    module.exports = config;