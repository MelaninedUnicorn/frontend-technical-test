import type { FC } from 'react'
import moment from 'moment';
import styles from '../../../styles/MessageCard.module.css';
import { MessageCardProps } from './MessageCard.types';
import { monthDayYearAtTime } from '../../../utils/dates';

const MessageCard: FC<MessageCardProps> = ({
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp,
    senderInfo
}) => {

    const { timestamp } = data;
    const friendlyTimestamp = moment(timestamp * 1000).format('LLLL');
    const friendlyTimestampBuble = monthDayYearAtTime(timestamp * 1000);
    const { nickname } = senderInfo;

    return (
        <div data-testid="message-card" className={`${styles["message"]} ${isMine ? styles["mine"] : ''} ${startsSequence ? styles["start"] : ''} ${endsSequence ? styles["end"] : ''}`}>
            {
                showTimestamp &&
				<div className={`${styles["timestamp"]}`}>
				    {friendlyTimestamp}
				</div>
            }
            {startsSequence && !isMine && <div className={`${styles["user-name"]}`} align={'left'} >
                {nickname}
            </div>}
            <div className={`${styles["bubble-container"]}`}>
                <div className={`${styles["bubble"]}`} title={friendlyTimestampBuble}>
                    {data.body}
                </div>
            </div>
        </div>
    );
}

export default MessageCard;