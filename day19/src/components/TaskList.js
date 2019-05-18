import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1// -1: all, 1: active, 0: hiden
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        var target = event.target;
        var value = target.value;
        var name = target.name;

        this.props.onFilter({
          name: name === 'filterName' ? value : this.state.filterName,
          status: name === 'filterStatus' ? value : this.state.filterStatus
        });

        this.setState({
            [name] : value
        });
    }

    render() {
        var {tasks, filterTable, keyword, sort} = this.props;
        var {filterName, filterStatus} = this.state;
        // Filter Name
        if (filterTable.name) {
            tasks = tasks.filter(task => {
                return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
            });
        }

        // Filter Status
        tasks = tasks.filter(task => {
            if (filterTable.status === -1) {
                return task;
            }
            return task.status === (filterTable.status === 1 ? true : false) ;
        })

        // Search
        if (keyword) {
          tasks = tasks.filter(task => {
              return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
          });
        }

        // Sort
        if (sort.by === 'name') {
            if (sort.value === 1) {
                tasks = tasks.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });
            } else {
                tasks = tasks.sort((a, b) => {
                    return b.name.localeCompare(a.name);
                });
            }
        } else {
            if (sort.value === 1) {
                tasks = tasks.sort((a, b) => {
                    return b.status.toString().localeCompare(a.status.toString());
                });
            } else {
                tasks = tasks.sort((a, b) => {
                    return a.status.toString().localeCompare(b.status.toString());
                });
            }
        }

        var elementTasks = tasks.map((element, index) => {
            return <TaskItem
                        key={index}
                        index={index}
                        task={element}
                    />
        });

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Handling</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                value={filterName}
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select
                                className="form-control"
                                name="filterStatus"
                                value={filterStatus}
                                onChange={this.onChange}
                            >
                                <option value={-1}>All</option>
                                <option value={1}>Active</option>
                                <option value={0}>Hiden</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elementTasks}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    filterTable: state.filterTable,
    keyword: state.search,
    sort: state.sort
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilter: filter => {
      dispatch(actions.filterTable(filter));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
