import React from 'react';
import './repoItem.css';
 import PropTypes from "prop-types";
const RepoItem = ({repo}) => {
    return (
    <div className="repoItem">
    <div className="avatar"><img alt='' src={repo.owner.avatar_url}></img></div>
    <div className="infos"><h3>{repo.name}</h3>
           <p>{(repo.description)?repo.description:"No description provided"}</p>
           <p>
           <span className="stars">Stars: {repo.stargazers_count}</span>
           <span className="issues">Issues: {repo.open_issues_count} </span>
           <span className="owner">{repo.created_at} By {repo.owner.login}</span></p>
</div>
        </div>
    );
}
RepoItem.propTypes={
     repo:PropTypes.object.isRequired
     }
export default RepoItem;