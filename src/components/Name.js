//ネームコンポーネント

import React from 'react'

const Name = (props) => {
    console.log(props)
    return <p>{props.lastName}{props.firstName}</p>
}

export default Name