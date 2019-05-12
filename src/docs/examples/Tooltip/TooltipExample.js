import React from 'react';
import Tooltip from 'ps-react/Tooltip';
import IxButton from 'ps-react/IxButton';

export default class TooltipExample extends React.Component {
    render() {
        return (
            <>
                <div style={{display: 'inline-block'}}>
                    <IxButton />
                    <Tooltip direction="left" />
                </div>
                <div style={{display: 'inline-block'}}>
                    <IxButton></IxButton>
                    <Tooltip direction="right"/>
                </div>
                <div style={{display: 'inline-block'}}>
                    <Tooltip direction="up"/>
                    <IxButton></IxButton>
                </div>
                <div style={{display: 'inline-block'}}>
                    <IxButton></IxButton>
                    <Tooltip direction="down"/>
                </div>
            </>
        );
    }
}