import React from 'react';
 import PropTypes from "prop-types";
const RepoItem = (props) => {
    return (
        <div>
            {props.repo.id}
        </div>
    );
}
RepoItem.propTypes={
     repo:PropTypes.object.isRequired
     }
export default RepoItem;