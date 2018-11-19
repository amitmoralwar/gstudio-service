import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

import axios from 'axios';

class GroupList extends Component {
  constructor(props){
    super(props);
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:8000/get_groups`)
      .then(res =>  res.json())
      .then(
          (result) => {
            this.setState({
                groups: result.groups    
            });            
          },
      (error) => {
          this.setState({
            error
          });
      }
    )
  }          

  render() {
    const groups = this.state;
    return (
      <div>
        <ListGroup>
          {this.state.groups.map(group => (
            <ListGroupItem key={group.name}>
              {group.name} 
            </ListGroupItem>
          ))}
        </ListGroup>
    </div>    
    );
  }
}

export default GroupList;