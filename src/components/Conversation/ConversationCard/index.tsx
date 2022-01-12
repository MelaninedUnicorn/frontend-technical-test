import type { FC } from 'react'
import {Conversation} from '../../../types/conversation'
import ListItem from '../../Common/ListItem'
import ListItemButton from '../../Common/ListItemButton'
import ListItemIcon from '../../Common/ListItemIcon'
import ListItemText from '../../Common/ListItemText'
import InboxIcon from '@mui/icons-material/Inbox';
import styles from '../styles/ConversationCard.module.css'
import moment from 'moment';
import { deepOrange } from '@mui/material/colors';
import Avatar from '../../Common/Avatar'
import { getInitials } from '../../../lib/getInitials'
import { timeago } from '../../../lib/dates';

const ConversationCard: FC = ({recipientNickname = 'Jane Doe',lastMessageTimestamp=0,...conversation}:Conversation) => {
  
    const friendlyTimestamp = timeago(lastMessageTimestamp*1000);
    const friendlyAvatar = getInitials(recipientNickname);

  return (
    <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt={recipientNickname}
      
      >
        {friendlyAvatar}
      </Avatar>
      </ListItemIcon>
      <ListItemText primary={recipientNickname} secondary={friendlyTimestamp}/>
    </ListItemButton>
  </ListItem>
  )
}

export default ConversationCard