import React from 'react';
import './Clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds()
    };
  }

  getTime = () => {
    this.setState({
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds()
    });
  };

  componentDidMount() {
    this.timer = setInterval(this.getTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div className="col-4 border p-3 text-center clock-container">
        <h4 className="my-auto text-white font-weight-light">
          {`${hours.toString().padStart(2, '0')} :
            ${minutes.toString().padStart(2, '0')} :
            ${seconds.toString().padStart(2, '0')}`}
        </h4>
      </div>
    );
  }
}

export default Clock;
