---
title: 'Before you write another useEffect hook'
featured: true
main: false
pubDate: 2025-04-13
pubMonth: April
description: 'Before you use another useEffect hook'
image:
    url: 'https://i.imgur.com/VqCGUq6.png'
    alt: 'You might not need a useEffect hook'
tags: ["react", "featured", "main"]
---

This article is my summation and regurgitation of the react official documentation, for more examples and usecases, check out the react doc.

useEffect hook was designed to interact with external services such as APIs, browser and web APIs.

Common Wrong uses of useEffect:

1. Updating states scoped to your react application

```
import contactList from './contactList';
import {useEffect, useState} from 'react'

function DataTable(){
const [contactData, setContactData] = useState(updatedContact)

useEffect(() => {
    setContactData(contactList.slice(1,10))
},[contactData])


return(

    <table>
    {contactData.map((item) => (
        <tr key={item}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
        </tr>
    ))}
    </table>
)
}
```

In the above snippet, I have mimiced a data display component in react app. I am given a list of data and I want to only return 10, so I've created a useEffect hook to update a state to slice this. 

Now this would work but is not what react was designed to do.

Fix:
Use a derived state

```
import contactList from './contactList';
...
const contactData = contactList.slice(1,10)
....
```

Not only have we cut back the use of useEffect, we have cut back useState and what do you see, the program still works.


2. handling user input

Most times, we can cut back on useEffect hook by triggering an action when the user triggers an action