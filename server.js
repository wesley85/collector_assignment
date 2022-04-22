const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./src/dbfiles/dbConfig')

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
var sql = require("mssql");

// Get collectors listing all collectors
app.get('/getCollectors', (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request()
        .query(`Exec [CollectorAssignment].[sCollectorGet]`).then(result => {
            res.send(result.recordset)
        })
     })
})

// Get collector singular by ID
app.get('/getCollector/:CollectorID', (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request()
        .query(`Exec [CollectorAssignment].[sCollectorGet]`).then(result => {
            res.send(result.recordset)
        })
     })
})

// Add Collector Personal Info
app.post('/addCollector', function (req, res) {
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
                    @FinanceCompany='${req.body.FinanceCompany}',
                    @debtType='${req.body.debtType}'
                `)
                .then(result => {
            res.send(result)
        })
     })
  });  

  //Update Collector
  app.put('/UpdateUser/:CollectorID', function (req, res) {
    sql.connect(config).then(pool => {
        return pool.request()
        .query(`Exec CollectorAssignment.sUpdateCollector
        @CollectorID='${req.body.CollectorID}',
        @Active='${req.body.Active}', 
        @LastName='${req.body.LastName}', 
        @CollectorCode='${req.body.CollectorCode}'
        `)
            .then(result => {
            res.send(result.recordset)
        })
     })
  });

// Delete Collector
app.delete('/deleteCollector/:CollectorID', (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request()
        .query(`DELETE FROM CollectorAssignment.tCollectorsTest 
                WHERE CollectorID = ${req.params.CollectorID}`).then(result => {
            res.send(result.recordset)
        })
     })
})

app.listen(':443', () => {
    console.log('running on :443');
})