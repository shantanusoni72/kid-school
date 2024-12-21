import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const CountUpAnimation = ({ initialValue, targetValue, duration = 2500, step = 5 }) => {
    const [count, setCount] = useState(initialValue);
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView || count >= targetValue) return;

        const totalSteps = Math.ceil((targetValue - initialValue) / step);
        if (totalSteps <= 0) return;

        const interval = duration / totalSteps;
        let currentValue = initialValue;

        const counter = setInterval(() => {
            currentValue += step;
            if (currentValue >= targetValue) {
                setCount(targetValue);
                clearInterval(counter);
            } else {
                setCount(currentValue);
            }
        }, interval);

        return () => clearInterval(counter);
    }, [isInView, initialValue, targetValue, duration, step]);

    return (
        <div ref={ref}>
            <h1>{count}+</h1>
        </div>
    );
};

export default function Banner({ data }) {

    return (
        <div className='banner-container'>
            <div className="banner-background">
                <span class="char-a">a</span>
                <span class="char-b">b</span>
                <span class="char-4">4</span>
                <span class="char-3">3</span>
                <span class="char-5">5</span>
            </div>
            <div className="banner">
                {
                    data.cards.map((item, index) => (
                        <div className="banner-item">
                            <div className="banner-item-thumb">
                                <img src={item.image} about={item.text} />
                            </div>
                            <CountUpAnimation initialValue={item.number / 2} targetValue={item.number} />
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}