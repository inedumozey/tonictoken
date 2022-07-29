import Link from "next/link"
import { useState } from "react";
import { Btn, Section } from "../../styles/globalStyles";
import { Hidden, CardWrapper } from "./styles";
import items from "../../config";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer"
import {useEffect} from "react";



export default function Index() {
  const [show, setShow] = useState(false);

  return (
    <Section>
      <p className="paragraph">
        Tonic token is taking bold steps to give meme coin a whole new look. Beyond fun and community engagement, tonic token would provide a platform for degen traders to interact and share constructive ideas. Investors would earn from staking and every utility built on tonic.
      </p>

     <div style={{margin: 'auto', height: '70px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', }}>
        <Btn bg="teal">
            <a target='_blank' href='https://app.tinyman.org/#/swap?asset_in=0&asset_out=822255433' className='link'>Buy</a>
        </Btn>
        <Btn bg="teal">b
            <a target='_blank' href="https://vestige.fi/asset/822255433" className='link'>Charts</a>
        </Btn>
      </div>

      {/* <Hidden show={show}>
        <div className="btn">
          <Btn onClick={()=>setShow(!show)} bg={'#c20'} direction='vertical'>How to Buy</Btn>

        </div>

        <div className="content">
          <p style={{marginBottom: '25px'}}>
            1. Get a bsc supported wallet eg trustwallet or metamask. For metamask users you have to add the binance smart chain network at chainlist.org
          </p>
          <p style={{marginBottom: '10px'}}>
            2. Buy some BnB from any exchange  and send to your local wallet
          </p>
          <p style={{marginBottom: '10px'}}>
            3. Visit the buy option above to swap some BnB to TTE on pancakswap 
          </p>
        </div>
      </Hidden> */}
      
      {/* <div style={{margin: '10px auto 30px auto'}}>

        <Link href='/whitepaper'>
          <a  className='link'>White Paper</a>
        </Link>
      </div> */}

      {/* <CardWrapper>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </CardWrapper> */}

    </Section>
  )
}

function Card1(){
  const {ref, inView} = useInView()
  const animation1 = useAnimation()

  useEffect(()=>{
    if(inView){
        animation1.start({
            y: 0,
            transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.3
            }
        })
    }else{
        animation1.start({
            y: 50,
            transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.3
            }
        })
    }
  }, [inView])

  return (

    <motion.div ref={ref} animate={animation1} className="card">
      <div className="title">{items.item1.title.toUpperCase()}</div>
      <div className="content">
        {
          items.item1.data.map((data, i)=>{
            return (
              <div key={i}>
                {data}
              </div>
            )
          })
        }
      </div>
    </motion.div>
  )
}

function Card2(){

  const {ref, inView} = useInView()
  const animation1 = useAnimation()

  useEffect(()=>{
    if(inView){
        animation1.start({
            y: 0,
            transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.3
            }
        })
    }else{
        animation1.start({
            y: -50,
            transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.3
            }
        })
    }
  }, [inView])

  return (
    <motion.div ref={ref} animate={animation1} className="card">
      <div className="title">{items.item2.title.toUpperCase()}</div>
      <div className="content">
        {
          items.item2.data.map((data, i)=>{
            return (
              <p key={i}>{data}</p>
            )
          })
        }
      </div>
    </motion.div>
  )

}

function Card3(){

  const {ref, inView} = useInView({threshold: .3})
  
  const animation1 = useAnimation()

  useEffect(()=>{
    if(inView){
        animation1.start({
            y: 0,
            transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.3
            }
        })
    }else{
        animation1.start({
            y: 50,
            transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.3
            }
        })
    }
  }, [inView])

  return (
    <motion.div ref={ref} animate={animation1} className="card">
      <div className="title">{items.item3.title.toUpperCase()}</div>
      <div className="content">
        {
          items.item3.data.map((data, i)=>{
            return (
              <p key={i}>{data}</p>
            )
          })
        }
      </div>
    </motion.div>
  )
}

function Card4(){

  const {ref, inView} = useInView({threshold: .3})
    const animation1 = useAnimation()

  useEffect(()=>{
    if(inView){
        animation1.start({
            y: 0,
            transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.3
            }
        })
    }else{
        animation1.start({
            y: -50,
            transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.3
            }
        })
    }
  }, [inView])
  return (
    <motion.div animate={animation1} ref={ref} className="card">
      <div className="title">{items.item4.title.toUpperCase()}</div>
      <div className="content">
        {
          items.item4.data.map((data, i)=>{
            return (
              <p key={i}>{data}</p>
            )
          })
        }
      </div>
    </motion.div>
  )
}