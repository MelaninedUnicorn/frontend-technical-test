import type { FC } from 'react'
import useSWR from 'swr';
import { getConversations } from '../../../api/conversations';
import Spinner from '../../../components/Common/Spinner';
import ConversationList from '../../../components/Conversation/ConversationList';
import { fetchAndValidate } from '../../../lib/fetch';

import styles from '../../../styles/ConversationContainer.module.css'


const ConversationContainer: FC = () => {
  const { data: conversations } = useSWR(
    getConversations(1),
    fetchAndValidate)

  return conversations ? <div className={styles.container}>
    <ConversationList conversations={conversations} /></div> : <div className={styles.container}>
    <Spinner />
  </div>



}

export default ConversationContainer