import React, { Component } from 'react';
import axios from "axios";
import RepoItem from "./RepoItem";
import InfiniteScroll from"react-infinite-scroll-component";
import Loading from './Loading';
class  App extends Component {
  state={
    reposList:[],
    hasMore:true,
    page:2
  }
  componentDidMount()
{
  axios.get('https://api.github.com/search/repositories?q=created:>2020-01-04&sort=stars&order=desc').then(
    res=>{(res.data.items.length===0)?this.setState({hasMore:false}):this.setState({reposList:res.data.items})}
  )
}
  fetchMoreData =()=>
{const url='https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${this.state.page}'
  axios.get(url).then(
    res=>{this.setState({
      reposList: this.state.reposList.concat(res.data.items),page:this.state.page+1
    })
  console.log(res.data.items)}
  )
}
  render() { 
    return (
      <div>

         <h1 style={{textAlign:"center",color:"rgb(79, 79, 80)"}}>Trending repo on GitHub</h1>
         <div style={{marginLeft:"25%",marginRight:"25%"}}>
        <InfiniteScroll
          dataLength={this.state.reposList.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Loading></Loading>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.reposList.map(repo=>
            (<RepoItem repo={repo} key={repo.id}></RepoItem>))}
        </InfiniteScroll>
      </div></div>
    ) ;
  }
}
 
export default App;