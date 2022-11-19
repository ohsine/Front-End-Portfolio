import React, {useState} from "react";
import logo from '../images/그림.png'

const Learning = () =>
{
    let posts = "예시 변수명";
    let 파랑스타일 = {color : 'blue', fontSize : '25px'}

    let [a, b] = [10,100];

    let [글제목, 글제목수정] = useState(['남자코트 추천', '강남 우동맛집', '리액트 독학']);
    let [따봉, 따봉변경] = useState(0);

    function 따봉증가()
    {
        따봉변경(따봉 + 1);
    }

    function 따봉감소()
    {
        if(따봉 > 0)
        {
            따봉변경(따봉 - 1);
        }
    }

    // function 글제목함수()
    // {
    //     let copy = [...글제목];
    //     copy[0] = '여자코트 추천'
    //     글제목수정(copy);
    // }

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
            <hr />
            <br />

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

                <br />

                <p>useState의 첫 항에 배열도 올 수 있다.</p>
                <p>let [글제목, 글제목수정] = useState(['남자코트 추천', '강남 우동맛집', '리액트 독학']);</p>
                <p>글제목[0] : {글제목[0]} <span onClick={ 따봉증가 }>👍</span> <span onClick={ 따봉감소 }>👎</span>{따봉}</p>
                <p>글제목[1] : {글제목[1]}</p>
                <p>글제목[2] : {글제목[2]}</p>
                <br />

                <p>state에 저장해놓는 이유: state는 변경되면 HTML이 자동으로 재렌더링 된다.</p>
                <p>일반 변수를 쓰면 내용이 변경이 되었을 때 바로 재렌더링 되는게 아니라 새로고침을 해야 한다.</p>
                <p>자주 변경되는 데이터는 state로 작성한다.</p>
                <p>state 변경하는 법 : state변경함수(새로운 state)</p>

                <button onClick={ () =>{
                            let copy = [...글제목];
                            copy[0] = '여자코트 추천'
                            글제목수정(copy);}
                 }>
                    글제목 변경
                </button>

                <button onClick={ () => {
                    let copy = [...글제목];
                    copy.sort();
                    글제목수정(copy);
                }
                }>
                    글제목 정렬
                </button>

                 <p>기존 배열이나 함수의 원소를 변경해도 setter 함수는 기존의 state가 달리지지 않았다고 인식되어 변경하지 않는다.(화살표만 가리킴) </p>
                 <p>let copy = [...글제목] : 깊은 복사, 화살표도 달라짐</p>
            </div>
                <hr />
            <Modal />


        </div>
    )
}

function ModalList(props)
{
    const lis = []

    for(let i = 0; i < props.topics.length; i++)
    {
        let t = props.topics[i];
        lis.push(<p key={t.id}>{t.id + ". " + t.body}</p>)
    }

    return (
        <div className="list">
        <p>어떤걸 컴포넌트로 만들면 좋은가</p>
        {lis}
        <br />
        <p>컴포넌트의 단점</p>
        <p>state 가져다 쓸 때 문제가 생긴다.</p>
    </div>
    )
}

const Modal2 = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
            <p>const로 선언하면 나중에 수정할 때 애러를 띄워줘 오류를 줄일 수 있다. </p>
        </div>
    )
}

function Modal()
{
    const topics = [
        {id : 1, body : "반복적인 html 축약할 때"},
        {id : 2, body : "큰 페이지들"},
        {id : 3, body : "자주 변경되는 것들"},

    ]

    return (
        <div className = "modal">
            <div className="list">
                <p>컴포넌트 만드는 법</p>
                <p>1. function을 만들고</p>
                <p>2. return() 안에 html 담고</p>
                <p>3. {`<함수명><함수명/>`} 쓰기</p>
            </div>
            <div className="list">의미없는 div대신 {`<></>`} 사용</div>
            <ModalList topics={topics}/>
            <Modal2 title="Modal2 Title" body="컴포넌트에 props(매개변수같은 느낌)를 넘겨준다."/>
            <p>props로 배열이나 오브젝트를 넘겨줄 수 있다.</p>
        </div>
    )
}


export default Learning;