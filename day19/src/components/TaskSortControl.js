import React, { Component } from 'react';
import * as actions from './../actions/index';
import {connect} from 'react-redux';

class TaskSortControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: {
                by: 'name',
                value: 1
            }
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(sortName, sortValue) {
        this.setState({
            sort: {
                by: sortName,
                value: sortValue
            }
        });

        this.props.onSort({by: sortName, name: sortValue});
    }

    render() {
        var {sort} = this.state;
        return (
            <div className="form-group">
                <div className="dropdown">
                    <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">
                        <span className="fa fa-sort"></span>&nbsp;Sort
                    </button>
                    <ul className="dropdown-menu">
                        <li onClick={() => this.onClick('name', 1)}>
                            <a>
                                <i className="fa fa-sort-alpha-asc"></i>&nbsp;
                                Name A-Z&nbsp;
                                <i className={(sort.by === 'name' && sort.value === 1) ? 'fa fa-check' : ''}></i>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a>
                                <i className="fa fa-sort-alpha-desc"></i>&nbsp;
                                Name Z-A&nbsp;
                                <i className={(sort.by === 'name' && sort.value === -1) ? 'fa fa-check' : ''}></i>
                            </a>
                        </li>
                        <hr/>
                        <li onClick={() => this.onClick('status', 1)}>
                            <a>
                                <i className="fa fa-toggle-on"></i>&nbsp;
                                Active Status&nbsp;
                                <i className={(sort.by === 'status' && sort.value === 1) ? 'fa fa-check' : ''}></i>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <a>
                                <i className="fa fa-toggle-off"></i>&nbsp;
                                Hiden Status&nbsp;
                                <i className={(sort.by === 'status' && sort.value === -1) ? 'fa fa-check' : ''}></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

var mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: sort => {
      dispatch(actions.sort(sort));
    }
  };
};

export default connect(null, mapDispatchToProps)(TaskSortControl);
