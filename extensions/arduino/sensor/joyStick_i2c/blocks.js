/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#4C97FF';
    const secondaryColour = '#3373CC';
    const joystickIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+Cgo8c3ZnCiAgIHZlcnNpb249IjEuMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCA3NDEuMDQ4MTYgOTgwLjAwMTA0IgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlkPSJzdmcxMiIKICAgc29kaXBvZGk6ZG9jbmFtZT0iaTJjX2pveXN0aWNrLnN2ZyIKICAgd2lkdGg9Ijc0MS4wNDgxNiIKICAgaGVpZ2h0PSI5ODAuMDAxMDQiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4yICg3MzJhMDFkYTYzLCAyMDIyLTEyLTA5KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcwogICBpZD0iZGVmczE2IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgaWQ9Im5hbWVkdmlldzE0IgogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjMDAwMDAwIgogICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjAuMjM2IgogICBpbmtzY2FwZTpjeD0iMzY4LjY0NDA3IgogICBpbmtzY2FwZTpjeT0iNDkzLjY0NDA3IgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijk0NSIKICAgaW5rc2NhcGU6d2luZG93LXg9IjEyNzEiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOSIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMTIiIC8+CjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGEyIj4gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gPC9tZXRhZGF0YT4KPGcKICAgaWQ9ImcxMCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyOS40NjU5MiwtMTAuMDAzMDczKSIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+PGcKICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjEsMCwwLC0wLjEsMCw1MTEpIgogICAgIGlkPSJnOCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIj48cGF0aAogICAgICAgZD0ibSA0NzM4LjksNTAwMSBjIC0zNTMuMiwtMzguNCAtNjgxLjUsLTE5Ny43IC05NDQuNSwtNDYyLjcgLTIwMS42LC0yMDMuNSAtMzMyLjEsLTQzMCAtNDA4LjksLTcxOCAtNTMuOCwtMTk3LjcgLTU3LjYsLTU1Mi45IC0xMS41LC03NDQuOSAxNzYuNiwtNzE0LjIgODE1LjksLTEyMjIuOSAxNTM5LjcsLTEyMjIuOSA3MjMuOCwwIDEzNjUsNTA4LjggMTUzOS43LDEyMjQuOCA0Ni4xLDE5MC4xIDQyLjIsNTQ1LjIgLTExLjUsNzQzIC0yMDUuNSw3NjggLTkxOS43LDEyNjMuMyAtMTcwMywxMTgwLjcgeiBNIDQ4NTYsNDQ3My4xIGMgMzIuNiwtMzIuNiA0OCwtNjcuMiA0OCwtMTE1LjIgMCwtMTMwLjUgLTUxLjgsLTE2OC45IC0yNDUuNywtMTkwIC0xMjQuOCwtMTEuNSAtMjc0LjUsLTgwLjYgLTM4MC4xLC0xNzAuOSAtMTAxLjcsLTg4LjMgLTE5Ny43LC0yNzIuNiAtMjExLjIsLTQwMS4yIC0xNy4zLC0xNTkuMyAtNDQuMiwtMjI0LjYgLTEwMy43LC0yNTUuMyAtNzguNywtNDAuMyAtMTIyLjksLTM2LjUgLTE5MC4xLDIxLjEgLTUzLjgsNDQuMiAtNTkuNSw1OS41IC01OS41LDE1OS4zIDAsNDM1LjggMzQ1LjYsODYzLjkgNzgzLjMsOTY5LjUgNTkuNSwxNS40IDE1NS41LDI4LjggMjExLjIsMjguOCA4Mi41LDEuOSAxMDkuNCwtNS44IDE0Ny44LC00Ni4xIHoiCiAgICAgICBpZD0icGF0aDQiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjxwYXRoCiAgICAgICBkPSJtIDIxMjYsMjU5My42IGMgLTE4OC4xLC00Ni4xIC0zNTEuMywtMTQyLjEgLTUwNC45LC0yOTcuNiAtMTY3LC0xNjkgLTIzNC4yLC0yODQuMSAtMjg4LC00OTMuNCAtMzYuNSwtMTQ0IC0zOC40LC0yMjAuOCAtMzguNCwtMjg4NS41IDAsLTMwMTYgLTUuOCwtMjg1Mi44IDEyMC45LC0zMTEwLjEgODIuNiwtMTcwLjggMzA1LjMsLTM5My42IDQ3Ni4xLC00NzYuMSAyNTcuMywtMTI2LjcgOTQuMSwtMTIwLjkgMzEwOC4yLC0xMjAuOSAzMDE0LjEsMCAyODUwLjksLTUuOCAzMTA4LjIsMTIwLjkgMTcwLjgsODIuNSAzOTMuNSwzMDUuMyA0NzYuMSw0NzYuMSAxMjYuNywyNTcuMyAxMjAuOSw5NC4xIDEyMC45LDMxMTAuMSAwLDI2NjQuNyAtMS45LDI3NDEuNSAtMzguNCwyODg1LjUgLTIxLjEsODIuNSAtNjEuNCwxOTMuOSAtOTAuMiwyNDcuNiAtNzIuOSwxMzguMiAtMzE0LjgsMzc0LjQgLTQ1OC44LDQ1MS4yIC0yMDMuNSwxMDUuNiAtMzAxLjQsMTE5IC05MTAsMTE5IGggLTU0Ny4xIGwgLTU1LjcsLTEwMS43IEMgNjQ0Ny41LDIyMzIuNiA2MTc0LjgsMTk1MC40IDU5MDAuMywxNzg1LjMgNTgwMi40LDE3MjcuNyA1NjQzLDE2NTYuNyA1NDk5LDE2MDguNyBsIC0yNDAsLTgwLjYgLTkuNiwtMTI1My43IGMgLTcuNywtOTQwLjcgLTE1LjQsLTEyNjMuMiAtMzIuNiwtMTI5My45IC0zOC40LC02NS4zIC0xMzQuNCwtMTM4LjIgLTIxNSwtMTYzLjIgLTEzOC4yLC00MC4zIC0yOTEuOCwyMS4xIC0zODAuMSwxNTMuNiBsIC00NC4yLDY1LjMgViAyODkuOSAxNTQxLjYgbCAtNjEuNCwxMy40IGMgLTIzMi4zLDQ2LjEgLTU0My4zLDE4Ni4yIC03NDMsMzM0LjEgLTIyMC44LDE2My4yIC00MzkuNiw0MTQuNyAtNTQ3LjEsNjMxLjYgbCAtNDkuOSw5OS44IC00NzYuMSwtMS45IGMgLTMxMC45LDAgLTUwOC43LC05LjYgLTU3NCwtMjUgeiBNIDQyMzIuMSwxMDE3LjUgViA5MTEuOSBsIC0xMjguNiwtNjUuMyBjIC0zNTksLTE4MC41IC02MzEuNiwtNDYyLjcgLTgxNCwtODQyLjggLTEwMS43LC0yMTYuOSAtMTUxLjcsLTQyMi40IC0xNjUuMSwtNjg1LjQgLTM0LjYsLTc0NC45IDQxMC44LC0xNDM3LjkgMTExMS42LC0xNzMxLjcgNDA3LC0xNzAuOCA5NDguNCwtMTcwLjggMTM1NS40LDAgMzMwLjIsMTM4LjIgNjMzLjUsMzg5LjcgODI1LjUsNjg1LjQgMzM2LDUxMi42IDM4Mi4xLDExODQuNSAxMjEsMTczMS43IC0xODIuNCwzODAuMSAtNDU1LDY2Mi4zIC04MTIuMSw4NDIuOCBsIC0xMzAuNSw2NS4zIHYgMTA1LjYgYyAwLDU3LjYgMy44LDEwNS42IDExLjUsMTA1LjYgNDAuMywwIDMwOS4xLC0xMzQuNCA0NDUuNCwtMjIyLjcgMzI4LjMsLTIxMy4xIDY0MS4yLC01OTMuMiA3NzMuNywtOTM4LjggMTIwLjgsLTMxMyAxMzguMSwtNDEwLjkgMTQwLC03NzcuNiAwLC0zMDUuMiAtMy44LC0zNTMuMiAtNTEuOCwtNTI3LjkgLTY5LjEsLTI1OS4yIC0yMzAuNCwtNTcyLjEgLTM5Ny40LC03ODEuNCAtMjY0LjksLTMyNi40IC02NzEuOSwtNTg5LjQgLTEwODQuNywtNzAwLjcgLTE3Mi44LC00Ni4xIC0yMjQuNiwtNTEuOCAtNTE4LjMsLTUxLjggLTI5My43LDAgLTM0NS42LDUuOCAtNTE4LjMsNTEuOCAtNDEyLjgsMTExLjMgLTgxOS44LDM3NC40IC0xMDg0LjcsNzAwLjcgLTE2NywyMDkuMyAtMzI4LjMsNTIyLjIgLTM5Ny40LDc4MS40IC00OCwxNzQuNyAtNTEuOCwyMjIuNyAtNTEuOCw1MjcuOSAxLjksMzY2LjcgMTkuMiw0NjQuNiAxNDAuMSw3NzcuNSAxMzIuNSwzNDUuNiA0NDUuNCw3MjUuNyA3NzMuNyw5MzguOCAxNDIuMSw5Mi4xIDM5NS41LDIxOC44IDQ0My41LDIyMi43IDcuNSwwIDEzLjMsLTQ4IDEzLjMsLTEwNS41IHogbSAzLjgsLTEyODAuNiA1LjgsLTc3My43IDQ5LjksLTEwNy41IGMgNjkuMSwtMTQ0IDE4NC4zLC0yNTcuMyAzMzkuOCwtMzMwLjIgMTExLjQsLTUxLjggMTQ5LjgsLTYxLjQgMjgyLjIsLTYxLjQgMTMyLjUsMCAxNzAuOSw5LjYgMjgyLjIsNjEuNCAxNTUuNSw3Mi45IDI3MC43LDE4Ni4yIDMzOS44LDMzMC4yIGwgNDkuOSwxMDcuNSA1LjgsNzczLjcgYyAzLjgsNTIyLjIgMTEuNSw3NzEuOCAyNSw3NzEuOCA0Ni4xLDAgMjM2LjEsLTE0Ny44IDM1OSwtMjc4LjQgNDQ5LjMsLTQ4MCA1MTIuNiwtMTIwMS44IDE1NS41LC0xNzY2LjIgLTkwLjIsLTE0NCAtMzMyLjEsLTM3OC4yIC00ODMuOCwtNDY4LjQgLTU5LjUsLTM0LjYgLTE4NC4zLC05MC4yIC0yNzYuNSwtMTIyLjkgLTE2MS4zLC01Ny42IC0xODIuNCwtNjEuNCAtNDU2LjksLTYxLjQgLTI3NC41LDAgLTI5NS42LDMuOCAtNDU2LjksNjEuNCAtMjI0LjYsNzguNyAtMzU3LjEsMTYxLjMgLTUzNS42LDMzMC4yIC0zMjIuNSwzMDUuMiAtNDc2LjEsNjg1LjQgLTQ1MS4yLDExMjUgMTkuMiwzNDEuNyAxNTEuNyw2NTQuNyAzODAuMSw5MDAuNCAxMjYuNywxMzYuMyAzMDkuMSwyNzguNCAzNTcuMSwyODAuMyAxOS4yLDAgMjUsLTE4MC40IDI4LjgsLTc3MS44IHogbSAzNzM3LjksLTIxNzkgYyA0Mi4yLC00OS45IDQ0LjEsLTYzLjMgMzQuNSwtMjE2LjkgLTUzLjcsLTc2Mi4yIC02NzEuOSwtMTM4Mi4zIC0xNDM0LjEsLTE0MzQuMSAtMTQ3LjgsLTkuNiAtMTY4LjksLTUuOCAtMjE1LDMwLjcgLTY3LjIsNTMuOCAtODQuNSwxMzYuMyAtNDQuMiwyMTMuMSAzNi41LDY5LjEgOTQuMSw5NiAyMDkuMyw5NiAxMjYuNywwIDM2Mi44LDY3LjIgNTE2LjQsMTQ3LjggMTgyLjQsOTYgMzg0LDI5Ny42IDQ4MCw0ODAgODAuNiwxNTMuNiAxNDcuOCwzODkuNyAxNDcuOCw1MTYuNCAwLDExMS40IDI2LjksMTcyLjggOTAuMiwyMDcuNCA3MS4xLDQwLjMgMTU3LjUsMjQuOSAyMTUuMSwtNDAuNCB6IG0gLTUxMjIuMSwtMjA1LjQgYyAyMTEuMiwtNDggMzYyLjgsLTE3NC43IDQ1NSwtMzc2LjMgNjEuNCwtMTMyLjUgNjkuMSwtMzI0LjUgMTUuNCwtNDc2LjEgLTQ2LjEsLTEzNC40IC0xOTIsLTI5My43IC0zMzQsLTM2Mi45IC05NC4xLC00Ni4xIC0xMzIuNSwtNTMuOCAtMjcyLjYsLTUzLjggLTEzNi4zLDAgLTE4MC41LDcuNyAtMjcwLjcsNDkuOSAtNDk1LjMsMjMyLjMgLTUwMyw5MjEuNSAtMTUuNCwxMTcxLjEgMTQyLDcxLjIgMjY2LjgsODYuNSA0MjIuMyw0OC4xIHoiCiAgICAgICBpZD0icGF0aDYiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjwvZz48L2c+Cjwvc3ZnPgo=';
    
    Blockly.Blocks.joyStick_i2c = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.JOYSTICK_I2C,
                args0: [
                    {
                        type: 'field_image',
                        src: joystickIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'VAL',
                        options: [
                            [Blockly.Msg.BUTTON, 'rocker.readB()'],
                            [Blockly.Msg.X, 'rocker.readX()'],
                            [Blockly.Msg.Y, 'rocker.readY()']]
                    },
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };


    Blockly.Blocks.joyStick_data = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.JOYSTICK_DATA,
                args0: [
                    {
                        type: 'field_image',
                        src: joystickIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
