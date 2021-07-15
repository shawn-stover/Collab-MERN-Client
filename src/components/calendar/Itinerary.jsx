import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from "styled-components";
import { RightArrow } from '@styled-icons/boxicons-regular/RightArrow'

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
                {activity.start.time.hours}:{activity.start.time.minutes}{activity.title}
            </ListItem>
        )
    })
    return(
        <Wrapper>
            <h2>Today's Schedule:</h2>
            <List>
                <RightArrow size="10"/>{eventList}
            </List>
        </Wrapper>
    )
}

const List = styled.div`
`
const ListItem = styled.div`
    padding: 5px 0px;
`
const Wrapper = styled.div`
    width: 190px;
    margin: 10px 0px;
    .h2 {
    margin: 5px 0px;
    padding: 10px 0px;
    }
    &:hover {
        text-decoration: underline;
    }
`