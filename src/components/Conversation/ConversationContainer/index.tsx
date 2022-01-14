import type { FC } from 'react'
import useSWR from 'swr';
import { getConversations } from '../../../api/conversations';
import Spinner from '../../../components/Common/Spinner';
import ConversationList from '../../../components/Conversation/ConversationList';
import { fetchAndValidate } from '../../../api/fetch';

import styles from '../../../styles/ConversationContainer.module.css'
import { ConversationContainerProps } from './ConversationContainer.types';
import { Conversation } from '../../../types/conversation';


const ConversationContainer: FC<ConversationContainerProps> = ({ userId = undefined }) => {
  const { data: conversations, isValidating, error } = useSWR(
    getConversations(userId),
    fetchAndValidate)


  return (<>
    {isValidating && !error ? <div className={"container"}><Spinner /></div> : null}
    {error ? <div>{error.message}</div> : null}
    {!conversations?.length && !isValidating && !error ? (
      <div>Vous n&apos;avez pas de messages</div>
    ) : (
      <div data-testid="conversation-container">
        <ConversationList conversations={conversations} />
      </div>
    )}
  </>)




}

export default ConversationContainer