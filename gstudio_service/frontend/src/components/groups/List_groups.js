import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

import axios from 'axios';
import {Link} from 'react-router-dom';

class GroupList extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this)

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

  handleDelete(group){
    fetch(`http://127.0.0.1:8000/delete_group/${group.name}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        console.log('Item was deleted!')
      })
  }         

  render() {
    const groups = this.state;
    return (
      <div>
        <ListGroup>
          {this.state.groups.map(group => (
            <ListGroupItem key={group.name}>
              {group.name} 
              <Link to={`/update_group/${group.name}`}>Edit</Link>
              <Link to={`/delete_group/${group.name}`} handleDelete={this.handleDelete}>Delete</Link>
            </ListGroupItem>
          ))}
        </ListGroup>
    </div>    
    );
  }
}

export default GroupList; 