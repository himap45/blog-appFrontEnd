import React from 'react';
import {useParams} from 'react-router-dom';
import articleContent from './SampleArticleDB';
import Error from '../error/Error';


function Article(props) {
   const{name}=useParams();
    const article=articleContent.find(i=>i.name===name);
   if(!article) return <Error />
    return (
        <div>
             <h1 className='title'>{article.title}</h1>
             <p>{article.description}</p>
        </div>
    );
}
 
export default Article;