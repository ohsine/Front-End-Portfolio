import React, { useState } from "react"



function Header(props)
{
    return (
        <header>
            <h1>
                <a href="/PropsToDelete" onClick={(event) => {
                    event.preventDefault();     //a태그가 동작하는 기본 동작을 방지한다 > 클릭해도 리로드가 일어나지 않는다.
                    props.onChangeMode();
                }}>{props.title}</a>
                </h1>
        </header>
    )
}

function Nav(props)
{
    const lis = []

    for(let i = 0; i < props.topics.length; i++)
    {
        let t = props.topics[i];
        lis.push(
            <li key={t.id}>
                {t.id}.
                <a id={t.id} href={'/read/' + t.id} onClick={(event) => {
                    event.preventDefault();
                    props.onChangeMode(Number(event.target.id));
                }}>{t.title}</a>
            </li>
        )
    }

    return (
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    )
}

function Article(props)
{
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    )
}

export default function PropsToDelete()
{
    const topics = [
        {id:1, title:'html', body:'html is ...'},
        {id:2, title:'css', body:'css is ...'},
        {id:3, title:'javascript', body:'javascript is ...'},
    ]

    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);

    let content = null;

    if(mode === 'WELCOME')
    {
        content = <Article title="Welcome" body="Hello, WEB"></Article>
    }
    else if (mode === 'READ')
    {
        let title, body = null;

        for(let i = 0; i < topics.length; i++)
        {
            if(topics[i].id === id)
            {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body}></Article>
    }

    return (

        <div>
            
            <Header title="WEB" onChangeMode={() => {
                setMode('WELCOME');
            }}></Header>

            <Nav topics={topics} onChangeMode={(_id) => {
                setMode('READ');
                setId(_id)
            }}></Nav>

            {content}

        </div>
        
    )
}