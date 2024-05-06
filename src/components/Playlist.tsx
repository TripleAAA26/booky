import { PiEqualizerBold } from 'react-icons/pi'
import { TbLock } from 'react-icons/tb'
import { AudioType } from '../../types.ts'
import { Popover } from 'antd'


interface PlaylistProps {
    selectedMusic: string
    setSelectedMusic: (arg: string) => void
    isBought: boolean
    isFirst: boolean
    item: AudioType
}

const Playlist = ({
                      selectedMusic,
                      setSelectedMusic,
                      isBought,
                      isFirst,
                      item
                    }: PlaylistProps) => {

    function handleChoose() {
        if (!isFirst && !isBought) return
        setSelectedMusic(item.audioUrl)
    }

    return (
        <Popover content='Qalǵan bólimlerdi esitiw ushın, kitaptı satıp alıń. Satıp alıw'>
            <div className={`audio-url ${!isFirst && !isBought && 'opacity-60'}`} onClick={handleChoose}>
                <span>
                    {item.section}
                </span>
                {selectedMusic === item.audioUrl &&
                    <PiEqualizerBold size={20} className="player-icon"/>
                }
                {!isFirst && !isBought &&
                    <TbLock size={20} className="player-icon"/>
                }
            </div>
        </Popover>
    )
}

export default Playlist