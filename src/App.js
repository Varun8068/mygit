import logo from './logo.svg';
import Forgot from './Components/ForgotPassword.js';
import SignupForm from './Components/Signup.js';
import Login from './Components/Login.js';
import PasswordChanged from './Components/PasswordChanged.js';
import Scan from './Components/Scan.js';

import PasswordReset from './Components/Newpassword.js';



function App(){
    return (
        <>
            
             <SignupForm/>
             <Forgot/>
             <Login/>
             <PasswordChanged/>
             <Scan/>
             
             <PasswordReset/>
             
             
             
            
        </>
    );
}
export default App;