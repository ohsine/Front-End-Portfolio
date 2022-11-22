import React, { useState } from "react"
import Word from "../components/Word"
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
                            <Word word={word} key={word.id}/>
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

// REST API

// Create : POST
// Read : GET
// Update : PUT
// Delete : DELETE