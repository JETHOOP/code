import React, { useEffect, useState } from 'react'

const News = () => {
    const [items, setItems] = useState([])

    const url = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(err => console.log(err))
    }, [url])
    return (

        <div>
            {items.map((item, index) => (
                <div key={item.id ?? index} style={{ padding: 8, borderBottom: '1px solid #ddd' }}>
                    <strong>{item.title ?? item.name ?? `Item ${index + 1}`}</strong>
                    <div>{item.body ?? item.description ?? item.email ?? ''}</div>
                </div>
            ))}
        </div>
    )
}

export default News
