
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    /*:root{
        --major-brand : #fff;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        // font-family: 'Edu VIC WA NT Beginner';
        // font-family: 'Edu VIC WA NT Beginner', cursive;
        font-family: 'Open Sans', sans-serif;
        // font-family: 'Staatliches', cursive;
        font-size: 1rem;
    }

   body {
        min-height: 100vh;
        color: var(--major-brand);
        background: url('/bg.png');
        background-size: 400px;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment:fixed;

        .link{
          color: teal;
          text-decoration: none;
          padding: 3px 8px;
          // margin-bottom: 5px;
          // border: 1px solid;
          border-radius: 5px;

          // &:hover{
          //   opacity: .5
          // }
        }

        .active{
          color: #fff;
          border: 1px solid;
        }

        p{
          text-align: justify;
        }

    }

`

const Header = styled.div`
  width: 100%;
  padding: 0 20px;
  min-height: ${({headerHeight})=>headerHeight};
  background: linear-gradient(#000102,#11161a45);
  // border: 1px solid red;

`

const Main = styled.div`
  width: 100%;
  margin auto;
  min-height: ${({height})=>`calc(100vh - ${height.headerHeight} - ${height.footerHeight})`};
`

const Footer = styled.div`
  width: 100%;
  min-height: ${({footerHeight})=>footerHeight};
  background: linear-gradient(#11161a45, #000102);

  .emailCopied{
    background: ${({emailCopied})=>emailCopied ? 'rgb(2 2 2 / 77%)' : ''};
    color: ${({emailCopied})=>emailCopied ? '#fff' : '#ccc'};
  }

  a{
    height: 50px;
    justify-self: center;
    display: flex;
    justify-conetent: center;
    align-items: center;
    margin 10px auto;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;

    img{
      width: 100%;
      height: 100%;
    }
  }

  .top1{
    padding 0 30px;
    margin: 10px auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(160px, 1fr) );
    color: teal;

    a{
      width: 200px;
      height: 200px;
    }
  }


  .top2{
    width: 100%;
    display: grid;
    margin: 40px 0;
    grid-template-columns: repeat( auto-fit, minmax(50px, 1fr) );
    color: teal;

    a{
      width: 50px;
    }
  }

  .top3{
    padding 0 30px;
    margin: 20px 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(120px, 1fr) );
    color: teal;

    a{
      width: 130px;
    }
  }


  .bottom{
    width: 100%;
    height: 30px;
    color: #aaa;
    font-size: .75rem;
    text-align: center;
    padding: 10px;
  }

`

const Section = styled.section`
  padding: 30px;
  color: #fff;
  width: 98%;
  margin: auto;
  line-height: 2rem;
  border-bottom: 1px solid #021c24;

  li{
    color: #ccc;
  }

  .paragraph{
    margin-bottom: 40px;
    color: #ccc;
  }
`

const SectionTitle1 = styled.h1``

const SectionTile = styled.h2`
  margin: 10px auto 20px auto;
  text-align: center;
  color: teal;
`

const SectionSubTile = styled.h3`
  margin: 10px auto 20px auto;
  text-align: center;
  color: teal;
`

const Btn = styled.div`
  border: 1px solid #021c24;
  display: inline-block;
  padding: 8px 10px;
  height:45px;
  min-width: 100px;
  text-align: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  

  &:before{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    transition: .3s;
    background: ${({bg})=>bg};
    transform: ${({direction})=>direction === 'vertical' ? 'translateY(-110%)' : 'translateX(-110%)'};
    top: 0;
    left: 0;
    z-index: -1;
  }

  &:hover:before{
    transform: ${({direction})=>direction === 'vertical' ? 'translateY(0)' : 'translateX(0)'};
  }
  &:hover{
    color: #fff;
  }

  &:hover a{
    color: #fff;
  }
`

export {
    GlobalStyles,
    Header,
    Main,
    Footer,
    Section,
    SectionTitle1,
    SectionTile,
    SectionSubTile,
    Btn
}*/
