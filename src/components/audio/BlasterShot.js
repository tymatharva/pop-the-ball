import React, { useEffect, useRef } from 'react'
import { useAudio } from 'react-use'

// Styles
import blaster from "../../assets/AudioClip/blaster_shot.m4a"

const BlasterShot = ({ variable }) => {
    const audioRef = useRef(null);
    // const [audio, state, controls, ref] = useAudio({
    //     src: blaster,
    //     autoPlay: true,
    // })

    // useEffect(() => {
    //         playSound();
    //     }, [variable])

    //     function playSound(){
    //         console.log("Play Blaster sound")
    //         controls.play();
    //         return ;
    //     }
        
    return (
        <div>
            {/* Audio Starts */}
            {/* {audio}
                {console.log(audio)} */}
                {console.log(audioRef)}
                <audio ref={audioRef}>
                {console.log(audioRef)}
                    <source src={blaster} />
                </audio>
            {/* {controls.play()} */}
             {/* {
                variable ?  playSound() : null
            }  */}
             {
                variable ? audioRef.current.play() : null
            } 
            {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
            {/* <button onClick={controls.pause}>Pause</button>
            <button onClick={controls.play}>Play</button> */}
        </div>
    )
}

export default BlasterShot
