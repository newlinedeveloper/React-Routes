import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import axios from "axios";


const useStyles = makeStyles({

  table: {
    minWidth: 650,
  },

});



class ViewUser extends Component {

	state = {

	    users: [],
	    isLoading: true,
	    errors: null

	   };

	componentDidMount() {

	  axios

	    .get("https://jsonplaceholder.typicode.com/todos")

	    .then(response =>
	      response.data.results.map(user => ({

	        user_id: `${user.userId} `,

	        id: `${user.id}`,

	        title: `${user.title}`,

	        completed: `${user.completed}`

	      }))
	    )
	    .then(users => {

	      this.setState({
	        users,
	        isLoading: false
	      });

	    })
	    .catch(error => this.setState({ error, isLoading: false }));
	}



  render() {
    return (
    	
    <Container maxWidth="sm">
	
	<TableContainer component={Paper} style={{margin:"30px"}}>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Completed&nbsp;(g)</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow >
              
              <TableCell align="right">{user.user_id}</TableCell>
              <TableCell align="right">{user.id}</TableCell>
              <TableCell align="right">{user.title}</TableCell>
              <TableCell align="right">{user.completed}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </Container>
    );
  }
}

export default ViewUser;





