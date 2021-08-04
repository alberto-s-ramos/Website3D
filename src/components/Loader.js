import React from 'react'
import { a, useTransition } from "@react-spring/web";
import { useProgress } from "drei";

function Loader() {
    const { active, progress } = useProgress();
    const transition = useTransition(active, {
      from: { opacity: 0.8, progress: 0.5 },
      leave: { opacity: 0.2 },
      update: { progress },
    });
    return transition(
      ({ progress, opacity }, active) =>
        active && (
          <a.div className='loading' style={{ opacity }}>
            <div className='loading-bar-container'>
              <a.div className='loading-bar' style={{ width: progress }}></a.div>
            </div>
          </a.div>
        )
    );
  }

  export default Loader