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
    axios.get('https://support.pawneeleasing.com/PublishedCollectorAPI/api/Collector')
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
          <div key={Collectors.collectorID}>
            <table className="blueTableData">
              <thead>
                {Collectors.active === true &&
                <tr>
                  <td key={Collectors.collectorID}>
                      {Collectors.active === true && Collectors.financeCompany === 'Tandem' && <div><p>{Collectors.collectorCode}</p></div>}
                    {/* End Condition 1 */}
                      {Collectors.active === true && Collectors.financeCompany === 'Pawnee' && Collectors.aging1to15 === true && Collectors.aging31to45 && Collectors.programBucketA === true && <div><p>{Collectors.collectorCode}</p></div>}
                    {/* End Condition 2 */}
                      {Collectors.active === true && Collectors.financeCompany === 'Pawnee' && Collectors.aging1to15 === true && Collectors.programBucketB === true && Collectors.programBucketC === true && Collectors.programBucketSU === true && <div><p>{Collectors.collectorCode}</p></div>}
                    {/* End Condition 3 */}
                      {Collectors.active === true && Collectors.financeCompany === 'Pawnee' && Collectors.aging31to45 === true && Collectors.aging31to60 === true && Collectors.programBucketB === true && Collectors.programBucketC === true && Collectors.programBucketSU === true && <div><p>{Collectors.collectorCode}</p></div>}
                    {/* End Condition 4 */}
                    {Collectors.active === true && Collectors.financeCompany === 'Both' && Collectors.aging31to60 === true && Collectors.agingOver60 === true && Collectors.programBucketA=== true && <div><p>{Collectors.collectorCode}</p></div>}
                  </td>
                  <td>
                    {Collectors.firstName}
                  </td>
                  <td>
                    {Collectors.lastName}
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