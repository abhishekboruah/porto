import React from 'react';
import { Button } from '../components/ButtonElement';
import InfoSection from '../components/InfoSection';
import { homeObjFour } from '../components/InfoSection/data';
const resumepage= () => {
    return (
        <div>
            <Button>hhhhee</Button>
            <InfoSection {...homeObjFour}/>
        </div>
    )
}

export default resumepage;