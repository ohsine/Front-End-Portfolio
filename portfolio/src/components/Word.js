import { useState } from "react"

export default function Word(props)
{
    const word = props.word

    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    const ToggleShow = () => 
    {
        setIsShow(!isShow);
    }

    const ToggleDone = () => 
    {
        setIsDone(!isDone);
    }

    return (
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input type="checkbox" checked={isDone}
                onChange={ToggleDone}
                />
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={ToggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    ) 
}