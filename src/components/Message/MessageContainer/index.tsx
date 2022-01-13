import type { FC } from 'react'
import useSWR from 'swr';
import { getMessages } from '../../../api/messages';
import Spinner from '../../../components/Common/Spinner';
import MessageList from '../../../components/Message/MessageList';
import { fetchAndValidate } from '../../../lib/fetch';

import styles from '../../../styles/MessageContainer.module.css'


const MessageContainer: FC = () => {
  const { data: messages } = useSWR(
    getMessages(1),
    fetchAndValidate) 

  return messages ? <div className={styles.container}>
    <MessageList messages={messages} /></div> : <div className={styles.container}>
    <Spinner />
  </div>



}

export default MessageContainer