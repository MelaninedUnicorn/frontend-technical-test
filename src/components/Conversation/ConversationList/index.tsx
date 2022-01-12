import type { FC } from 'react'

import { Conversation } from '../../../types/conversation'

import Box from '../../Common/Box'
import List from '../../Common/List'
import ConversationCard from '../ConversationCard'
import { ConversationListProps } from './ConversationList.types'

const ConversationList: FC = ({ conversations = [] }: ConversationListProps) => {


    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="conversation list">
                <List>
                    {conversations.map(({id,...conversation} : Conversation) => <ConversationCard key={id} {...conversation} />)}
                </List>
            </nav>
        </Box>
    )
}

export default ConversationList