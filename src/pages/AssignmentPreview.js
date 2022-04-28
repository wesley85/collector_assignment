import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AssignmentPreview extends React.Component {
  constructor (props){
        super(props);
        this.state = {
          Collectors: '',
          collectorList: []
  }
}

  componentDidMount() {
    this.getCollectors()
  }
  
  getCollectors = () => {
    axios.get('https://10.0.0.218:5000/api/collector')
    .then((result) => result.data)
    .then((result) => {
      this.setState({collectorList: result});
    });
  };

  render() {
    return (
      <div className="userList">
        <h3>Collectors</h3>
            <table className="blueTableHeaders">
              <thead>
                <tr>
                  <td>Collectors</td>
                  <td>Pawnee</td>
                  <td>Tandem</td>
                </tr>
              </thead>
            </table>
        {this.state.collectorList.map((Collectors) => (
          <div key={Collectors.CollectorID}>
            <table className="blueTableData">
              <thead>
                {Collectors.Active === true &&
                <tr>
                  <td key={Collectors.CollectorID}>
                      {Collectors.Active === true && Collectors.FinanceCompany === 'Tandem' && <div><p>{Collectors.CollectorCode}</p></div>}
                    {/* End Condition 1 */}
                      {Collectors.Active === true && Collectors.FinanceCompany === 'Pawnee' && Collectors.Aging1to15 === true && Collectors.Aging31to45 && Collectors.ProgramBucketA === true && <div><p>{Collectors.CollectorCode}</p></div>}
                    {/* End Condition 2 */}
                      {Collectors.Active === true && Collectors.FinanceCompany === 'Pawnee' && Collectors.Aging1to15 === true && Collectors.ProgramBucketB === true && Collectors.ProgramBucketC === true && Collectors.ProgramBucketSU === true && <div><p>{Collectors.CollectorCode}</p></div>}
                    {/* End Condition 3 */}
                      {Collectors.Active === true && Collectors.FinanceCompany === 'Pawnee' && Collectors.Aging31to45 === true && Collectors.Aging31to60 === true && Collectors.ProgramBucketB === true && Collectors.ProgramBucketC === true && Collectors.ProgramBucketSU === true && <div><p>{Collectors.CollectorCode}</p></div>}
                    {/* End Condition 4 */}
                    {Collectors.Active === true && Collectors.FinanceCompany === 'Both' && Collectors.Aging31to60 === true && Collectors.AgingOver60 === true && Collectors.ProgramBucketA=== true && <div><p>{Collectors.CollectorCode}</p></div>}
                  </td>
                  <td>
                    21 / $500
                  </td>
                  <td>
                    56 / $1000
                  </td>
                </tr>
                }
              </thead>
            </table>
          </div>
        ))}
        <Link to='/users'>
          <button className="userListAssignButton" >
            Push Assignments Live
          </button>
        </Link>
        <Link to='/users'>
          <button className="userListAssignButton" >
            Go Back
          </button>
        </Link>
      </div>
    );
  }
}

export default AssignmentPreview;