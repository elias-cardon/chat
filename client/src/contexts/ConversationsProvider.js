import React, {useContext, useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {useContacts} from "./ContactsProvider";

const ConversationsContext = React.createContext()

export function useConversations() {
    return useContext(ConversationsContext)
}

export function ConversationsProvider({children}) {
    const [conversations, setConversations] = useLocalStorage('conversations', [])
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
    const {contacts} = useContacts()

    function createConversation(recipients) {
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages: [] }]
        })
    }

    const formattedConversations = conversations.map(conversations, index => {
        const recipients = conversations.recipients.map(recipients => {
            const contact = contacts.find(contact => {
                return contact.id === recipients
            })
            const name = (contact && contact.name) || recipients
            return {id:recipients, name}
        })
        const selected = index === selectedConversationIndex
        return {...conversations, recipients, selected}
    })

    const value = {
        conversations: formattedConversations,
        setSelectConversationIndex : setSelectedConversationIndex,
        createConversation
    }

    return (
        <ConversationsContext.Provider value={value}>
            {children}
        </ConversationsContext.Provider>
    )
}