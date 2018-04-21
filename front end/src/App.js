import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import MainPage from './Main/MainPage'
import { Button, Icon } from 'semantic-ui-react'
import ShoppingCartList from './ShoppingList/ShoppingCartList'
import Recipe from "./recipes/Recipe";
import Favourite from "./Favourites/Favourite";
import LoginForm from "./login/LoginForm";


function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        user: "",
        isAuthenticated: false,
      listOfIngredients: [],
        isToggleLogin: false,
      favouritesList: [],
      ingredients: [
        "eggs",
        "meat",
        "apple",
        "yoghurt",
        "milk",
        "nuts",
        "orange",
      ],
      typesOfIngredients: [
        "dairy" : [
          "butter",
          "eggs",
          "milk",
          "yogurt"
        ],
        "vegetables": [
          "onion",
          "garlic",
          "tomato",
          "gin"
        ],
        "fruits": [
          "lemon",
          "apple",
          "orange",
          "banana"
        ],
        "baking grains": [
          "rice",
          "pasta",
          "flour",
          "bread",
          "cracker"
        ],
        "meats": [
          "chicken breast",
          "bacon",
          "beef steak",
          "ham",
          "turkey"
        ],
        "sauces": [
          "tomato sauce",
          "pasta",
          "salsa",
          "pesto"
        ]
      ],
      buttonBadge: 0,
      shoppingList: [],
      menuList: [
        {
            id: guid(),
            name: "Lemony Chicken Soup",
            description: "Turn 'jacket potatoes' into irresistible potato salad bites. Capers offer a twist on traditional relish; they're actually pickled flower buds and add bright, briny flavor to this appetizer.",
            howto: [
              "Preheat oven to 200°.",
              "Combine potatoes and oil; toss to coat. Arrange potatoes, cut sides down, in a single layer on a parchment paper–lined baking sheet. Bake at 450° for 20 minutes. Turn potatoes; bake 10 minutes. Remove and cool 20 minutes.",
              "Preheat broiler to high.",
              "Using a paring knife, carefully cut a circle in the cut side of potatoes. Using a melon baller or small spoon, remove pulp from potato, leaving a thin shell. Combine pulp, sour cream, 1 tablespoon chives, and next 5 ingredients (through pepper). Evenly fill potato shells with filling; sprinkle with cheese and remaining 1 tablespoon chives.",
              "Broil potatoes for 2 minutes or until cheese is lightly browned."
            ],
            ingredients_full: [
              "12 small red potatoes, halved (about 1 1/4 pounds)",
              "2 teaspoons olive oil",
              "1/2 cup light sour cream",
              "2 tablespoons minced fresh chives, divided",
              "2 tablespoons butter, melted",
              "2 tablespoons finely chopped drained capers",
              "1 1/2 teaspoons lemon juice",
              "1/2 teaspoon kosher salt",
              "1/2 teaspoon freshly ground black pepper",
              "2 tablespoons grated Parmesan cheese"
            ],
            imgPath: "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Flemon-caper-parmesan-potato-salad-bites-ck.jpg%3Fitok%3D1o6n2DNT&w=800&q=85",
            time: "1h. 20m.",
            ingredients: [
                {
                    name: "Red potatoes",
                    amount: 1
                },
                {
                    name: "Olive oil",
                    amount: 10
                },
                {
                    name: "light sour cream",
                    amount: 1
                },
                {
                    name: "lemon juice",
                    amount: 10
                },
                {
                    name: "kosher salt",
                    amount: 1
                },
                {
                    name: "ground black pepper",
                    amount: 10
                },
                {
                    name: "Parmesan cheese",
                    amount: 1
                }
            ]
        },
        {
            id: guid(),
            name: "Juicy Grilled Chicken Breasts",
            description: "This grilled chicken breast recipe gets its crunchy skin yet moist, tender meat from a final toasting over direct heat. Plus, presalting the chicken breasts and grilling over indirect heat keeps them juicy.",
            howto: [
              "Rinse and thoroughly dry the chicken breasts. Sprinkle all over with salt, putting some under the skin. Cover and refrigerate at least 2 hours and up to overnight. Let chicken come to room temperature 30 minutes before grilling.",
              "Prepare a charcoal or gas grill for indirect heat: If using a gas grill, turn all burners to high and close the lid. When the temperature inside the grill reaches 400°, lift lid and turn off one of the burners. The area over the turned-off burner is the indirect heat area. If using a charcoal grill, light 50 to 60 briquettes and let burn until covered with ash, about 20 to 30 minutes. Mound them to one side. The area over the section cleared of coals is the indirect heat area.",
              "Brush the grill with vegetable oil. Place chicken skin side down on indirect-heat area; close lid on gas grill. Cook 15 minutes. Turn chicken over, close lid on gas grill, and cook another 10 minutes. Move chicken over direct heat and cook, turning once, until skin is well browned and crisp, 3 to 5 minutes. Watch carefully; dripping fat or any added oils or butters catch fire easily (a small spray bottle filled with water is handy for taming flames).",
              "Test one piece for doneness by cutting into the center. It should be slightly pink (it will finish cooking while it rests). If very pink, move all chicken back to indirect heat, cover grill, and cook for another 5 minutes. Let rest at least 10 minutes before serving.",
              "Once you've got the basic method down, try adding different flavors to your grilled chicken:",
              "Spice-rubbed. In step 1, sprinkle your favorite spice rub all over the chicken while you're letting it come to room temperature. We like the Indian flavors of 1 teaspoon ground cumin, 1 teaspoon ground coriander, 1/2 teaspoon turmeric, 1/2 teaspoon black pepper, and 1/2 teaspoon cayenne.",
              "Marinated. In step 1, coat chicken in a zesty marinade while you're letting it come to room temperature. Most vinaigrettes make great marinades for chicken. We like to mix 3 tablespoons olive oil, 1 tablespoon fresh lemon juice, 1 teaspoon minced fresh rosemary or thyme, 1/2 teaspoon Dijon mustard, 1/4 teaspoon salt, and 1/4 teaspoon pepper.",
              "Buttered. In step 1, while chicken is coming to room temperature, rub softened butter onto and under skin. We like to use a compound butter (softened butter mixed with seasonings, herbs, or spices). For one with a bit of kick, we blend 1/4 cup butter with 1/2 minced chipotle chile (either canned, or dried and soaked in hot water until soft), 1 teaspoon fresh lime juice, and 1/2 teaspoon salt.",
              "Herbed. In step 1, while chicken is coming to room temperature, rub herb paste onto and under skin. Pesto (homemade or store-bought) is a good choice.",
              "Note: Nutritional analysis is per serving.",
            ],
            imgPath: "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fsu%2F06%2F06%2Fchicken-breast-su-1194609-x.jpg%3Fitok%3DsjSg2JVk&w=800&q=85",
            time: "2h. 45m.",
            ingredients_full: [
              "4 bone-in and skin-on chicken breast halves",
              "1/2 teaspoon salt",
            ],
            ingredients: [
                {
                    name: "Chicken",
                    amount: 1
                },
                {
                    name: "Salt",
                    amount: 10
                },
                {
                    name: "Apple",
                    amount: 10
                }
            ]
        },
        {
            id: guid(),
            name: "Spinach, Bacon, and Gruyère Breakfast Strata",
            description: "This dish has fewer than 20g of total carbs--about half of what you'll find in classic bread-based casseroles. Greek yogurt, eggs, and cheese pack a mighty protein punch, while a touch of bacon seasons to perfection. The strata is best if allowed to soak overnight. Not only does this build in make-ahead convenience, it also allows the bread to fully absorb the egg mixture--yielding a creamy texture inside, while the top bread pieces get delightfully crisp.",
            howto: [
              "Cook bacon in a large skillet over medium until crisp, about 6 minutes. Transfer bacon to a paper towel-lined plate, reserving 1 1/2 tablespoons drippings in skillet; discard any remaining drippings. Finely chop bacon; set aside.",
              "Add onion and garlic to drippings in skillet over medium-high heat; cook, stirring occa­sionally, until onion is browned and tender, about 10 minutes. Add spinach; cook until spinach wilts, about 2 minutes, stirring constantly. Toss together chopped bacon, onion mixture, bread cubes, and cheese in a large bowl. Arrange mixture evenly in an 8-inch square glass or ceramic baking dish coated with cooking spray.",
              "Combine milk, yogurt, eggs, egg whites, mustard, pepper, and salt in a large bowl; stir with a whisk until well combined. Pour evenly over bread mixture. Cover and chill 8 hours or overnight.",
              "Preheat oven to 350°F. Uncover baking dish; let strata stand at room temperature as oven preheats. Bake strata in preheated oven until top of strata is browned and a knife inserted in center comes out clean, about 1 hour. Let strata stand for 5 minutes before serving.",
            ],
            ingredients_full: [
              "4 center-cut bacon slices",
              "1 1/2 cups chopped yellow onion (about 1 medium onion)",
              "4 garlic cloves, thinly sliced",
              "6 ounces fresh spinach, chopped",
              "6 ounces crusty whole-grain bread, cut into 1-in. cubes",
              "3 ounces cave-aged Gruyère cheese, shredded (3/4 cup)",
              "Cooking spray",
              "3/4 cup 1% low-fat milk",
              "3/4 cup plain 2% reduced-fat Greek yogurt",
              "4 large eggs",
              "2 large egg whites",
              "1 tablespoon Dijon mustard",
              "1/2 teaspoon freshly ground black pepper",
              "1/4 teaspoon kosher salt"
            ],
            imgPath: "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fspinach-bacon-gruyere-breakfast-strata.jpg%3Fitok%3DBp8nXgL7&w=800&q=85",
            time: "9h. 15m.",
            ingredients: [
                {
                    name: "Salt",
                    amount: 1
                },
                {
                    name: "garlic",
                    amount: 10
                },
                {
                    name: "onion",
                    amount: 1
                },
                {
                    name: "spinach",
                    amount: 10
                },
                {
                    name: "Eggs",
                    amount: 1
                },
                {
                    name: "Milk",
                    amount: 10
                },
                {
                    name: "yogurt",
                    amount: 1
                }
            ]
        },
        {
            id: guid(),
            name: "Salmon and Potato Casserole",
            description: "Salmon and Potato Casserole is a great for breakfast or dinner. This casserole is easy to make and great as leftovers, too! Smoked salmon is great for breakfast with eggs, bagels and toast - try these recipes to get your day started. ",
            howto: [
              "Place an 8-inch round metal cake pan in oven. Preheat oven to 425° (leave pan in oven).",
              "Combine potato and onion in a large bowl. Combine salt, pepper, cheese, and eggs in a bowl, stirring well. Stir egg mixture into potato mixture. Remove preheated pan from oven; carefully coat pan with cooking spray. Place potato mixture in pan; pack down slightly. Bake at 425° for 50 minutes or until golden. Let stand in pan 10 minutes. Invert potato mixture onto a plate. Cut into 8 wedges; top evenly with salmon and dill."
            ],
            ingredients_full: [
              "6 cups grated peeled baking potato",
              "1/2 cup thinly vertically sliced onion",
              "1/4 teaspoon kosher salt",
              "1/4 teaspoon freshly ground black pepper",
              "5 ounces 1/3-less-fat cream cheese (about 2/3 cup), softened",
              "2 large eggs",
              "Cooking spray",
              "1 (3.5-ounce) package smoked salmon",
              "Dill sprigs",
            ],
            imgPath: "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F13%2F07%2Fsalmon-potato-casserole-ck-x.jpg%3Fitok%3DIrSxrxHT&w=800&q=85",
            time: "1h. 10m.",
            ingredients: [
                {
                    name: "Salt",
                    amount: 1
                },
                {
                    name: "onion",
                    amount: 1
                },
                {
                    name: "potato",
                    amount: 10
                },
                {
                    name: "black pepper",
                    amount: 1
                },
                {
                    name: "cheese",
                    amount: 10
                },
                {
                    name: "eggs",
                    amount: 1
                }
            ]
        },
      ]
    }
  }

  componentDidMount(){


  }

  addToFavourites = (list) => {
    let favor = this.state.favouritesList
    favor.push(list)
    this.setState({
      favouritesList: favor
    })
  }

  removeFromFavourites = (id) => {
    let favor = this.state.favouritesList
    favor = favor.filter((data) => data.id !== id)
    this.setState({
      favouritesList: favor
    })
  }

  updateIngredientsOfList = (list) => {
    this.setState({
      listOfIngredients: list
    })
  }

  handleRemoveFromBadge = () => {
    this.setState({
      buttonBadge: this.state.buttonBadge - 1
    })
  }

  handleRemoveFromList = (product) => {
    let array = this.state.shoppingList
    array = array.filter((data) => data.toLowerCase() !== product.toLowerCase())
    this.handleRemoveFromBadge()
    this.setState({
      shoppingList: array
    })
  }

  handleAddToBadge = () => {
    this.setState({
      buttonBadge: this.state.buttonBadge + 1
    })
  }

  handleAddToShoppingList = (product, state) => {
    let list = this.state.shoppingList
    const check = list.filter((data) => data.toLowerCase() === product.toLowerCase())
    if (check.length === 0) {
        list.push(product)
        this.handleAddToBadge()
        this.setState({
          shoppingList: list
        })
    }
    else {
      if (state) {
        this.handleRemoveFromList(product)
        this.handleRemoveFromBadge()
      }
    }
  }


  render() {



    return (


      <Router>
          <div>
              {this.state.isAuthenticated ? <Redirect to={"/"}/>  : null}


          <div className="ui small menu">
            <Link to="/" className="item">
              Home
            </Link>
            <Link to="/recipes" className="item">
              Recipes
            </Link>
            <Link to="/favourites" className="item">
              Favourites
            </Link>
              {this.state.isAuthenticated ? <div>
                  Hello {this.state.user.username}
              </div> : null}

            <div className="right menu">
              <div className="ui dropdown item">
                Language <i className="dropdown icon"></i>
                <div className="menu">
                  <a className="item">English</a>
                  <a className="item">Russian</a>
                  <a className="item">Spanish</a>
                </div>
              </div>
              <div className="item">
                <Button.Group>
                  <Link to="/shoppingList">
                    <Button animated='vertical'>
                       <Button.Content hidden>Shop</Button.Content>
                       <Button.Content visible>
                         <Icon name='shop' />
                       </Button.Content>
                     </Button>
                   </Link>
                   <Button style={{"fontSize": "12px"}} disabled> {this.state.buttonBadge} </Button>
                 </Button.Group>
              </div>
              <div className="item">
                  {!this.state.isAuthenticated ? <div className="ui primary button" onClick={this.onClickUser.bind(this)}>Sign In</div> :
                    <div className="ui primary button" onClick={this.logout.bind(this)}>Logout</div>
                  }

              </div>
            </div>
          </div>

          <Route exact path="/" render={props => <MainPage
                                                    typesOfIngredients={this.typesOfIngredients}
                                                    removeFromFavourites={this.removeFromFavourites}
                                                    favouritesList={this.state.favouritesList}
                                                    addToFavourites={this.addToFavourites}
                                                    shoppingList={this.state.shoppingList}
                                                    ingredients={this.state.ingredients}
                                                    onAddToBadge={this.handleAddToBadge}
                                                    onRemoveFromBadge={this.handleRemoveFromBadge}
                                                    onAddToShoppingList={this.handleAddToShoppingList}
                                                    menuList={this.state.menuList}
                                                    listOfIngredients={this.state.listOfIngredients}
                                                    updateIngredientsOfList={this.updateIngredientsOfList}
                                                    isAuthenticated = {this.state.isAuthenticated}
                                                  />}
          />
          <Route path="/recipes" render={(props) => <Recipe menuList={this.state.menuList}
                                                            onClickUser={this.onClickUser.bind(this)}
                                                            isAuthenticated = {this.state.isAuthenticated} />}  />
          <Route path="/shoppingList" render={props => <ShoppingCartList
                                                          ingredients={this.state.ingredients}
                                                          onRemoveFromList={this.handleRemoveFromList}
                                                          shoppingList={this.state.shoppingList}
                                                          onAddToShoppingList={this.handleAddToShoppingList}
                                                          onClickUser={this.onClickUser.bind(this)}
                                                            isAuthenticated = {this.state.isAuthenticated}
                                                        />}
          />
               <Route path="/favourites" render={props => <Favourite
                                                          menuList={this.state.menuList}
                                                          favouritesList={this.state.favouritesList}
                                                          onRemoveFromFavourites={this.removeFromFavourites}
                                                          onClickUser={this.onClickUser.bind(this)}
                                                          isAuthenticated = {this.state.isAuthenticated}
                                                        />}
          />

            {this.state.isToggleLogin ? <LoginForm onSetStateIsToggleLogin = {this.onSetStateIsToggleLogin.bind(this)}
                                                   isToggleLogin = {this.state.isToggleLogin}
                /> : null}


        </div>


      </Router>
    );
  }

  onClickUser(){
        this.setState({
            isToggleLogin: true
        })

    }


    onSetStateIsToggleLogin(){
        this.setState({
            isToggleLogin: false
        });

        const token = localStorage.getItem('token');

      if(token && token.length>3){
      this.setState({
           isAuthenticated: true
      })
      }



    }

    logout(){
      localStorage.setItem('token','');
      localStorage.clear();
      this.setState({
          isAuthenticated: false
      })
    }

    getUserName(user){
      console.log(user)
      this.setState({
          user: user
      })
    }


}

export default App;
