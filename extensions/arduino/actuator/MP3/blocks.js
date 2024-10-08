/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#009900';
    const mp3IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMzAuMSA0OCIKICAgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAuMSA0ODsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9IuaXoOa6kOicgum4o+WZqC5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yLTIgKGU4NmM4NzA4NzksIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMTkiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnMxNyIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgIGlkPSJuYW1lZHZpZXcxNSIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBpbmtzY2FwZTp6b29tPSIxOC4wNjI1IgogICBpbmtzY2FwZTpjeD0iMTUuMDUiCiAgIGlua3NjYXBlOmN5PSIyOC40MjkwNjYiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbDojRTYwMDEyO30KPC9zdHlsZT4KPGcKICAgaWQ9ImcxMiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+Cgk8cmVjdAogICB4PSIxNS45IgogICB5PSI5LjUiCiAgIGNsYXNzPSJzdDAiCiAgIHdpZHRoPSIyLjkiCiAgIGhlaWdodD0iMy4yIgogICBpZD0icmVjdDQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cmVjdAogICB4PSIxMC45IgogICB5PSI0LjciCiAgIGNsYXNzPSJzdDAiCiAgIHdpZHRoPSIzLjciCiAgIGhlaWdodD0iMy43IgogICBpZD0icmVjdDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cmVjdAogICB4PSIyMC42IgogICBjbGFzcz0ic3QwIgogICB3aWR0aD0iMy43IgogICBoZWlnaHQ9IjMuNyIKICAgaWQ9InJlY3Q4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTMwLDIwLjFjMC0xLjQsMC0yLjUsMC0zLjJ2LTAuM2gtMC4zYy0wLjksMC00LjQsMC44LTcuMSwxLjVjLTEuMSwwLjMtMi4xLDAuNS0yLjYsMC42ICAgYy0zLjIsMC42LTYuMywxLjMtOS4zLDJsLTAuNCwwLjF2MTYuNmMtMC40LTAuMS0wLjctMC4xLTEuMS0wLjJjLTAuNi0wLjEtMS4yLTAuMy0yLjEtMC4zYy0zLDAtNy4xLDMuMy03LjEsNi42ICAgYzAsMS45LDEuNSwzLjUsMy43LDQuMkM0LjMsNDcuOSw1LDQ4LDUuNiw0OGMyLjIsMCw0LjgtMSw2LjUtMy44YzAuNi0wLjksMC43LTEuMywwLjctMi43YzAtMi42LDAtNS4xLDAtNy43YzAtMS42LDAtMy4zLDAtNC45ICAgYzEuNS0wLjUsMTEuNS0yLjksMTQuMS0zLjN2OC4yYy0wLjEsMC0wLjItMC4xLTAuMy0wLjFjLTAuNy0wLjItMS4zLTAuNC0yLjMtMC40Yy0zLjYsMC02LjMsMi4zLTcuMiw0LjVjLTAuOCwxLjktMC40LDMuNywwLjksNSAgIGMyLjIsMi4xLDcuMiwxLjcsOS44LTAuOWMwLjQtMC40LDEuMi0xLjYsMS41LTIuMUMzMC4yLDM4LDMwLjEsMjguNywzMCwyMC4xeiBNMjYuNSwyMy40Yy0wLjIsMC0wLjMsMC4xLTAuNiwwLjFsLTUuNiwxLjIgICBjLTAuNSwwLjEtMS4xLDAuMy0xLjksMC40Yy0yLjEsMC41LTQuNywxLjEtNS43LDEuMWgtMC4zdi0yLjljMC0xLDAuNi0xLjEsMS4yLTEuMmMwLjEsMCwwLjMsMCwwLjQtMC4xbDEzLjYtMi44djAuNCAgIGMwLDAuNSwwLDAuOSwwLDEuM0MyNy42LDIzLDI3LjYsMjMuMywyNi41LDIzLjR6IgogICBpZD0icGF0aDEwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L2c+Cjwvc3ZnPgo=';
    
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();
    
    Blockly.Blocks.MP3_control = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MP3_CONTROL,
                args0: [
                    {
                        type: 'field_image',
                        src: mp3IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'TXPIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'RXPIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CONTROL_TYPE',
                        options: [
                            [Blockly.Msg.play, "play();"],
                            [Blockly.Msg.pause, "pause();"],
                            [Blockly.Msg.next, "next();"],
                            [Blockly.Msg.prev, "prev();"],
                            [Blockly.Msg.volumeUp, "volumeUp();"],
                            [Blockly.Msg.volumeDn, "volumeDn();"]
                            ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.MP3_loop = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MP3_LOOP,
                args0: [
                    {
                        type: 'field_image',
                        src: mp3IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'TXPIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'RXPIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'LOOP_MODE',
                        options: [
                            [Blockly.Msg.LOOP_ALL, "MP3_LOOP_ALL"],
                            [Blockly.Msg.LOOP_FOLDER, "MP3_LOOP_FOLDER"],
                            [Blockly.Msg.LOOP_ONE, "MP3_LOOP_ONE"],
                            [Blockly.Msg.LOOP_RAM, "MP3_LOOP_RAM"]
                            ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.MP3_eq = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MP3_EQ,
                args0: [
                    {
                        type: 'field_image',
                        src: mp3IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'TXPIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'RXPIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'EQ_MODE',
                        options: [
                            [Blockly.Msg.EQ_NORMAL, "MP3_EQ_NORMAL"],
                            [Blockly.Msg.EQ_POP, "MP3_EQ_POP"],
                            [Blockly.Msg.EQ_ROCK, "MP3_EQ_ROCK"],
                            [Blockly.Msg.EQ_JAZZ, "MP3_EQ_JAZZ"],
                            [Blockly.Msg.EQ_CLASSIC, "MP3_EQ_CLASSIC"],
                            [Blockly.Msg.EQ_BASS, "MP3_EQ_BASS"]
                            ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.MP3_vol = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MP3_VOL,
                args0: [
                    {
                        type: 'field_image',
                        src: mp3IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'TXPIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'RXPIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'vol'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.MP3_play = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MP3_PLAY,
                args0: [
                    {
                        type: 'field_image',
                        src: mp3IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'TXPIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'RXPIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;

