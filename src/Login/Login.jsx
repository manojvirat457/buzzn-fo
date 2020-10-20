import React from 'react';
import '../Login/Login.css';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: ''
        }
    }

    emailEdit = (e) => {
        if (e.target.value != null) {
            this.setState({
                email: e.target.value
            })
        }
    }

    usernameEdit = (e) => {
        if (e.target.value != null) {
            this.setState({
                username: e.target.value
            })
        }
    }

    submitClick = async() => {

        let data = {
            'name': this.state.username,
            'mail': this.state.email
        }
       debugger;
        fetch('http://localhost:9292/user', {
            method: 'post',
            body: {
                'name': this.state.username,
                'mail': this.state.email
            }
        }).then(function (response) {
            return response.json();
        });
    }

    render() {
        return (
            <form className="form">
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.emailEdit} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="UserName" value={this.state.username} onChange={this.usernameEdit} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.submitClick}>Submit</button>
            </form>
        );
    }

}