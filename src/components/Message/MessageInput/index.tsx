import type { FC } from 'react'
import {useState} from 'react'
import useSWR from 'swr';
import { getMessages } from '../../../api/messages';
import Spinner from '../../../components/Common/Spinner';
import MessageList from '../../../components/Message/MessageList';
import { fetchAndValidate } from '../../../lib/fetch';

import styles from '../../../styles/MessageInput.module.css'
import FormControl from '../../Common/FormControl';
import IconButton from '../../Common/IconButton';
import Input from '../../Common/Input';
import InputAdornment from '../../Common/InputAdornment';
import InputLabel from '../../Common/InputLabel';
import { MessageInputProps } from './MessageInput.types';
import Send from '@mui/icons-material/Send';

const MessageInput: FC = ({ conversationId, userId }: MessageInputProps) => {
 
  const [message, setMessage] = useState('');
  const { data: messages } = useSWR(
    getMessages(conversationId),
    fetchAndValidate)

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSendMessage = (e) => {
    console.log(message)
  }

  return <FormControl fullWidth sx={{ m: 1 }} variant="standard">
    <Input
      id="message-input-field"
      type={'text'}
      value={message}
      onChange={handleChange}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="send-message-button"
            onClick={handleSendMessage}

          >
            <Send />
          </IconButton>
        </InputAdornment>
      }
    />
  </FormControl>




}

export default MessageInput



