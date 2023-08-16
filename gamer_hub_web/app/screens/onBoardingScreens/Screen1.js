import {useNavigation} from '@react-navigation/native'
import Page from '../../layouts/Page'
import styled from 'styled-components/native'
import nikeLogo from '../../../assets/nike.png'
import Colors from '../../appearance/Colors'

const Screen1 = () => {
  const navigation = useNavigation()
  const goTo2Page = () => navigation.navigate('Screen2')

  return (
    <Page>
      {/* <SkipContainer> */}
      <SkipTouchable onPress={() => goTo2Page()}>
        <SkipText>Skip</SkipText>
      </SkipTouchable>
      {/* </SkipContainer> */}

      <LogoContainer>
        <Logo source={nikeLogo} />
        <SpacerLogo />
        <MainText>Gamer Hub</MainText>
        <SpacerGamerHub />
        <SubText>Play together, Grow better</SubText>
      </LogoContainer>
    </Page>
  )
}

export default Screen1

const Container = styled.View`
  flex: 1;
  align-items: center;
`

const SkipContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 15px;
  flex-direction: row;
  justify-content: end;
`
const LogoContainer = styled.View`
  display: flex;
  height: 100%;
  justify-content: center;
`

const Logo = styled.Image`
  height: 80px;
  width: 80px;
  align-self: center;
`

const SpacerLogo = styled.View`
  margin-top: 12px;
`
const SpacerGamerHub = styled.View`
  margin-top: 7px;
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
