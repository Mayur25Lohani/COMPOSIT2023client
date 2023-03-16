import React from 'react';
import MainBanner from '../../EventDetails/MainBanner';
import EventCasestudy from '../../EventDetails/EventCasestudy';
import Footer from '../../Common/Footer';
import lax from 'lax.js';
import GoTop from '../../Shared/GoTop';
 
class EventCasestudyPage extends React.Component {
    constructor(props) {
        super(props)
        lax.setup()
    
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)
    
        lax.update(window.scrollY)
    }
    render(){
        return (
            <React.Fragment>
                {/* Main Banner */}
                <MainBanner />
                {/* EventTechnova Area */}
                <EventCasestudy />

                <Footer />

                {/* Back Top top */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}
 
export default EventCasestudyPage;