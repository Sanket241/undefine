import React from 'react'
import './Partner.css'

const Transfer = () => {
    const [From, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [tokenid, setTokenid] = useState("")
    const submit=()=>{

    }
  return (
   
    <>
    
    <div className="regi">
                <div className="regi-block">
                    <h1>Transer OwnerShip</h1>

                    <div className="email-block">
                        <div className="name">
                            <p>From</p>
                            <input type="text" value={From} placeholder='Enter Name here..' onChange={(e) => setFrom(e.target.value)} />
                        </div>
                        <div className="email">
                            <p>To</p>
                            <input type="text" value={to} placeholder='Enter Email here..' onChange={(e) => setTo(e.target.value)} />
                        </div>
                    </div>

                    <div className="eth-id">
                        <p>Token Id</p>
                        <input type="text" value={tokenid} placeholder='Enter User Name here..' onChange={(e) => setTokenid(e.target.value)} />
                    </div>
                    <button onClick={submit}>Submit</button>
                </div>
            </div>
    </>
  )
}

export default Transfer