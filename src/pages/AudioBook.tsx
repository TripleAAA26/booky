import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { AudioType, Book } from '../../types.ts'

import { useGetBooks } from '../hooks/useGetBooks.ts'
import AudioPlayer from '../components/AudioPlayer.tsx'
import useAuth from '../hooks/useAuth.ts'
import Playlist from '../components/Playlist.tsx'

const AudioBook = () => {
    const [ selectedMusic, setSelectedMusic ] = useState('')
    const { audioBookId } = useParams()
    const { Books } = useGetBooks()
    const { loggedUser } = useAuth()

    const book = Books?.find((item: Book) => item.id === audioBookId)
    const isBought = !!loggedUser?.my_books.find(item => item === book?.id)


    return (
        <div className="container">
            <div className="book-details">
                <div>
                    <img src={book?.image_url} alt="book" className="book-img"/>
                </div>
                <div className="book-description">
                    <h1 className="book-header">{book?.name}</h1>
                    <p className="book-author">{book?.author}</p>
                    <div className="book-text">{book?.description}</div>
                    <div className='book-genre-container'>
                        {book?.genre.map((item: string) =>
                            <span key={item} className="book-genre">
                                {item}
                            </span>
                        )}
                    </div>
                    <div className='book-narrator'>
                        Oqıǵan: {book?.narrator}
                    </div>
                </div>
            </div>
            <div className="player-container">
                <div className="playlist">
                    <p>Sóz bası</p>
                    {book?.audio.map((item: AudioType, index: number) =>
                        <Playlist
                            key={item.section}
                            selectedMusic={selectedMusic}
                            setSelectedMusic={setSelectedMusic}
                            isBought={isBought}
                            isFirst={index === 0}
                            item={item}
                        />
                    )}
                </div>
                <AudioPlayer
                    selectedMusic={selectedMusic}
                    setSelectedMusic={setSelectedMusic}
                    isBought={isBought}
                    audioList={book?.audio}
                />
            </div>
        </div>
    )
}

export default AudioBook