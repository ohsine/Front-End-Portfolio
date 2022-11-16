import React, {useState} from "react";

const Counter = () =>
{
    const [num, setNumber] = useState(0);

    const increase = () =>
    {
        setNumber(num + 1);
    }

    const decrease = () =>
    {
        setNumber(num - 1);
    }

    return(
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
            <br />
            <b>const [number, setNumber] = useState(0);</b>
            <p>리액트 패키지에서 useState라는 함수를 불러와줍니다.</p>
            <p>useState를 사용 할 때에는 상태의 기본값(여기서는 0)을 파라미터로 넣어서 호출해줍니다.</p>
            <p>이 함수를 호출해주면 배열이 반환되는데, 여기서 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수입니다.</p>
            <p>number = 현재 상태, setNumber = Setter함수</p>
            <thread>
                <tr>const numberState = useState(0);</tr>
                <tr>const number = numberState[0];</tr>
                <tr>const setNumber = numberState[1];</tr>
            </thread>
            <p>본래 이렇게 구분되지만 <b>배열 비구조화 할당</b>을 통해 각 원소를 추출한 것 입니다.</p>
            <pre> {`
            const onIncrease = () => {
            setNumber(number + 1);
            }

            const onDecrease = () => {
            setNumber(number - 1);
            }

            여기서 number는 다른 이름으로 변경해도 똑같이 동작합니다.
            ex) setNumber(prevNumber => prevNumber + 1);`}
            </pre>
            <p>Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정해줍니다.</p>
            <p>{`<p>{num}</p>`} : p태그에서는 num을 출력해주어야 합니다.</p>
        </div>
    )
}

export default Counter;