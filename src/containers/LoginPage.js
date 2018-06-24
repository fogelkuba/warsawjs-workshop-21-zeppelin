import { React, PureComponent } from 'react';
import * as urls from '../urls';
import App from "../App";

export class LoginPage extends PureComponent {

    render(){
        return(
            <div>
                <input type="text"/>
                <input type="password"/>
            </div>
        )
    }

}

export default LoginPage;