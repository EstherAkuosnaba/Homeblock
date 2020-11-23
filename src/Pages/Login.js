import React from 'react';
import Navbar from '../Common/Navbar';

    function Login(){
       
        return(
            <div>
                <Navbar />
                <form>
                    <h3>GOOD DAY</h3>
                    <label for="username">Username: </label> 
                    <input type="text" /> <br></br><br></br>

                    <label for="psw"> Password: </label> 
                    <input type="password" /> <br></br><br></br>
                    <button type="submit">Login </button>
                </form>
            </div>

        );

    }
export default Login;