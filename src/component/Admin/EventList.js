function EventsList() {
    return (
        <>
            <h1>Events List</h1>
            <button style={{ marginBottom: '10px' }}>Add Event</button>
            <table>
                <tr>
                    <th>Event ID</th>
                    <th>Event Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Oman Arab Rule</td>
                    <td>1698</td>
                    <td>1890</td>
                    <td>
                        <button style={{ backgroundColor: 'grey' }}>Edit</button>
                        <button style={{ backgroundColor: 'white' }}>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Union with Tanganyika</td>
                    <td>1964</td>
                    <td>ongoing</td>
                    <td>
                        <button style={{ backgroundColor: 'grey' }}>Edit</button>
                        <button style={{ backgroundColor: 'white' }}>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Establishment of Sultanate of Zanzibar</td>
                    <td>1856</td>
                    <td>1964</td>
                    <td>
                        <button style={{ backgroundColor: 'grey' }}>Edit</button>
                        <button style={{ backgroundColor: 'white' }}>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Abolition of Slavery</td>
                    <td>1873</td>
                    <td>1873</td>
                    <td>
                        <button style={{ backgroundColor: 'grey' }}>Edit</button>
                        <button style={{ backgroundColor: 'white' }}>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Portuguese Rule</td>
                    <td>1503</td>
                    <td>1698</td>
                    <td>
                        <button style={{ backgroundColor: 'grey' }}>Edit</button>
                        <button style={{ backgroundColor: 'white' }}>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Arrival of Persians</td>
                    <td>10th century</td>
                    <td>10th century</td>
                    <td>
                        <button style={{ backgroundColor: 'grey' }}>Edit</button>
                        <button style={{ backgroundColor: 'white' }}>Delete</button>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default EventsList;
