import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './trackPlayer.css';

const TrackPlayer = (props) => {

    const headerPlayer= '«' + (props.title) + '» de '+ (props.author);

    return(
        
        <AudioPlayer
            className="player"
            autoPlay={true}
            header={headerPlayer}
            showSkipControls={false}
            src={`http://localhost:3001/track/${props.fileId}`}/>
        
    )
}

export default TrackPlayer;
 