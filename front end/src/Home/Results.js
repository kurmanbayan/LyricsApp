import React, {Component} from 'react'
import Request from 'superagent'

class Results extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }

  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">Your results</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Steven Eliot</h4>
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary">
                   <a>weight: </a> {this.props.weight}
                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                   <a>height: </a> {this.props.height}
                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                  <a>kcal: </a> {this.props.kcal}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <button className="ui button">Save</button>
        </div>
      </div>
    )
  }
}

export default Results
