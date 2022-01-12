import type { FC } from 'react'
import useSWR  from "swr";
import { UseConversationValue } from './useConversations.types';
import {fetchAndValidate} from '../../lib/fetch'
import {getConversationDetails,getConversations} from '../../api/conversations'



const useConversations: FC = (id : string):UseConversationValue => {
    const { data, error } = useSWR(getConversations, fetchAndValidate)
  
    return {
      conversations: data,
      isLoading: !error && !data,
      isError: error
    }
  }

  export default useConversations;