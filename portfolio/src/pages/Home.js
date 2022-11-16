import React from "react";

//import img1 from "../images/123.jpg"

const Home = () =>
{
    return (
        <div>
            <h1>Home 화면 입니다.</h1>
            <p>Index.html에서 `id = root`인 파일을 실행한다.</p>
            <p>-&gt; index.js에서 root를 지정해준다. App을 실행</p>
            <p>-&gt; App.js에서 Home.js를 임포트해 내부 코드를 실행한다.</p>
            <p>-&gt; Home.js 파일 안의 컴포넌트를 출력한다.</p>
            <p>Index.html &gt; index.js &gt; App.js &gt; 라우팅</p>
            <br />
            {/* <image src={img1} /> */}
            <b>{`<Link to="/">Home</Link> | <Link to="/about">About</Link>`}</b> <br />
            <b>{`<Route path="/" element={<Home />}/> <Route path="/about" element={<About />}/>`}</b>
            <p>링크의 to에 있는 값과 똑같은 path의 값을 갖고 있는 Route를 찾아서 element 속성에 할당되어있는 리액트 컴포넌트를 보여준다.</p>
            
        </div>
    )
}

export default Home;

// import React, {Component} from "react";

// class Home extends Component
// {
//     render()
//     {
//         return <h1>Home 화면 입니다.</h1>
//     }
// }

// export default Home;