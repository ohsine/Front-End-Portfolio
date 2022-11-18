import {shuffle} from "lodash";
import React, {useState, useRef, useEffect} from "react"

export default function Keys()
{
    const inputRef = useRef(null)

    const [userList, serUserList] = useState([
        {id:1, name: "Mike"},
        {id:2, name: "Tom"},
        {id:3, name: "Jane"},
        {id:4, name: "Paul"},
    ]);

    function pushNewUser ()
    {
        serUserList([
            {
                id: userList.length + 1,
                name : inputRef.current.value,
            },
            ...userList,
        ]);
    }

    useEffect(() => {
        const id = setInterval(() => {
            const newUserList = shuffle(userList);
            serUserList(newUserList);
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, [userList]);

    return (
        <div>
            {userList.map((user, index) => (
                <input
                key ={user.id}
                type="text"
                placeholder={user.name}
                style={{display: "block"}}
                />
            ))}
            <input type="text" ref={inputRef} />
            <button onClick={pushNewUser}>등록</button>

            <br />

            <p>간단한 유저 리스트 추가 기능입니다.</p>
            <p>useRef를 이용해 입력한 값을 리스트에 추가되도록 했습니다.</p>
            <p>배열의 순서나 내용이 변경되지 않는다면 아무 key나 사용해도 된다.</p>
            <p>하지만 순서나 내용이 변화되는 상황이라면 요소를 특정할 수 있는 key를 사용한다.</p>
            <p>그렇지 않으면 매번 랜더가 발생하고 효율이 크게 떨어지기 때문</p>
        </div>
    )
}