import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './Videoitem';

const videoList = ({videos, onVideoSelect}) =>{

    const listofVideos = videos.map((video, id )=><VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)
    return (
        <Grid container spacing={6}>
            {listofVideos}
        </Grid>
    )
}

export default videoList;