---
title: 'Day 6 - Mock interviews and Web APIs'
description: 'Day 6 of 31 days of Code (May)'
pubDate: 2025-05-06,
tags: ["grind"]
---

I had a mock interview session today were I was asked to design(mock) a simplified version of the Dealers Card Game _(-- which I had no prior knowledge of before today --)_.

The interview question was sort of dictated, and since it was UI, there was no really 'Sample input/output'

So at the beginning, there was lots of discussion, (from me), I had tons of clarifying question to sort of understand what I needed to build.

Although it was a UI build, I did not start to code until my interviewer and I agreed on what was a good approach. When I first discussed my first approach to store visited cards in an array of objects, he had a different opinion of using a `flatMap` which I went with (because duh, the interviewer would most times have better context as they are more familiar with the problems and tradeoffs--)

The flatMap ended up having better performance when I weighed. 

Most importantly, I was glad I shared the approach with him before jumping right into code.

**Blindspots**
- Barely finished the solution before the 1-hour mark, and for obvious reasons, I would like to improve on velocity by practicing more and tracking which aspect took me to longest to solve, in this case, it was tracking *already seen card*

Because I think the code is elegant, here it is:

```
import { useState } from "react";
import "./App.css";

const CARD_SUITS = ["Spades", "Hearts", "Diamonds", "Clubs"];
const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

let card_deck = [];

CARD_SUITS.map((suit) =>
  CARD_VALUES.map((value) => card_deck.push(`${suit} ${value}`)),
);

export default function App() {
  const [cardsAvail, setCardsAvail] = useState(card_deck);
  const [pickedCard, setPickedCard] = useState([]);

  const disabled = cardsAvail.length < 5;

  function handleDisplayCards() {
    let hand = [];
    const newDeck = [...cardsAvail];

    for (let i = 0; i < 5; i++) {
      let randIndex = Math.floor(Math.random() * newDeck.length);
      const card = newDeck.splice(randIndex, 1)[0];
      hand.push(card);
    }

    console.log(hand);

    setCardsAvail(newDeck);
    setPickedCard((prev) => [...prev, hand]);
  }

  function handleRestart() {
    setCardsAvail(card_deck);
    setPickedCard([]);
  }

  return (
    <main>
      {pickedCard.length > 0
        ? pickedCard.map((item, index) => (
            <div className="flex-cls" key={index}>
              {item.map((card) => (
                <p key={card}>{card}</p>
              ))}
            </div>
          ))
        : ""}
      {disabled && <p>Game over</p>}

      {disabled ? (
        <button onClick={handleRestart}>Restart</button>
      ) : (
        <button onClick={handleDisplayCards}>Deal a hand</button>
      )}
    </main>
  );
}
```

#### Part 2

I had an interview a while ago where was to design a calendar day view. Prompt below _(not exact because I do not recall verbatim, but the idea is pretty close)_

// 1. implement the google calendar day view - the date to the left and the box to the right
<br>
// 2. onclick on the box should auto populate the time input field, then edit the activity (form)
<br>
// 3. when you submit, the activity should show up  on the box
<br>
// 4. there can be grouped even e.g from 10am - 12pm
<br>
// 5. if an activity is already in 12pm for instance
<br>
// i -> implement overwrite
<br>
// 6. when you click on a prefilled box, you can edit or delete

_I apologize if this makes no sense, you can reach out on linkedin and I'd be happy to clarify whichever part was confusing to you._

**Hiccups**
- I had 2 major blockers - dynamically rendering the dates and looping through the start and end_times to update (I hardcoded during the interview which icked me the entire time)
- You might not believe this but while I was praying the next morning, it occured to me that the approach of looping from 0..24 was correct and I could have just modulo-d it. Yes I was pained afterwards on realizing how ridiculously easy making that dynamic could have been
- I used a select to handle the start and end input times, because the standard date input has a different format from my time Data (12am, 1am... yes even though it was dynamically generated.)
`<Input type="time">` would typically return a format like 00 : 00, 13:00
- Since we're on time, edge-cases: During the interviwew, I didn't have to handle non-hour clocks like 1:45, 2:38, but this is outside of and I'm thinking about this.


_This code doesn't feel as pretty but here you go:_
```
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

// 1. implement the google calendar day view - the date to the left and the box to the right
// 2. onclick on the box should auto populate the time input field, then edit the activity (form)
// 3. when you submit, the activity should show up  on the box
// 4. there can be grouped even e.g from 10am - 12pm
// 5. if an activity is already in 12pm for instance
// i -> implement overwrite
// ii -> implement activity-not-allowed
// 6. when you click on a prefilled box, you can edit or delete

const DEFAULT_USER_INPUT = {
  start_time: "",
  end_time: "",
  activity_name: "",
};

export default function App() {
  const [timeBlock, setTimeBlock] = useState([]);
  const [userInput, setUserInput] = useState(DEFAULT_USER_INPUT);

  function generateTimeBlock() {
    let time = [];

    for (let i = 0; i < 24; i++) {
      let time_block;
      if (i === 0) {
        time_block = "12 AM";
      } else if (i === 12) {
        time_block = "12 PM";
      } else if (i > 12) {
        time_block = (i % 12) + " PM";
      } else {
        time_block = i + " AM";
      }

      time.push({
        id: i,
        time_block,
        active: false,
        activity: {
          start_time: "",
          end_time: "",
          activity_name: "",
        },
      });
    }
    return time;
  }

  useEffect(() => {
    setTimeBlock(generateTimeBlock());
  }, []);


  function handleSubmit(e) {
    e.preventDefault();

    let start = timeBlock.findIndex(
      (el) => el.time_block === userInput.start_time,
    );
    let end = timeBlock.findIndex((el) => el.time_block === userInput.end_time);

    for (let i = start; i <= end; i++) {
      setTimeBlock((prev) =>
        prev.map((el) =>
          el.id === i
            ? {
                ...el,
                active: true,
                activity: {
                  start_time: userInput.start_time,
                  end_time: userInput.end_time,
                  activity_name: userInput.activity_name,
                },
              }
            : el,
        ),
      );
    }
  }
  return (
    <main>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          setUserInput(DEFAULT_USER_INPUT);
        }}
      >
        <div className="grid-4">
          <label>From Time:</label>
          <label>To Time:</label>
          <label>Activity:</label>
        </div>
        <div className="grid-4">
          {/* start time */}
          <select
            value={userInput.start_time}
           
            onChange={(e) =>
              setUserInput((prev) => ({ ...prev, start_time: e.target.value }))
            }
          >
             <option></option>
            {timeBlock.map((time) => (
              <option key={time.id} value={time.time_block}>
                {time.time_block}
              </option>
            ))}
          </select>
          {/* end time  */}
          <select
            value={userInput.end_time}
            onChange={(e) =>
              setUserInput((prev) => ({ ...prev, end_time: e.target.value }))
            }
          >
             <option></option>
            {timeBlock.map((time) => (
              <option key={time.id} value={time.time_block}>
                {time.time_block}
              </option>
            ))}
          </select>
          <input
            value={userInput.activity_name}
            onChange={(e) =>
              setUserInput((prev) => ({
                ...prev,
                activity_name: e.target.value,
              }))
            }
            type="text"
          />
          <input type="submit" />
        </div>
      </form>

      <div className="grid">
        {timeBlock.map((item) => (
          <div onClick={() => setUserInput({
            start_time: item.time_block,
            end_time: item.time_block,
            activity_name: ''
          })} data-active={item.active} className="grid_el" key={item.id}>
            <div>{item.time_block}</div>
            <div className="activity">{item.activity.activity_name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
```


#### Concept study:

- More prototypal inheritance
- Web vs Browser API
- Tradeoffs betwwen cookies, localStorage, sessionStorage - and I'm well aware any of this could easily be a blog post. [Resource](https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies)
- Styling elements using dynamic data-attributes in react

Timestamp: 5:52PM

🟩