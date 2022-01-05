import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Rooms from '../components/Rooms.js'
import Room from '../components/Room.js'

function RoomsPage() {
    return (
        <Routes>
            <Route path="/" element={<Rooms />} />
            <Route path=":id" element={<Room />} />
        </Routes>
    )
}

export default RoomsPage
