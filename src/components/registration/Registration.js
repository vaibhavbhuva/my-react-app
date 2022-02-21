import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            describe: '',
            gender: ''
        }
    }
    render() {
        return(
            <form>
                Form
            </form>
        );
    }
}