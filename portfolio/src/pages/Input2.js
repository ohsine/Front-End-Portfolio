import React, {useState} from "react";

const Input2 = () =>
{
    const [inputs, setInputs] = useState({
        name: "",
        emial: "",
        tel: "",
    })

    const {name, email, tel} = inputs;

    const onChange = (e) =>
    {
        const value = e.target.value;
        const id = e.target.id;
        
        //inputs[id] = value;
        setInputs({
            ...inputs,
            // name: "",
            // emial: "",
            // tel: "",
            [id]: value,
        })
    }

    return(
        <div>
            <div>
                <lavel>이름</lavel>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <lavel>이메일</lavel>
                <input type="email" id="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <lavel>전화번호</lavel>
                <input type="tel" id="tel" value={tel} onChange={onChange}/>
            </div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>
        </div>
    )
}

export default Input2;