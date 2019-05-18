import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
        this.props.onCloseForm(this.props.task.id);
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task);
        this.props.onShowForm();
    }

    render() {
        var {task, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span
                        className={task.status ? 'label label-danger' : 'label label-info'}
                        style={{cursor:'pointer'}}
                        onClick={this.onUpdateStatus}
                    >
                        {task.status ? 'Active' : 'Hiden'}
                    </span>
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.onUpdate}
                    >
                        <i className="fa fa-edit"></i>&nbsp;Edit
                    </button>&nbsp;
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDelete}
                    >
                        <i className="fa fa-close"></i>&nbsp;Delete
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => {
  return {

  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: id => {
      dispatch(actions.updateStatus(id));
    },
    onDelete: id => {
      dispatch(actions.deleteTask(id));
    },
    onUpdate: task => {
      dispatch(actions.update(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onShowForm: () => {
      dispatch(actions.showForm());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
