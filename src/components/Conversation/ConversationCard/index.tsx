import type { FC } from 'react'
import {Conversation} from '../../../types/conversation'
import ListItem from '../../Common/ListItem'
import ListItemButton from '../../Common/ListItemButton'
import ListItemIcon from '../../Common/ListItemIcon'
import ListItemText from '../../Common/ListItemText'
import Avatar from '../../Common/Avatar'
import { getInitials } from '../../../lib/getInitials'
import { timeago } from '../../../lib/dates';
import { useRouter } from 'next/router'

const ConversationCard: FC = ({id=0,recipientNickname = 'Jane Doe',lastMessageTimestamp=0,...conversation}:Conversation) => {
    const router = useRouter()
    console.log(conversation)
    const friendlyTimestamp = timeago(lastMessageTimestamp*1000);
    const friendlyAvatar = getInitials(recipientNickname);

    const handleClick = (e) => {
      e.preventDefault()
      router.replace(`${router.basePath}/message/${id}`)
    }
  return (
    <ListItem disablePadding>
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
      <Avatar
        sx={{ bgcolor: "#EC6E37"}}
        alt={recipientNickname}
      
      >
        {friendlyAvatar}
      </Avatar>
      </ListItemIcon>
      <ListItemText primary={recipientNickname} secondary={`Dernier message : ${friendlyTimestamp}`}/>
    </ListItemButton>
  </ListItem>
  )
}

export default ConversationCard