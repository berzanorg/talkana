import { useRef } from 'react'
import tailt from 'tailt'

export default function CreateMessage() {
    const contentRef = useRef<HTMLTextAreaElement>(null)

    function sendMessageOnClick() {
        let content = contentRef.current?.value
        if(!content) return
        alert(`Your message: ${content}`)
    }
    
    return (
        <Message>
            <Content ref={contentRef} placeholder='Write your message here...' maxLength={64}/>
            <Button onClick={sendMessageOnClick}>Send</Button>
        </Message>
    )
}

const Message = tailt.div`
    relative flex
`
const Content = tailt.textarea`
    h-32 w-full p-4
    rounded-xl shadow-lg
    bg-slate-800
    outline-none resize-none duration-200
`
const Button = tailt.button`
    absolute bottom-4 right-4
    h-10 px-5
    rounded-full
    shadow-lg

    bg-sky-600 hover:bg-sky-500 active:bg-sky-700
    disabled:bg-slate-600
    duration-200
`