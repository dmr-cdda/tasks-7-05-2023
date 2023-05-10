"use client";
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const Storage = () => {
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const handleRemoveCookie = (key: string) => {
    console.log(key, typeof key);
    
    removeCookie(key);
  };

  // useEffect(() => {
  //   setCookie("Iphone", 99000);
  //   setCookie("Samsung", 77800)
  // },[cookies])
  
  const title = <div className='bg-red-900 w-24 h-24'></div>
  return (
    <div className="bg-green-50 w-[600px] p-4">
      <p className='font-bold'>Cookies data</p>
      <div className="text-sm">
        {
          Object.entries(cookies)?.length ? Object.entries(cookies).map(([key, value]) => <ul key={key} className='w-full flex justify-between my-2' title="">
            <span>{key} : {value}</span>
            <button className='bg-red-700 text-white px-4 hover:bg-red-900' onClick={()=>handleRemoveCookie(key)}>Delete</button>
          </ul> ) : <p>No cookie data found!</p> 
        }
        </div>
      </div>
  )
}

export default Storage