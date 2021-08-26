import WelcomeNewUser from "./WelcomeNewUser";
import {Route} from "react-router-dom";

const Welcome = () => {
  return (<>
    <h1>The Welcome Page</h1>
    <Route path='/welcome/new' component={WelcomeNewUser}/>
  </>);
};

export default Welcome;