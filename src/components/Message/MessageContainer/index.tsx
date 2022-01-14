import type { FC } from 'react'
import useSWR from 'swr';
import { getMessages } from '../../../api/messages';
import Spinner from '../../../components/Common/Spinner';
import MessageList from '../../../components/Message/MessageList';
import { fetchAndValidate } from '../../../api/fetch';
import styles from '../../../styles/MessageContainer.module.css'
import Stack from '../../Common/Stack';
import MessageInput from '../MessageInput';
import { MessageContainerProps } from './MessageContainer.types';
import { loggedUserId } from '../../../pages/_app';


const MessageContainer: FC<MessageContainerProps> = ({ conversationId }) => {

  const { data: messages, isValidating, error } = useSWR(
    getMessages(conversationId),
    fetchAndValidate)

  return (<div data-testid="message-container">
    {isValidating && !error ? <div className={"container"}><Spinner /></div> : null}
    {error ? <div>{error.message}</div> : null}
    {!messages?.length && !isValidating && !error ? (
      <div>Il n&apos;y a pas encore de message</div>
    ) : (
      <div className={styles.container}>
        <Stack spacing={2}>
          <MessageList currentUserId={loggedUserId} messages={messages} />
          <MessageInput conversationId={conversationId} />
        </Stack>
      </div>
    )}
  </div>)


}

export default MessageContainer