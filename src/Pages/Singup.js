import React from 'react';
import Navbar from '../Common/Navbar';

    function Signup(){
       
        return(
            <div>
                <Navbar />
                <form>
                    <h3>GOOD DAY</h3>
                    <label for="fname">FullName: </label> <br />
                    <input type="text" /> <br /><br />

                    <label for="psw"> Password: </label><br />
                    <input type="password" /> <br /><br />

                    <label for="psw">Confirm Password: </label> <br />
                    <input type="password" /> <br /><br />

                    <button type="submit">Signup </button>
                </form>
            </div>

        );

    }
export default Signup;

