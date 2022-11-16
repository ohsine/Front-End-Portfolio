import React, {useState} from "react";

const Input = () =>
{
    const [txtValue, setTextValue] = useState("");

    const onChange = (e) =>
    {
        setTextValue(e.target.value)
    }

    return(
        <div>
            <input type="text" value={txtValue} onChange={onChange} />
            <br />
            <p>{txtValue}</p>

            
            <br />
            <p>Counter.js와 마찬가지로 useState함수를 이용해서 동적으로 현재값을 변경해줍니다.</p>
            <pre>
            {`<input type="text" value={txtValue} onChange={onChange} />`}
            </pre>
            <pre>
                {`
                const onChange = (e) =>
                {
                setTextValue(e.target.value)
                }
                `}
            </pre>
            <p>이벤트가 발생한 부분의 현재 값을 가져와 출력합니다.</p>
        </div>
    )
}

export default Input;