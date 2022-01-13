import type { FC } from 'react'
import useSWR from 'swr';
import { getConversations } from '../../../utils/conversations';
import Spinner from '../../../components/Common/Spinner';
import ConversationList from '../../../components/Conversation/ConversationList';
import { fetchAndValidate } from '../../../utils/fetch';

import styles from '../../../styles/ConversationContainer.module.css'
import { ConversationContainerProps } from './ConversationContainer.types';


const ConversationContainer: FC<ConversationContainerProps> = ({userId}) => {
  const { data: conversations } = useSWR(
    getConversations(userId),
    fetchAndValidate)

  return conversations ? <div data-testid="conversation-container">
    <ConversationList conversations={conversations} /></div> : <div className={"container"}>
    <Spinner />
  </div>



}

export default ConversationContainer