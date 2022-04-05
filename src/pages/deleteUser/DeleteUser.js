import React from 'react';
import axios from 'axios';
import "./DeleteUser.css";

class DeleteUser extends React.Component {
  state = {
    CollectorID: '',
    collectorList: []
}

onDeleteClick = CollectorID => {
    axios.delete(`http://localhost:5000/deleteCollector/${CollectorID}`);
    window.location.reload(true);
  };

  render() {
    return (
      <div className="deleteUser">
        <h1 className="deleteUserTitle">delete User</h1>
        <form className="deleteUserForm">
        <div className="deleteUserItem">
            <label>Collector ID</label>
            <input 
              type="text" 
              placeholder="Collector ID" 
              value={this.state.CollectorID} 
              onChange={e => this.setState({
                CollectorID: e.target.value
              })}
            />
          </div>
          <button className="deleteUserButton" onClick={() => this.onDeleteClick()}>Delete Collector</button>
        </form>
      </div>
    );
  }
}

export default DeleteUser;