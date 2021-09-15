import React from 'react'

import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = (props) => {
    return (
        <div>
            <Card className={classes.users}>
                <ul>
                    {props.users.map( user => (
                        <li> {user.name} ({user.age} Years) </li>
                     ) )}
                </ul>
            </Card>
        </div>
    )
}

export default UsersList
