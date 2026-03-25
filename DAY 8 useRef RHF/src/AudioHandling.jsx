import React, { useRef } from 'react'

const AudioHandling = () => {
    let audioRef = useRef()
  return (
    <div className='h-screen flex justify-center flex-col items-center'>
      <h1>LAST MATHOD</h1>
      <audio
      ref={audioRef}
      src="/fahhhhh.mp3"></audio>
      <button
      onClick={(e)=>{
        audioRef.current.play()
      }}
      >PLAY</button>
      <button
      onClick={(e)=>{
        audioRef.current.pause()
      }}
      >PAUSE</button>
    </div>
  )
}

export default AudioHandling
