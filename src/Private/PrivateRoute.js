import { Route, Redirect} from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

const PrivateRoute = ({children,...rest}) => {
    const{user,isloading}=useAuth();
    if(isloading){
        return("Loading")
    }
    return (
        <Route 
        {...rest}
        render={({ location })=>
            user.email?children:<Redirect
            to={{
                pathname:"/login",
                state: { from: location }
            }}
            />
        }/>
    );
};

export default PrivateRoute;