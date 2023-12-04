import { useEffect, useState } from 'react'

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export default function UseCountNum(props: any) {
    const [count, setCount] = useState(props.start);

    const frameRate = 1000 / 60;
    const totalFrame = Math.round(props.duration / frameRate);
    useEffect(() => {
        let currentNumber = props.start;
        if(props.trigger) {
            const counter = setInterval(() => {
                setCount(Number(count));
                const progress = easeOutExpo(++currentNumber / totalFrame)
                setCount(Math.round(props.end * progress))
                
                if (progress === 1) {
                    clearInterval(counter)
                }
        
            }, frameRate);
        }
    }, [props.end, frameRate, props.start, totalFrame, props.trigger])

    return count
}