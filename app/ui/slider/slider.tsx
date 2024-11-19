'use client'
import { useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Image from 'next/image';
function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = ['/images/slider/slide1.jpg', '/images/slider/slide2.jpg', '/images/slider/slide3.jpg'];
    const prev = () => { setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1); }
    const next = () => { setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1); }
    return (
        <div className=' relative flex  flex-col'>
            <div className=' grid grid-cols-1r'>
                <div className=' pt-4 max-h-7'>
                    <div className='flex  justify-center'><Image src={data[currentSlide]} alt=" GenZ women making fashion statement" className='object-fit' height={500} width={800} /></div></div>


                <div className='absolute  pt-[14rem] right-0 left-0 md:pt-[28rem]'>
                    <div className='flex flex-row  justify-center  gap-2'>

                        <div className='border border-s-2  border-cyan-300 bg-transparent pointer-events-auto  text-cyan-300' onClick={prev}><ArrowBackIosNewOutlinedIcon /></div>
                        <div className='border border-s-2  border-cyan-300  bg-transparent pointer-events-auto  text-cyan-300' onClick={next}><ArrowForwardIosOutlinedIcon />
                        </div>
                    </div>
                </div >
            </div>
        </div>

    )
}

export default Slider;