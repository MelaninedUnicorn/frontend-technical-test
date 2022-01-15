import type { ChangeEvent, FC } from 'react'
import { useState } from 'react'
import styles from '../../../styles/MessageInput.module.css'
import FormControl from '../../Common/FormControl';
import IconButton from '../../Common/IconButton';
import Input from '../../Common/Input';
import InputAdornment from '../../Common/InputAdornment';
import { MessageInputProps } from './MessageInput.types';
import Send from '@mui/icons-material/Send';

import { sendMessage } from '../../../api/messages';

const MessageInput: FC<MessageInputProps> = ({ conversationId }) => {

    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (e : ChangeEvent<HTMLInputElement> ) => {
        console.log("handle change");
        setMessage(e.target.value)
        setError(null);
    }
    const handleSendMessage = () => {
        console.log("handle send message");
        const params = {
            "body": message,
            "timestamp": Math.floor(new Date().getTime() / 1000)
        };

        const options = {
            "method": 'POST',
            "body": JSON.stringify(params)
        };

        if (message === "") {
            setError("Veuillez composer un message")
        } else {
            sendMessage(conversationId, options).then(() => setMessage('')).catch(e => setError(e.message));

        }

    }
    const hasError = error ? true : false

    return <FormControl onSubmit={handleSendMessage} data-testid={"message-input"} className={`${styles["message-input-container"]}`} fullWidth sx={{ "m": 1 }} variant="standard">
        <Input
            type={'text'}
            inputProps={{ "data-testid": "message-input-field" }}
            value={message}
            onChange={handleChange}
            error={hasError}
            minRows={2}
            multiline
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        data-testid='message-input-send-button'
                        type='submit'
                        aria-label="send-message-button"
                        color={hasError ? 'error' : "default"}
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

