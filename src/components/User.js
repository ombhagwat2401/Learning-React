import React from 'react'

function User({ name, email }) {

    return (
        <div className="box" >
            <h1>{name}</h1><br />
            {email}
        </div>
    )
}

export default User

