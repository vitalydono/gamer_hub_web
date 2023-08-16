// import {useNavigation} from '@react-navigation/native'
import Page from '../../layouts/Page'
import styled from 'styled-components/native'
import Colors from '../../appearance/Colors'
import {useNavigation} from '@react-navigation/native'

const Screen4 = () => {
  const navigation = useNavigation()

  const goTo5Page = () => navigation.navigate('Screen5')

  return (
    <Page>
      <Container>
        <SkipTouchable onPress={() => goTo5Page()}>
          <SkipText>Skip</SkipText>
        </SkipTouchable>
        <MainText>Tournaments</MainText>
        <SpacerGamerHub />
        <SubText>Create tournaments</SubText>
      </Container>
    </Page>
  )
}

export default Screen4

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
