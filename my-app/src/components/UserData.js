import React from 'react'

function UserData(props) {
  return (
    <div>
        {props.isLoaded ? (
            <div>
                <h1>'Data Loaded!'</h1>
            </div>
        ) : (<p>'Loading...'</p>)}
    </div>
  )
}

export default UserData