const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./src/dbfiles/dbConfig')

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
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
app.get('/getCollector/:collectorID', (req, res) => {
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
                    @active='${req.body.active}', 
                    @firstName='${req.body.firstName}', 
                    @middleInitial='${req.body.middleInitial}', 
                    @lastName='${req.body.lastName}', 
                    @collectorCode='${req.body.collectorCode}',
                    @CollectionTeamID='${req.body.CollectionTeamID}',
                    @aging1to15='${req.body.aging1to15}',
                    @aging31to45='${req.body.aging31to45}',
                    @aging31to60='${req.body.aging31to60}',
                    @agingOver60='${req.body.agingOver60}',
                    @programBucketA='${req.body.programBucketA}', 
		            @programBucketB='${req.body.programBucketB}', 
		            @programBucketC='${req.body.programBucketC}', 
		            @programBucketSU='${req.body.programBucketSU}',
                    @financeCompany='${req.body.financeCompany}'
                `)
                .then(result => {
            res.send(result)
        })
     })
  });  

  //Update Collector
  app.put('/UpdateUser/:collectorID', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    sql.connect(config).then(pool => {
        return pool.request()
        .query(`Exec CollectorAssignment.sUpdateCollector
        @collectorID='${req.body.collectorID}',
        @CollectorOptionsID='${req.body.CollectorOptionsID}',
        @ProgramBucketID='${req.body.ProgramBucketID}',
        @financeCompanyID='${req.body.financeCompanyID}',
        @active='${req.body.active}', 
        @lastName='${req.body.lastName}', 
        @collectorCode='${req.body.collectorCode}',
        @aging1to15='${req.body.aging1to15}',
        @aging31to45='${req.body.aging31to45}',
        @aging31to60='${req.body.aging31to60}',
        @agingOver60='${req.body.agingOver60}',
        @programBucketA='${req.body.programBucketA}',
        @programBucketB='${req.body.programBucketB}',
        @programBucketC='${req.body.programBucketC}',
        @programBucketSU='${req.body.programBucketSU}',
        @financeCompany='${req.body.financeCompany}'
        `)
            .then(result => {
            res.send(result.recordset)
        })
     })
  });

// Delete Collector
app.delete('/deleteCollector/:collectorID', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    sql.connect(config).then(pool => {
        return pool.request()
        .query(`DELETE FROM CollectorAssignment.tCollectorsTest 
                WHERE collectorID = ${req.params.collectorID}`).then(result => {
            res.send(result.recordset)
        })
     })
})

app.listen(5000, () => {
    console.log('running on port 5000');
})