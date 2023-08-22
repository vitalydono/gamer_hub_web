import React, {useState} from 'react'
import styled from 'styled-components/native'
import Colors from '../appearance/Colors'

const Input = ({placeholders}) => {
  const [focusedInputs, setFocusedInputs] = useState(
    new Array(placeholders.length).fill(false),
  )

  const handleFocus = index => {
    const newFocusedInputs = [...focusedInputs]
    newFocusedInputs[index] = true
    setFocusedInputs(newFocusedInputs)
  }

  const handleBlur = index => {
    const newFocusedInputs = [...focusedInputs]
    newFocusedInputs[index] = false
    setFocusedInputs(newFocusedInputs)
  }

  return (
    <>
      {placeholders.map((placeholder, index) => (
        <TextField
          isFocused={focusedInputs[index]}
          onFocus={() => handleFocus(index)}
          onBlur={() => handleBlur(index)}
          key={index}
          placeholder={placeholder}
          placeholderTextColor={
            focusedInputs[index] ? Colors.TAUCHABLE : Colors.GREY
          }
        />
      ))}
    </>
  )
}

export default Input

const TextField = styled.TextInput`
  width: 100%;
  padding: 17px;
  margin-top: 10px;
  border: 0.9px solid ${Colors.GREY};
  border-radius: 12px;
  font-size: 10px;
  color: ${Colors.GREY};
  border-color: ${props => (props.isFocused ? Colors.TAUCHABLE : Colors.GREY)};
`
