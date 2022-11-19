import React, { useState } from "react"
import DayList from "../components/DayList"
import Day from "../components/Day"
import Header from "../components/Header"
// import {Route, Routes} from "react-router-dom"
import dummy from "../db/data.json"

export default function Words()
{
    let [dayWord, setDay] = useState(0);

    const wordList = dummy.words.filter(word => (
        word.day === Number(dayWord)
    ))

    const SetDays = (e) => {
        setDay(e)
    }

    return (
        <>
            <Header />

            <ul className="list_day">
                {dummy.days.map(day => (
                    <li key={day.id}>
                        {/* <Link to={`/day/${day.day}`}>Day {day.day}</Link> */}
                        <button onClick={() => SetDays(day.day)}>Day {day.day}</button>
                    </li>
                ))}
            </ul>
            
            <div>
                <h2>Day {dayWord}</h2>

                <table>
                    <tbody>
                        {wordList.map(word => (
                            <tr key={word.id}>
                                <td>{word.eng}</td>
                                <td>{word.kor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* <Routes> */}
                {/* <Route exact path="/" element={<DayList />} /> */}
                {/* <Route path="/day/:day" element={<Day />} /> */}
            {/* </Routes> */}
        </>
    )
}