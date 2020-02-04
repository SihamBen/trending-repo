import React from 'react';
import RepoItem from './RepoItem';
import PropTypes from "prop-types";
const Repos = (props) => {
    return (
        <div>
            {props.reposList.map(repo=>
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