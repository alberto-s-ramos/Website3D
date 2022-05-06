import React from 'react'
import timelineElements from "../constants/timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { ReactComponent as WorkIcon} from '../assets/work.svg'

import { ReactComponent as NetcentricIcon} from '../assets/Netcentric.svg'
import { ReactComponent as TalkdeskIcon} from '../assets/Talkdesk.svg'
import { ReactComponent as AaltoIcon} from '../assets/Aalto.svg'
import { ReactComponent as IscteIcon} from '../assets/Iscte.svg'
import { ReactComponent as ISTIcon} from '../assets/IST.svg'

import 'react-vertical-timeline-component/style.min.css'
import "../style/Timeline.scss";

function mapSVG(name){
    switch(name){
        case "netcentric":
            return <NetcentricIcon fill="white"/>
        case "talkdesk":
            return <TalkdeskIcon fill="white"/>
        case "iscte":
            return <IscteIcon fill="white"/>
        case "ist":
            return <ISTIcon fill="white"/>    
        case "aalto":
            return <AaltoIcon fill="white"/>
        default:
            return <WorkIcon fill="white"/>
    }
}

function Timeline(){

    const workElements = [];
    const educationElements = [];

    function fillElements() {
        timelineElements.forEach((element) => {
            element.isWorkIcon === 'work' ?                
            workElements.push(
            <VerticalTimelineElement
                key={ element.key }
                date={ element.date }
                dateClassName="date"
                icon={ mapSVG(element.icon) }
                iconStyle={ element.bgColor }
            >
                <h2 className="vertical-timeline-element-title">{ element.title }</h2>
                <p className="vertical-timeline-element-subtitle">{ element.location }</p>
                <h3>{ element.role }</h3>
                <p>{ element.description }</p>
            </VerticalTimelineElement>)
            :
            educationElements.push(
            <VerticalTimelineElement
                key={ element.key }
                date={ element.date }
                dateClassName="date"
                icon={ mapSVG(element.icon) }
                iconStyle={ element.bgColor }
            >
                <h2 className="vertical-timeline-element-title">{ element.title }</h2>
                <p className="vertical-timeline-element-subtitle">{ element.location }</p>
                <h3>{ element.role }</h3>
                <p>{ element.grade ? element.grade : ''}</p>
                <p>{ element.description }</p>
            </VerticalTimelineElement>) 
        })
    }
    fillElements();
    
    return (
        <>
        <section id="Timeline" className="timeline">
            <div className="timeline__container">
                <h1>Professional Experience</h1>
                <VerticalTimeline layout='1-column-left'>
                    {workElements}
                </VerticalTimeline>
            </div>
        </section>
        <section id="Education" className="timeline">
            <div className="timeline__container">
                <h1>Education</h1>
                <VerticalTimeline layout='1-column-left'>
                    {educationElements}
                </VerticalTimeline>
            </div>
        </section>
        </>
    )
}

export default Timeline;