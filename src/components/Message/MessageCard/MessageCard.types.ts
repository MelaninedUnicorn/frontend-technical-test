
import { boolean } from 'fp-ts'
import { Message} from '../../../types/message'
import { User } from '../../../types/user'
export interface MessageCardProps {
    data: Message
    isMine:boolean
    startsSequence:boolean
    endsSequence:boolean
    showTimestamp :boolean
    senderInfo: User
}