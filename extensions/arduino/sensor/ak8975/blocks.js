/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const compassIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+Cgo8c3ZnCiAgIHZlcnNpb249IjEuMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAyMzUuOTk5MzMgMjM1Ljk4MTY2IgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNTYgMjU2IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnMTQiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImNvbXBhc3Muc3ZnIgogICB3aWR0aD0iMjM1Ljk5OTMzIgogICBoZWlnaHQ9IjIzNS45ODE2NiIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4yLjIgKDczMmEwMWRhNjMsIDIwMjItMTItMDkpIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzCiAgIGlkPSJkZWZzMTgiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBpZD0ibmFtZWR2aWV3MTYiCiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgIGJvcmRlcm9wYWNpdHk9IjAuMjUiCiAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMC45MjE4NzUiCiAgIGlua3NjYXBlOmN4PSIxMTguMjM3MjkiCiAgIGlua3NjYXBlOmN5PSIxMTguNzc5NjYiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTQ1IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTkiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOSIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMTQiIC8+CjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGEyIj4gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gPC9tZXRhZGF0YT4KPGcKICAgaWQ9ImcxMiIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwLC0xMC4wMTgwOTIpIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj48ZwogICAgIGlkPSJnMTAiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+PGcKICAgICAgIGlkPSJnOCIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPjxwYXRoCiAgICAgICAgIGZpbGw9IiMwMDAwMDAiCiAgICAgICAgIGQ9Ik0gMTE3LjMsMTAuMyBDIDcyLDE0LjcgMzMuOSw0My42IDE3LjYsODUuOSBjIC0yLjcsNy4xIC01LjQsMTcuNSAtNi43LDI1LjcgLTEuMiw4LjEgLTEuMiwyNC43IDAsMzIuNyA0LjUsMjkuMiAxOSw1NS41IDQwLjgsNzMuOCAzMi40LDI3LjIgNzYuMSwzNS4xIDExNS45LDIxLjEgMTkuMSwtNi44IDM3LjYsLTE5LjYgNTAuNSwtMzUgMTkuOCwtMjMuNiAyOS44LC01NC4yIDI3LjYsLTg0LjEgLTIuOCwtMzcuNSAtMjEuNSwtNjkuNyAtNTIuNSwtOTAuNCAtMTQsLTkuNCAtMzEuNCwtMTYuMSAtNDguNCwtMTguNiAtNi42LC0xIC0yMS4xLC0xLjQgLTI3LjUsLTAuOCB6IG0gNC41LDE0LjMgYyAwLDcuNCAxLjUsOS43IDYuMSw5LjcgNC43LDAgNi4xLC0yLjMgNi4xLC05LjggdiAtNS4yIGwgNC41LDAuMyBjIDguOCwwLjYgMjAuMywzLjQgMzAsNy40IDIzLjcsOS41IDQzLjksMjcuOCA1NS45LDUwLjggNi4yLDExLjggMTAuOCwyNy41IDExLjcsMzkuNSBsIDAuMyw0LjUgaCAtNS4yIGMgLTcuNSwwIC05LjgsMS40IC05LjgsNi4xIDAsNC43IDIuMyw2LjEgOS44LDYuMSBoIDUuMiBsIC0wLjMsNC41IGMgLTAuOCwxMC45IC01LjIsMjYuMyAtMTAuNywzNy41IC0xMi45LDI2IC0zNS43LDQ1LjkgLTYyLjksNTUgLTguMSwyLjcgLTE3LjUsNC44IC0yNCw1LjIgbCAtNC41LDAuMyB2IC01LjIgYyAwLC03LjUgLTEuNCwtOS44IC02LjEsLTkuOCAtNC43LDAgLTYuMSwyLjMgLTYuMSw5LjggdiA1LjIgbCAtNC41LC0wLjMgYyAtMTIuMSwtMC45IC0yNy43LC01LjUgLTM5LjYsLTExLjcgLTIzLC0xMi4xIC00MS4zLC0zMi4yIC01MC44LC01NS45IC0zLjksLTkuOCAtNi44LC0yMS4zIC03LjQsLTMwIGwgLTAuMywtNC41IGggNS4yIGMgNy41LDAgOS44LC0xLjQgOS44LC02LjEgMCwtNC43IC0yLjMsLTYuMSAtOS44LC02LjEgaCAtNS4yIGwgMC4zLC00LjcgYyAwLjksLTEyIDUuNywtMjguMyAxMiwtMzkuOSAxNi41LC0zMC43IDQ2LC01MS43IDc5LjksLTU3IDIuNSwtMC40IDUuOCwtMC43IDcuNCwtMC44IGggMi45IHYgNS4xIHoiCiAgICAgICAgIGlkPSJwYXRoNCIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48cGF0aAogICAgICAgICBmaWxsPSIjMDAwMDAwIgogICAgICAgICBkPSJtIDY1LjQsNjYgYyAtMi44LDIuOCAtNS43LC0yIDMzLjYsNTYuOCBsIDEzLjgsMjAuNyAzNi4zLDI0LjIgYyAyMCwxMy4zIDM2LjksMjQuMyAzNy42LDI0LjUgMi42LDAuNyA1LjcsLTIuNSA1LC01IC0wLjIsLTAuNyAtMTEuMywtMTcuNiAtMjQuNSwtMzcuNiBMIDE0MywxMTMuNCAxMjUuMywxMDEuNiBDIDc2LjYsNjkuMSA2OS41LDY0LjUgNjguMiw2NC41IGMgLTAuNywwIC0xLjksMC42IC0yLjgsMS41IHogbSA4Ny44LDc4LjQgYyAxOS43LDI5LjYgMTguNiwyNy45IDE3LjcsMjcuMyAtMSwtMC42IC01MS40LC0zNC4xIC01MS43LC0zNC40IC0wLjIsLTAuMiAxNi45LC0xNy42IDE3LjQsLTE3LjYgMC4yLDAuMSA3LjYsMTEuMiAxNi42LDI0LjcgeiIKICAgICAgICAgaWQ9InBhdGg2IgogICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjwvZz48L2c+PC9nPgo8L3N2Zz4K';

    Blockly.Blocks.ak8975_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.AK8975_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: compassIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.ak8975_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.AK8975_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: compassIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['X', 'ak8975c.readX()'],
                            ['Y', 'ak8975c.readY()'],
                            ['Z', 'ak8975c.readZ()']
                        ],
                    }
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.ak8975_degree = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.AK8975_DEGREE,
                args0: [
                    {
                        type: 'field_image',
                        src: compassIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
