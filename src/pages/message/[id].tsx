import type { FC } from 'react'
import { useRouter } from 'next/router';
import MessageContainer from '../../components/Message/MessageContainer';



const Message: FC = () => {
  const router = useRouter()
  const { id } = router.query

  return <MessageContainer conversationId={id} />

}

export default Message