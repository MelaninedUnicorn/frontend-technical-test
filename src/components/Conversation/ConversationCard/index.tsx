import type { FC } from 'react'
import {Conversation} from '../../../types/conversation'
import ListItem from '../../Common/ListItem'
import ListItemButton from '../../Common/ListItemButton'
import ListItemIcon from '../../Common/ListItemIcon'
import ListItemText from '../../Common/ListItemText'
import InboxIcon from '@mui/icons-material/Inbox';
import styles from '../styles/ConversationCard.module.css'

const ConversationCard: FC = ({}:Conversation) => {
  

  return (
    <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItemButton>
  </ListItem>
  )
}

export default ConversationCard