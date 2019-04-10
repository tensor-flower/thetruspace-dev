import React from 'react';
import articles from './constants'
import Card from './card'

const cardList = ()=>{
    return (        
        <div>
            {articles.map((article)=>{
                return (<div key={article.name}>
                            <Card name={article.name} src={article.src} title={article.title}
                            date={article.date} abstract={article.abstract}/>
                        </div>)
            })}
        </div>
    );
};
export default cardList;