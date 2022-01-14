import type { FC } from 'react'
import useSWR from 'swr';
import { getConversations } from '../../../api/conversations';
import Spinner from '../../../components/Common/Spinner';
import ConversationList from '../../../components/Conversation/ConversationList';
import { fetchAndValidate } from '../../../api/fetch';
import styles from '../../../styles/ConversationContainer.module.css'
import { ConversationContainerProps } from './ConversationContainer.types';



const ConversationContainer: FC<ConversationContainerProps> = ({ userId = undefined }) => {
  const { data: conversations, isValidating, error } = useSWR(
    getConversations(userId),
    fetchAndValidate)


  return (<>
    {isValidating && !error ? <div className={styles["spinner-container"]}><Spinner /></div> : null}
    {!conversations?.length && !isValidating && !error ? (
      <div className={styles["conversation-container-empty"]}>Vous n&apos;avez pas de messages</div>
    ) : (
      <div data-testid="conversation-conversation-list-container">
        <ConversationList conversations={conversations} />
      </div>
    )}
  </>)




}

export default ConversationContainer