/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    const color = '#F08080';
    const secondaryColour = '#CD5C5C';
    const tcsIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjIuNCAyNS44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2Mi40IDI1Ljg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMwMEEwRTk7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMi45LDEyLjljMC01LDItOS42LDUuMy0xMi45QzkuMiw1LjMsMCwxMi45LDAsMTIuOXM5LjIsNy42LDE4LjMsMTIuOUMxNSwyMi41LDEyLjksMTcuOSwxMi45LDEyLjkiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDkuNSwxMi45YzAsNS0yLDkuNi01LjMsMTIuOWM5LjEtNS4zLDE4LjMtMTIuOSwxOC4zLTEyLjlTNTMuMiw1LjMsNDQuMiwwQzQ3LjQsMy4zLDQ5LjUsNy45LDQ5LjUsMTIuOSIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOS40LDEyLjljMCw0LjUtMy43LDguMi04LjIsOC4yYy00LjUsMC04LjItMy43LTguMi04LjJzMy43LTguMiw4LjItOC4yQzM1LjcsNC43LDM5LjQsOC40LDM5LjQsMTIuOQ0KCQkgTTQzLjksMTIuOWMwLTctNS43LTEyLjctMTIuNy0xMi43UzE4LjUsNS45LDE4LjUsMTIuOXM1LjcsMTIuNywxMi43LDEyLjdDMzguMiwyNS42LDQzLjksMTkuOSw0My45LDEyLjl6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMxLjIsMTguMWMtMi45LDAtNS4yLTIuMy01LjItNS4yczIuMy01LjIsNS4yLTUuMnM1LjIsMi4zLDUuMiw1LjJDMzYuNCwxNS44LDM0LjEsMTguMSwzMS4yLDE4LjEiLz4NCjwvZz4NCjwvc3ZnPg0K';

    Blockly.Blocks.tcs34725_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TCS34725_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: tcsIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'VALUE',
                        options: [
                            ['INTEGRATIONTIME_2_4MS', '2_4MS'],
                            ['INTEGRATIONTIME_24MS', '24MS'],
                            ['INTEGRATIONTIME_50MS', '50MS'],
                            ['INTEGRATIONTIME_101MS', '101MS'],
                            ['INTEGRATIONTIME_154MS', '154MS'],
                            ['INTEGRATIONTIME_700MS', '700MS']
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.tcs34725_get_rgb = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TCS34725_GET_RGB,
                args0: [
                    {
                        type: 'field_image',
                        src: tcsIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'VALUERGB',
                        options: [
                            [Blockly.Msg.TCS34725_GET_R, 'r'],
                            [Blockly.Msg.TCS34725_GET_G, 'g'],
                            [Blockly.Msg.TCS34725_GET_B, 'b']
                        ]
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