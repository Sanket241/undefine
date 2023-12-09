import React from 'react'
import { Button } from 'react-bootstrap'
import './Partner.css'
import { NavLink } from 'react-router-dom'

const Partner = () => {
    const [userethid, setuserethid] = useState("");
    const [xx, setXx] = useState("")
    const [catname, setCatname] = useState("")
    const [catbreed, setCatbreed] = useState("")
    const [dob, setDob] = useState("")
    const submit=()=>{
        
    }
    return (
        <>
            <div className="regi">
                <div className="regi-block">
                    <h1>PartNer</h1>

                    <div className="email-block">
                        <div className="name">
                            <p>userethid</p>
                            <input type="text" value={userethid} placeholder='Enter userethid here..' onChange={(e) => setuserethid(e.target.value)} />
                        </div>
                        <div className="email">
                            <p>xx</p>
                            <input type="text" value={xx} placeholder='Enter xx here..' onChange={(e) => setXx(e.target.value)} />
                        </div>
                    </div>

                    <div className="eth-id">
                        <p>Cat Name</p>
                        <input type="text" value={catname} placeholder='Enter catname here..' onChange={(e) => setCatname(e.target.value)} />
                    </div>

                    <div className="password">
                        <p>catbreed</p>
                        <input type="password" value={catbreed} placeholder='Enter catbreed here..' onChange={(e) => setCatbreed(e.target.value)} />
                    </div>

                    <div className="contact">
                        <p>dob</p>
                        <input type="tel" value={dob} placeholder='Enter dob here..' onChange={(e) => setDob(e.target.value)} />
                    </div>
                    <button onClick={Submit}>Submit</button>
                </div>
            </div>
            <Button> <NavLink to="/transfer" >Transfer Owner</NavLink></Button>




        </>
    )
}

export default Partner