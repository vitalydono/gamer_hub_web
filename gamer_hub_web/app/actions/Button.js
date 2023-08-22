import React from 'react'
import styled from 'styled-components/native'
import Colors from '../appearance/Colors'

const Button = ({buttonText}) => {
  return (
    <TouchableButton>
      <TextButton>{buttonText}</TextButton>
    </TouchableButton>
  )
}

export default Button

const TouchableButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${Colors.TAUCHABLE};
  padding: 17px;
  border-radius: 10px;
  margin-top: 25px;
  transition: background-color 0.2s;
`

const TextButton = styled.Text`
  color: white;
  font-size: 13px;
  text-align: center;
`

TouchableButton.defaultProps = {
  activeOpacity: 0.7,
}

TouchableButton.displayName = 'TouchableButton'
