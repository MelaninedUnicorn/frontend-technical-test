import type { FC } from 'react'
import { useRouter } from 'next/router';
import ConversationContainer from '../../components/Conversation/ConversationContainer';



const Conversation: FC = () => {
  const router = useRouter()
  const { id } = router.query
console.log(router)
  return <ConversationContainer id={id} />

}

export default Conversation