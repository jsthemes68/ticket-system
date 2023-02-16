import { useEffect } from "react";
import { withRouter } from "./with-router";
import AuthService from "../services/auth.service";
const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};
const AuthVerify = () => {
    //let location = props.router.location;
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            const decodedJwt = parseJwt(user.token);
            if (decodedJwt.timeExp !== undefined){
                if (decodedJwt.timeExp * 1000 < Date.now()) {
                    AuthService.logout();

                    //props.logOut();
                }
            }

        }
    }, [/*location*/]);
};

export default withRouter(AuthVerify);
