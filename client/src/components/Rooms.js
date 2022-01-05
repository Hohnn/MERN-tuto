import React, {useState, useEffect} from 'react'
import RoomCard from './RoomCard'
import { Link } from 'react-router-dom'
import RoomAddForm from './RoomAddForm'
function Rooms() {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('/api/rooms')
            const json = await result.json()
            setRooms(json)
        }
        fetchData()
    }, [])

    return (
        <div>
            {rooms.map(room => (
                <Link key={room._id} to={room._id}>
                    < RoomCard room={room} />
                </Link>
            ))}
            <h2>Ajouter une chambre</h2>
            <RoomAddForm  />
        </div>
    )
}

export default Rooms
