import React, { Component } from 'react';

class Showcase extends Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="d-block img-fluid" src="https://images.ctfassets.net/o6sr41tx16eu/4BhzxXmgvSMgg6oAAOE2CW/941a483ecfaa7501bfbd427479531274/Scrambler_Slider_1600.jpg" alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="https://images.ctfassets.net/o6sr41tx16eu/2qEIHPeROwuIcqec2y8kUC/40a1f47eb0c533531fb81be97643ed7b/XDiavel-Matt-Liquid-Concrete-Grey-MY19-02-Hero-Banner-1600x1000.jpg" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="https://images.ctfassets.net/o6sr41tx16eu/1Cg3ycnv8EUaq4oSwwqQyg/b423330ca119d14718dcb5b9a5bdd61b/Monster-1200-25-Anniversario-MY19-Special-Livery-01-Hero-Banner-1600x1000.jpg" alt="First slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Showcase;
