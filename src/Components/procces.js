import React from 'react';

export default function Scrool() {
    const scrollProgress = () => {
        return {
            init() {
                window.addEventListener('scroll', () => {
                    let winScroll = document.body.scrollTop || document.documentElement.scrollTop
                    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
                    this.percent = Math.round((winScroll / height) * 100)
                })
            },
            circumference: 30 * 2 * Math.PI,
            percent: 0,
        }
    }
    return (
                <div x-data="scrollProgress">
                    <h1>nimi</h1>


                </div>



    )
}