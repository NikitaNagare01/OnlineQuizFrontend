import React, { useState } from 'react'

const Que = (props) => {
    const{pp, ele, op, ansfi, setansfi}=props;
    let i=0;

    const[key, setkey]= useState();
    const [val, setval] = useState();

    const onchn=(e)=>{
        console.log(e.target.name +" , "+ e.target.value);

        setkey(e.target.name);
        setval(e.target.value);

    }

    const oncli=(e)=>{
        console.log(key +" , "+ val);
        setansfi({...ansfi, [key]:val})
    }

  return (
    <div id='que'>

        <div className="con">

            
            <div className="footerlist">

                <div>
                    <h5>{pp}</h5>
                    <p>{ele.question}</p>
                    <ul>
                        {Object.values(op).map((o)=>{
                            {i++}
                            return <li key={o}>
                                <input type='radio' name={pp} value={i} onChange={onchn}/>
                                <label>{o}</label>

                                <br/><br/>

                                
                                
                            </li>
                        })}
                    </ul>
                    <button type="button" className="btn btn-light" onClick={oncli}>Submit</button>
                </div>

               

            </div>

        </div>

    </div>
  )
}

export default Que
