// page.js
import { createContext, useState } from 'react';
import CallApi from './callApi';
import ContextApi from './contextApi';
import dataUpload from './dataUpload';




export default function TryCode() {
    const [data, setData] = useState("Hello World");
    const newData = "My new is Rizwan"
    return (
        <div style={{backgroundColor:'black'}}>
        <ContextApi.Provider value="My new is Rizwan">
            <CallApi/>
            {/* <dataUpload/> */}
        </ContextApi.Provider>
        </div>
    )
}
