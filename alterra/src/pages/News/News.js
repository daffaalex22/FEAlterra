import Header from '../../components/Header/Header';

import './News.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const News = () => {
    // const [data, setdata] = useState([
    //     { title: 'Hating work is having a moment', subtitle: 'Americans aren’t just quitting their jobs; they’re fighting back.', author: 'Rani Molla', id: 1 },
    //     { title: 'Kyle Rittenhouse’s tears', subtitle: 'The 18-year-old who shot three men at a protest took the stand and resorted to a tried-and-true strategy for white men in trouble.', author: 'Jamil Smith', id: 2 },
    //     { title: 'Soul food and the stories it tells about America', subtitle: 'Poet and author Caroline Randall Williams joined Vox Conversations ahead of Thanksgiving to discuss what we’re getting right — and wrong — about Black culinary traditions.', author: ' Jamil Smith ', id: 3 },
    //     { title: 'What one American’s case says about the future of the courts in Hong Kong', subtitle: 'Samuel Bickett is trying to appeal his conviction — and prove the rule of law still exists in Hong Kong.', author: 'Jen Kirby', id: 4 },
    //     { title: 'Animals need infrastructure, too', subtitle: '$350 million of Biden’s INVEST in America Act isn’t for people. It’s for wildlife that needs help crossing the road.', author: 'Ben Goldfarb', id: 5 },
    //     { title: 'The big questions about Covid-19 booster shots', subtitle: 'From the why to the who, we still need a lot of answers about booster shots.', author: 'German Lopez', id: 6 },
    //     { title: 'How Taylor Swift’s 10-minute “All Too Well” surpasses her original', subtitle: 'Taylor Swift has been teasing a 10-minute version of one of her old songs for years. It’s finally here.', author: 'Constance Grady', id: 7 }
    // ])

    // const [data, setData] = useState(null)
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch("http://localhost:8000/news")
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw Error('could not fetch the data for that resource');
    //             }
    //             return res.json();
    //         })
    //         .then(data => {
    //             setData(data);
    //             setError(null);
    //         })
    //         .catch(err => {
    //             if (err.name !== 'AbortError') {
    //                 setError(err.message);
    //             }
    //             else {
    //                 console.log('Fetch Aborted')
    //             }
    //         })
    // }, [])

    const [data2, setData2] = useState(null)
    const [error2, setError2] = useState(null);

    useEffect(() => {
        fetch("http://newsapi.org/v2/top-headlines?country=id&apiKey=5a7c7c2996ec4aa6be06aba77055aa89")
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData2(data);
                setError2(null);
            })
        // .catch(err => {
        //     if (err.name !== 'AbortError') {
        //         setError2(err.message);
        //     }
        //     else {
        //         console.log('Fetch Aborted')
        //     }
        // })
    }, [])

    return (
        <div className="news">
            <span className="line"></span>
            <Header />
            <div className="content container w-75">
                <h1 className="title">
                    Top Stories
                </h1>

                {/* {data &&
                    <div className="d-flex news-list mt-5">
                        {data.map(news => (
                            <div className={`news-preview square-${news.id}`} key={news.id} >
                                <Link
                                    className='text-black text-decoration-none'
                                    to={`/news/${news.id}`}
                                >
                                    <h2>{news.title}</h2>
                                </Link>
                                <h4>{news.subtitle}</h4>
                                <p>By <author>{news.author}</author></p>
                            </div>
                        ))}
                    </div>
                } */}

                {data2 &&
                    <div className="indo-news">
                        {data2.articles.map(news => (
                            <div className="news-indo-preview">
                                <h2>{news.title}</h2>
                                <h4>{news.description}</h4>
                                <p>By {news.author}</p>
                                <br />
                            </div>
                        ))
                        }
                    </div>
                }

                {!data2 &&
                    <h1>{error2}</h1>
                }
            </div>
        </div>
    );
}

export default News;