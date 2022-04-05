import React from "react";
import "./UpdateUser.css";
import axios from 'axios';

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    collectorList: [],
    CollectorID: props.CollectorID,
    ProgramBucketID: props.ProgramBucketID,
    CollectorOptionsID: props.CollectorOptionsID,
    FinanceCompanyID: props.FinanceCompanyID,
    Active: false ? false : true,
    LastName: props.LastName,
    CollectorCode: props.CollectorCode,
    Aging1to15: false ? false : true,
    Aging31to45: false ? false : true,
    Aging31to60: false ? false : true,
    AgingOver60: false ? false : true,
    ProgramBucketA: false ? false : true,
    ProgramBucketB: false ? false : true,
    ProgramBucketC: false ? false : true,
    ProgramBucketSU: false ? false : true,
    FinanceCompany: props.FinanceCompany
  }
  this.handleActiveChange = this.handleActiveChange.bind(this);
  this.handleAging115Change = this.handleAging115Change.bind(this);
  this.handleAging3145Change = this.handleAging3145Change.bind(this);
  this.handleAging3160Change = this.handleAging3160Change.bind(this);
  this.handleAgingOver60Change = this.handleAgingOver60Change.bind(this);
  this.handleProgramAChange = this.handleProgramAChange.bind(this);
  this.handleProgramBChange = this.handleProgramBChange.bind(this);
  this.handleProgramCChange = this.handleProgramCChange.bind(this);
  this.handleProgramSUChange = this.handleProgramSUChange.bind(this);
  this.handletestchanges = this.handletestchanges.bind(this);
}

componentDidMount(e) {
  this.getCollectors()
}

handletestchanges() {
  console.log('Active', this.state.Active, 'LastName', this.state.LastName, 'CollectorCode', this.state.CollectorCode, '1-15',this.state.Aging1to15, '31-45',this.state.Aging31to45, '31-60', this.state.Aging31to60, 'Over60', this.state.AgingOver60, 'A', this.state.ProgramBucketA, 'B', this.state.ProgramBucketB, 'C', this.state.ProgramBucketC, 'SU', this.state.ProgramBucketSU, 'FinanceCompany', this.state.FinanceCompany);
}

handleActiveChange() {
  this.setState({ 
    Active: !this.state.Active
  })
}

handleAging115Change() {
  this.setState({ 
    Aging1to15: !this.state.Aging1to15
  })
}

handleAging3145Change() {
  this.setState({ 
    Aging31to45: !this.state.Aging31to45
  })
}

handleAging3160Change() {
  this.setState({ 
    Aging31to60: !this.state.Aging31to60
  })
}

handleAgingOver60Change() {
  this.setState({ 
    AgingOver60: !this.state.AgingOver60
  })
}

handleProgramAChange() {
  this.setState({
    ProgramBucketA: !this.state.ProgramBucketA
  })
}

handleProgramBChange() {
  this.setState({
    ProgramBucketB: !this.state.ProgramBucketB
  })
}

handleProgramCChange() {
  this.setState({
    ProgramBucketC: !this.state.ProgramBucketC
  })
}

handleProgramSUChange() {
  this.setState({
    ProgramBucketSU: !this.state.ProgramBucketSU
  })
}
  
  getCollectors = () => {
    axios.get('http://localhost:5000/getCollectors')
    .then((result) => result.data)
    .then((result) => {
      this.setState({collectorList: result});
      console.log(result);
    });
  };

  onUpdateClick = CollectorID => {
    axios.put(`http://localhost:5000/UpdateUser/${CollectorID}`, {
      CollectorID: this.state.CollectorID,
      CollectorOptionsID: this.state.CollectorOptionsID,
      ProgramBucketID: this.state.ProgramBucketID,
      FinanceCompanyID: this.state.FinanceCompanyID,
      Active: this.state.Active,  
      LastName: this.state.LastName,
      CollectorCode: this.state.CollectorCode,
      Aging1to15: this.state.Aging1to15,
      Aging31to45: this.state.Aging31to45,
      Aging31to60: this.state.Aging31to60,
      AgingOver60: this.state.AgingOver60,
      ProgramBucketA: this.state.ProgramBucketA,
      ProgramBucketB: this.state.ProgramBucketB,
      ProgramBucketC: this.state.ProgramBucketC,
      ProgramBucketSU: this.state.ProgramBucketSU,
      FinanceCompany: this.state.FinanceCompany
    });
  };

  render() {
    return (
      <div className="newUser">
        <h1 className="newUserTitle">Collector Update Forms</h1>
        {this.state.collectorList.map((Collectors) => (
          <form className="newUserForm" key={Collectors.CollectorID}>
        <div className="newUserItem">
          <b>{Collectors.FirstName} {Collectors.LastName} | {Collectors.CollectorCode} | ID: {Collectors.CollectorID}</b>
          {/*Active or inactive User*/}
            <label>Active Status</label>
            <input
                type='checkbox'
                name="Active"
                defaultChecked={Collectors.Active === false ? false : true}
                value={this.state.Active}
                onChange={this.handleActiveChange}
                />
          {/*Collector Last Name*/}
            <label>Last Name</label>
            <input 
              type="text" 
              name="LastName"
              value={Collectors.LastName} 
              onChange={e => this.setState({
                LastName: e.target.value
              })}
              
            />
          {/*Collector Code First Initial Middle Initial Last Initial*/}
             <label>Collector Code</label>
            <input 
              type="text" 
              name="CollectorCode"
              defaultValue={Collectors.CollectorCode} 
              onChange={e => this.setState({
                CollectorCode: e.target.value
              })}
              
            />
          {/*These are the Primary ID keys to pass the ID to the state to allow updates*/}
          <div className="outer"> 
            <input 
              type="text" 
              name="CollectorID"
              defaultValue={Collectors.CollectorID}
              onFocus={e => this.setState({
                CollectorID: e.target.value = Collectors.CollectorID
              })}
              autoFocus
              readOnly
              className="inner"
            />

            <input 
              type="text" 
              name="CollectorOptionsID"
              defaultValue={Collectors.CollectorOptionsID} 
              onFocus={e => this.setState({
                CollectorOptionsID: e.target.value = Collectors.CollectorOptionsID
              })}
              autoFocus
              readOnly
              className="inner"
            />

            <input 
              type="text" 
              name="ProgramBucketID"
              defaultValue={Collectors.ProgramBucketID} 
              onFocus={e => this.setState({
                ProgramBucketID: e.target.value = Collectors.ProgramBucketID
              })}
              autoFocus
              readOnly
              className="inner"
            />

            <input 
              type="text" 
              name="FinanceCompanyID"
              defaultValue={Collectors.FinanceCompanyID} 
              onFocus={e => this.setState({
                FinanceCompanyID: e.target.value = Collectors.FinanceCompanyID
              })}
              autoFocus
              readOnly
              className="inner"
              />
              </div>
          {/*These are the Primary ID keys to pass the ID to the state to allow updates*/}

            {/*Aging Bucket selection section */}
            <label>Aging Bucket</label>
             <div className='newUserCheckboxContainer'>
             <label className='newUserCheckboxLabel'>1-15<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckbox'
                name="Aging1to15"
                defaultChecked={Collectors.Aging1to15 === false ? false : true}
                value={this.state.Aging1to15} 
                onChange={this.handleAging115Change}
              /></label>
              <label className='newUserCheckboxLabel'>31-45<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckbox'
                name="Aging31to45"
                defaultChecked={Collectors.Aging31to45 === false ? false : true}
                value={this.state.Aging31to45} 
                onChange={this.handleAging3145Change}
              /></label>
              <label className='newUserCheckboxLabel'>31-60<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckboxsm'
                name="Aging31to60"
                defaultChecked={Collectors.Aging31to60 === false ? false : true}
                value={this.state.Aging31to60} 
                onChange={this.handleAging3160Change}
              /></label>
              <label className='newUserCheckboxLabel'>Over 60<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckboxlg'
                name="AgingOver60"
                defaultChecked={Collectors.AgingOver60 === false ? false : true}
                value={this.state.AgingOver60} 
                onChange={this.handleAgingOver60Change}
              /></label>
            </div>


            {/*Progam code selection section*/}
            <label>Program Bucket</label>
            <div className='newUserCheckboxContainer'>
              <label className='newUserCheckboxLabel'>A<br/>
              <input
                type='checkbox'
                className='ProgramCodeChecbox'
                name="ProgramBucketA"
                defaultChecked={Collectors.ProgramBucketA === false ? false : true}
                value={this.state.ProgramBucketA} 
                onChange={this.handleProgramAChange}
              /></label>
              <label className='newUserCheckboxLabel'>B<br/>
              <input
                type='checkbox'
                className='ProgramCodeChecbox'
                name="ProgramBucketB"
                defaultChecked={Collectors.ProgramBucketB === false ? false : true}
                value={this.state.ProgramBucketB} 
                onChange={this.handleProgramBChange}
              /></label>
              <label className='newUserCheckboxLabel'>C<br/>
              <input
                type='checkbox'
                className='ProgramCodeChecbox'
                name="ProgramBucketC"
                defaultChecked={Collectors.ProgramBucketC === false ? false : true}
                value={this.state.ProgramBucketC} 
                onChange={this.handleProgramCChange}
              /></label>
              <label className='newUserCheckboxLabel'>SU<br/>
              <input
                type='checkbox'
                className='ProgramCodeChecbox'
                name="ProgramBucketSU"
                defaultChecked={Collectors.ProgramBucketSU === false ? false : true}
                value={this.state.ProgramBucketSU} 
                onChange={this.handleProgramSUChange}
              /></label>
            </div>
            {/*Finance Company selection section*/}
            <div className='newUserItem'>
            <label>Finance Company</label>
            <input 
              type="text" 
              name="FinanceCompany"
              defaultValue={Collectors.FinanceCompany} 
              onChange={e => this.setState({
                FinanceCompany: e.target.value
              })}
              
            />
            </div>
            <button className="updateUserButton" onClick={() => this.onUpdateClick(Collectors.CollectorID) }>Update User</button>
            <button type="button" onClick={this.handletestchanges}>Console Log</button>
          </div>
        </form>
        ))}
      </div>
    );
  }
}

export default EditUser;