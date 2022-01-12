import { Conversation } from '../../types/conversation'
export interface UseConversationValue {
    conversations: Conversation[],
    isLoading: boolean,
    isError: Error
}