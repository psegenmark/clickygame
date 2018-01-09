import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedScore: 0,
    pickedId: []
  };

  
  shuffleArray = () => {
    var friendsLength = this.state.friends.length;

    var newNumbs = [];

    while (friendsLength>newNumbs.length) {
    var randNum = Math.floor(Math.random()*12)  
      if(!newNumbs.includes(randNum)){
        newNumbs.push(randNum);
      }
    }

  var builderArr = [];
  for (let i=0; i<friendsLength; i++) {
    builderArr.push(this.state.friends[newNumbs[i]]);
  }  
  this.setState({
    friends: builderArr
  });

  }

  addScore = (id) => {
    
    var newArr = this.state.pickedId;
    
    if(!this.state.pickedId.includes(id)){
      this.setState({
        clickedScore: this.state.clickedScore+1
      })
      newArr.push(id);
      this.setState({
        pickedId: newArr
      })
    }
    else {
      this.setState({
        clickedScore: 0,
        pickedId: []
      })
    }

  };

    removeFriend = (id) => {
      
      this.shuffleArray();
      this.addScore(id);
  
    }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render = () => 
    {
//      this.state.friends.map(friend => console.log(friend.id))
      return (
    // const shuffledPosts = shuffleArray(this.state.friends);
    <div>  
    <div><h2> How many pics can you click without repeating yourself?? </h2></div>
    
     <div> <h1> Your Score so far: {this.state.clickedScore} </h1> </div>
      
      <Wrapper>
        <Title>Clicky Game</Title> 
        {this.state.friends.map((friend, index) => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
           />
        ))}
      </Wrapper>
      </div>
      )
    }

  };

  

export default App;
