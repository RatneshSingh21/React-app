import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    console.log(user.userName);
    return <div>Welcome {user.userName}</div>
}

export default Profile