import React, { useState } from "react"
import Word from "../components/Word"
import Header from "../components/Header"
import useFetch from "../hooks/useFetch";
// import {Route, Routes} from "react-router-dom"
// import dummy from "../db/data.json"

export default function Words()
{
    let [daySelected, setSelectedDay] = useState(0);

    // let [days, setDays] = useState([]);
    // let [count, setCount] = useState(0);

    // const wordList = dummy.words.filter((word) => (
    //     word.day === Number(daySelected)
    // ))

    // const [words, setWords] = useState([]);

    const SetDaysF = (e) => {
        setSelectedDay(e)
    }

    // const onClick2 = () => {
    //     setDays([
    //         ...days,
    //         {
    //             id : Math.random(),
    //             day : 1
    //         }
    //     ])
    // }

    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //     .then((res) => {
    //         return res.json()
    //     })
    //     .then((data) => {
    //         setDays(data)
    //     })
    // }, [])

    const days = useFetch("http://localhost:3001/days");

    const words = useFetch(`http://localhost:3001/words?day=${daySelected}`);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${daySelected}`)
    //     .then((res) => {
    //         return res.json()
    //     })
    //     .then((data) => {
    //         setWords(data)
    //     })
    // }, [daySelected])

    return (
        <>
            <Header />

            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        {/* <Link to={`/day/${day.day}`}>Day {day.day}</Link> */}
                        <button onClick={() => SetDaysF(day.day)}>Day {day.day}</button>
                    </li>
                ))}
            </ul>

            {/* <button onClick={onClick2}>Day change</button> */}

            <div>
                <h2>Day {daySelected}</h2>

                <table>
                    <tbody>
                        {words.map(word => (
                            <Word word={word} key={word.id}/>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* <Routes>
                <Route exact path="/" element={<DayList />} />
                <Route path="/day/:day" element={<Day />} />
            </Routes> */}
        </>
    )
}

// REST API

// Create : POST
// Read : GET
// Update : PUT
// Delete : DELETE