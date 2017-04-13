/**
 * Created by oem on 2017-04-13.
 */
/**
 * Created by oem on 2017-04-12.
 */
import React, {Component} from 'react';

import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/SvgIcon';
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu'

export class NavDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggle = () => {

        this.setState((prevState, arg) => {
            return {
                open: !prevState.open
            }
        })
    }

    render() {
        const result = (
            <div>
                <FloatingActionButton
                    onTouchTap={this.toggle}
                >
                    <Menu/>
                </FloatingActionButton>

                <Drawer
                    open={this.state.open}
                >
                    <MenuItem
                        primaryText={"Play"}
                    />
                    <MenuItem
                        primaryText={"Profile"}
                    />
                </Drawer>
            </div>
        )
        return result;
    }
}
