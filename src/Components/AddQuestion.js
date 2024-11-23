import React, { useState } from 'react'

const AddQuestion = (props) => {
    const {ansfi, setansfi, queliele, setqueliele, quelifi, setquelifi}=props;


// question number 

    const[quenum, setquenum]=useState();

    const onchannum =(e)=>{
        setquenum(e.target.value);
        console.log(e.target.value);
    }



// question 

    const[question, setquestion] = useState();

    const onchnque =(e)=>{
        console.log(e.target.value);
        setquestion(e.target.value);
    }



// options
    const [opfi, setopfi] = useState({"1":"", "2":"", "3":"", "4":""});

    const onchnop1=(e)=>{
        setopfi({...opfi, [1]:e.target.value})
    }
    const onchnop2=(e)=>{
        setopfi({...opfi, [2]:e.target.value})
    }
    const onchnop3=(e)=>{
        setopfi({...opfi, [3]:e.target.value})
    }
    const onchnop4=(e)=>{
        setopfi({...opfi, [4]:e.target.value})
    }




// ans

    const[key, setkey]= useState();
    const [val, setval] = useState();

    const onchn=(e)=>{
        console.log(e.target.name +" , "+ e.target.value);

        setkey(e.target.name);
        setval(e.target.value);

    }

    const oncli=(e)=>{
        console.log(key +" , "+ val);
        console.log(opfi)
        setansfi({...ansfi, [key]:val})
        
        setqueliele({"question_number":quenum, "question":question, "options":opfi});
    }



    // setting the question list element

    const oncliqueliele=(e)=>{
        console.log(queliele);
        setquelifi(quelifi.concat(queliele));
        console.log(quelifi);

        setquenum('');
        setquestion('');
        setopfi({"1":"", "2":"", "3":"", "4":""});

        alert("Question is being Added...")

    }




  return (
    <div id='addquestion'>
      <h1>Add Question</h1>

       <div className="mb-3">
            <label htmlFor="question_number" className="form-label">Question Number</label>
            <input type="number" className="form-control" id="question_number"  name='question_number' value={quenum} onChange={onchannum} required/>
        </div>
       <div className="mb-3">
            <label htmlFor="question" className="form-label">Question</label>
            <textarea className="form-control" id="question" name='question' rows="3" value={question} onChange={onchnque} required></textarea>
        </div>
       <div className="mb-3">
            <label htmlFor="options" className="form-label">Options</label>

            <div className="footerlist">

                <div>
                    
                    <p></p>
                    <ul>
                        
                            <li>
                                <input type='radio' name={quenum} value='1' onChange={onchn}/>
                                <input type="text" className="form-control" id="options"  name='options' value={opfi[1]} onChange={onchnop1} required/>
                                <br />
                                <br />
                            </li>
                            <li>
                                <input type='radio' name={quenum} value='2' onChange={onchn}/>
                                <input type="text" className="form-control" id="options"  name='options' value={opfi[2]} onChange={onchnop2} required/>
                                <br />
                                <br />
                            </li>
                            <li>
                                <input type='radio' name={quenum} value='3' onChange={onchn}/>
                                <input type="text" className="form-control" id="options"  name='options' value={opfi[3]} onChange={onchnop3} required/>
                                <br />
                                <br />
                            </li>
                            <li>
                                <input type='radio' name={quenum} value='4' onChange={onchn}/>
                                <input type="text" className="form-control" id="options"  name='options' value={opfi[4]} onChange={onchnop4} required/>
                                <br />
                                <br />
                            </li>
                       
                    </ul>
                    <p>Select the correct answer before submitting the question</p>
                    <button type="button" className="btn btn-light" onClick={oncli}>Submit</button>
                </div>



            </div>

        </div>



        <p>Submit the options before adding the question</p>
        <h1>
        <button type="button" className="btn btn-light" onClick={oncliqueliele}>Add question</button>
        </h1>
        <p>Click on add button to add the question before creating the quiz</p>

    </div>
  )
}

export default AddQuestion
