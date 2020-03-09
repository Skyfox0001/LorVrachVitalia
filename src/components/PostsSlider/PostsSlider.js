import React, {useEffect, useState} from 'react';
import classes from "./PostsSlider.module.scss"

const PostsSlider = () => {

    const [state, setState] = useState({
        activePostId: 0
    });

    useEffect(() => {
        setInterval(() => {
            setState(prevState => {
                return {
                    ...prevState,
                    activePostId: prevState.activePostId === 3 ? 0 : ++prevState.activePostId
                }
            })
        }, 5000)
    }, []);

    const postWrapCls = [classes.PostWrap];

    let dots = [0, 0, 0, 0];
    dots[state.activePostId] = 1;
    dots = dots.map((dot, number) => (
        dot === 0 ?
            <div className={classes.Dot} key={number}/> :
            <div className={classes.Dot + " " + classes.open} key={number}/>
    ));
    if (state.activePostId === 0) {
        postWrapCls.push(classes.first);
    } else if (state.activePostId === 1) {
        postWrapCls.push(classes.second);
    } else if (state.activePostId === 2) {
        postWrapCls.push(classes.third);
    } else if (state.activePostId === 3) {
        postWrapCls.push(classes.fourth);
    }

    return (
        <div className={classes.PostsSlider}>
            <div className={postWrapCls.join(" ")}>
                <div className={classes.Post}>1</div>
                <div className={classes.Post}>2</div>
                <div className={classes.Post}>3</div>
                <div className={classes.Post}>4</div>
            </div>
            <div className={classes.Dots}>
                {dots}
            </div>

        </div>
    );
};

export default PostsSlider;