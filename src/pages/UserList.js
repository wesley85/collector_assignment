import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { DeleteOutline, Edit } from "@material-ui/icons";

class UserList extends React.Component {
  state = {
    Collectors: '',
    collectorList: []
  }
  
  componentDidMount() {
    this.getCollectors()
  }
  
  getCollectors = () => {
    axios.get('http://localhost:5000/getCollectors')
    .then((result) => result.data)
    .then((result) => {
      this.setState({collectorList: result});
    });
  };

  onDeleteClick = CollectorID => {
    axios.delete(`http://localhost:5000/deleteCollector/${CollectorID}`);
    this.getCollectors();
    window.location.reload(true);
};

  render() {
    return (
      <div className="userList">
        <Link to="/users">
          <button className="userListButton"> Import Collectors </button>
        </Link>
        <h3>Collectors</h3>
            <table className="blueTableHeaders">
              <thead>
                <tr>
                  <td>Active</td>
                  <td>Collectors</td>
                  <td>Aging Bucket<br/>1-30 | 31-45 | 31-60 | Over60</td>
                  <td>Program Bucket<br/>
                    <span className="ProgramBucketHeaderA">A </span>
                    <span className="ProgramBucketHeader">B </span> 
                    <span className="ProgramBucketHeader">C </span> 
                    <span className="ProgramBucketHeader">SU</span></td>
                  <td>Finance Company<br/>Pawnee | Tandem | Both</td>
                  <td>Debt Type</td>
                  <td></td>
                </tr>
              </thead>
            </table>
        {this.state.collectorList.map((Collectors) => (
          <div key={Collectors.CollectorID}>
            <table className="blueTableData">
              <thead>
                <tr>
                  <td key={Collectors.CollectorID}><input type="checkbox" name="Active" checked={Collectors.Active === false ? false : true} readOnly /></td>
                  <td>{Collectors.FirstName} {Collectors.LastName} | {Collectors.CollectorCode}</td>
                  <td>
                  <input type="checkbox" name="Aging1to15" checked={Collectors.Aging1to15 === false ? false : true} />
                  <input type="checkbox" name="Aging31to45" checked={Collectors.Aging31to45 === false ? false : true}/>
                  <input type="checkbox" name="Aging31to60" checked={Collectors.Aging31to60 === false ? false : true}/>
                  <input type="checkbox" name="AgingOver60" checked={Collectors.AgingOver60 === false ? false : true}/>
                  </td>
                  <td>
                  <input type="checkbox" name="ProgramBucketA" checked={Collectors.ProgramBucketA === false ? false : true}/>
                  <input type="checkbox" name="ProgramBucketB" checked={Collectors.ProgramBucketB === false ? false : true}/>
                  <input type="checkbox" name="ProgramBucketC" checked={Collectors.ProgramBucketC === false ? false : true}/>
                  <input type="checkbox" name="ProgramBucketSU" checked={Collectors.ProgramBucketSU === false ? false : true}/>
                  </td>
                  <td>
                  {Collectors.FinanceCompany}
                  </td>
                  <td>
                  {Collectors.debtType}
                  </td>
                  <td className="deleteColumn">
                      <Link to={{
                        pathname: `/editCollectors/${Collectors.CollectorID}`,
                        collectorList: {Collectors: Collectors}
                      }}>
                        <Edit className="editCollector" />
                      </Link>
                      <DeleteOutline className="deleteCollector" onClick={() => this.onDeleteClick(Collectors.CollectorID)}/>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        ))}
        <Link to="/newUser">
          <button className="userListButton">Add Collector</button>
        </Link>
        <Link to="/AssignmentPreview">
          <button className="userListButton">Assignment Preview</button>
        </Link>
        <Link to="/users">
          <button className="userListButton">Reset Assignments</button>
        </Link>
        <Link to="/users">
          <button className="userListButton">ReAssign jobs</button>
        </Link>
      </div>
    );
  }
}

export default UserList;
