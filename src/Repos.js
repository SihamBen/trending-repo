import React from 'react';
import RepoItem from './RepoItem';
import Loading from './Loading';
import PropTypes from "prop-types";
const Repos = ({loading,reposList}) => {
    console.log(loading)
    return (
        <div style={{marginLeft:"25%",marginRight:"25%"}}>
            <h1 style={{textAlign:"center",color:"rgb(79, 79, 80)"}}>Trending repositories on GitHub</h1>
            
            {(loading)?<Loading></Loading>:reposList.map(repo=>
            (<RepoItem repo={repo} key={repo.id}></RepoItem>)
                )}
        </div>
    );
}
 Repos.propTypes={
loading:PropTypes.bool.isRequired,
reposList:PropTypes.array.isRequired
 }
export default Repos;