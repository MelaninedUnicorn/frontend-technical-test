import type { FC } from 'react'
import useSWR from 'swr';
import { getMessages } from '../../../utils/messages';

import Spinner from '../../../components/Common/Spinner';
import MessageList from '../../../components/Message/MessageList';
import { fetchAndValidate } from '../../../utils/fetch';

import styles from '../../../styles/MessageContainer.module.css'
import Stack from '../../Common/Stack';
import MessageInput from '../MessageInput';
import { MessageContainerProps } from './MessageContainer.types';
import { loggedUserId } from '../../../pages/_app';


const MessageContainer: FC <MessageContainerProps>= ({ conversationId }) => {
 
  const { data: messages } = useSWR(
    getMessages(conversationId),
    fetchAndValidate)
  
 
  return messages ? <div className={styles.container}>
    <Stack spacing={2}>
      <MessageList currentUserId={loggedUserId} messages={messages} />
      <MessageInput conversationId={conversationId} />
    </Stack>
  </div> : <div className={styles.container}>
    <Spinner />
  </div>



}

export default MessageContainer