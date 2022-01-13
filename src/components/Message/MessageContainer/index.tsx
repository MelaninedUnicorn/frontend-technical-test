import type { FC } from 'react'
import useSWR from 'swr';
import { getMessages } from '../../../api/messages';
import Spinner from '../../../components/Common/Spinner';
import MessageList from '../../../components/Message/MessageList';
import { fetchAndValidate } from '../../../lib/fetch';

import styles from '../../../styles/MessageContainer.module.css'
import Stack from '../../Common/Stack';
import MessageInput from '../MessageInput';
import { MessageContainerProps } from './MessageContainer.types';


const MessageContainer: FC = ({conversationId}:MessageContainerProps) => {
    const { data: messages } = useSWR(
    getMessages(conversationId),
    fetchAndValidate) 
console.log(messages,conversationId)
  return messages ? <div className={styles.container}>
    <Stack spacing={2}>
    <MessageList messages={messages} /> 
    <MessageInput conversationId={conversationId} />
  </Stack>
    </div> : <div className={styles.container}>
    <Spinner />
  </div>



}

export default MessageContainer