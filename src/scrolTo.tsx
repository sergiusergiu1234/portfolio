import * as Scroll from 'react-scroll';
const scroller = Scroll.scroller;

export   const scrollTo = (anchor:string) =>{
    scroller.scrollTo(anchor, {
        duration: 1500,
        offset: -60,
        smooth: true,
    });

}