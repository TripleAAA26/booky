import { useEffect, useState } from 'react'
import { Slider } from 'antd'
import { MdPauseCircle, MdPlayCircle, MdPlaylistAdd, MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2'
import { Howl, Howler } from 'howler'

import { formatTime } from '../helpers/formatTime.ts'
import { AudioType } from '../../types.ts'

interface AudioPlayerProps {
    selectedMusic: string
    setSelectedMusic: (arg: string) => void
    isBought: boolean
    audioList: AudioType[]
}

const AudioPlayer = ({ selectedMusic, setSelectedMusic, isBought, audioList }: AudioPlayerProps) => {
    const [ currentTime, setCurrentTime ] = useState(0)
    const [ isPlaying, setIsPlaying ] = useState(false)
    const [ music, setMusic ] = useState<Howl>()
    const [ volume, setVolume ] = useState(100)
    Howler.volume(volume / 100)

    const PlayPauseIcon = isPlaying ? MdPauseCircle : MdPlayCircle
    const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave

    function onPlayNext() {
        if (!isBought || !selectedMusic) return

        const currentIndex = audioList.findIndex(
            (item) => item.audioUrl === selectedMusic
        )
        const nextSong = audioList[currentIndex + 1]

        if (!nextSong) return  setSelectedMusic(audioList[0].audioUrl)

        setSelectedMusic(nextSong.audioUrl)
    }

    function onPlayPrevious() {
        if (!isBought || !selectedMusic) return

        const currentIndex = audioList.findIndex(
            (item) => item.audioUrl === selectedMusic
        )
        const previousSong = audioList[currentIndex - 1]

        if (!previousSong) return  setSelectedMusic(audioList[audioList.length - 1].audioUrl)

        setSelectedMusic(previousSong.audioUrl)
    }


    useEffect(() => {
        const newMusic = new Howl({
            src: [ selectedMusic ],
            autoplay: false,
            loop: false,
            format: [ 'mp3' ],
            onplay: () => setIsPlaying(true),
            onstop: () => setIsPlaying(false),
            onend: () => setIsPlaying(false),
            onpause: () => setIsPlaying(false),
        })

        setMusic(newMusic)
    }, [ selectedMusic ])



    function handlePlay() {
        if (music?.state() !== 'loaded') return

        if (!isPlaying) {
            music.play()
            setIsPlaying(true)
        } else {
            music.pause()
            setIsPlaying(false)
        }
    }


    function toggleMute() {
        if (volume === 0) {
            setVolume(100)
        } else {
            setVolume(0)
        }
    }

    function handleSeekChange(seekTime: number) {
        setCurrentTime(seekTime)
        music?.seek(seekTime)
    }

    useEffect(() => {
        let timerInterval: number
        if (music) {
            const updaterTimer = () => {
                const seekTimer = Math.round(music.seek())
                setCurrentTime(seekTimer)
            }
            timerInterval = setInterval(updaterTimer, 1000)
        }
        return () => {
            clearInterval(timerInterval)
        }
    }, [ music ])

    useEffect(() => {
        return () => {
            music?.unload()
        }
    }, [ music ])


    return (
        <div className="player">
            <div className="player-controllers">
                <div className="player-icon-container">
                    <MdPlaylistAdd className="player-icon" size={32}/>
                    <MdSkipPrevious onClick={onPlayPrevious} className="player-icon" size={45}/>
                    <PlayPauseIcon onClick={handlePlay} className="player-icon" size={55}/>
                    <MdSkipNext onClick={onPlayNext} className="player-icon" size={45}/>
                </div>
                <div className="player-duration-number">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(music?.duration() || 0)}</span>
                </div>
                <div className="player-duration-slider">
                    <Slider
                        min={0}
                        max={music?.duration()}
                        value={currentTime}
                        onChange={handleSeekChange}
                    />
                </div>
            </div>
            <div className="player-volume-slider">
                <Slider vertical value={volume} onChange={(value) => setVolume(value)}/>
                <VolumeIcon onClick={toggleMute} className="player-icon" size={25}/>
            </div>
        </div>
    )
}

export default AudioPlayer