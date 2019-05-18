import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskSearchControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSearch() {
        this.props.onSearch(this.state.keyword);
    }

    onKeyPress(event) {
      if (event.key === 'Enter') {
        this.props.onSearch(this.state.keyword);
      }
    }

    render() {
        return (
            <div className="form-group">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{position:'relative'}}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your keyword..."
                            name="keyword"
                            value={this.state.keyword}
                            onChange={this.onChange}
                            onKeyPress={this.onKeyPress}
                        />
                        <span style={{position:'absolute',right:'0',bottom:'0'}}>
                            <button
                                type="button"
                                className="btn btn-info"
                                onClick={this.onSearch}
                            >
                            <i className="fa fa-search"></i>&nbsp;Search
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: keyword => {
      dispatch(actions.search(keyword));
    }
  }
}

export default connect(null, mapDispatchToProps)(TaskSearchControl);
