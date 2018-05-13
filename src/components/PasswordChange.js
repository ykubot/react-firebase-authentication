import React, { Component } from 'react';

import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    render() {
        const {
            passwordOne,
            passwordTwo,
            error
        } = this.state;

        const isInValid =
            passwordOne === '' 
            || passwordOne !== passwordTwo

        return(
            <form>
                <input 
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="New Password"
                />
                <input 
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm New Password"
                />
                <button disable={isInValid} type="submit">
                    Reset My Password
                </button>

                { error && <p>{ error.message }</p> }
            </form>

        );
    }
}

export default PasswordChangeForm;