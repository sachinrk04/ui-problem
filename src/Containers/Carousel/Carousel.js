import React, { useEffect, useState } from 'react';
import "./Carousel.scss";

const items = [
    {
      id: 1,
      imageUrl:
        'https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 1',
      description: 'Description of item 1',
    },
    {
      id: 2,
      imageUrl:
        'https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 2',
      description: 'Description of item 2',
    },
    {
      id: 3,
      imageUrl:
        'https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 3',
      description: 'Description of item 3',
    },
];

export default function Carousel() {
    const [currentItem, setCurrentItem] = useState(0);

    const nextItem = () => {
        if (currentItem === items.length - 1) {
            setCurrentItem(0);
        } else {
            setCurrentItem((curr) => curr + 1)
        }
    }

    const prevItem = () => {
        if (currentItem === 0) {
            setCurrentItem(items.length - 1);
        } else {
            setCurrentItem((curr) => curr - 1)
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            nextItem();
        }, 2000);
        return () => clearInterval(timer);
    }, [currentItem])

    return (
        <div className="carousel-page">
            <div className='carousel-slide'>
                <h3>Carousel - 1</h3>
                <div className='slide-one'>
                    <button onClick={prevItem}>Prev</button>
                    <div className="slide-item">
                        <img 
                            height={"200"}
                            width={"200"}
                            src={items[currentItem].imageUrl}
                            alt={items[currentItem].title}
                        />
                        <h2>{items[currentItem].title}</h2>
                        <p>{items[currentItem].description}</p>
                    </div>
                    <button onClick={nextItem}>Next</button>
                </div>
            </div>
            <div className='carousel-rotate'>
                <h3>Carousel - 1</h3>
                <div className='rotate-one'>
                    <div className='gallery'>
                        <img src="https://picsum.photos/id/1004/400/400" alt="a lovely kiss in the night" />
                        <img src="https://picsum.photos/id/1013/400/400" alt="a women inside a car" />
                        <img src="https://picsum.photos/id/1066/400/400" alt="a baby" />
                        <img src="https://picsum.photos/id/325/400/400" alt="a girl in the forest" />
                        <img src="https://picsum.photos/id/65/400/400" alt="a girl" />
                    </div>
                </div>
            </div>
        </div>
    )
}
