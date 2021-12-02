import React, { useState, useEffect } from 'react';
import {robots }from '../components/robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import './app.css'
const App = () =>{
    
// constructor(){
//     super()

//     this.state ={
//         robots: robots,
//         searchfield:''
//     }
// }
// life cycle
const [robots, setRobots] = useState([])
const [searchfield, setSearchfield] = useState('')
// componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then( response => response.json())
//     .then( users => this.setState({robots:users}))
// }

useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => setRobots(users))
}, [])

// this method filter the array element based on the value inputed
 const onSearchChange = (event)=>{
   setSearchfield( event.target.value )

    }


        // filteredrobots change as the setfield state changes
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        })
        if(robots.length ===0){
            return(
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }else{

            return(
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange = {onSearchChange} searchfield={searchfield}/>
                    <Scroll>
                        <CardList robots= {filteredRobots}/> 
                    </Scroll>
                </div>
        
            )
        }

    
    }
export default App;