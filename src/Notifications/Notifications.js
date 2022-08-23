//Hero

// never ever update your properties, like below:
// this will affect the performance
export default function Notifications(props) {
    // const {username, notification} = props
    props.count = props.count - 1

    // This is the way to go:
    const value = props.count - 1

}

// Virtual DOM, React components are being loaded,
// then will be loaded in the original DOM
// react is just a library,
// never ever update your properties

// Pure Functions
// Any time that a prop is updated, ReactJS will update the component
// On the UI and then take action