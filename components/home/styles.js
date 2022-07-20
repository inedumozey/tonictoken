import styled from 'styled-components';

const Hidden = styled.div`
    width: 90%;
    transition: all .3s;
    margin: 50px auto 20px auto;
    position: relative;
    padding-top: 10px;
    border-top: 2px solid  #021c24;

    .btn {
        display: flex;
        justify-content: center;
    }

    .content{
        padding: 10px;
        margin: 10px auto 10px auto;
        height: ${({show})=>show ? 'auto' : '0'};
        overflow: hidden;
        visibility: ${({show})=>show ? 'visible' : 'hidden'};
        opacity: ${({show})=>show ? '1' : '0'};
        transition: all .2s;
    }
`

const CardWrapper = styled.div`
    width: 100%;
    margin: auto;
    margin: auto;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    flex-flow: wrap;
    // grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
    color: teal;

    .card{
        width: 100%;
        height: auto;
        padding: 10px 20px;
        background: #ccc;
        box-shadow: -1px 8px 5px 1px #000;
        margin 10px auto;

        p{
            margin-bottom: 12px;
        }
    }

    .title {
        border-radius: 20px;
        display: flex;
        width: 70%;
        margin: 20px auto;
        justify-content: center;
        align-items: center;
        height: 30px;
        background: #aaa; 
        box-shadow: 2px 2px 3px #000, -2px -2px 3px #000;
        color: #000;
    }
`


export {
    Hidden,
    CardWrapper
}