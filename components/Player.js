import { useCallback, useEffect, useState } from 'react'
import videojs from 'video.js'
import 'videojs-youtube'

const Player = (props) => {
  const [videoEl, setVideoEl] = useState(null)
  const onVideo = useCallback((el) => {
    setVideoEl(el)
  }, [])

  useEffect(() => {
    if (videoEl == null) return
    const player = videojs(videoEl, props)
    return () => {
      player.dispose()
    }
  }, [props, videoEl])

  return (
    <>
      <h1>NextJS-ийн тухай хичээл</h1>
      <div data-vjs-player>
        <video height ={500} ref={onVideo} className="video-js" playsInline />
      </div>
    </>
  )
}

export default Player
