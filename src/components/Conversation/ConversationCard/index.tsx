import type { FC } from 'react'
import {Conversation} from '../../../types/conversation'
import ListItem from '../../Common/ListItem'
import ListItemButton from '../../Common/ListItemButton'
import ListItemIcon from '../../Common/ListItemIcon'
import ListItemText from '../../Common/ListItemText'
import InboxIcon from '@mui/icons-material/Inbox';
import styles from '../styles/ConversationCard.module.css'
import moment from 'moment';
const ConversationCard: FC = ({recipientNickname = 'Jane Doe',lastMessageTimestamp=0,...conversation}:Conversation) => {
  
    const friendlyTimestamp = moment(lastMessageTimestamp*1000).format('LLLL');

  return (
    <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={recipientNickname} secondary={friendlyTimestamp}/>
    </ListItemButton>
  </ListItem>
  )
}

export default ConversationCard