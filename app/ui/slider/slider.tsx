'use client'
import { useState } from 'react';
import slide1 from '../../../../public/images/slider/slide1.jpg';
import slide2 from '../../../../public/images/slider/slide2.jpg';
import slide3 from '../../../../public/images/slider/slide3.jpg'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Image from 'next/image';
function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [slide1, slide2, slide3];
    const prev = () => { setCurrentSlide(currentSlide === 0 ? 2 : (prevSlide => prevSlide - 1)); }
    const next = () => { setCurrentSlide(currentSlide === 2 ? 0 : (prevSlide => prevSlide + 1)); }
    return (
        <div className=' relative flex  flex-col'>
            <div className=' grid grid-cols-1 '>
                <div className=' pt-4 max-h-7'>
                    <div className='  flex justify-evenly'><Image src={data[currentSlide]} alt=" GenZ women making fashion statement" className='object-fit' width={800} /></div></div>


                <div className='absolute  pt-[14rem] right-0 left-0 md:pt-[28rem]'>
                    <div className='flex flex-row  justify-center bg-transparent pointer-events-auto  gap-2'>

                        <div className='  border border-s-2 text-cyan-300' onClick={prev}><ArrowBackIosNewOutlinedIcon /></div>
                        <div className='border border-s-2  text-cyan-300' onClick={next}><ArrowForwardIosOutlinedIcon />
                        </div>
                    </div>
                </div >
            </div>
        </div>

    )
}

export default Slider;