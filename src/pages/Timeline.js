import React from 'react'
import timelineElements from "../constants/TimelineElements";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { ReactComponent as WorkIcon} from '../assets/work.svg'

import { ReactComponent as TalkdeskIcon} from '../assets/Talkdesk.svg'
import { ReactComponent as AaltoIcon} from '../assets/Aalto.svg'
import { ReactComponent as IscteIcon} from '../assets/Iscte.svg'
import { ReactComponent as ISTIcon} from '../assets/IST.svg'

import 'react-vertical-timeline-component/style.min.css'
import "../style/Timeline.scss";

function mapSVG(name){
    switch(name){
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
    
    return (
        <div className="timeline-container">
            <VerticalTimeline className="timeline">
                {timelineElements.map((element) => {
                        
                        return (
                            <VerticalTimelineElement
                                key={ element.key }
                                date={ element.date }
                                dateClassName="date"
                                icon={ mapSVG(element.icon) }
                                iconStyle={ element.bgColor }
                            >
                                <h3 className="vertical-timeline-element-title">{ element.title }</h3>
                                <h5 className="vertical-timeline-element-subtitle">{ element.location }</h5>
                                <p id="description">{ element.description }</p>
                            </VerticalTimelineElement>
                        )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline