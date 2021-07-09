import React from 'react'
import timelineElements from "../constants/TimelineElements";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import "../style/Timeline.scss";


function Timeline(){

    let workIconStyles = { background: "#06D6A0" }
    let universityIconStyles = { background: "#FFFF00" }


    return (
        <div>
            <VerticalTimeline className="timeline">
                {timelineElements.map((element) => {
                        
                        let isWorkIcon = element.isWorkIcon === "work"
                        console.log(`>>> ${isWorkIcon}`)

                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={isWorkIcon ? workIconStyles : universityIconStyles}
                            >
                                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                                <p id="description">{element.description}</p>


                            </VerticalTimelineElement>
                        )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline