import type { FC } from 'react'
import moment from 'moment';
import styles from '../../../styles/MessageCard.module.css';
import { MessageCardProps } from './MessageCard.types';
import { timeago } from '../../../lib/dates';

const MessageCard: FC = ({
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp,
    senderInfo
}: MessageCardProps) => {

    const { timestamp } = data;
    const friendlyTimestamp = timeago(timestamp * 1000);
    const { nickname, id } = senderInfo;

    return (
        <div className={[
            'message',
            `${isMine ? 'mine' : ''}`,
            `${startsSequence ? 'start' : ''}`,
            `${endsSequence ? 'end' : ''}`
        ].join(' ')}>
            {
                showTimestamp &&
                <div className="timestamp">
                    {friendlyTimestamp}
                </div>
            }
            {startsSequence && !isMine && <div className="user-name" align={'left'} >
                {nickname}
            </div>}
            <div className="bubble-container">

                <div className="bubble" title={friendlyTimestamp}>
                    {data.body}
                </div>
            </div>
        </div>
    );
}

export default MessageCard;