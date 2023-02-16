/**
 * @author SonNC
 */
import React, { Component } from "react";

import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import {Navigate} from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
    }
    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser){
            this.setState({ redirect: "/login" });
        } else{
            this.setState({ currentUser: currentUser, userReady: true })
            UserService.getTypeMaintenance().then(
                response => {
                    this.setState({
                        content: response.data
                    });
                },
                error => {
                    this.setState({
                        content: process.env.REACT_APP_API_SERVER + "Not Connect."
                    });
                }
            );
        }
    }
    render() {
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
        }
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>{this.state.content}</h3>
                </header>
            </div>
        );
    }
}
