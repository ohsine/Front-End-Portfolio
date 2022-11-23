import {Link} from "react-router-dom";

export default function Header()
{
    return (
        <div className="header">
            <h1>
                <Link to="/words">영어 단어장</Link>
            </h1>
            <div className="menu">
                <Link to="createword" className="link">
                    단어 추가
                </Link>
                <Link to="createday" className="link">
                    Day 추가
                </Link>
            </div>
        </div>
    );
}