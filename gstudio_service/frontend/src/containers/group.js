import React, { Component } from 'react';
import axios from "axios";
import groups from "../components/groups/List_groups";

class List_groups extends Component {
  state = {
      groups: []
    };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/get_groups/")
      .then(json => console.log(json))
  }

    render() {
        return (
          

        )
    }
}

export default List_groups;

