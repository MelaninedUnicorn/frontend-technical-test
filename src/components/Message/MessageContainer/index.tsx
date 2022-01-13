import type { FC } from 'react'
import useSWR from 'swr';
import { getMessages } from '../../../api/messages';
import { getUsers } from '../../../api/users';
import Spinner from '../../../components/Common/Spinner';
import MessageList from '../../../components/Message/MessageList';
import { fetchAndValidate } from '../../../lib/fetch';

import styles from '../../../styles/MessageContainer.module.css'
import { getLoggedUserId } from '../../../utils/getLoggedUserId';
import Stack from '../../Common/Stack';
import MessageInput from '../MessageInput';
import { MessageContainerProps } from './MessageContainer.types';


const MessageContainer: FC = ({ conversationId }: MessageContainerProps) => {
  const id = getLoggedUserId();
  const { data: messages } = useSWR(
    getMessages(conversationId),
    fetchAndValidate)
  const { data: users } = useSWR(
    getUsers(),
    fetchAndValidate)
 
  return messages ? <div className={styles.container}>
    <Stack spacing={2}>
      <MessageList currentUserId={id} messages={messages} users={users} />
      <MessageInput conversationId={conversationId} />
    </Stack>
  </div> : <div className={styles.container}>
    <Spinner />
  </div>



}

export default MessageContainer