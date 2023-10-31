import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { FETCH_USERS_SUCCESS } from './redux/store'

function Users() {
  // const c1 = useSelector((state) => state.c1.count)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((response) => dispatch({type: FETCH_USERS_SUCCESS, payload: response}))
    
  }, [dispatch])

  const users = useSelector((state) => state.users)
  
  return (
    <div>
        {
          users.map((user) => {
            return (
              <div>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.username}</li>
                <li>{user.address.street}</li>
              </div>
            )
          })
        }
    </div>
  )
}

export default Users