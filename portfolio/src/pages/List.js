import React from 'react';

const User = ({userData}) =>
{
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList = () =>
{
    const users = [
        {email: 'ryu@gmail.com,', name: '유재석'},
        {email: 'kim@gmail.com,', name: '김종국'},
        {email: 'ha@gmail.com,', name: '하하'},
        {email: 'song@gmail.com,', name: '송지효'},
    ];

    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
        
        <p>배열 데이터를 입력 받았을 때 테이블 형식으로 출력하는 방식 : List</p>
        <p>map함수를 이용해서 반복 &gt; users의 요소들을 userData 프로퍼티로 넘겨주고 {`<tr>`}태그를 반환한다.</p>
        </div>
    )
}

export default UserList;