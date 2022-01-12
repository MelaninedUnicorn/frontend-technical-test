import type { FC } from 'react'
import useSWR from 'swr';
import { getConversations } from '../api/conversations';
import ConversationList from '../components/Conversation/ConversationList';
import { fetchAndValidate } from '../lib/fetch';

import styles from '../styles/Conversation.module.css'


const Conversation: FC = () => {
  const { data: conversations } = useSWR(
    getConversations(1),
    fetchAndValidate)

  return conversations ? <div className={styles.container}>
    <ConversationList conversations={conversations} /></div> : <div className={styles.container}>
    <p>Loading...</p>
  </div>



}

export default Conversation