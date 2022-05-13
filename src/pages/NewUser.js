import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    active: false,
    firstName: '',
    middleInitial: '',
    lastName: '',
    collectorCode: '',
    CollectionTeamID: 0,
    aging1to15: props.aging1to15 || false,
    aging31to45: props.aging31to45 || false,
    aging31to60: props.aging31to60 || false,
    agingOver60: props.agingOver60 || false,
    programBucketA: props.programBucketA || false,
    programBucketB: props.programBucketB || false,
    programBucketC: props.programBucketC || false,
    programBucketSU: props.programBucketSU || false,
    financeCompany: ''
  }
  this.handleactiveChange = this.handleactiveChange.bind(this);
  this.handleAging115Change = this.handleAging115Change.bind(this);
  this.handleAging3145Change = this.handleAging3145Change.bind(this);
  this.handleAging3160Change = this.handleAging3160Change.bind(this);
  this.handleagingOver60Change = this.handleagingOver60Change.bind(this);
  this.handleProgramAChange = this.handleProgramAChange.bind(this);
  this.handleProgramBChange = this.handleProgramBChange.bind(this);
  this.handleProgramCChange = this.handleProgramCChange.bind(this);
  this.handleProgramSUChange = this.handleProgramSUChange.bind(this);
}

handleactiveChange() {
  this.setState({ 
    active: !this.state.active
  })
}

handleAging115Change() {
  this.setState({ 
    aging1to15: !this.state.aging1to15
  })
}

handleAging3145Change() {
  this.setState({ 
    aging31to45: !this.state.aging31to45
  })
}

handleAging3160Change() {
  this.setState({ 
    aging31to60: !this.state.aging31to60
  })
}

handleagingOver60Change() {
  this.setState({ 
    agingOver60: !this.state.agingOver60
  })
}

handleProgramAChange() {
  this.setState({
    programBucketA: !this.state.programBucketA
  })
}

handleProgramBChange() {
  this.setState({
    programBucketB: !this.state.programBucketB
  })
}

handleProgramCChange() {
  this.setState({
    programBucketC: !this.state.programBucketC
  })
}

handleProgramSUChange() {
  this.setState({
    programBucketSU: !this.state.programBucketSU
  })
}

onSumbitClick = () => {
    axios.post('https://support.pawneeleasing.com/PublishedCollectorAPI/api/Collector', {
      active: this.state.active,
        firstName: this.state.firstName,
        middleInitial: this.state.middleInitial,
        lastName: this.state.lastName,
        collectorCode: this.state.collectorCode,
        CollectionTeamID: this.state.CollectionTeamID,
        aging1to15: this.state.aging1to15,
        aging31to45: this.state.aging31to45,
        aging31to60: this.state.aging31to60,
        agingOver60: this.state.agingOver60,
        programBucketA: this.state.programBucketA,
        programBucketB: this.state.programBucketB,
        programBucketC: this.state.programBucketC,
        programBucketSU: this.state.programBucketSU,
        financeCompany: this.state.financeCompany,
        debtType: this.state.debtType
      });
    };

  render() {
    return (
      <div className="newUser">
        <form className="newUserForm">
        <div className="newUserItem">
        <h1 className='newUserHeader'>Create Collector</h1>
          {/*active or inactive User*/}
            <label>active</label>
          <div className='newUserCheckboxContainer'>
            <input
                type='checkbox'
                value={this.state.active} 
                onChange={this.handleactiveChange}
                />
                </div>
          {/*Collector First Name*/}
            <label>First Name</label>
            <input 
              type="text" 
              required
              placeholder="First Name" 
              value={this.state.firstName} 
              onChange={e => this.setState({
                firstName: e.target.value
              })}
            />
          {/*Collector Middle Initial*/}
            <label>Middle Initial</label>
            <input 
              type="text" 
              required
              placeholder="Middle Initial" 
              value={this.state.middleInitial} 
              onChange={e => this.setState({
                middleInitial: e.target.value
              })}
            />
          {/*Collector Last Name*/}
            <label>Last Name</label>
            <input 
              type="text" 
              required
              placeholder="Last Name" 
              value={this.state.lastName} 
              onChange={e => this.setState({
                lastName: e.target.value
              })}
            />
          {/*Collector Code First Initial Middle Initial Last Initial*/}
            <label>Collector Code</label>
            <input 
              type="text" 
              required
              placeholder="Collector Code" 
              value={this.state.collectorCode} 
              onChange={e => this.setState({
                collectorCode: e.target.value
              })}
            />
            {/*Aging Bucket selection section */}
            <label>Aging Bucket</label>
            <div className='newUserCheckboxContainer'>
              <label className='newUserCheckboxLabel'>1-15<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckbox'
                value={this.state.aging1to15} 
                onChange={this.handleAging115Change}
              /></label>
              <label className='newUserCheckboxLabel'>31-45<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckbox'
                value={this.state.aging31to45} 
                onChange={this.handleAging3145Change}
              /></label>
              <label className='newUserCheckboxLabel'>31-60<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckboxsm'
                value={this.state.aging31to60} 
                onChange={this.handleAging3160Change}
              /></label>
              <label className='newUserCheckboxLabel'>Over 60<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckboxlg'
                value={this.state.agingOver60} 
                onChange={this.handleagingOver60Change}
              /></label>
            </div>
            {/*Progam code selection section*/}
            <label>Program Bucket</label>
            <div className='newUserCheckboxContainer'>
              <label className='newUserCheckboxLabel'>A<br/>
              <input
                type='checkbox'
                className='programBucketChecbox'
                value={this.state.programBucketA} 
                onChange={this.handleProgramAChange}
              /></label>
              <label className='newUserCheckboxLabel'>B<br/>
              <input
                type='checkbox'
                className='programBucketChecbox'
                value={this.state.programBucketB} 
                onChange={this.handleProgramBChange}
              /></label>
              <label className='newUserCheckboxLabel'>C<br/>
              <input
                type='checkbox'
                className='programBucketChecbox'
                value={this.state.programBucketC} 
                onChange={this.handleProgramCChange}
              /></label>
              <label className='newUserCheckboxLabel'>SU<br/>
              <input
                type='checkbox'
                className='programBucketChecbox'
                value={this.state.programBucketSU} 
                onChange={this.handleProgramSUChange}
              /></label>
            </div>
            {/*Finance Company selection section*/}
            <label>Finance Company</label>
            <div className='newUserCheckboxContainer'>
              <label className='newUserCheckboxLabel'>Pawnee<br/>
              <input
                type='radio'
                name='financeCompany'
                className='financeCompanyChecbox'
                onChange={e => this.setState({
                  financeCompany: 'Pawnee'
                })}
              /></label>
              <label className='newUserCheckboxLabel'>Tandem<br/>
              <input
                type='radio'
                name='financeCompany'
                className='financeCompanyChecbox' 
                onChange={e => this.setState({
                  financeCompany: 'Tandem'
                })}
              /></label>
              <label className='newUserCheckboxLabel'>Both<br/>
              <input
                type='radio'
                name='financeCompany'
                className='financeCompanyChecboxsm' 
                onChange={e => this.setState({
                  financeCompany: 'Both'
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
                className='financeCompanyChecbox'
                onChange={e => this.setState({
                  debtType: 'Delinquency'
                })}
              /></label>
              <label className='newUserCheckboxLabel'>Fee<br/>
              <input
                type='radio'
                name='debtType'
                className='financeCompanyChecbox' 
                onChange={e => this.setState({
                  debtType: 'Fee'
                })}
              /></label>
            </div>
            <Link to='/users'>
              <button className="userListAddButton" onClick={() => this.onSumbitClick()}>
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