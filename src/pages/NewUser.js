import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Active: false,
    FirstName: '',
    MiddleInitial: '',
    LastName: '',
    CollectorCode: '',
    CollectionTeamID: 0,
    Aging1to15: props.Aging1to15 || false,
    Aging31to45: props.Aging31to45 || false,
    Aging31to60: props.Aging31to60 || false,
    AgingOver60: props.AgingOver60 || false,
    ProgramBucketA: props.ProgramBucketA || false,
    ProgramBucketB: props.ProgramBucketB || false,
    ProgramBucketC: props.ProgramBucketC || false,
    ProgramBucketSU: props.ProgramBucketSU || false,
    FinanceCompany: ''
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

onSumitClick = () => {
    axios.post('https://support.pawneeleasing.com/addCollector', {
      Active: this.state.Active,
        FirstName: this.state.FirstName,
        MiddleInitial: this.state.MiddleInitial,
        LastName: this.state.LastName,
        CollectorCode: this.state.CollectorCode,
        CollectionTeamID: this.state.CollectionTeamID,
        Aging1to15: this.state.Aging1to15,
        Aging31to45: this.state.Aging31to45,
        Aging31to60: this.state.Aging31to60,
        AgingOver60: this.state.AgingOver60,
        ProgramBucketA: this.state.ProgramBucketA,
        ProgramBucketB: this.state.ProgramBucketB,
        ProgramBucketC: this.state.ProgramBucketC,
        ProgramBucketSU: this.state.ProgramBucketSU,
        FinanceCompany: this.state.FinanceCompany,
        debtType: this.state.debtType
      });
    };

  render() {
    console.log(this.state)
    return (
      <div className="newUser">
        <form className="newUserForm">
        <div className="newUserItem">
        <h1 className='newUserHeader'>Create Collector</h1>
          {/*Active or inactive User*/}
            <label>Active</label>
          <div className='newUserCheckboxContainer'>
            <input
                type='checkbox'
                value={this.state.Active} 
                onChange={this.handleActiveChange}
                />
                </div>
          {/*Collector First Name*/}
            <label>First Name</label>
            <input 
              type="text" 
              required
              placeholder="First Name" 
              value={this.state.FirstName} 
              onChange={e => this.setState({
                FirstName: e.target.value
              })}
            />
          {/*Collector Middle Initial*/}
            <label>Middle Initial</label>
            <input 
              type="text" 
              required
              placeholder="Middle Initial" 
              value={this.state.MiddleInitial} 
              onChange={e => this.setState({
                MiddleInitial: e.target.value
              })}
            />
          {/*Collector Last Name*/}
            <label>Last Name</label>
            <input 
              type="text" 
              required
              placeholder="Last Name" 
              value={this.state.LastName} 
              onChange={e => this.setState({
                LastName: e.target.value
              })}
            />
          {/*Collector Code First Initial Middle Initial Last Initial*/}
            <label>Collector Code</label>
            <input 
              type="text" 
              required
              placeholder="Collector Code" 
              value={this.state.CollectorCode} 
              onChange={e => this.setState({
                CollectorCode: e.target.value
              })}
            />
            {/*Aging Bucket selection section */}
            <label>Aging Bucket</label>
            <div className='newUserCheckboxContainer'>
              <label className='newUserCheckboxLabel'>1-15<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckbox'
                value={this.state.Aging1to15} 
                onChange={this.handleAging115Change}
              /></label>
              <label className='newUserCheckboxLabel'>31-45<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckbox'
                value={this.state.Aging31to45} 
                onChange={this.handleAging3145Change}
              /></label>
              <label className='newUserCheckboxLabel'>31-60<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckboxsm'
                value={this.state.Aging31to60} 
                onChange={this.handleAging3160Change}
              /></label>
              <label className='newUserCheckboxLabel'>Over 60<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckboxlg'
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
                className='ProgramBucketChecbox'
                value={this.state.ProgramBucketA} 
                onChange={this.handleProgramAChange}
              /></label>
              <label className='newUserCheckboxLabel'>B<br/>
              <input
                type='checkbox'
                className='ProgramBucketChecbox'
                value={this.state.ProgramBucketB} 
                onChange={this.handleProgramBChange}
              /></label>
              <label className='newUserCheckboxLabel'>C<br/>
              <input
                type='checkbox'
                className='ProgramBucketChecbox'
                value={this.state.ProgramBucketC} 
                onChange={this.handleProgramCChange}
              /></label>
              <label className='newUserCheckboxLabel'>SU<br/>
              <input
                type='checkbox'
                className='ProgramBucketChecbox'
                value={this.state.ProgramBucketSU} 
                onChange={this.handleProgramSUChange}
              /></label>
            </div>
            {/*Finance Company selection section*/}
            <label>Finance Company</label>
            <div className='newUserCheckboxContainer'>
              <label className='newUserCheckboxLabel'>Pawnee<br/>
              <input
                type='radio'
                name='FinanceCompany'
                className='FinanceCompanyChecbox'
                onChange={e => this.setState({
                  FinanceCompany: 'Pawnee'
                })}
              /></label>
              <label className='newUserCheckboxLabel'>Tandem<br/>
              <input
                type='radio'
                name='FinanceCompany'
                className='FinanceCompanyChecbox' 
                onChange={e => this.setState({
                  FinanceCompany: 'Tandem'
                })}
              /></label>
              <label className='newUserCheckboxLabel'>Both<br/>
              <input
                type='radio'
                name='FinanceCompany'
                className='FinanceCompanyChecboxsm' 
                onChange={e => this.setState({
                  FinanceCompany: 'Both'
                })}
               />
              </label>
            </div>
            <label>Debt Type</label>
            <div className='newUserCheckboxContainer'>
              <label className='newUserCheckboxLabel'>Delinquency<br/>
              <input
                type='radio'
                name='debtType'
                className='FinanceCompanyChecbox'
                onChange={e => this.setState({
                  debtType: 'Delinquency'
                })}
              /></label>
              <label className='newUserCheckboxLabel'>Fee<br/>
              <input
                type='radio'
                name='debtType'
                className='FinanceCompanyChecbox' 
                onChange={e => this.setState({
                  debtType: 'Fee'
                })}
              /></label>
            </div>
            <Link to='/'>
              <button className="userListAddButton" onClick={() => this.onSumitClick()}>
                Create Collector
              </button>
            </Link>
            <Link to='/users'>
              <button className="userListGoBackButton" to='/users'>
                Go Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default NewUser;