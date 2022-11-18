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
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange}/>
            </div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>


            <br />
            <p>마찬가지로 useState 함수를 사용하지만 (...)으로 표현되는 전개연산자를 중점으로 봤다.</p>
            <pre>
            {`
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
            `}
            </pre>
            <p>{`<input type="text" id="name" value={name} onChange={onChange}/>`}</p>
            <p>...input이 name, email, tel 3개의 원소를 대체합니다.</p>
            <p>이벤트가 발생한 곳의 id와 같은 이름의 값을 value로 변경해줍니다.( [id]: value )</p>
        </div>
    )
}

export default Input2;