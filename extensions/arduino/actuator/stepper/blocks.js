/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6F00';
    const ksstepperIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+Cgo8c3ZnCiAgIHZlcnNpb249IjEuMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAyMzUuODk5OTkgMjQ1LjA1NzgiCiAgIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI1NiAyNTYiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlkPSJzdmcxMiIKICAgc29kaXBvZGk6ZG9jbmFtZT0ic3RlcHBlcl9tb3Rvci5zdmciCiAgIHdpZHRoPSIyMzUuODk5OTkiCiAgIGhlaWdodD0iMjQ1LjA1NzgiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4yICg3MzJhMDFkYTYzLCAyMDIyLTEyLTA5KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcwogICBpZD0iZGVmczE2IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgaWQ9Im5hbWVkdmlldzE0IgogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjMDAwMDAwIgogICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjAuOTIxODc1IgogICBpbmtzY2FwZTpjeD0iMTIzLjExODY0IgogICBpbmtzY2FwZTpjeT0iMTI3LjQ1NzYzIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjIyNjEiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjkzNSIKICAgaW5rc2NhcGU6d2luZG93LXg9IjEiCiAgIGlua3NjYXBlOndpbmRvdy15PSIwIgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcxMiIgLz4KPG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTIiPiBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiA8L21ldGFkYXRhPgo8ZwogICBpZD0iZzEwIgogICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAsLTUuNDQyMTk2KSIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+PGcKICAgICBpZD0iZzgiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+PGcKICAgICAgIGlkPSJnNiIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPjxwYXRoCiAgICAgICAgIGZpbGw9IiMwMDAwMDAiCiAgICAgICAgIGQ9Im0gMTIwLjYsNS45IGMgLTguMywxLjcgLTEzLjcsNC45IC0xNS45LDkuNiAtMS4xLDIuNCAtMS4yLDIuNyAtMS4yLDE4LjEgViA0OS4zIEwgNzAuOCw0OS40IDM4LDQ5LjUgMzQuNiw1MS4xIEMgMzEsNTMgMjguMSw1NS40IDI2LjgsNTggMjYuMyw1OSAyMi42LDc2LjMgMTgsOTkuMSBsIC04LDM5LjMgdiAzOS41IGMgMCwyNCAwLjIsNDAuNyAwLjUsNDIuNCAwLjYsMy44IDIuOSw4LjMgNS4zLDEwLjYgMS4xLDEgMy40LDIuNCA1LjIsMy4zIGwgMy4yLDEuNSAxNy41LDAuMiAxNy41LDAuMiAwLjIsNC4xIGMgMC4zLDQuOSAxLjQsNy4xIDQuNyw5IGwgMi4zLDEuMyBoIDYxLjYgNjEuNiBsIDIuMywtMS4zIGMgMy4zLC0yIDQuNCwtNC4xIDQuNywtOSBsIDAuMiwtNC4xIDE3LjcsLTAuMiBjIDE3LjIsLTAuMiAxNy44LC0wLjMgMjAuNSwtMS4zIDUuNSwtMi4zIDkuNCwtNy41IDEwLjQsLTE0LjIgMC4zLC0yLjIgMC41LC0xNi43IDAuNSwtNDIuNiBMIDI0NS44LDEzOC40IDIzOCw5OSBjIC00LjYsLTIyLjggLTguMywtNDAuMSAtOC44LC00MSAtMS4zLC0yLjYgLTQuMiwtNS4xIC03LjksLTYuOSBsIC0zLjQsLTEuNiAtMzIuNywtMC4xIC0zMi44LC0wLjEgViAzMy42IGMgMCwtMTUuNCAwLC0xNS43IC0xLjIsLTE4LjEgLTEuOSwtNC4xIC02LjYsLTcuMyAtMTMuNSwtOS4xIC0zLjksLTEgLTEzLC0xLjMgLTE3LjEsLTAuNSB6IG0gMTQuNiwxMCBjIDMuNiwwLjkgNi45LDIuNyA2LjksMy45IDAsMS4yIC0yLjYsMi45IC01LjksNCAtMS45LDAuNSAtNC40LDAuOCAtOC4yLDAuOCAtMy44LDAgLTYuMywtMC4zIC04LjIsLTAuOCAtMy40LC0xLjEgLTUuOSwtMi44IC01LjksLTQgMCwtMS4yIDMuMywtMy4xIDYuNywtMy45IDMuMiwtMC43IDExLjMsLTAuNyAxNC42LDAgeiBtIC0xNy4zLDE3LjUgYyAyLDAuNiA0LjUsMC44IDEwLjEsMC44IDUuNiwwIDguMSwtMC4yIDEwLjEsLTAuOCAxLjQsLTAuNCAzLjEsLTEgMy43LC0xLjIgbCAxLjEsLTAuMyBWIDU1LjQgNzkgbCAtMS4xLDEgYyAtMi43LDIuNCAtNy40LDMuNyAtMTMuOCwzLjcgLTYuNCwwIC0xMS4xLC0xLjIgLTEzLjgsLTMuNyBsIC0xLjEsLTEgViA1NS40IDMyIGwgMS4xLDAuMyBjIDAuNiwwLjIgMi4zLDAuNyAzLjcsMS4xIHogbSAtNDEsMjggYyAtNy41LDQuNCAtMTIuNSw5LjQgLTE1LjUsMTUuOCAtMS43LDMuNSAtMS43LDMuOCAtMS43LDguOSAwLDQuMyAwLjIsNS44IDEuMSw4IDkuMywyMy4xIDU0LjYsMzUuMyA5NS43LDI1LjggMTYuMywtMy43IDMwLjMsLTExLjggMzYuMiwtMjAuOCAyLjksLTQuNSAzLjcsLTcuMSAzLjcsLTEzIDAsLTUuMSAwLC01LjQgLTEuNywtOC45IC0zLjEsLTYuNCAtOCwtMTEuNCAtMTUuNSwtMTUuOCBsIC0zLjQsLTIgaCAyMC4xIGMgMTguMiwwIDIwLjMsMC4xIDIxLjgsMC45IDAuOSwwLjQgMiwxLjMgMi40LDIgMS4yLDEuNiAxNi4xLDc2LjIgMTUuNiw3Ny45IC0wLjcsMi44IDUuOCwyLjYgLTEwNy43LDIuNiAtMTEzLjUsMCAtMTA3LDAuMiAtMTA3LjcsLTIuNSAtMC40LC0xLjcgMTQuNSwtNzYuMyAxNS42LC03Ny45IDAuNCwtMC43IDEuNSwtMS42IDIuNCwtMiAxLjUsLTAuOCAzLjUsLTAuOSAyMS44LC0wLjkgaCAyMC4xIHogbSAyNi42LDkuNiBjIDAsNS43IDAuMiw5LjkgMC42LDExLjEgMS4yLDQuMiA2LDcuOSAxMi45LDEwLjEgMy4xLDEgNC42LDEuMSAxMSwxLjEgNi40LDAgNy45LC0wLjEgMTEsLTEuMSA2LjgsLTIuMiAxMS42LC01LjkgMTIuOSwtMTAuMSAwLjMsLTEuMiAwLjYsLTUuNCAwLjYsLTExLjEgdiAtOS4yIGwgMS4zLDAuMyBjIDguMywxLjkgMTkuNCw2LjcgMjQuNSwxMC41IDkuOSw3LjUgMTEuMiwxNi41IDMuNSwyNC4yIC0xMC4xLDEwLjEgLTMwLjcsMTYuNCAtNTMuOCwxNi40IC0xOS41LDAgLTM3LjMsLTQuNCAtNDguNywtMTIuMSAtMTUuNCwtMTAuNSAtMTIuOSwtMjMuOCA2LjIsLTMzIDQuNywtMi4zIDE0LjQsLTUuNiAxNy43LC02LjEgMC4yLC0wLjEgMC4zLDMuOSAwLjMsOSB6IE0gMjM1LjksMTg2LjEgViAyMjAgbCAtMS4xLDIuMSBjIC0wLjYsMS4yIC0xLjcsMi41IC0yLjcsMy4xIC0xLjcsMSAtMi4zLDEgLTEwMi4yLDEuMSAtNjcuOSwwLjEgLTEwMS4zLDAgLTEwMi44LC0wLjQgLTMsLTAuNiAtNSwtMi4xIC02LjEsLTQuNSAtMC45LC0xLjkgLTAuOSwtMy44IC0wLjksLTM1LjUgViAxNTIuMyBIIDEyOCAyMzUuOSBaIG0gLTQ5LDUyLjMgLTAuMSwyLjUgSCAxMjggNjkuMiBsIC0wLjEsLTIuNSAtMC4xLC0yLjUgaCA1OSA1OSB6IgogICAgICAgICBpZD0icGF0aDQiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PC9nPjwvZz48L2c+Cjwvc3ZnPgo=';
    
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.stepper_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.KS_STEPPER_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: ksstepperIconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'IN1',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'IN2',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'IN3',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'IN4',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'steps'
                    },
                    {
                        type: 'input_value',
                        name: 'speed'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.stepper_step = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.KS_STEPPER_STEP,
                args0: [
                    {
                        type: 'field_image',
                        src: ksstepperIconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'stepsNum'
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
