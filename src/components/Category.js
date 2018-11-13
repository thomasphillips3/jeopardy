import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Category extends Component {
    render() {
        console.log('category', this.props);
        return (
            <div>
                <Link className='link-home' to='/'><h4>Home</h4></Link>
                <Link className='link-home' to='/'><h4>Home</h4></Link>
                <h2>Category Title</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { category: state.category }
}

export default connect(mapStateToProps, null)(Category);