import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import actions from './store/actions';
import {connect} from 'react-redux';
import './App.css';
console.log(actions);
class App extends Component {
    handleChange = (event) => {
        console.log(event.target.value);
        this.props.fetchSuggest(event.target.value);
    }
    handleClick = (event) => {
        let wd = event.target.innerText;
        window.location = `https://www.baidu.com/s?wd=${wd}`;
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <h1 className="title">我的百度</h1>
                <div className="search">
                    <input type="text" onChange={this.handleChange}/>
                    <button>百度一下</button>
                </div>
                <div className="suggest">
                    <ul>
                        {
                            this.props.words.map((word, index) => (
                                <li key={index} onClick={this.handleClick}>{word}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(
    state => state,
    dispatch => bindActionCreators(actions, dispatch)
)(App);
