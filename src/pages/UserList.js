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
    axios.get('https://support.pawneeleasing.com/PublishedCollectorAPI/api/Collector') 
    .then((result) => result.data)
    .then((result) => {
      this.setState({collectorList: result});
    });
  };

  onDeleteClick = collectorID => {
    axios.delete(`https://support.pawneeleasing.com/PublishedCollectorAPI/api/Collector/${collectorID}`);
    this.getCollectors();
    // window.location.reload(true);
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
                  <td>active</td>
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
          <div key={Collectors.collectorID}>
            <table className="blueTableData">
              <thead>
                <tr>
                  <td key={Collectors.collectorID}><input type="checkbox" name="active" defaultChecked={Collectors.active === false ? false : true} /></td>
                  <td>{Collectors.firstName} {Collectors.lastName} | {Collectors.collectorCode}</td>
                  <td>
                  <input type="checkbox" name="aging1to15" defaultChecked={Collectors.aging1to15 === false ? false : true} />
                  <input type="checkbox" name="aging31to45" defaultChecked={Collectors.aging31to45 === false ? false : true}/>
                  <input type="checkbox" name="aging31to60" defaultChecked={Collectors.aging31to60 === false ? false : true}/>
                  <input type="checkbox" name="agingOver60" defaultChecked={Collectors.agingOver60 === false ? false : true}/>
                  </td>
                  <td>
                  <input type="checkbox" name="programBucketA" defaultChecked={Collectors.programBucketA === false ? false : true}/>
                  <input type="checkbox" name="programBucketB" defaultChecked={Collectors.programBucketB === false ? false : true}/>
                  <input type="checkbox" name="programBucketC" defaultChecked={Collectors.programBucketC === false ? false : true}/>
                  <input type="checkbox" name="programBucketSU" defaultChecked={Collectors.programBucketSU === false ? false : true}/>
                  </td>
                  <td>
                  {Collectors.financeCompany}
                  </td>
                  <td>
                  {Collectors.debtType}
                  </td>
                  <td className="deleteColumn">
                      <Link to={{
                        pathname: `/editCollectors/${Collectors.collectorID}`,
                        collectorList: {Collectors: Collectors}
                      }}>
                        <Edit className="editCollector" />
                      </Link>
                      <DeleteOutline className="deleteCollector" onClick={() => this.onDeleteClick(Collectors.collectorID)}/>
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
