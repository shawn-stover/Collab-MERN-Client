import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from "styled-components";

export default function Itinerary() {
    const [eventData, setEventData] = useState([])

    useEffect(() => {
        const getDailyEvents = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/calendar/event`)
                setEventData(response.data)
            }catch(error) {
                console.log(error)
            }
        }

        getDailyEvents()
    }, [])

    const eventList = eventData.map((activity) => {
        return (
            <ListItem>
                {activity.title}
            </ListItem>
        )
    })
    return(
        <Wrapper>
            <h4>What's up Today?</h4>
           <List>
               {eventList}
           </List>
        </Wrapper>
    )
}

const List = styled.div`
`
const ListItem = styled.div`
`
const Wrapper = styled.div`
`