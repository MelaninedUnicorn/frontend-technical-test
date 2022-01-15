import moment from 'moment'
import type { FC } from 'react'



import Box from '../../Common/Box'
import Grid from '@mui/material/Grid'
import MessageCard from '../MessageCard'
import { MessageListProps } from './MessageList.types'
import styles from '../../../styles/MessageList.module.css'
import useSWR from 'swr'
import { getUsers } from '../../../api/users'
import { fetchAndValidate } from '../../../api/fetch'



const MessageList: FC<MessageListProps> = ({ messages = [], currentUserId }) => {

    const { data: users } = useSWR(
        getUsers(),
        fetchAndValidate)




    const renderMessages = () => {


        let i = 0;
        const messageCount = messages.length;
        const tempMessages = [];

        while (i < messageCount) {
            const previous = messages[i - 1];
            const current = messages[i];
            const next = messages[i + 1];
            const isMine = current.authorId === currentUserId;
            const senderInfo = users ? users.find(user => user.id === current.authorId) : { nickname: "" };

            const currMoment = moment(current.timestamp * 1000);
            let prevBySameAuthor = false;
            let nextBySameAuthor = false;
            let startsSequence = true;
            let endsSequence = true;
            let showTimestamp = true;

            if (previous) {

                const prevMoment = moment(previous.timestamp * 1000);
                const previousDuration = moment.duration(currMoment.diff(prevMoment));
                prevBySameAuthor = previous.id === current.authorId;

                if (prevBySameAuthor && previousDuration.as('hours') < 1) {
                    startsSequence = false;
                }

                if (previousDuration.as('hours') < 1) {
                    showTimestamp = false;
                }
            }

            if (next) {
                const nextMoment = moment(next.timestamp * 1000);
                const nextDuration = moment.duration(nextMoment.diff(currMoment));
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

        <Box data-testid="message-list" className={styles["message-list-container"]} sx={{ bgcolor: 'background.paper' }}>
            {messages.length > 0 ? renderMessages() : null}
        </Box>

    )
}

export default MessageList