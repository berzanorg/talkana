import tailt from 'tailt'

interface MessageState {
    author: string,
    content: string
}

export default function Message(mS: MessageState) {
    return (
        <MessageArticle>
            <MessageAuthor>{mS.author}</MessageAuthor>
            <MessageContent>{mS.content}</MessageContent>
        </MessageArticle>
    )
}

const MessageArticle = tailt.article`
    flex flex-col
    rounded-xl
    p-4 gap-y-5
    shadow-lg
    bg-slate-800
`
const MessageAuthor = tailt.h3`
    font-medium text-sm
    opacity-50
    cursor-pointer
`
const MessageContent = tailt.p`
    font-medium
`
const MessageTopic = tailt.h4`
    font semibold text-sm
`