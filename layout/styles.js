import styled from 'styled-components';
import { SectionTitle1} from '../styles/globalStyles';

const Wrapper = styled.div`
    background: linear-gradient(rgb(0 0 0 / 94%),#030722f7);
`

const Container = styled.div`
    width: 100vw;
    max-width: 800px;
    margin: auto;
`

const HeaderTitle = styled(SectionTitle1)`
    text-align: center;
    font-size: 1.5rem;
    padding: 20px;
    font-family: 'Libre Baskerville', serif;
    line-height: 2.3rem;
`
const Nav = styled.div`
    height: 120px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Copy = styled.div`
    text-align: center;
    font-size: .8rem;
    width: 80%;
    margin: auto;
    border: 2px solid #021c24;
    padding: 10px;
    border-radius: 5px;
    position: relative;

    .contact{
        color: #fff;
        margin-bottom: 5px;
        user-select: none;
        -webkit-user-select: none;
    }

    .copy-text {
        background: ${({copied})=>copied ? 'rgb(2 2 2 / 77%);' : ''};
        color: ${({copied})=>copied ? '#fff' : 'teal'};
    }

    .copy-icon {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 2px;
        right: 5px;
        cursor: pointer
    }
`

const Top = styled.div`
    text-align: center;
    font-size: .8rem;
    padding: 10px;
    height calc(60px - 30px)
`

const Bottom = styled.div`
    text-align: center;
    font-size: .8rem;
    padding: 10px;
    height: 30px;
`




export {
    Wrapper,
    Container,
    HeaderTitle,
    Nav,
    Copy,
    Top,
    Bottom,
}