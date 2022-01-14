import type { FC } from 'react'
import { useState } from 'react'
import styles from '../../../styles/MessageInput.module.css'
import FormControl from '../../Common/FormControl';
import IconButton from '../../Common/IconButton';
import Input from '../../Common/Input';
import InputAdornment from '../../Common/InputAdornment';
import { MessageInputProps } from './MessageInput.types';
import Send from '@mui/icons-material/Send';
import { baseUrl } from '../../../api/common'
import { sendMessage } from '../../../api/messages';


const MessageInput: FC<MessageInputProps> = ({ conversationId }) => {

  const [message, setMessage] = useState('');


  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  const handleSendMessage = async (e) => {
    const params = {
      body: message,
      timestamp: Math.floor(new Date().getTime() / 1000)
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(params)
    };
   
    await sendMessage(conversationId,options);
  } 

  return <FormControl data-testid={"message-input"} className={`${styles["message-input-container"]}`} fullWidth sx={{ m: 1 }} variant="standard">
    <Input
      data-testid="message-input-field"
      type={'text'}
      value={message}
      onChange={handleChange}

      endAdornment={
        <InputAdornment position="end">
          <IconButton
          data-testidd='message-input-send-button'
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



