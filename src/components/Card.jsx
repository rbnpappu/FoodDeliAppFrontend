import React from 'react';
import '../styles/Card.css'

const Card = ({CardButtonInfo}) => {
    return (
        <div className='w-[383px] h-[286px] p-[5px]  rounded-lg bg-transparent p-4 m-[18px] hover-shadow-transparent transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-transparent cursor-pointer'>
            <img src={CardButtonInfo.img} className="bg-gray-200 shadow-lg rounded-lg relative h-[80%] w-[100%]" alt="logo"/>
            <div className="flex w-full relative bottom-8   flex flex-col justify-start items-start  rounded-b-lg text-center justify-center  bg-white h-[20%] border border-gray-300 p-[5px]"
    ><span className='no-underline whitespace-nowrap inline  leading-snug text-gray-900 font-bold relative  z-10'>{CardButtonInfo.tag}</span>
        <p className='text-gray-400  text-[14px] whitespace-nowrap overflow-hidden text-ellipsis flex justify-start'>{CardButtonInfo.label}</p></div>

        </div>
    );
};

export default Card;
