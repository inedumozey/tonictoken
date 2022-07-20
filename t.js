import styled from 'styled-components'
import {
    Header,
    Main,
    Footer,
    Section,
    SectionTitle1,
    SectionTitle2,
    SectionTitle3,
    SectionText

} from '../styles/globalStyles';

const Wrapper = styled.div`
    background: linear-gradient(rgb(0 0 0 / 94%),#030722f7);
`






export default function Index() {

  return (
   <Wrapper>
        <Header headerHeight='130px'>
            
        </Header>
        <Main height={{headerHeight:'130px', footerHeight:'60px'}}>
            Main
        </Main>
        <Footer footerHeight='60px'>
            Footer
        </Footer>
   </Wrapper>
  )
}
