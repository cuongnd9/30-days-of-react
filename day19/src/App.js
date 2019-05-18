import React, {Component} from 'react';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import {connect} from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.onToggleForm = this.onToggleForm.bind(this);
  }

  onToggleForm() {
    if (this.props.isDisplayForm && this.props.taskEditing.id !== '') {
      this.props.onUpdate({
        id: '',
        name: '',
        status: false
      });
    } else {
      this.props.onToggleForm();
    }
  }

  render() {
    var {isDisplayForm} = this.props;

    return (<div className="container">
      <div className="row">
        {/* Add To Do */}
        <div className={isDisplayForm
            ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4'
            : ''}>
          <TaskForm/>
        </div>
        <div className={isDisplayForm
            ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8'
            : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
          {/* Button Add To Do */}
          <div className="form-group">
            <button type="button" className="btn btn-info" onClick={this.onToggleForm}>
              <span className="fa fa-plus"></span>&nbsp; Add To Do
            </button>
          </div>
          {/* Search-Sort */}
          <TaskControl/> {/* List */}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <TaskList/>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    taskEditing: state.taskEditing,
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onUpdate: task => {
      dispatch(actions.update(task));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
