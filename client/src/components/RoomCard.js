import React from 'react'
import { Card, Badge } from 'antd'

const { Meta } = Card

function RoomCard({ room }) {
    return (
        <div style={{ margin: '1rem', width: 300 }}>
            <Badge count={ room.promo ? 'PROMO' : '' } >
                <Card
                style={{
                    width: '300px',
                    height: '350px',
                    objectFit: 'cover',
                }}
                cover={<img 
                    alt={room.name}
                    src={`https://source.unsplash.com/random/300x350?${room.name}`}
                    />}
                    
                >
                    <Meta title={room.name.toUpperCase()} description={`Nombre de personnes : ${room.maxPersons}`} />
                </Card>
            </Badge>
        </div>
    )
}

export default RoomCard
