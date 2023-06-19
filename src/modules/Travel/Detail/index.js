import React, {useEffect, useState} from 'react';
import './style.css';
import imgTravelBg from './images/bg.jpg'
import iconMoney from './images/money.svg'
import iconCheckList from './images/checklist.svg'
import iconChat from './images/chat.svg'
import {Link} from "react-router-dom";

function RouteLocation(props) {

    const [marginLeft, setMarginLeft] = useState(0)
    const [touchStartX, setTouchStartX] = useState(0)
    const [visited, setVisited] = useState(props.location.visited);

    function handleTouchStart(touchStartEvent) {

        const touch = touchStartEvent.touches[0];
        setTouchStartX(touch.pageX);

        console.dir(touchStartEvent);
    }
    function handleTouchMove(touchMoveEvent) {
        const touch = touchMoveEvent.touches[0];
        let x = touch.pageX-touchStartX;
        if(x > 60) {x = 60}
        if(x < -60) {x = -60}
        setMarginLeft(x);

        //console.dir(touchMoveEvent);
    }
    function handleTouchEnd() {
        if(marginLeft > 30) {
            setVisited((prevState) => !prevState);
        }
        if(marginLeft > 0) {setMarginLeft(0)};
    }

    function handleBlockClick() {
        setMarginLeft(0);
    }

    let styles = {
        transform: `translateX(${marginLeft}px)`,
    }

    return (
        <div className='route-item-block' onClick={handleBlockClick}>
            <div
                className="route-item location"
                style={styles}
                onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
                onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
                onTouchEnd={() => handleTouchEnd()}
            >

                <div className="slider">
                    {(props.location.slider) &&
                        <React.Fragment>
                            {props.location.slider.map((slide) =>
                                <div key={slide.id} className="slide">
                                    <img src={slide.src} />
                                </div>
                            )}
                        </React.Fragment>
                    }

                </div>
                <Link to={props.location.link} className="title">{props.location.title}</Link>
                <div>{visited ? 'посетил' : ''}</div>
            </div>
        </div>
    )
}

export function TravelDetail(props) {

    function getTravelData() {
        let data = {
            'title': 'Едем на Алтай',
            'code' : 'altai-170723-210723-uid',
            'tags' : [
                {
                    'id': 1,
                    'title': 'из Новосибирска'
                },
                {
                    'id': 2,
                    'title': 'на Авто'
                }
            ],
            'slider' : [
                {
                    'type' : 'img',
                    'src' : 'https://storage.yandexcloud.net/travelmaps/altay.jfif'
                }
            ],
            'period' : {
                'type' : 'planned',
                'begin': '17/07/2023',
                'end'  : '21/07/2023'
            },
            'users' : [
                {
                    'id' : 1,
                    'title': 'Иван Иванов'
                },
                {
                    'id' : 2,
                    'title': 'Маша Ивановна'
                }
            ],
            'route' : [
                {
                    'id': 1,
                    'type': 'location',
                    'link' : '/location/novosibirsk/',
                    'title': 'Новосибирск',
                    'visited' : false,
                    'slider' : [
                        {
                            'id' : 1,
                            'type' : 'img',
                            'src' : 'https://storage.yandexcloud.net/travelmaps/nsk.jpg'
                        }
                    ]
                },
                {
                    'id': 2,
                    'type': 'road',
                    'title': 'Новосибирск - Чемал',
                },
                {
                    'id': 3,
                    'type': 'location',
                    'link' : '/location/chemal/',
                    'title': 'Чемал',
                    'visited' : false,
                    'slider' : [
                        {
                            'id' : 1,
                            'type' : 'img',
                            'src' : 'https://storage.yandexcloud.net/travelmaps/chemal.jpg'
                        }
                    ]
                },
                {
                    'id': 4,
                    'type': 'road',
                    'title': 'Чемал - Новосибирск',
                },
                {
                    'id': 5,
                    'type': 'location',
                    'link' : '/location/novosibirsk/',
                    'title': 'Новосибирск',
                    'visited' : false,
                    'slider' : [
                        {
                            'id' : 1,
                            'type' : 'img',
                            'src' : 'https://storage.yandexcloud.net/travelmaps/nsk.jpg'
                        }
                    ]
                },
            ]
        };
        return data;
    }

    const [travelData, updateTravelData] = useState(getTravelData);

    let data = props.appData;
    data.title="Маршрут";

    props.setAppData(data);



    return (
        <React.Fragment>
            <div className="travel-detail">
                <img className='travel-detail-bg' src={imgTravelBg} />
                <div className="travel-detail-content">
                    <div className="slider">
                        {travelData.slider.map((slide) =>
                            <div key={slide.id} className="slide">
                                <img src={slide.src} />
                            </div>
                        )}
                    </div>

                    <div className='travel-detail-title'>{travelData.title}</div>
                    <div className='travel-detail-tags'>
                        {travelData.tags.map((tag) =>
                            <span key={tag.id}>{tag.title}</span>
                        )}
                    </div>
                    <div className={'travel-detail-period '+travelData.period.type}>
                        {travelData.period.begin} - {travelData.period.end}
                    </div>
                    <div className='travel-detail-users'>
                        {travelData.users.map((user) =>
                            <div key={user.id} className='userpic'>{user.title[0]}</div>
                        )}
                        <div className='userpic add'>+</div>
                    </div>

                    <div className='travel-detail-buttons'>
                        <Link className='btn' to={'/cash/'+travelData.code}>
                            <img className="icon" src={iconMoney} />
                            <span>Расходы</span>
                        </Link>
                        <Link className='btn' to={'/check/'+travelData.code}>
                            <img className="icon" src={iconCheckList} />
                            Чек лист
                        </Link>
                        <Link className='btn' to={'/chat/'+travelData.code}>
                            <img className="icon" src={iconChat} />
                        </Link>
                    </div>
                </div>

            </div>
            <div className="route">
                <div className="route-touch-handle-container">
                    <div className="route-touch-handle"></div>
                </div>
                <div className="route-type-list">
                    <div className="route-type-item active">по дням</div>
                    <div className="route-type-item">на карте</div>
                    <div className="route-type-item">все места</div>
                </div>
                <div className='route-list wrapper-side-margin'>
                {travelData.route.map((item) =>
                    <div key={item.id} className="route-item-containter">
                        {item.type == 'road' &&
                            <React.Fragment>
                                <div className="time-start">12:40</div>
                                <div className="time-end">13:10</div>
                                <div className={"route-item "+item.type}>
                                    <div className="title">{item.title}</div>
                                </div>
                            </React.Fragment>
                        }

                        {(item.type == 'location') &&
                            <RouteLocation location={item} />
                        }


                    </div>
                )}
                    <Link to={'/travel/'+travelData.code+'/add/end'} className='route-item-add'>
                        Добавить локацию
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}