import React, {Component} from 'react'

class AddInfoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    let fav = this.props.favouritesList
    let menu = this.props.menuList
    let counter = 0
    let list = []
    for (let i = 0; i < menu.length; i++) {
      let state = false
      for (let j = 0; j < fav.length; j++) {
        if (menu[i].id === fav[j].id) {
          state = true
        }
      }
      if (!state) {
        list.push(menu[i])
        counter++
      }
      if (counter === 4) {
        break
      }
    }
    console.log()
    this.setState({
      list: list
    })
  }

  render() {
    return (
      <div className="column" style={{"margin": "10px"}}>
        <div className="row">
          {
            this.state.list.map((data, index) => {
              return <div key={index} className="col-md-3">
                <div className="ui card">
                  <div className="image">
                    <img src={data.imgPath} alt=""/>
                  </div>
                  <div className="content">
                    <a className="header"> {data.name} </a>
                    <div className="meta">
                      <i className="time icon"></i>
                      <span className="date">{data.time}</span>
                    </div>
                    <div className="description">
                      mini description
                    </div>
                  </div>
                  <div className="extra content">
                    <a>
                      <i className="like icon"></i>
                      22 likes
                    </a>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default AddInfoList
