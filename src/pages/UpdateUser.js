import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

  const UpdateUser = () => {
    const { CollectorID } = useParams();
    const [user, setUser] = useState({});
    const {Active, FirstName, MiddleInitial, LastName, CollectorCode, Aging1to15, Aging31to45, Aging31to60, AgingOver60, ProgramBucketA, ProgramBucketB, ProgramBucketC, ProgramBucketSU, FinanceCompany, debtType } = user;
    
    const onInputChange = e => {
      setUser({ 
        ...user, [e.target.name]: e.target.value });
        console.log(user);
    };

    

useEffect(() => {
  loadUser();
}, []);// eslint-disable-line react-hooks/exhaustive-deps

const loadUser = async () => {
  const result = await axios.get(`https://10.0.0.218:5000/api/collector/${CollectorID}`);
  setUser(result.data[CollectorID - 1]);
};

const onSubmit = async e => {
  e.preventDefault();
  await axios.put(`https://10.0.0.218:5000/api/collector/${CollectorID}`, {
        CollectorID: CollectorID,
        Active: Active,  
        LastName: LastName,
        CollectorCode: CollectorCode
    });
    console.log(CollectorID, Active, LastName, CollectorCode)
};

    return (
      <div className="newUser">
          <h1>Update Collector</h1>
            <form className="newUserForm" onSubmit={e => onSubmit(e)}>
        <div className="newUserItem">
              {FirstName} {LastName} - {CollectorCode}
          {/*Active or inactive User*/}
          <label>Active</label>
          <div className="newUserCheckboxContainer">
            <input
                type='checkbox'
                value={Active} 
                defaultChecked={Active}
                />
          </div>
          {/*Collector First Name*/}
            <label>First Name</label>
            <input 
              type="text" 
              placeholder="First Name" 
              value={FirstName} 
              onChange={e => onInputChange(e)}
            />
          {/*Collector Middle Initial*/}
            <label>Middle Initial</label>
            <input 
              type="text" 
              placeholder="Middle Initial" 
              value={MiddleInitial} 
              onChange={e => onInputChange(e)}
            />
          {/*Collector Last Name*/}
            <label>Last Name</label>
            <input 
              type="text" 
              placeholder="Last Name" 
              value={LastName} 
              onChange={e => onInputChange(e)}
            />
          {/*Collector Code First Initial Middle Initial Last Initial*/}
            <label>Collector Code</label>
            <input 
              type="text" 
              placeholder="Collector Code" 
              value={CollectorCode} 
              onChange={e => onInputChange(e)}
            />
            {/*Aging Bucket selection section */}
            <label>Aging Bucket</label>
            <div className='newUserCheckboxContainer'>
              <label className='newUserCheckboxLabel'>1-15<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckbox'
                value={Aging1to15} 
                defaultChecked={Aging1to15}
              /></label>
              <label className='newUserCheckboxLabel'>31-45<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckbox'
                value={Aging31to45} 
                defaultChecked={Aging31to45}
              /></label>
              <label className='newUserCheckboxLabel'>31-60<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckboxsm'
                value={Aging31to60} 
                defaultChecked={Aging31to60}
              /></label>
              <label className='newUserCheckboxLabel'>Over 60<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckboxlg'
                value={AgingOver60} 
                defaultChecked={AgingOver60}
              /></label>
            </div>
            {/*Progam code selection section*/}
            <label>Program Bucket</label>
            <div className='newUserCheckboxContainer'>
              <label className='newUserCheckboxLabel'>A<br/>
              <input
                type='checkbox'
                className='ProgramBucketChecbox'
                value={ProgramBucketA} 
                defaultChecked={ProgramBucketA}
              /></label>
              <label className='newUserCheckboxLabel'>B<br/>
              <input
                type='checkbox'
                className='ProgramBucketChecbox'
                value={ProgramBucketB} 
                defaultChecked={ProgramBucketB}
              /></label>
              <label className='newUserCheckboxLabel'>C<br/>
              <input
                type='checkbox'
                className='ProgramBucketChecbox'
                value={ProgramBucketC} 
                defaultChecked={ProgramBucketC}
              /></label>
              <label className='newUserCheckboxLabel'>SU<br/>
              <input
                type='checkbox'
                className='ProgramBucketChecbox'
                value={ProgramBucketSU} 
                defaultChecked={ProgramBucketSU}
              /></label>
            </div>
            {/*Finance Company selection section*/}
            <label>Finance Company</label>
            <div className='newUserCheckboxContainer'>
            <input 
              type="text" 
              placeholder="FinanceCompany" 
              value={FinanceCompany} 
              onChange={e => onInputChange(e)}
            />
            </div>
            <label>Debt Type</label>
            <div className='newUserCheckboxContainer'>
            <input 
              type="text" 
              placeholder="debtType" 
              value={debtType} 
              onChange={e => onInputChange(e)}
            />
            </div>
            <Link className="userListAddButton">Update Collector</Link>
            <Link className="userListGoBackButton" to='/users'>Go Back</Link>
          </div>
        </form>
      </div>
    );
  }

export default UpdateUser;