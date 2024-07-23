import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='c90ffb1f-c0df-4af9-b8c9-f8035bca831c'
                username = {props.user.username}
                secret = {props.user.secret}
                style={{height: '100%'}}
                />
        </div>
    )
}

export default ChatsPage