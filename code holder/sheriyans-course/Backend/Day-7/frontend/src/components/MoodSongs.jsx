import { useState } from 'react'
import './MoodSongs.css'

const MoodSongs = ({ Songs }) => {
    const [isPlaying, setisPlaying] = useState(null)

    const handlePlayPause = (index) => {
        if (isPlaying === index) {
            setisPlaying(null)
        } else {
            setisPlaying(index)
        }
    }
    return (
        <div className='mood-songs'>
            <h2>Recommended Songs</h2>

            {Songs.map((song, index) => (
                <div className='song' key={index}>
                    <div className="title">
                        <h3>{song.title}</h3>
                        <p>{song.artist}</p>
                    </div>
                    <div>
                        <audio
                            src={song.audio} style={{
                                display: 'none'
                            }} controls
                            autoPlay={isPlaying === index}
                        ></audio>
                        <button onClick={() => handlePlayPause(index)}>
                            {isPlaying === index ? <i className='ri-pause-line'></i> : 'play'}
                        </button>
                    </div>
                    <div className="play-pause-button">

                        <i className='ri-play-circle-fill'></i>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default MoodSongs
