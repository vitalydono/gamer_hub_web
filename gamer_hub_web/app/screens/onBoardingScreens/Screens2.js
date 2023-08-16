// import {useNavigation} from '@react-navigation/native'
import Page from '../../layouts/Page'
import styled from 'styled-components/native'
import Colors from '../../appearance/Colors'
import {useNavigation} from '@react-navigation/native'

const Screen2 = () => {
  const navigation = useNavigation()

  const goTo3Page = () => navigation.navigate('Screen3')

  return (
    <Page>
      <Container>
        <SkipTouchable onPress={() => goTo3Page()}>
          <SkipText>Skip</SkipText>
        </SkipTouchable>
        <MainText>Earn Money</MainText>
        <SpacerGamerHub />
        <SubText>Make money</SubText>
      </Container>
    </Page>
  )
}

export default Screen2

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`
const SpacerGamerHub = styled.View`
  margin-top: 5px;
`
const MainText = styled.Text`
  font-size: 40px;
  color: ${Colors.TAUCHABLE};
`
const SubText = styled.Text`
  font-size: 16px;
  color: ${Colors.GREY};
`

const SkipTouchable = styled.TouchableOpacity``

const SkipText = styled.Text`
  font-size: 16px;
  color: ${Colors.GREY};
`
