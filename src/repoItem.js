import React from 'react';
import './repoItem.css';
 import PropTypes from "prop-types";
 import moment from "moment";
const RepoItem = ({repo}) => {

let createdAt = moment(repo.created_at);
let diff = moment().diff(createdAt); 
let duration = parseInt(moment.duration(diff).asDays());



    
    return (
    <div className="repoItem">
    <div className="avatar"><img alt='' src={repo.owner.avatar_url}></img></div>
    <div className="infos"><h2>{repo.name}</h2>
           <p>{(repo.description===null)?"No description provided":repo.description}</p>
           <p>
           <span className="stars">stars:{repo.stargazers_count}</span>
           <span className="issues">issues :{repo.open_issues_count} </span>
<span className="date">Submitted {duration} days ago by <b>{repo.owner.login}</b></span></p>
</div>
        </div>
    );
}
RepoItem.propTypes={
     repo:PropTypes.object.isRequired
     }
export default RepoItem;