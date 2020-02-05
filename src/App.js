import React, { Component } from 'react';
import axios from "axios";
import Repos from "./Repos";
class  App extends Component {
  state={
    reposList:[],
    loading:true,
  }
componentDidMount()
{
  axios.get('https://api.github.com/search/repositories?q=created:>2020-01-04&sort=stars&order=desc').then(
    res=>{this.setState({reposList:res.data.items,loading:false})
  console.log(res.data.items)}
  )
}
  render() { 
    return (
      <div>
        
        <Repos loading={this.state.loading} reposList={this.state.reposList}></Repos>
      </div>
    ) ;
  }
}
 
export default App;