const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./src/dbfiles/dbConfig')

const app = express();
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if(req.method ==='GET'){
        res.header("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE,PATCH');
        return res.status(200).json({});
    }
    next();
});

app.use('*',cors());
app.use(bodyParser.json({ extended: true }));
var sql = require("mssql");

// Get collectors
app.get('/getCollectors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    sql.connect(config).then(pool => {
        return pool.request()
        .query(`Exec [CollectorAssignment].[sCollectorGet]`).then(result => {
            res.send(result.recordset)
        })
     })
})

// Get collectors
app.get('/testConnection', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    sql.connect(config).then(pool => {
        return pool.request()
        .query(`SELECT FirstName FROM CollectorAssignment.tCollectorsTest `).then(result => {
            res.send(result.recordset)
        })
     })
})

// Get collectors
app.get('/getCollector/:CollectorID', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    sql.connect(config).then(pool => {
        return pool.request()
        .query(`Exec [CollectorAssignment].[sCollectorGet]`).then(result => {
            res.send(result.recordset)
        })
     })
})

// Add Collector Personal Info
app.post('/addCollector', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    sql.connect(config).then(pool => {
        return pool.request()
        .query(`Exec CollectorAssignment.sCreateCollector 
                    @Active='${req.body.Active}', 
                    @FirstName='${req.body.FirstName}', 
                    @MiddleInitial='${req.body.MiddleInitial}', 
                    @LastName='${req.body.LastName}', 
                    @CollectorCode='${req.body.CollectorCode}',
                    @CollectionTeamID='${req.body.CollectionTeamID}',
                    @Aging1to15='${req.body.Aging1to15}',
                    @Aging31to45='${req.body.Aging31to45}',
                    @Aging31to60='${req.body.Aging31to60}',
                    @AgingOver60='${req.body.AgingOver60}',
                    @ProgramBucketA='${req.body.ProgramBucketA}', 
		            @ProgramBucketB='${req.body.ProgramBucketB}', 
		            @ProgramBucketC='${req.body.ProgramBucketC}', 
		            @ProgramBucketSU='${req.body.ProgramBucketSU}',
                    @FinanceCompany='${req.body.FinanceCompany}'
                `)
                .then(result => {
            res.send(result)
        })
     })
  });  

  //Update Collector
  app.put('/UpdateUser/:CollectorID', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    sql.connect(config).then(pool => {
        return pool.request()
        .query(`Exec CollectorAssignment.sUpdateCollector
        @CollectorID='${req.body.CollectorID}',
        @CollectorOptionsID='${req.body.CollectorOptionsID}',
        @ProgramBucketID='${req.body.ProgramBucketID}',
        @FinanceCompanyID='${req.body.FinanceCompanyID}',
        @Active='${req.body.Active}', 
        @LastName='${req.body.LastName}', 
        @CollectorCode='${req.body.CollectorCode}',
        @Aging1to15='${req.body.Aging1to15}',
        @Aging31to45='${req.body.Aging31to45}',
        @Aging31to60='${req.body.Aging31to60}',
        @AgingOver60='${req.body.AgingOver60}',
        @ProgramBucketA='${req.body.ProgramBucketA}',
        @ProgramBucketB='${req.body.ProgramBucketB}',
        @ProgramBucketC='${req.body.ProgramBucketC}',
        @ProgramBucketSU='${req.body.ProgramBucketSU}',
        @FinanceCompany='${req.body.FinanceCompany}'
        `)
            .then(result => {
            res.send(result.recordset)
        })
     })
  });

// Delete Collector
app.delete('/deleteCollector/:CollectorID', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    sql.connect(config).then(pool => {
        return pool.request()
        .query(`DELETE FROM CollectorAssignment.tCollectorsTest 
                WHERE CollectorID = ${req.params.CollectorID}`).then(result => {
            res.send(result.recordset)
        })
     })
})

app.listen(5000, () => {
    console.log('running on port 5000');
})