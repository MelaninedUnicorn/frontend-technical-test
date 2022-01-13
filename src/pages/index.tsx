import type { FC } from 'react'

import ConversationContainer from '../components/Conversation/ConversationContainer';

import { loggedUserId } from './_app';



const Home: FC = () => {



  return <div data-testid={"index"}><ConversationContainer  userId={loggedUserId} /></div>

}

export default Home