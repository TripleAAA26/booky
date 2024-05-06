import { Rate } from 'antd'
import { FaUserCircle } from 'react-icons/fa'

import { Comment } from '../../types.ts'

const BookCommentItem = ({ comment }: { comment: Comment }) => {

    return (
        <li className="comment-item">
            <FaUserCircle size={50} style={{ color: '#2d71ae' }}/>
            <div className="comment-item-text">
                <div className="comment-item-name-rating">
                    <p>{comment.user_name}</p>
                    <Rate disabled defaultValue={comment.rating}/>
                </div>
                <p>{comment.text}</p>
            </div>
        </li>
    )
}

export default BookCommentItem