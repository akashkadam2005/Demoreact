import React from 'react';

const Profile = () => {
    // Inline style objects
    const cardStyle = {
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    };

    const cardHeaderStyle = {
        backgroundColor: '#17a2b8',
        color: 'white',
        fontWeight: 'bold',
    };

    const cardBodyStyle = {
        backgroundColor: '#ffc107',
        textAlign: 'center',
    };

    const buttonStyle = {
        borderRadius: '4px',
        padding: '10px 20px',
        textDecoration: 'none',
    };

    const primaryButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
    };

    const secondaryButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
    };

    const profileHeaderStyle = {
        backgroundColor: '#f8f9fa',
        padding: '20px',
        textAlign: 'center',
    };

    return (
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '20px' }}>
            <div style={profileHeaderStyle}>
                <h1 style={{ color: '#ffc107', marginBottom: '20px' }}>User Profile</h1>
            </div>
            <div className="row mt-3">
                <div className="col-md-4">
                    <div className="card" style={cardStyle}>
                        <img
                            src="image/643384133f44a7ee4072533a_How to choose a digital marketing agency.png"
                            className="card-img-top"
                            alt="User Profile"
                            style={{ borderRadius: '8px 8px 0 0' }}
                        />
                        <div className="card-body" style={cardBodyStyle}>
                            <h5 className="card-title">Akash Kadam</h5>
                            <p className="card-text">Akash@gmail.com</p>
                            <a href="/edit-profile" className="btn" style={primaryButtonStyle}>Edit Profile</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card mb-3" style={cardStyle}>
                        <div className="card-header" style={cardHeaderStyle}>
                            Booked Events
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Marriage Event 1</li>
                            <li className="list-group-item">Music Event 2</li>
                            <li className="list-group-item">Birthday Event 3</li>
                        </ul>
                    </div>
                    <div className="card mb-3" style={cardStyle}>
                        <div className="card-header" style={cardHeaderStyle}>
                            Past Event History
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Christmas Event 1</li>
                            <li className="list-group-item">Diwali Event 2</li>
                            <li className="list-group-item">Past Event 3</li>
                        </ul>
                    </div>
                    <div className="card" style={cardStyle}>
                        <div className="card-header" style={cardHeaderStyle}>
                            View Tickets
                        </div>
                        <div className="card-body text-center">
                            <a href="/#" className="btn" style={secondaryButtonStyle}>View Tickets</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
