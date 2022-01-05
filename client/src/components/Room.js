import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import RoomCard from './RoomCard'
import RoomForm from './RoomForm'

function Room() {
    const { id } = useParams()
    const [room, setRoom] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/rooms/${id}`)
            const json = await result.json()
            setRoom(json)
        }
        fetchData()
    }, [id])

    return room ? (
        <div>
            < RoomCard room={room} />
            <h2>Editer</h2>
            <RoomForm id={id} room={room} setRoom={setRoom} />
        </div>
    ) : null
}

export default Room
