import React from "react";
import ExpandingBar from "ps-react/ExpandingBar";
import ClickToEnterTextField from 'ps-react/ClickToEnterTextField';

export default function ExampleBar() {
    function onSubmit(event) {
        this.setState({isEntered: false});
        this.setState({isHover: false});
        /** make any additonal calls or logic when submitting here, e.g. updating the DB */
        event.preventDefault();
    }

    function onChange(event) {
        this.setState({ value: event.target.value });
        /** make any additional calls or logic when submitting here */
    }

  return (
    <ExpandingBar duration={500} height={50} multiplier={1.5}>
      <div style={{ height: 'auto', display: 'flex', flexDirection: 'row'}}>
        <div style={{height: '100%'}}>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <i className={"fa fa-cubes fa-3x"} style={{color: "#0d47a1"}} />
            </div>
        </div>
        <div
          style={{
            display: "inline-block",
            marginLeft: 10,
            marginTop: 0
          }}
        >
            <ClickToEnterTextField
              display="inline-block"
              bottomMargin={0}
              marginTop={10}
              color="white"
              name="partname"
              onChange={onChange}
              onSubmit={onSubmit}
              value="BLACK STEEL MULTI TOOL"
            />
            <div>
            <ClickToEnterTextField
              display="inline-block"
              bottomMargin={10}
              topMargin={5}
              color="white"
              name="partnum"
              onChange={onChange}
              onSubmit={onSubmit}
              value="PRT-2322"
            />
            <ClickToEnterTextField
              name="partrev"
              onChange={onChange}
              onSubmit={onSubmit}
              bottomMargin={10}
              topMargin={5}
              marginLeft={20}
              display="inline-block"
              leftMargin={50}
              value="B3"
              color="white"
            />
            </div>
          
        </div>
      </div>
    </ExpandingBar>
  );
}
