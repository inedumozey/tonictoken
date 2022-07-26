import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {useEffect} from 'react';

export default function Top2({setEmailCopied}) {

    const emailMouseDown=(e)=>{
        setEmailCopied(true)
    }
    const emailMouseUp=(e)=>{
        setEmailCopied(false)
    }

    const {ref, inView} = useInView({threshold: .3})
    const animation1 = useAnimation()
    const animation2 = useAnimation()
    const animation3 = useAnimation()

    useEffect(()=>{
        if(inView){
            animation1.start({
                y: 0,
                transition: {
                    type: 'spring',
                    duration: .3,
                    bounce: 0.3
                }
            })

            animation2.start({
                y: 0,
                transition: {
                    type: 'spring',
                    duration: .3,
                    bounce: 0.3
                }
            })
            animation3.start({
                y: 0,
                transition: {
                    type: 'spring',
                    duration: .3,
                    bounce: 0.3
                }
            })
        }else{
            animation1.start({
                y: 50,
                transition: {
                    type: 'spring',
                    duration: .3,
                    bounce: 0.3
                }
            })
            animation2.start({
                y: 50,
                transition: {
                    type: 'spring',
                    duration: .3,
                    bounce: 0.3
                }
            })
            animation3.start({
                y: 50,
                transition: {
                    type: 'spring',
                    duration: .3,
                    bounce: 0.3
                }
            })
        }
    }, [inView])

  return (
    <div  ref={ref} className="top2">

        <motion.a animate={animation1} title="Our twitter handle" target={'_blank'}  rel="noreferrer" href="https://mobile.twitter.com/TokenTonictok">
            <img src="/twitter.png" alt="/twitter.png" />
        </motion.a>

        <motion.a animate={animation2} title="Our telegrma page" target={'_blank'}  rel="noreferrer" href="https://discord.gg/nehB6s22pn">
            <img src="/discord1.png" alt="/telegram.png" />
        </motion.a>

        <motion.a animate={animation3} 
            style={{
                padding: '5px',
                borderRadius: '7px'
            }}
            className='emailCopied'
            title="Email us? Click to copy" target={'_blank'}  rel="noreferrer">
            <img src="/gmail.png" alt="/gmail.png" />

            <span
                onMouseDown={emailMouseDown}
                onMouseUp={emailMouseUp} className='copy-icon'
            >
                <CopyToClipboard text='Tonictoken61@gmail.com'>
                    <ContentCopyIcon />
                </CopyToClipboard>
            </span>
        </motion.a>

    </div>

  )
}
