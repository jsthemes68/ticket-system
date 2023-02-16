import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Header from "./components/header.component";
import Footer from "./components/footer.component";
import MyRoutes from "./routes";
// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };
    }
    componentDidMount() {
        const user = AuthService.getCurrentUser();
        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }

        EventBus.on("logout", () => {
            this.logOut();
        });
    }

    componentWillUnmount() {
        EventBus.remove("logout");
    }

    logOut() {
        AuthService.logout();
        this.setState({
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        });
    }
    render() {
        let data={a1:"pp",a2:"kk"}
        return (
            <main>
                <header className="main-header">
                    {<Header data={data} />}
                </header>
                <div id="main">
                    {<MyRoutes />}
                </div>
                {/* <AuthVerify logOut={this.logOut}/> */}
                <footer className="main-footer">{<Footer />}</footer>
            </main>
        );
    }
}

export default App;
