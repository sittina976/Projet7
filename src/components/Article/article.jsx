import { useState } from 'react';
import "./article.css"

function Article({ title, content, direction, className = '' }) {

    let [isHidden, setIsHidden] = useState(false);

    let contentType = 'string'
    if (true === Array.isArray(content)) {
        contentType = 'list'
    }


    function toggle() {
        isHidden = !isHidden
        setIsHidden(isHidden)
    }


    return (
        <div className={`article ${className} ${isHidden ? 'hidden' : ''}`}>
            <div className="header flex jcsb">
                <div className="title">{title}</div>
                <button onClick={toggle} className={`arrow ${isHidden ? 'down' : 'up'}`}></button>
            </div>
            <div className="body">{
                ('string' === contentType &&
                    content
                ) ||
                ('list' === contentType &&
                    <ul className="list">
                        {content.map(function (item, i) {
                            return <li key={i}>{item}</li>
                        })}

                    </ul>
                )
            }</div>
        </div>
    )
}


export default Article