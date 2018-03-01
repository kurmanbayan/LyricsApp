import React, {Component} from 'react'
import { Grid, Menu, Segment, Divider, Rating, Icon } from 'semantic-ui-react'
import AddInfoList from './AddInfoList'

class Favourite extends Component {
  constructor(props) {
    super(props)
    let activeItem = props.favouritesList.length === 0 ? '' : props.favouritesList[0].name
    this.state = {
      index: 0,
      activeItem: activeItem
    }
  }

  handleRemove = () => {
    this.props.onRemoveFromFavourites(this.props.favouritesList[this.state.index].id)
    this.setState({
      index: 0,
      activeItem: this.props.favouritesList[0].name
    })

  }

  handleFavClick = (index, name) => {
    this.setState({
      index: index,
      activeItem: name
    })
  }

  render() {
    const activeItem = this.state.activeItem

    if (this.props.favouritesList.length === 0) {
      return <h2 align="center"> Favourites page is empty </h2>
    }
    else {
      return (
        <div>
          <Grid style={{"margin": "10px"}}>
            <Grid.Column width={4}>
              <Menu fluid vertical tabular>
              {
                this.props.favouritesList.map((data, index) => {
                  return <Menu.Item key={index} name={data.name} active={activeItem === data.name} value={index} onClick={() => this.handleFavClick(index, data.name)} />
                })
              }
              </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
              <Segment>
                <div className="column" style={{"marginBottom": "20px"}}>
                  <div className="row">
                    <div className="col-md-11">
                      <p style={{"fontSize": "35px", "marginLeft": "20px"}}> {this.props.favouritesList[this.state.index].name} </p>
                    </div>
                    <div className="col-md-1">
                      <Icon style={{"marginTop": "15px"}} onClick={this.handleRemove} name='heart' color="red" size="large" />
                    </div>
                  </div>
                </div>
                <img className="ui large circular image" src={this.props.favouritesList[this.state.index].imgPath} alt=''/>
                <div className="column" style={{"marginTop": "30px"}}>
                  <div className="row">
                    <div className="col-md-4">
                      <h2> Ingredients </h2>
                      {
                        this.props.favouritesList[this.state.index].ingredients_full.map((data, index) => {
                          return <div key={index}>
                            <p> {data} </p>
                            <Divider fitted />
                            <br />
                          </div>
                        })
                      }
                    </div>
                    <div className="col-md-8">
                      <h2> How to Make It </h2>
                      {
                        this.props.favouritesList[this.state.index].howto.map((data, index) => {
                          return <div key={index}>
                            <h3> Step {index + 1} </h3>
                            <p> {data} </p>
                            <br />
                          </div>
                        })
                      }
                    </div>
                  </div>
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
          <h1 style={{"margin": "20px"}}> You may also Like: </h1>
          <AddInfoList
            favouritesList={this.props.favouritesList}
            menuList={this.props.menuList}
          />
        </div>
      )
    }
  }
}

export default Favourite
