import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const articles = [
    {
        category: 'revolution',
        image: '/assets/images/tl-3/blog-1.jpg',
        title: 'Educational Insights: Discovering the Art of Learning.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut maximus libero vel cursus tortor, Nunc non.',
        date: 'March 23, 2023',
        link: '#',
    },
    {
        category: 'notebook',
        image: '/assets/images/tl-3/blog-2.jpg',
        title: 'Educational Insights: Discovering the Art of Learning.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut maximus libero vel cursus tortor, Nunc non.',
        date: 'March 23, 2023',
        link: '#',
    },
    {
        category: 'revolution',
        image: '/assets/images/tl-3/blog-3.jpg',
        title: 'Educational Insights: Discovering the Art of Learning.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut maximus libero vel cursus tortor, Nunc non.',
        date: 'March 23, 2023',
        link: '#',
    },
    {
        category: 'learning',
        image: '/assets/images/tl-5/blog-1.jpg',
        title: 'Educational Insights: Discovering the Art of Learning.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut maximus libero vel cursus tortor, Nunc non.',
        date: 'March 23, 2023',
        link: '#',
    },
];
export const PopularArticles = () => {
    const [filter, setFilter] = useState('all');
  const navigate = useNavigate();


    const handleFilter = (category) => {
        setFilter(category);
    };

    const filteredArticles = filter === 'all'
        ? articles
        : articles.filter(article => article.category === filter);

    const handleMoreDetails = (article) => {
        sessionStorage.setItem('selectedClass', JSON.stringify(article));
        navigate('/deatilsPages');
    };
    return (
        <div>
            <div className="tl-11-pop-articles-left-col">
                <div className="tl-11-section-heading">
                    <h2 className="tl-11-section-title">Popular Articles</h2>
                    <div className="tl-11-pop-articles-filtering-btns">
                        <button onClick={() => handleFilter('all')}>See All</button>
                        <button onClick={() => handleFilter('revolution')}>Revolution</button>
                        <button onClick={() => handleFilter('learning')}>Learning</button>
                        <button onClick={() => handleFilter('notebook')}>Notebook</button>
                    </div>
                </div>
                <div className="tl-11-pop-articles-col">
                    {filteredArticles.map((article, index) => (
                        <div key={index} className={`tl-11-pop-article mix ${article.category}`}>
                            <div className="tl-11-pop-article-img">
                                <img src={article.image} alt="Article" />
                            </div>
                            <div className="tl-11-pop-article-txt">
                                <div className="tl-11-pop-article-infos">
                                    <span className="tl-11-pop-article-date"><i className="fa-regular fa-clock"></i> {article.date}</span>
                                </div>
                                <h3 className="tl-11-pop-article-title">{article.title}</h3>
                                <p className="tl-11-pop-article-descr">{article.description}</p>
                                <a onClick={() => handleMoreDetails(article)} className="tl-11-pop-article-btn">Read More <i class="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
