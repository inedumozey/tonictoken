import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer"
import {useEffect} from "react";

export default function Top1() {
    const {ref, inView} = useInView({threshold: .3})
    const animation1 = useAnimation()
    const animation2 = useAnimation()

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
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3
                }
            })
        }else{
            animation1.start({
                x: 10,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3
                }
            })
            animation2.start({
                x: 10,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3
                }
            })
        }
    }, [inView])

  return (
    <div ref={ref} className="top1">
        <motion.a animate={animation1} style={{background: '#fff'}}  title="tonic meme" target={"_blank"} rel="noreferrer" onClick={()=>alert('Coming soon...')} >
            <img src="/tonic1.png" alt="/tonic-meme.png" />
        </motion.a>

        <motion.a animate={animation2} style={{background: '#fff'}}  title="tonic meme" target={"_blank"} rel="noreferrer" onClick={()=>alert('Coming soon...')} >
            <img src="/tonic2.png" alt="/tonic-meme.png" />
        </motion.a>

    </div>
  )
}
