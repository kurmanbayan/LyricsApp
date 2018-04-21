import React, {Component} from 'react'
import Request from 'superagent'
import Results from './Results'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      weight: 0,
      height: 0,
      kcal: 0,
    }
  }

  handleWeightChange = (e) => {
    this.setState({
      weight: e.target.value,
    })
  }

  handleHeightChange = (e) => {
    this.setState({
      height: e.target.value,
    })
  }

  handleKcalChange = (e) => {
    this.setState({
      kcal: e.target.value,
    })
  }

  componentDidMount() {
    let url = 'http://localhost:8000/api/v1/1/'
    Request.get(url).then((response) => {
      let obj = JSON.parse(response.text)
      obj = obj.sort((a,b) => b.rating - a.rating);
      this.setState({
        list: obj,
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>
            Latest popular recipes:
          </h2>
        </div>
        <div className="row" style={{"marginTop": "30px"}}>
          <div className="col-md-8">
              <div className="row">
              {
                this.state.list.map((data, index) => {
                  return <div key={index} className="col" style={{"margin": "10px"}}>
                     <div className="ui card">
                      <a className="image" href="">
                        <img src={data.imgPath} alt=""/>
                      </a>
                      <div className="content">
                        <a className="header" href="">{data.name}</a>
                        <div className="meta">
                          <a> {data.rating} / 5 </a>
                        </div>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <h3>
                My calculator:
              </h3>
            </div>
            <div className="row">
              <div className="col" style={{"width": "100%", "marginTop": "30px"}}>
                <div className="ui right labeled input">
                  <input type="text" onChange={this.handleWeightChange} placeholder="Enter your weight.."/>
                  <div className="ui basic label">
                    kg
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col" style={{"width": "100%", "marginTop": "10px"}}>
                <div className="ui right labeled input">
                  <input type="text" onChange={this.handleKcalChange} placeholder="Enter the consumed kcal .."/>
                  <div className="ui basic label">
                    kcal
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col" style={{"width": "100%", "marginTop": "10px"}}>
                <div className="ui right labeled input">
                  <input type="text" onChange={this.handleHeightChange} placeholder="Enter your height .."/>
                  <div className="ui basic label">
                    cm
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col" style={{"marginTop": "50px"}}>
                <Results
                  weight={this.state.weight}
                  height={this.state.height}
                  kcal={this.state.kcal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
