import { ListProps } from './List.types'
import List from '@mui/material/List'
export default function index(props: ListProps) {
    return (
        <List data-testid="list" {...props} />
    )
}
