import React from 'react'
import "../style/Skills.scss";

function Skills2() {

const THICKNESS = 1.5;
const FONT_SIZE = 9;

const Glow = ({color, id}) => (
  <filter id={id} filterUnits="userSpaceOnUse" x="-10" y="-10" width="120" height="120">
    <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor={color} floodOpacity="0.07"/>
    <feDropShadow dx="0" dy="-1" stdDeviation="1" floodColor={color} floodOpacity="0.07"/>
  </filter>
);

const Gradient = ({from, to, id}) => (
    <linearGradient id={id} x1='0%' y1='0%' x2='100%' y2='0%'>
        <stop offset='0%' stopColor={from} />
        <stop offset='100%' stopColor={to} />
    </linearGradient>
);

const Layer = ({text, gradient, size, offset = [0, 0, 0]}) => {
    const w = size, h = 40 * (size / 100), t = THICKNESS;
    const gid = Math.trunc(Math.random() * 10000 + 10000);
    const fid = Math.trunc(Math.random() * 10000 + 10000);
    return (
        <g className='layer' style={{
            '--offset-x': `${offset[0]}px`,
            '--offset-y': `${offset[1]}px`,
            '--offset-z': `${offset[2]}px`,
            '--size': `${size}`,
        }}>
            <path d={`M0,${h/2+t} v${-t} L${w/2},${0} L${w},${h/2} v${t} L${w/2},${h+t} Z`} fill={`url(#${gid})`} filter={`url(#${fid})`}/>
            <path d={`M0,${h/2+t} v${-t} L${w/2},${h} v${t} Z`}/>
            <path d={`M${w/2},${h+t} v${-t} L${w},${h/2}  v${t} Z`}/>
            <text x={0} y={0} dominantBaseline='middle' textAnchor='middle' style={{fontSize: FONT_SIZE * size / 100}}>{text}</text>
            <defs>
              <Gradient id={gid} from={gradient[0]} to={gradient[1]}/>
              <Glow id={fid} color={`white`} />
            </defs>
        </g>
    );
}

const Layers = ({children}) => (
    <svg className='layers' viewBox='0 0 100 90' xmlns='http://www.w3.org/2000/svg'>
        {children}
    </svg>
);

    return(
        <Layers>
            <Layer text='Blender' gradient={['rgba(15,15,15,0.90)', 'rgba(19,34,57,0.90)']} offset={[26, 68, 0]}  size={48}/>
            <Layer text='Unity' gradient={['rgba(15,15,15,0.90)', 'rgba(19,34,57,0.90)']} offset={[52, 80, 0]} size={48}/>
            <Layer text='C#' gradient={['rgba(15,15,15,0.90)', 'rgba(19,34,57,0.90)']} offset={[0, 80, 0]} size={48}/>
            <Layer text='Git' gradient={['rgba(15,15,15,0.90)', 'rgba(19,34,57,0.90)']} offset={[26, 90, 0]} size={48}/>

            <Layer text='Kotlin' gradient={['rgba(20,20,20,0.90)', 'rgba(40,56,81,0.90)']} offset={[26, 28, 0]}  size={48}/>
            <Layer text='Java' gradient={['rgba(20,20,20,0.90)', 'rgba(40,56,81,0.90)']} offset={[52, 40, 0]} size={48}/>
            <Layer text='Spring' gradient={['rgba(20,20,20,0.90)', 'rgba(40,56,81,0.90)']} offset={[0, 40, 0]} size={48}/>
            <Layer text='Docker' gradient={['rgba(20,20,20,0.90)', 'rgba(40,56,81,0.90)']} offset={[26, 50, 0]} size={48}/>

            <Layer text='CSS' gradient={['rgba(35,35,35,0.90)', 'rgba(78,93,116,0.90)']} offset={[26, -11, 0]} size={48}/>
            <Layer text='HTML' gradient={['rgba(35,35,35,0.90)', 'rgba(78,93,116,0.90)']}  offset={[0, 0, 0]}  size={48}/>
            <Layer text='JS' gradient={['rgba(35,35,35,0.90)', 'rgba(78,93,116,0.90)']} offset={[52, 0, 0]} size={48}/>
            <Layer text='React' gradient={['rgba(35,35,35,0.90)', 'rgba(78,93,116,0.90)']} offset={[26, 11, 0]} size={48}/>
        </Layers>
    )
}

export default Skills2