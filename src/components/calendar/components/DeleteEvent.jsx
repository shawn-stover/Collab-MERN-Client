import { useEffect } from 'react'
import axios from 'axios'

export default function DeleteEvent({ eventId, refreshEvents}) {
    
   console.log({eventId})
        async function deleteEvent() {
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/calendar/deleteevent/${eventId}`)
            refreshEvents()
        }
    
    
    return(
        <div>
            are you sure you want to delete the event?
        </div>
    )
}