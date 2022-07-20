import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ScrollToTop from "react-scroll-to-top";
import {useState, useEffect} from "react";
import Link from "next/link"
import {useRouter} from "next/router"
import Top3 from "./Top3";
import Top1 from "./Top1";
import Top2 from "./Top2";

const logo = "/header.png";

import {
    Header,
    Main,
    Footer

} from "../styles/globalStyles";

import { 
    Wrapper,
    Container,
    HeaderTitle,
    Nav,
    Copy,
 } from "./styles";


export default function Layout({children}) {

    const craetedDate = new Date().getFullYear() > 2022 ? `2022 - ${new Date().getFullYear()}` : '2022';
    const [copied, setCopied] = useState(false)
    const [emailCopied, setEmailCopied] = useState(false);
    const router = useRouter();

    const mouseDown=(e)=>{
        setCopied(true)
    }
    const mouseUp=(e)=>{
        setCopied(false)
    }

  return (
   <Wrapper>
        <ScrollToTop smooth color='teal' style={{background: 'rgba(22,22,66,.8'}}/>
        <Container>

            <Header headerHeight='500px'>
                <Nav>
                    <div  style={{width: '350px'}}>
                        <Link href='/' passHref>
                            <img style={{width: '100%'}} src={logo} height='100%'/>
                        </Link>
                    </div>
                </Nav>
                
                <>
                    <HeaderTitle>
                        A NEXT GENERATION COMMUNITY BASED MEME TOKEN ON BSC
                    </HeaderTitle>
                    <Copy copied={copied}>
                        <div className='contact'>Contract </div>
                        <div
                            style={{
                                padding: '5px',
                                borderRadius: '7px'
                            }}
                            className='copy-text'
                        >
                            0xdf3961ecdfa07677b70ddbfe192def12192b407
                        </div>
                        <span
                            onMouseDown={mouseDown}
                            onMouseUp={mouseUp} className='copy-icon'
                        >
                            <CopyToClipboard text='0xdf3961ecdfa07677b70ddbfe192def12192b4072'>
                                <ContentCopyIcon />
                            </CopyToClipboard>
                        </span>

                    </Copy>

                    <div  style={{alignItems: 'center', display: 'flex', justifyContent: 'space-around',}}>
                        <Link href='/'>
                            <a style={{fontSize: '1rem'}} className={router.asPath === '/' ? 'link active' : 'link'}>Home</a>
                        </Link>

                        <Link href='/whitepaper'>
                            <a style={{fontSize: '1rem'}} className={router.asPath === '/whitepaper' ? 'link active' : 'link'}>White Paper</a>
                        </Link>
                    </div>
                </>
            </Header>
            
            <Main height={{headerHeight:'350px', footerHeight:'60px'}}>
                {children}
            </Main>
            
            <Footer emailCopied={emailCopied} footerHeight='60px'>

                <Top1 />
                <Top2 setEmailCopied={setEmailCopied}/>
                <Top3 />

                <div className="bottom">
                    &copy; {craetedDate}, Tonictoken
                </div>
            </Footer>
        </Container>
   </Wrapper>
  )
}
