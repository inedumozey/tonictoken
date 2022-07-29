import styled from 'styled-components';
import { SectionTitle1} from '../styles/globalStyles';

const Wrapper = styled.div`
    background: linear-gradient(rgb(0 0 0 / 94%),#030722f7);
`

const Container = styled.div`
    width: 100%;;
    max-width: 900px;
    margin: auto;
`

const HeaderTitle = styled(SectionTitle1)`
    text-align: center;
    font-size: 1.1rem;
    padding: 0 5px 20px 5px;;
    font-family: 'Libre Baskerville', serif;
    line-height: 2.3rem;
`
const Nav = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    align-items: center;

`

const Copy = styled.div`
    text-align: center;
    font-size: .9rem;
    width: 90%;
    margin: auto;
    border: 2px solid #021c24;
    word-wrap: break-all;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    position: relative;

    .contact{
        color: #fff;
        user-select: none;
        -webkit-user-select: none;
    }

    .copy-text {
        background: ${({copied})=>copied ? 'rgb(2 2 2 / 77%);' : ''};
        color: ${({copied})=>copied ? '#fff' : 'teal'};
        font-size:80%;
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