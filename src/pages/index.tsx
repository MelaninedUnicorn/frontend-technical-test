import type { FC } from 'react'
import styles from '../styles/Home.module.css'
import ConversationContainer from '../components/Conversation/ConversationContainer';
import { getLoggedUserId } from '../utils/getLoggedUserId';



const Home: FC = () => {

  const id = getLoggedUserId();
  return  <ConversationContainer userId={id} />

}

export default Home