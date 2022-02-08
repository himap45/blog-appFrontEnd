import React from 'react';
import { Link } from 'react-router-dom';
import './article.css';
import articleContent from './SampleArticleDB';

function Articlelist(props) {
    return (
        <div>
            <h1 id='list'>Articlelist</h1>
            {articleContent.map((i,key)=>(
                <Link key={key} to={`/article/${i.name}`}>
                <h3>{i.title}</h3>
                </Link>
            ))
            }


        </div>
    );
}

export default Articlelist;