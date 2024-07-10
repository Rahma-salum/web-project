import React, { useState } from 'react';

const initialEvents = [
    { id: 1, name: 'Oman Arab Rule', startDate: '1698', endDate: '1890' },
    { id: 2, name: 'Union with Tanganyika', startDate: '1964', endDate: 'ongoing' },
    { id: 3, name: 'Establishment of Sultanate of Zanzibar', startDate: '1856', endDate: '1964' },
    { id: 4, name: 'Abolition of Slavery', startDate: '1873', endDate: '1873' },
    { id: 5, name: 'Portuguese Rule', startDate: '1503', endDate: '1698' },
    { id: 6, name: 'Arrival of Persians', startDate: '10th century', endDate: '10th century' },
];

function EventsList() {
    const [events, setEvents] = useState(initialEvents);

    const handleDelete = (id) => {
        setEvents(events.filter(event => event.id !== id));
    };

    const handleEdit = (id) => {
        const eventName = prompt("Enter new event name:");
        const startDate = prompt("Enter new start date:");
        const endDate = prompt("Enter new end date:");
        setEvents(events.map(event => 
            event.id === id ? { ...event, name: eventName, startDate, endDate } : event
        ));
    };

    return (
        <>
            <h1>Events List</h1>
            <button style={{ marginBottom: '10px' }}>Add Event</button>
            <table>
                <thead>
                    <tr>
                        <th>Event ID</th>
                        <th>Event Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event.id}>
                            <td>{event.id}</td>
                            <td>{event.name}</td>
                            <td>{event.startDate}</td>
                            <td>{event.endDate}</td>
                            <td>
                                <button 
                                    style={{ backgroundColor: 'grey' }}
                                    onClick={() => handleEdit(event.id)}
                                >
                                    Edit
                                </button>
                                <button 
                                    style={{ backgroundColor: 'white' }}
                                    onClick={() => handleDelete(event.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default EventsList;
