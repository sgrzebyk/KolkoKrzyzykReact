/**
 * Created by oem on 2017-04-12.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton'


export class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const style = {
            margin: 12,
        };

        const result = (
            <div>

                <RaisedButton
                    label="Primary"
                    primary={true}
                    style={style}
                    onClick={()=>{console.log(style)}}
                />

            </div>
        )
        return result;
    }
}
