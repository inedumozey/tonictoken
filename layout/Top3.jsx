import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react';

export default function Top3() {
    const {ref, inView} = useInView({threshold: .3})
    const animation1 = useAnimation()
    const animation2 = useAnimation()
    const animation3 = useAnimation()

    useEffect(()=>{
        if(inView){
            animation1.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3
                }
            })

            animation2.start({
                y: 0,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3
                }
            })
            animation3.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3
                }
            })
        }else{
            animation1.start({
                x: -100,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3
                }
            })
            animation2.start({
                y: 100,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3
                }
            })
            animation3.start({
                x: 100,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3
                }
            })
        }
    }, [inView])

  return (
    <div  ref={ref} className="top3">

        <motion.a animate={animation1} style={{background: '#fff'}}  title="coinmarket" target={'_blank'} onClick={()=>alert('Coming soon...')} >
            <img src="/coinmarket.png" alt="/coinmarket.png" />
        </motion.a>

        <motion.a animate={animation2} style={{background: 'blue', width: '50px', height: '50px', borderRadius: '50%'}} title="Bscscan" target={'_blank'} href="https://bscscan.com/token/0xdf3961ecdfa07677b70ddbfe192def12192b4072">
            <img src="/bscscan.png" alt="/bscscan.png" />
        </motion.a>

        <motion.a animate={animation3} style={{background: '#fff'}}  title="coingecko" target={'_blank'} onClick={()=>alert('Coming soon...')}>
            <img src="/coingecko.png" alt="/coingecko.png" />
        </motion.a>
    </div>
  )
}
