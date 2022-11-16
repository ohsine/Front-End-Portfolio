import React, {useState} from "react";
import logo from '../images/123.jpg'

const Learning = () =>
{
    let posts = "예시 변수명";
    let 파랑스타일 = {color : 'blue', fontSize : '25px'}

    let [a, b] = [10,100];

    function 함수()
    {
        return 100;
    }

    return (
        <div classname="데이터 바인딩">
            <div className="list">
            <h1>Learning 화면 입니다.</h1>
            <h4>JSX 문법</h4>
            <p>리액트는 대괄호안에 변수명을 넣어서 데이터 바인딩을 쉽게 합니다.</p>
            <p>let posts = "예시 변수명";</p>
            <p> {`{ posts }`} -&gt; {posts}</p>
            <p>함수도 넣을 수 있다.</p>
            <p>{`function 함수() { return 100; }`}</p>
            <p> {`{ 함수() }`} -&gt; {함수()}</p>
            <hr />

            <img src={logo} alt={logo} />
            <p>import logo from '../images/123.jpg'</p>
            <p>{`<img src={logo} alt={logo} />`}</p>
            <p>넣고싶은 이미지를 import로 가져와서 src, id, href, className 등의 속성에 {`{ 변수명, 함수 등}`} 사용가능 합니다.</p>
            <br />
            <hr />

            <p>폰트의 사이즈나 컬러를 바꾸고 싶을 때 {`<p style="font-size : 16px"></p>`}와 같이는 사용할 수 없는데,</p>
            <p>이는 자바 스크립트에서 쓸 수 있는 민감한 키워드들이 많기 때문 -&gt; 오브젝트 형식으로 대입해야함.</p>
            <p style={{color : 'blue', fontSize : '25px'}}>{`<p style={{color : 'blue', fontSize : '25px'}}></p>`}</p>
            <p>{`let 파랑스타일 = {color : 'blue', fontSize : '25px'}`}</p>
            <p style={ 파랑스타일 }>{`<p style={ 파랑스타일 }></p>`}</p>
            <p>font-size &gt; fontSize : camelCase 작명법</p>
            <hr />
            </div>
            <div className="list">
                <p>useState 함수는 Counter탭에 설명 기재</p>
                <p>{`let [a, b] = [10,100];`} ES6 destructuring 문법</p>
                <p>{`{a}, {b}`} : {a}, {b}</p>
                <p>state에 저장해놓는 이유: state는 변경되면 HTML이 자동으로 재렌더링 된다.</p>
                <p>일반 변수를 쓰면 내용이 변경이 되었을 때 바로 재렌더링 되는게 아니라 새로고침을 해야 한다.</p>
                <p>자주 변경되는 데이터는 state로 작성한다.</p>
            </div>
        </div>
    )
}

export default Learning;