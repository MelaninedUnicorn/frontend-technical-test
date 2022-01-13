import type { FC } from 'react'
import { useRouter } from 'next/router';
import ConversationContainer from '../../components/Conversation/ConversationContainer';



const Conversation: FC = () => {
  const router = useRouter()
  const { id } = router.query
  return <ConversationContainer userId={id} />

}

export default Conversation