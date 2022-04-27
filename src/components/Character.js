// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledChar = styled.div`

h1 {
    color: red;
}
`

export default function Character({ name, gender, dob, height }) {
    return (
    <StyledChar>

    </StyledChar>
    )
}