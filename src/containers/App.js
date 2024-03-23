 import React, {Component} from "react";
 import CardList from "../components/CardList";
 import SearchBox from '../components/SearchBox';
 import './App.css';
 import Scroll from '../components/Scroll';


 class App extends Component {
    constructor() {
        super()
        this.state = {
            robots : [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>this.setState({robots:users}))
    }

    onSearchchange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log(event.target.value);
    }
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
        return !robots.length ? // Same thing as ---> if (robots.length === 0)
        <h1>Loading</h1> : 
        (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={this.onSearchchange}/>
                <Scroll>
                  <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
            );
            }
    }


 export default App;