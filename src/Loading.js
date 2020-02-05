import React from 'react';
import  spinner from "./spinner.gif" ;

const Loading = () => {
    return (
   <div>
<img alt="loading" src={spinner} style={{width:"200px", margin:"auto",display:"block"}}></img>
        </div>
    );
}

export default Loading;