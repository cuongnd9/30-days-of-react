import React from 'react';

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
      <div className="col-4 bg-info border p-3 text-center rounded">
        <h4 className="my-auto text-white font-weight-light">
          {`${hours}:${minutes}:${seconds}`}
        </h4>
      </div>
    );
  }
}

export default Clock;
