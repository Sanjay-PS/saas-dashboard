import { ReactNode, useEffect, useState } from 'react';
import { Slide as RARSlide, SlideProps as RARSlideProps } from 'react-awesome-reveal';


export type SlideProps = RARSlideProps & {
    children: ReactNode,
    show: boolean,
}

export function Slide({ children, show, duration, ...props }: SlideProps) {
    const [showChildren, setShowChildren] = useState<boolean>(show);

    useEffect(() => {
        let timeout: number;
        
        if(!show) timeout = setTimeout(() => { setShowChildren(show) }, duration);
        else setShowChildren(show);

        return () => { clearTimeout(timeout) }
    }, [show, duration])

    return (showChildren) ? (
        <RARSlide direction={props.direction ?? 'up'} duration={duration} reverse={!show} {...props}>
            {children}
        </RARSlide>
    ) : (<></>)
}
