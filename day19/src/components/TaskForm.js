import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
        this.onCloseForm = this.onCloseForm.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    componentWillMount() {
        var task = this.props.taskEditing;

        if (task) {
            this.setState({
                id: task.id,
                name: task.name,
                status: task.status
            });

        } else {
            this.setState({
                id: '',
                name: '',
                status: false
            });

        }
    }

    componentWillReceiveProps(nextProps) {
        var task = nextProps.taskEditing;

        if (task) {
            this.setState({
                id: task.id,
                name: task.name,
                status: task.status
            });
        } else {
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }

    onCloseForm() {
        this.props.onCloseForm();
    }

    onChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.props.taskEditing.id) {
          this.props.onUpdate(this.state);
        } else {
          this.props.onAddTask(this.state);
        }

        this.onCancel();
        this.onCloseForm();
    }

    onCancel(event) {
      if (this.props.taskEditing.id !== '') {
        var task = this.props.taskEditing;
        this.setState({
          id: task.id,
          name: task.name,
          status: task.status
        });
      } else {
        this.setState({
            name: '',
            status: false
        });
      }
    }

    render() {
        var {id} = this.state;
        if (!this.props.isDisplayForm) return '';

        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">

                        {id ? 'Edit To Do' : 'Add To Do'}

                        <p className="text-right" style={{float:'right'}}>
                            <i className="fa fa-times-circle" onClick={this.onCloseForm}></i>
                        </p>
                    </h3>
                </div>
                <div className="panel-body">
                    {/*Form Add*/}
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Status:</label>
                            <select
                                className="form-control"
                                name="status"
                                value={this.state.status}
                                onChange={this.onChange}
                            >
                                <option value={true}>Active</option>
                                <option value={false}>Hiden</option>
                            </select>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <button type="submit" className="btn btn-success" style={{marginRight:'30px'}} name="btnSave">
                                <span className="fa fa-plus"></span>&nbsp;
                                Save
                            </button>
                            <button type="button" className="btn btn-default" name="btnCancel" onClick={this.onCancel}>
                                <span className="fa fa-close"></span>&nbsp;
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    taskEditing: state.taskEditing
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: task => {
      dispatch(actions.addTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onUpdate: task => {
      dispatch(actions.update(task));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
