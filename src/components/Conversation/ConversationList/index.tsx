import type { FC } from 'react'

import { Conversation } from '../../../types/conversation'

import Box from '../../Common/Box'
import Grid from '../../Common/Grid'
import List from '../../Common/List'
import ConversationCard from '../ConversationCard'
import { ConversationListProps } from './ConversationList.types'

const ConversationList: FC<ConversationListProps> = ({ conversations = [] }) => {


    return (
      
        <Box 
        data-testid="conversation-list"
        sx={{  bgcolor: 'background.paper',margin:'auto' }}
        
        >
            {conversations.length > 0 ? <nav aria-label="conversation list">
                <List>
                    { conversations.map(( conversation : Conversation) => <ConversationCard key={conversation.id} {...conversation} />) }
                </List>
            </nav> : "Pas de messages à afficher"}
            </Box>
          
    )
}

export default ConversationList