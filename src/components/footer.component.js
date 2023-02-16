import React, { Component } from "react";
import AuthService from "../services/auth.service";
export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: { username: "" }
        };
    }
    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })
    }
    render() {
        return (
            <div className="container">
               Footer content
            </div>
        );
    }
}
