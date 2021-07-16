import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from "styled-components";
import { RightArrow } from '@styled-icons/boxicons-regular/RightArrow'

export default function Itinerary(props) {
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

    const eventList = props.eventData.map((activity, key) => {
        return (
            <li key={key}>
                {activity.title},
                {activity.description}:
                {activity.start.date}
            </li>
        )
    })
    return(
        <Wrapper>
            <h2>Today's Schedule:</h2>
            <ul>
                <RightArrow size="10"/>{eventList}
            </ul>
        </Wrapper>
    )
}

// const List = styled.div`
// `
// const ListItem = styled.div`
//     padding: 5px 0px;
// `
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