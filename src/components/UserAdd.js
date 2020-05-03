import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import { Card, CardContent, TextField, CardActions, Button, Grid } from "@material-ui/core";

class AddUser extends Component {


	 constructor(props){
       super(props);

       this.state = {
           fields: {},
           errors: {}
       }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
           }        
        }

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

       this.setState({errors: errors});
       return formIsValid;
   }

   contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
           alert("Form submitted");
        }else{
           alert("Form has errors.")
        }

    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }


  render() {

    return (

      <Container maxWidth="sm">

      	<Card square style={{ maxWidth: "50vh" }}>
	        <CardContent>
	          <Grid container direction="column">

	            <TextField ref="name" label="Name" type="text" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
	            <span style={{color: "red"}}>{this.state.errors["name"]}</span>

	            <TextField label="Email id" type="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
	          	 <span style={{color: "red"}}>{this.state.errors["email"]}</span>
	          </Grid>
	        </CardContent>
	        <CardActions>
	          <Button variant="contained" color="secondary" onClick={this.contactSubmit.bind(this)}>
	            Register
	          </Button>
	        </CardActions>
      </Card>

      </Container>
    );
  }
}

export default AddUser;