import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { FETCH_USERS_SUCCESS } from './redux/store'

function Comments() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then(response => dispatch({type: FETCH_USERS_SUCCESS, payload: response}))
  }, [dispatch])

  const comments = useSelector((state) => state.comments)

  return (
    <div>
      {
        comments.map((comment) => {
            return (
              <div>
                <li>{comment.name}</li>
                <li>{comment.email}</li>
                <li>{comment.body}</li>
              </div>
            )
        })
      }
    </div>
  )
}

export default Comments

