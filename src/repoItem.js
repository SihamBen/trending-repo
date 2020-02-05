import React from 'react';
import './repoItem.css';
 import PropTypes from "prop-types";
const RepoItem = (props) => {
    return (
    <div className="repoItem">
    <div className="avatar"><img alt='' src={props.repo.owner.avatar_url}></img></div>
    <div className="infos"><h3>{props.repo.name}</h3>
           <p>{(props.repo.description===null)?"No description provided":props.repo.description}</p>
           <p><span className="issues">issues :{props.repo.open_issues_count} </span>
           <span className="stars">stars:{props.repo.stargazers_count}</span>
           <span>{props.repo.created_at} by {props.repo.owner.login}</span></p>
</div>
        </div>
    );
}
RepoItem.propTypes={
     repo:PropTypes.object.isRequired
     }
export default RepoItem;