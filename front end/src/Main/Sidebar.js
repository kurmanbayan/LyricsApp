import React, {Component} from 'react'

class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-2">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Top songs
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Rap</a>
                <a className="dropdown-item" href="#">Pop</a>
                <a className="dropdown-item" href="#">Rock</a>
              </div>
            </div>
          </div>
          <div className="col-md-1">
            <button type="button" className="btn btn-light"> Today </button>
          </div>
          <div className="col-md-offset-2">
            <div className="monthBtn">
              <button type="button" className="btn btn-light"> This month </button>
            </div>
          </div>
          <div className="col-md-offset-2">
            <button type="button" className="btn btn-light"> This year </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
