import React from 'react';
import classes from "./Post.module.scss";

const Post = ({title}) => {
    console.log(1);
    return (
        <div className={classes.Post}>
            <div className={classes.Title}>
                {title}
            </div>
        </div>
    );
};

export default React.memo(Post, (prevProps, nextProps) => {
    return true;
});