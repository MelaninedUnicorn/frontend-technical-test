import moment from 'moment'
import type { FC } from 'react'

import { Message } from '../../../types/message'

import Box from '../../Common/Box'
import List from '../../Common/List'
import MessageCard from '../MessageCard'
import { MessageListProps } from './MessageList.types'
import styles from '../../../styles/MessageList.module.css'


const MessageList: FC = ({ messages = [], id = 2, 
    users = [
    {
        "id": 1,
        "nickname": "Thibaut",
        "token": "xxxx"
    },
    {
        "id": 2,
        "nickname": "Jeremie",
        "token": "xxxx"
    },
    {
        "id": 3,
        "nickname": "Patrick",
        "token": "xxxx"
    },
    {
        "id": 4,
        "nickname": "Elodie",
        "token": "xxxx"
    }
] }: MessageListProps) => {
    console.table(messages);
    const renderMessages = () => {


        let i = 0;
        let messageCount = messages.length;
        let tempMessages = [];

        while (i < messageCount) {
            let previous = messages[i - 1];
            let current = messages[i];
            let next = messages[i + 1];
            let isMine = current.authorId === id;
            const senderInfo = users.find(user => user.id === current.authorId);

            let currMoment = moment(current.timestamp * 1000);
            let prevBySameAuthor = false;
            let nextBySameAuthor = false;
            let startsSequence = true;
            let endsSequence = true;
            let showTimestamp = true;

            if (previous) {

                let prevMoment = moment(previous.timestamp * 1000);
                let previousDuration = moment.duration(currMoment.diff(prevMoment));
                prevBySameAuthor = previous.id === current.authorId;

                if (prevBySameAuthor && previousDuration.as('hours') < 1) {
                    startsSequence = false;
                }

                if (previousDuration.as('hours') < 1) {
                    showTimestamp = false;
                }
            }

            if (next) {
                let nextMoment = moment(next.timestamp * 1000);
                let nextDuration = moment.duration(nextMoment.diff(currMoment));
                nextBySameAuthor = next.id === current.authorId;

                if (nextBySameAuthor && nextDuration.as('hours') < 1) {
                    endsSequence = false;
                }
            }

            tempMessages.push(
                <MessageCard
                    key={i}
                    isMine={isMine}
                    startsSequence={startsSequence}
                    endsSequence={endsSequence}
                    showTimestamp={showTimestamp}
                    data={current}
                    senderInfo={senderInfo}
                />
            );

            // Proceed to the next message.
            i += 1;
        }

        return tempMessages;
    }

    return (
        <Box className={styles.messageListContainer} sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {renderMessages()}
        </Box>
    )
}

export default MessageList