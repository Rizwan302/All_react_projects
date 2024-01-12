import React, { useCallback, useEffect, useState } from 'react'
import './style.css'

export default function PasswordApp() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [numAllow, setNumAllow] = useState(false);
    const [chrAllow, setchrAllow] = useState(false);

    const callfun = useCallback(()=>{

        let pass = "";
        let chr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numAllow) {
            chr += "0123456789"
        }
        if (chrAllow) {
            chr += "!@#$%^&*(){}~!`?.,"
        }

        for(let i = 1; i <= length; i++){
            let check = Math.floor(Math.random() * chr.length + 1);
            pass += chr.charAt(check)
        }
        setPassword(pass)
    }, [password, length, numAllow, chrAllow])

    useEffect(()=>{
        callfun()
    }, [length, numAllow, chrAllow])
    return (
        <>
            <h1>Password Generator</h1>
            <div className='main_con'>
                
                <div className="inputBox">
                    <input type="text" value={password}/>
                    <button>copy</button>
                </div>
                <div className="secBox">
                    <div className="">
                        <input type="range" name="" id="" min={8} max={100} onChange={(e)=> {setLength(e.target.value)}} />
                        <label htmlFor="password">Length: {length}</label>
                    </div>

                    <div className=''>
                        <input type="checkbox" name="" id="" onChange={()=> {setNumAllow((prev)=> !prev)}} />
                        <label htmlFor="">Number</label>
                    </div>

                    <div className="">
                        <input type="checkbox" name="" id="" onChange={()=> {setchrAllow((prev) => !prev)}}/>
                        <label htmlFor="">characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}
