import React from 'react';

export default function WelcomeUser(props) {
    const {username, notification} = props
    const pleaseLogin = <h1>Please Login</h1>
    const welcomeMessage = <h1>Welcome {username}, you have {notification} notifications</h1>

    if (props.username) {
        return welcomeMessage
    }
    else {
        return pleaseLogin
    }
    
    // Tenary:
    // return props.username ? welcomeMessage : pleaseLogin
}

// Virtual DOM, React components are being loaded,
// then will be loaded in the original DOM
// react is just a library,
// never ever update your properties