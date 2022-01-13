import type { FC } from 'react'
import { Conversation } from '../../../types/conversation'
import ListItem from '../../Common/ListItem'
import ListItemButton from '../../Common/ListItemButton'
import ListItemIcon from '../../Common/ListItemIcon'
import ListItemText from '../../Common/ListItemText'
import Avatar from '../../Common/Avatar'
import { getInitials } from '../../../lib/getInitials'
import { timeago } from '../../../lib/dates';
import { useRouter } from 'next/router'

const ConversationCard: FC = ({ id , senderId, recipientNickname,senderNickname , lastMessageTimestamp = 0, ...conversation }: Conversation) => {
  const router = useRouter()

 

  const handleClick = (e) => {
    e.preventDefault()
    router.replace(`${router.basePath}/message/${id}`)
  }

  const name = id !== senderId ?  senderNickname :recipientNickname ;
  return (id ?
    <ListItem data-testid="conversation-card" disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Avatar
            sx={{ bgcolor: "#EC6E37" }}
            alt={name}
          >
            {getInitials(name)}
          </Avatar>
        </ListItemIcon>
        <ListItemText primary={name} secondary={`Dernier message : ${timeago(lastMessageTimestamp * 1000)}`} />
      </ListItemButton>
    </ListItem>
  :'')
}

export default ConversationCard