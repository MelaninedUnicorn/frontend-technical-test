import type { FC } from 'react'
import { useRouter } from 'next/router';
import ConversationContainer from '../components/Conversation/ConversationContainer';
import { getLoggedUserId } from '../utils/getLoggedUserId';



const Conversation: FC = () => {
  const id = getLoggedUserId();
  return <ConversationContainer userId={id} />

}

export default Conversation