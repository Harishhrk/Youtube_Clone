import React, { Component } from 'react';
import {Paper, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'

class SearchBar extends Component {

    state = {
        searchTerm: '',
    }

    handleChange = (event) => this.setState({ searchTerm: event.target.value});
    handleSubmit = (event) =>{
        const { searchTerm } = this.state;
        const { onFormSubmit} = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }



    render() {
        return (
            <Paper elevation={6} style={{padding:'25px'}}>
                <form onSubmit={this.handleSubmit}>
                <FontAwesomeIcon style={{color: 'red', paddingRight: '10px'}} size='3x' icon={faYoutube} /><TextField style={{width: '50%'}} id="outlined-basic" variant="outlined"fullWidth label='Search...' placeholder="JavaScript, React," onChange={this.handleChange}></TextField>

                </form>

            </Paper>
        )
    }
}

export default SearchBar;