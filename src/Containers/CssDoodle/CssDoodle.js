import React from 'react';
import "./CssDoodle.scss";
import Doodle from '../../Components/CssDoodle/Doodle';

export default function CssDoodle() {
  return (
    <div className='css-doodle-body'>
        <div className='css-doodle-page'>
            <Doodle
                grid="5"
                rule = {`  
                    :doodle {
                        grid-gap: 1px;
                        width: 12em; height: 12em;
                    }
                    background: #60569e;
                `}
            />
        </div>
        <div className='css-doodle-page'>
            <Doodle
                grid="10"
                rule = {`  
                    :doodle {
                        grid-gap: 1px;
                        width: 12em; height: 12em;
                    }
                    background: #60569e;
                    :container {
                        transform: rotate(45deg) scale(1.5);
                    }
                `}
            />
        </div>
        <div className='css-doodle-page'>
            <Doodle
                grid="1 x 35"
                rule = {`  
                    :doodle {
                        grid-row-gap: 1px;
                        @size: 12em; /* width: 8em; height: 8em; */
                    }
                    background: #60569e;
                    width: @rand(5%, 100%); /* from 5% to 100% by random */
                `}
            />
        </div>
        <div className='css-doodle-page'>
            <Doodle
                rule = {`  
                    @grid: 12x1 / 280px auto 1 / #1b2242;
                    @seed: 1676602917230;
                    @place: @plot(r: .5; dir: auto -90);
                    @size: 50%;
                    :container { filter: drop-shadow(0 -1px 0 #fff) }
                    clip-path: @shape(rotate: 30);
                    background: @doodle(
                        background: radial-gradient(
                            @m8.@P(#f2cc67,#f38264,#f40034,#5f051f,#75baa8)
                        );
                        clip-path: @shape(
                            points: 200;
                            frame: 18;
                            scale: .5 0.8;
                            x: (1 + 0.6 * sin(t)) * cos(t);
                            y: -1.28 * sin(t);
                        );
                    );
                `}
            />
        </div>
        <div className='css-doodle-page'>
            <Doodle
                rule = {`  
                    :doodle {
                        @grid: 1x15;
                        width: 40em; height: 40em;
                    }
                    :container {
                        position:absolute;
                        top:50%;
                        left:50%;
                        transform: translate(-50%,-50%);
                        background:black;
                    }
                   
                    @place-cell: center;
                    @size: calc(@index * calc(1.1px + calc(@index * 2px)));
                    --delay: calc(@index * 0.1s);
                    z-index: calc(10 - @index);
                    border-radius:100%;
                    border-color:rgb(0,0,0);
                    border-style:dotted;
                    border-width: calc(@index * 1px);
                    animation-name: scale;
                    animation-duration: 4s;
                    animation-iteration-count: infinite;
                    animation-timing-function: ease;
                    animation-delay:var(--delay);
                    transform-style: preserve-3d;
                    transform: scale(1);
                    @keyframes scale {
                        100%, 0%{
                            border-color: rgb(0,0,0);
                            transform: scale(1) rotate(0deg);
                        }
                        8%{
                            border-color: rgb(255,127,0);
                        }
                        16%{
                            border-color: rgb(255,255,0);
                        }
                        25%{
                            border-color: rgb(127,255,0);
                        }
                        33%{
                            border-color: rgb(0,255,0);
                        }
                        41%{
                            border-color: rgb(0,255,127);
                        }
                        50%{
                            border-color: rgb(0,255,255);
                            transform: scale(1.1) rotate(45deg);
                        }
                        58%{
                            border-color: rgb(0,127,255);
                        }
                        66%{
                            border-color: rgb(0,0,255);
                        }
                        75%{
                            border-color: rgb(127,0,255);
                        }
                        83%{
                            border-color: rgb(255,0,255);
                        }
                        91%{
                            border-color: rgb(255,0,127);
                        }
                    }
                `}
            />
        </div>
        <div className='css-doodle-page'>
            <Doodle
                rule = {`  
                    :doodle {
                        @grid: 6x1 / 100%; 
                        width: 20em; height: 20em;
                        border-radius: 50%;
                    }
                    
                    @place-cell: center;
                    @size: calc(20vw - 20 * (@row() - 1) * 1vw);
                    
                    border: 1px solid #333;
                    background-color: #ccc;
                    border-radius: 50%;
                    box-shadow: inset 0 0 50px rgba(0, 0, 0, .3);
                    
                    background-image: repeating-conic-gradient(#000 0 15deg, #FFF 0 30deg);
                    animation: spin 20s linear infinite reverse;
                    
                    @odd {
                        background-image: repeating-conic-gradient(#FFF 0 15deg, #000 0 30deg);
                        animation: spin 20s linear infinite forwards;
                    }
                    
                    @keyframes spin {
                        to { transform:rotate(360deg) }
                    }
                `}
            />
        </div>
    </div>
  )
}
