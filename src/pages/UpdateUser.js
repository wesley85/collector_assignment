import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

  const UpdateUser = () => {
    const { collectorID } = useParams();
    const [user, setUser] = useState({});
    const {active, firstName, middleInitial, lastName, collectorCode, aging1to15, aging31to45, aging31to60, agingOver60, programBucketA, programBucketB, programBucketC, programBucketSU, financeCompany, debtType } = user;
    
    const onInputChange = e => {
      setUser({ 
        ...user, [e.target.name]: e.target.value });
    };

    const onActiveChange = e => {
      setUser({
        active: !active
      })
    }

useEffect(() => {
  loadUser();
}, []);// eslint-disable-line react-hooks/exhaustive-deps

const loadUser = async () => {
  const result = await axios.get(`https://support.pawneeleasing.com/PublishedCollectorAPI/api/Collector/${collectorID}`);
  setUser(result.data);
};

const onSubmit = async e => {
  e.preventDefault();
  await axios.put(`https://support.pawneeleasing.com/PublishedCollectorAPI/api/Collector/${collectorID}`, {
        active: active,  
        firstName: firstName,
        middleInitial: middleInitial,
        lastName: lastName,
        collectorCode: collectorCode,
        aging1to15: aging1to15,
        aging31to45: aging31to45,
        aging31to60:aging31to60,
        agingOver60: agingOver60,
        programBucketA: programBucketA,
        programBucketB: programBucketB,
        programBucketC: programBucketC,
        programBucketSU: programBucketSU,
        financeCompany: financeCompany,
        debtType: debtType
    });
};

    return (
      <div className="newUser">
          <h1>Update Collector</h1>
            <form className="newUserForm" >
        <div className="newUserItem">
              {firstName} {middleInitial} {lastName} - {collectorCode}
              <ul>
                <li><input
                type='text'
                name="active"
                defaultValue={active}
                /></li>
                <li>{aging1to15}</li>
                <li>{aging31to45}</li>
                <li>{aging31to60}</li>
                <li>{agingOver60}</li>
                <li>{programBucketA}</li>
                <li>{programBucketB}</li>
                <li>{programBucketC}</li>
                <li>{programBucketSU}</li>
                <li>{financeCompany}</li>
                <li>{debtType}</li>
              </ul>
          {/*active or inactive User*/}
          <label>active</label>
          <div className="newUserCheckboxContainer">
            <input
                type='checkbox'
                name="active"
                defaultValue={active} 
                defaultChecked={active}
                onClick={e => onActiveChange(e)}
                />
          </div>
          {/*Collector First Name*/}
            <label>First Name</label>
            <input 
              type="text" 
              name="firstName"
              placeholder="First Name" 
              defaultValue={firstName} 
              onChange={e => onInputChange(e)}
            />
          {/*Collector Middle Initial*/}
            <label>Middle Initial</label>
            <input 
              type="text" 
              name="middleInitial"
              placeholder="Middle Initial" 
              defaultValue={middleInitial} 
              onChange={e => onInputChange(e)}
            />
          {/*Collector Last Name*/}
            <label>Last Name</label>
            <input 
              type="text" 
              name="lastName"
              placeholder="Last Name" 
              defaultValue={lastName} 
              onChange={e => onInputChange(e)}
            />
          {/*Collector Code First Initial Middle Initial Last Initial*/}
            <label>Collector Code</label>
            <input 
              type="text" 
              name="collectorCode"
              placeholder="Collector Code" 
              defaultValue={collectorCode} 
              onChange={e => onInputChange(e)}
            />
            {/*Aging Bucket selection section */}
            <label>Aging Bucket</label>
            <div className='newUserCheckboxContainer'>
              <label className='newUserCheckboxLabel'>1-15<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckbox'
                defaultValue={aging1to15} 
                defaultChecked={aging1to15}
                onChange={e => onInputChange(e)}
              /></label>
              <label className='newUserCheckboxLabel'>31-45<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckbox'
                defaultValue={aging31to45} 
                defaultChecked={aging31to45}
                onChange={e => onInputChange(e)}
              /></label>
              <label className='newUserCheckboxLabel'>31-60<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckboxsm'
                defaultValue={aging31to60} 
                defaultChecked={aging31to60}
                onChange={e => onInputChange(e)}
              /></label>
              <label className='newUserCheckboxLabel'>Over 60<br/>
              <input
                type='checkbox'
                className='AgingBucketCheckboxlg'
                defaultValue={agingOver60} 
                defaultChecked={agingOver60}
                onChange={e => onInputChange(e)}
              /></label>
            </div>
            {/*Progam code selection section*/}
            <label>Program Bucket</label>
            <div className='newUserCheckboxContainer'>
              <label className='newUserCheckboxLabel'>A<br/>
              <input
                type='checkbox'
                className='programBucketChecbox'
                defaultValue={programBucketA} 
                defaultChecked={programBucketA}
                onChange={e => onInputChange(e)}
              /></label>
              <label className='newUserCheckboxLabel'>B<br/>
              <input
                type='checkbox'
                className='programBucketChecbox'
                defaultValue={programBucketB} 
                defaultChecked={programBucketB}
                onChange={e => onInputChange(e)}
              /></label>
              <label className='newUserCheckboxLabel'>C<br/>
              <input
                type='checkbox'
                className='programBucketChecbox'
                defaultValue={programBucketC} 
                defaultChecked={programBucketC}
                onChange={e => onInputChange(e)}
              /></label>
              <label className='newUserCheckboxLabel'>SU<br/>
              <input
                type='checkbox'
                className='programBucketChecbox'
                defaultValue={programBucketSU} 
                defaultChecked={programBucketSU}
                onChange={e => onInputChange(e)}
              /></label>
            </div>
            {/*Finance Company selection section*/}
            <label>Finance Company</label>
            <div className='newUserCheckboxContainer'>
            <input 
              type="text" 
              name="financeCompany"
              placeholder="financeCompany" 
              defaultValue={financeCompany} 
              onChange={e => onInputChange(e)}
            />
            </div>
            <label>Debt Type</label>
            <div className='newUserCheckboxContainer'>
            <input 
              type="text" 
              name="debtType"
              placeholder="debtType" 
              defaultValue={debtType} 
              onChange={e => onInputChange(e)}
            />
            </div>
            <button type='submit' onClick={onSubmit} className="userListAddButton">Update Collector</button>
            <Link className="userListGoBackButton" to='/users'>Go Back</Link>
          </div>
        </form>
      </div>
    );
  }

export default UpdateUser;