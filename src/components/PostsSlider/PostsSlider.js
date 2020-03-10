import React, {useCallback, useEffect, useState} from 'react';
import classes from "./PostsSlider.module.scss"
import {Swipeable} from "react-touch";
import Post from "./Post/Post";

const PostsSlider = () => {

    const [state, setState] = useState({
        activePostId: 0,
        interval: null
    });

    let setSlideInterval = useCallback(()=>{
        return setInterval(() => {
            setState(prevState => {
                return {
                    ...prevState,
                    // activePostId: prevState.activePostId === 3 ? 0 : ++prevState.activePostId
                }
            })
        }, 5000)
    },[]);

    useEffect(() => {
        setState(prevState => {
            return{
                ...prevState,
                interval: setSlideInterval()
            }
        })
    }, [setSlideInterval]);

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
            <Swipeable onSwipeLeft={()=>{
                clearInterval(state.interval);
                setState(prevState => {
                    return{
                        ...prevState,
                        activePostId: prevState.activePostId === 3 ? 3 : ++prevState.activePostId,
                        interval: setSlideInterval()
                    }
                })
            }} onSwipeRight={()=>{
                clearInterval(state.interval);
                setState(prevState => {
                    return{
                        ...prevState,
                        activePostId: prevState.activePostId === 0 ? 0 : --prevState.activePostId,
                        interval: setSlideInterval()
                    }
                })
            }}>
                <div className={postWrapCls.join(" ")}>
                    <Post title="Неотложная помощь"/>
                    <Post title="2"/>
                    <Post title="3"/>
                    <Post title="4"/>
                </div>
            </Swipeable>
            <div className={classes.Dots}>
                {dots}
            </div>

        </div>
    );
};

export default PostsSlider;