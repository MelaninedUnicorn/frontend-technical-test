import type { FC } from 'react'
import ConversationList from '../components/Conversation/ConversationList';
import useConversations from '../helpers/useConversations';
import styles from '../styles/Conversation.module.css'

const Conversation: FC = () => {
  const { conversations } = useConversations(1);
  console.log(conversations);
  const defaultData = [
    {
      "id": 1,
      "recipientId": 2,
      "recipientNickname": "Jeremie",
      "senderId": 1,
      "senderNickname": "Thibaut",
      "lastMessageTimestamp": 1625637849
    },
    {
      "id": 2,
      "recipientId": 3,
      "recipientNickname": "Patrick",
      "senderId": 1,
      "senderNickname": "Thibaut",
      "lastMessageTimestamp": 1620284667
    },
    {
      "id": 3,
      "recipientId": 1,
      "recipientNickname": "Thibaut",
      "senderId": 4,
      "senderNickname": "Elodie",
      "lastMessageTimestamp": 1625648667
    }
  ]
  return (
    <div className={styles.container}>
      <ConversationList conversations={defaultData} />
    </div>
  )
}

export default Conversation