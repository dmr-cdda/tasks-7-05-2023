import useLocalStorage from '@/hooks/useLocalStorage';
import React, { useEffect } from 'react'
import { allLocalStorageData } from '@/utils/localStorageData';
import { allSessionStorageData } from '@/utils/sessionStorageData';

export type Data = {
    key: string,
    value : string
}

const renderTable = (storageData : any) => {
    return <table className="table-auto">
            <thead>
                <tr>
                <th className="px-4 py-2">Key</th>
                <th className="px-4 py-2">Value</th>
                </tr>
            </thead>
                    <tbody>
                        {storageData?.map((data : Data, i:number) => {
                    
                        return     <tr key={i}>
                        <td className="border px-4 py-2">{data.key}</td>
                        <td className="border px-4 py-2">{data.value}</td>
                        </tr>
                })} 

            </tbody>
            </table>
}

const LocalSessionStorage = () => {
  
    const [name, setName] = useLocalStorage<string>("Mizan", "");

  
  useEffect(() => {
    setName("CDDA")
  },[])
    // decide what to render for local storage 
    let content = null;
    
    if(!allLocalStorageData()?.length) content = <p>No local storage data found!</p>
    if (allLocalStorageData()?.length) content = renderTable(allLocalStorageData());

    // decide what to render for session storage 
    let sessionContent = null;
    
    if(!allSessionStorageData()?.length) sessionContent = <p>No session storage data found!</p>
    if (allSessionStorageData()?.length) sessionContent = renderTable(allSessionStorageData());
    
  return (
    <div className="bg-green-50 w-[600px] p-4 box-border overflow-x-scroll">
      <p className='font-bold'>Local Storage data</p>
      <div className="text-sm mb-12">
              {/* Local storage render */}
              {content}

    </div>
      <p className='font-bold'>Session Storage data</p>
      <div className="text-sm">
              {/* Local storage render */}
              {sessionContent}

    </div>
      </div>
  )
}

export default LocalSessionStorage