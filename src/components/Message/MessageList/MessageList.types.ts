import { Message } from '../../../types/message'
import { User } from '../../../types/user'
export interface MessageListProps {
    messages: Message[],
    currentUserId:number,
    users:User[]
}