import type { FC } from 'react'
import useSWR from 'swr';
import { getConversations } from '../../../api/conversations';
import Spinner from '../../../components/Common/Spinner';
import ConversationList from '../../../components/Conversation/ConversationList';
import { fetchAndValidate } from '../../../lib/fetch';

import styles from '../../../styles/ConversationContainer.module.css'
import { ConversationContainerProps } from './ConversationContainer.types';


const ConversationContainer: FC = ({userId}:ConversationContainerProps) => {
  const { data: conversations } = useSWR(
    getConversations(userId),
    fetchAndValidate)

  return conversations ? <div data-testid="conversation-container">
    <ConversationList conversations={conversations} /></div> : <div className={styles.container}>
    <Spinner />
  </div>



}

export default ConversationContainer