import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slide1 from './images/slide1.png';
import Slide2 from './images/slide2.png';
import Slide3 from './images/slide3.png';
import Map from './icons/icon_map.png';
import Ask from './icons/icon_ask.png';


import './top.css';

const images = [Slide1, Slide2, Slide3];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // 3초마다 이미지 변경

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="top_secction">
                <div className='slider'>
                    {images.map((image, index) => (
                        <img 
                            key={index}
                            className={`slide ${index === currentIndex ? 'active' : ''}`}
                            src={image}
                            alt={`이미지 ${index + 1}`}
                        />
                    ))}
                </div>
                <div className='quick_link'>
                    <div className='quick_link_content'>
                        <div className="store">
                            <Link to ='/'>
                                <div className="store_section">
                                    <div className='link_section'>
                                        <img src={Map} alt="매장찾기"/>매장찾기     
                                    </div> 
                                </div>
                            </Link>
                        </div>
                        <div className="ask">
                            <Link to ='/'>
                                <div className="ask_section">
                                    <div className='link_section'>
                                        <img src={Ask} alt="매장찾기"/>가맹신청 문의     
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
