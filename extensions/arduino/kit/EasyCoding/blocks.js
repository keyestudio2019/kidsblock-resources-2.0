/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#f08080';
    const color1 = '#FF4500';
    const color2 = '#d2691e';
    const color3 = '#87cefa';
    const color4 = '#0000ff';
    const color5 = '#7cfc00';
    const color6 = '#008000';
    const color7 = '#ff1493';
    const color8 = '#8a2be2';
    const color9 = '#ffd700';
    const color10 = '#20b2aa';
    const color11 = '#9acd32';

    const secondaryColour = '#CD5C5C';
    const buzzerIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMzAuMSA0OCIKICAgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAuMSA0ODsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9IuaXoOa6kOicgum4o+WZqC5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yLTIgKGU4NmM4NzA4NzksIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMTkiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnMxNyIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgIGlkPSJuYW1lZHZpZXcxNSIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBpbmtzY2FwZTp6b29tPSIxOC4wNjI1IgogICBpbmtzY2FwZTpjeD0iMTUuMDUiCiAgIGlua3NjYXBlOmN5PSIyOC40MjkwNjYiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbDojRTYwMDEyO30KPC9zdHlsZT4KPGcKICAgaWQ9ImcxMiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+Cgk8cmVjdAogICB4PSIxNS45IgogICB5PSI5LjUiCiAgIGNsYXNzPSJzdDAiCiAgIHdpZHRoPSIyLjkiCiAgIGhlaWdodD0iMy4yIgogICBpZD0icmVjdDQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cmVjdAogICB4PSIxMC45IgogICB5PSI0LjciCiAgIGNsYXNzPSJzdDAiCiAgIHdpZHRoPSIzLjciCiAgIGhlaWdodD0iMy43IgogICBpZD0icmVjdDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cmVjdAogICB4PSIyMC42IgogICBjbGFzcz0ic3QwIgogICB3aWR0aD0iMy43IgogICBoZWlnaHQ9IjMuNyIKICAgaWQ9InJlY3Q4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTMwLDIwLjFjMC0xLjQsMC0yLjUsMC0zLjJ2LTAuM2gtMC4zYy0wLjksMC00LjQsMC44LTcuMSwxLjVjLTEuMSwwLjMtMi4xLDAuNS0yLjYsMC42ICAgYy0zLjIsMC42LTYuMywxLjMtOS4zLDJsLTAuNCwwLjF2MTYuNmMtMC40LTAuMS0wLjctMC4xLTEuMS0wLjJjLTAuNi0wLjEtMS4yLTAuMy0yLjEtMC4zYy0zLDAtNy4xLDMuMy03LjEsNi42ICAgYzAsMS45LDEuNSwzLjUsMy43LDQuMkM0LjMsNDcuOSw1LDQ4LDUuNiw0OGMyLjIsMCw0LjgtMSw2LjUtMy44YzAuNi0wLjksMC43LTEuMywwLjctMi43YzAtMi42LDAtNS4xLDAtNy43YzAtMS42LDAtMy4zLDAtNC45ICAgYzEuNS0wLjUsMTEuNS0yLjksMTQuMS0zLjN2OC4yYy0wLjEsMC0wLjItMC4xLTAuMy0wLjFjLTAuNy0wLjItMS4zLTAuNC0yLjMtMC40Yy0zLjYsMC02LjMsMi4zLTcuMiw0LjVjLTAuOCwxLjktMC40LDMuNywwLjksNSAgIGMyLjIsMi4xLDcuMiwxLjcsOS44LTAuOWMwLjQtMC40LDEuMi0xLjYsMS41LTIuMUMzMC4yLDM4LDMwLjEsMjguNywzMCwyMC4xeiBNMjYuNSwyMy40Yy0wLjIsMC0wLjMsMC4xLTAuNiwwLjFsLTUuNiwxLjIgICBjLTAuNSwwLjEtMS4xLDAuMy0xLjksMC40Yy0yLjEsMC41LTQuNywxLjEtNS43LDEuMWgtMC4zdi0yLjljMC0xLDAuNi0xLjEsMS4yLTEuMmMwLjEsMCwwLjMsMCwwLjQtMC4xbDEzLjYtMi44djAuNCAgIGMwLDAuNSwwLDAuOSwwLDEuM0MyNy42LDIzLDI3LjYsMjMuMywyNi41LDIzLjR6IgogICBpZD0icGF0aDEwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L2c+Cjwvc3ZnPgo=';
    const dhtIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMzMuNCA0NC4zOTk5OTkiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9Iua4qea5v+W6pi5zdmciCiAgIHdpZHRoPSIzMy40MDAwMDIiCiAgIGhlaWdodD0iNDQuNDAwMDAyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTM5Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMzciIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MzUiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMjUuMTgwMTc5IgogICBpbmtzY2FwZTpjeD0iMTYuNzAwMDAxIgogICBpbmtzY2FwZTpjeT0iMzQuOTA4NDA5IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i5Zu+5bGCXzEiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGw6IzAwQTBFOTt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnMzIiCiAgIHRyYW5zZm9ybT0icm90YXRlKDkwLDE2LjcsMTYuNykiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSA1LjEsMTAuNiBjIC0xLjksMCAtMy41LC0xLjUgLTMuNSwtMy41IDAsLTIgMS42LC0zLjUgMy41LC0zLjUgMS45LDAgMy41LDEuNSAzLjUsMy41IDAsMiAtMS42LDMuNSAtMy41LDMuNSBtIDAsLTUuNSBDIDQsNS4xIDMsNiAzLDcuMSBjIDAsMS4xIDEsMi4xIDIuMSwyLjEgMS4xLDAgMi4xLC0wLjkgMi4xLC0yLjEgMCwtMS4yIC0xLC0yIC0yLjEsLTIgeiIKICAgaWQ9InBhdGg0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSAyLjEsOC41IEMgMC45LDguNSAwLDcuOCAwLDcgMCw2LjIgMC45LDUuNSAyLjEsNS41IFoiCiAgIGlkPSJwYXRoNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0gMTAuOCw0LjggQyA5LjUsNC44IDguNCwzLjcgOC40LDIuNCA4LjQsMS4xIDkuNSwwIDEwLjgsMCBjIDEuMywwIDIuNCwxLjEgMi40LDIuNCAwLDEuMyAtMS4xLDIuNCAtMi40LDIuNCBNIDEwLjgsMSBDIDEwLDEgOS4zLDEuNiA5LjMsMi40IGMgMCwwLjggMC42LDEuNCAxLjQsMS40IDAuOCwwIDEuNCwtMC42IDEuNCwtMS40IEMgMTIuMiwxLjYgMTEuNiwxIDEwLjgsMSBaIgogICBpZD0icGF0aDgiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNIDguNywzLjMgQyA3LjksMy4zIDcuMiwyLjggNy4yLDIuMiA3LjIsMS42IDcuOCwxLjEgOC43LDEuMSBaIgogICBpZD0icGF0aDEwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAzNi4xLDIwLjcgYyAtMi4xLDAgLTMuOSwtMS43IC0zLjksLTMuOSAwLC0yLjIgMS44LC0zLjggMy45LC0zLjggMi4xLDAgMy45LDEuNyAzLjksMy45IDAsMi4yIC0xLjgsMy44IC0zLjksMy44IG0gMCwtNi4zIGMgLTEuNCwwIC0yLjUsMS4xIC0yLjUsMi41IDAsMS40IDEuMSwyLjUgMi41LDIuNSAxLjQsMCAyLjUsLTEuMSAyLjUsLTIuNSAwLC0xLjQgLTEuMSwtMi41IC0yLjUsLTIuNSB6IgogICBpZD0icGF0aDEyIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSAzMywxNy41IEggMjAgYyAtMC40LDAgLTAuNywtMC4zIC0wLjcsLTAuNyAwLC0wLjQgMC4zLC0wLjcgMC43LC0wLjcgaCAxMi45IGMgMC40LDAgMC43LDAuMyAwLjcsMC43IDAsMC40IC0wLjMsMC43IC0wLjYsMC43IgogICBpZD0icGF0aDE0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAzNi4xLDguOSBjIC0yLjYsMCAtNC45LDEuMiAtNi41LDMuMSBoIC0yNCBjIC0yLjksMCAtNS4zLDIuNCAtNS4zLDUuMyAwLDIuOSAyLjQsNS4zIDUuMyw1LjMgaCAyNC4yIGMgMS41LDEuOCAzLjgsMi45IDYuMywyLjkgNC42LDAgOC4zLC0zLjcgOC4zLC04LjMgMCwtNC41IC0zLjcsLTguMyAtOC4zLC04LjMgTSAyOS43LDIxLjIgSCA1LjYgYyAtMi4xLDAgLTMuOSwtMS44IC0zLjksLTMuOSAwLC0yLjIgMS44LC0zLjkgMy45LC0zLjkgaCAyNC4yIGwgMSwtMC42IGMgMS4zLC0xLjUgMy4yLC0yLjUgNS4zLC0yLjUgMy44LDAgNi45LDMuMSA2LjksNi45IDAsMy44IC0zLjEsNi45IC02LjksNi45IC0yLjEsMCAtNCwtMSAtNS4zLC0yLjUgeiIKICAgaWQ9InBhdGgxNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0gMi43LDMzLjQgSCAxLjQgYyAtMC4zLDAgLTAuNiwtMC4yIC0wLjYsLTAuNSB2IC02LjIgYyAwLC0wLjMgMC4yLC0wLjUgMC42LC0wLjUgaCAxLjMgYyAwLjMsMCAwLjUsMC4yIDAuNSwwLjUgdiA2LjIgYyAwLDAuMyAtMC4yLDAuNSAtMC41LDAuNSIKICAgaWQ9InBhdGgxOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0gNi45LDMwLjggSCA1LjcgYyAtMC4zLDAgLTAuNSwtMC4yIC0wLjUsLTAuNSB2IC0zLjYgYyAwLC0wLjMgMC4yLC0wLjUgMC41LC0wLjUgaCAxLjIgYyAwLjMsMCAwLjUsMC4yIDAuNSwwLjUgdiAzLjYgYyAwLjEsMC4zIC0wLjIsMC41IC0wLjUsMC41IgogICBpZD0icGF0aDIwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAxMS41LDMzLjQgaCAtMS4zIGMgLTAuMywwIC0wLjUsLTAuMiAtMC41LC0wLjUgdiAtNi4yIGMgMCwtMC4zIDAuMiwtMC41IDAuNSwtMC41IGggMS4zIGMgMC4zLDAgMC41LDAuMiAwLjUsMC41IHYgNi4yIGMgMC4xLDAuMyAtMC4yLDAuNSAtMC41LDAuNSIKICAgaWQ9InBhdGgyMiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Im0gMTUuOCwzMC44IGggLTEuMiBjIC0wLjMsMCAtMC41LC0wLjIgLTAuNSwtMC41IHYgLTMuNiBjIDAsLTAuMyAwLjIsLTAuNSAwLjUsLTAuNSBoIDEuMiBjIDAuMywwIDAuNiwwLjIgMC42LDAuNSB2IDMuNiBjIDAsMC4zIC0wLjMsMC41IC0wLjYsMC41IgogICBpZD0icGF0aDI0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSAyMC4zLDMzLjQgSCAxOSBjIC0wLjMsMCAtMC41LC0wLjIgLTAuNSwtMC41IHYgLTYuMiBjIDAsLTAuMyAwLjIsLTAuNSAwLjUsLTAuNSBoIDEuMyBjIDAuMywwIDAuNSwwLjIgMC41LDAuNSB2IDYuMiBjIDAuMSwwLjMgLTAuMiwwLjUgLTAuNSwwLjUiCiAgIGlkPSJwYXRoMjYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDI0LjYsMzAuOCBoIC0xLjIgYyAtMC4zLDAgLTAuNSwtMC4yIC0wLjUsLTAuNSB2IC0zLjYgYyAwLC0wLjMgMC4yLC0wLjUgMC41LC0wLjUgaCAxLjIgYyAwLjMsMCAwLjUsMC4yIDAuNSwwLjUgdiAzLjYgYyAwLjEsMC4zIC0wLjIsMC41IC0wLjUsMC41IgogICBpZD0icGF0aDI4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSAyOC44LDMzLjQgSCAyNy41IEMgMjcuMiwzMy40IDI3LDMzLjIgMjcsMzIuOSB2IC02LjIgYyAwLC0wLjMgMC4yLC0wLjUgMC41LC0wLjUgaCAxLjMgYyAwLjMsMCAwLjUsMC4yIDAuNSwwLjUgdiA2LjIgYyAwLjEsMC4zIC0wLjIsMC41IC0wLjUsMC41IgogICBpZD0icGF0aDMwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L2c+Cjwvc3ZnPgo=';
    const rgb6812IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNDcuOCA0OC43IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0Ny44IDQ4Ljc7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSI2ODEyIFJHQi5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yLTIgKGU4NmM4NzA4NzksIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMjkiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnMyNyIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgIGlkPSJuYW1lZHZpZXcyNSIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBpbmtzY2FwZTp6b29tPSIxNy44MDI4NzQiCiAgIGlua3NjYXBlOmN4PSIyMy45IgogICBpbmtzY2FwZTpjeT0iMjYuNTk2ODI5IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i5Zu+5bGCXzEiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGw6I0U2MDAxMjt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnMjIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTcuMyw0MC4xTDcuMyw0MC4xYzAtMS42LDEuMy0yLjksMi45LTIuOWgyNy42YzEuNiwwLDIuOSwxLjMsMi45LDIuOVMzOS40LDQzLDM3LjgsNDNIMTAuMiAgIEM4LjYsNDMsNy4zLDQxLjcsNy4zLDQwLjEiCiAgIGlkPSJwYXRoNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zNy4yLDI4LjVWMjhjMC0wLjgsMC43LTEuNSwxLjUtMS41aDcuNmMwLjgsMCwxLjUsMC43LDEuNSwxLjV2MC41YzAsMC44LTAuNywxLjUtMS41LDEuNWgtNy42ICAgQzM3LjksMzAsMzcuMiwyOS4zLDM3LjIsMjguNSIKICAgaWQ9InBhdGg2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTM1LjYsMTcuMmwtMC4zLTAuNGMtMC41LTAuNi0wLjQtMS42LDAuMi0yLjFsNS44LTQuOWMwLjYtMC41LDEuNi0wLjQsMi4xLDAuMmwwLjMsMC40ICAgYzAuNSwwLjYsMC40LDEuNi0wLjIsMi4xbC01LjgsNC45QzM3LDE3LjksMzYuMSwxNy45LDM1LjYsMTcuMiIKICAgaWQ9InBhdGg4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTI0LjEsMTAuNmgtMC42Yy0wLjgsMC0xLjUtMC43LTEuNS0xLjVWMS41QzIyLDAuNywyMi43LDAsMjMuNSwwSDI0YzAuOCwwLDEuNSwwLjcsMS41LDEuNXY3LjYgICBDMjUuNSw5LjksMjQuOSwxMC42LDI0LjEsMTAuNiIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xMi45LDE2LjNsLTAuNCwwLjRjLTAuNSwwLjYtMS40LDAuOC0yLjEsMC4zbC02LTQuNmMtMC43LTAuNS0wLjgtMS40LTAuMy0yLjFsMC4zLTAuNCAgIGMwLjUtMC42LDEuNC0wLjgsMi4xLTAuM2w2LDQuNkMxMy4yLDE0LjcsMTMuNCwxNS43LDEyLjksMTYuMyIKICAgaWQ9InBhdGgxMiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xMC41LDI4LjF2MC41YzAsMC44LTAuNywxLjUtMS41LDEuNGwtNy42LTAuMmMtMC44LDAtMS41LTAuNy0xLjQtMS41di0wLjVjMC0wLjgsMC43LTEuNSwxLjUtMS40bDcuNiwwLjIgICBDOS45LDI2LjYsMTAuNSwyNy4zLDEwLjUsMjguMSIKICAgaWQ9InBhdGgxNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xMS43LDQxLjlWMjIuN2MwLTYuNCw1LjItMTEuNiwxMS42LTExLjZoMS41YzYuNCwwLDExLjYsNS4yLDExLjYsMTEuNnYxOS4xSDExLjdWNDEuOXogTTMzLjQsMjIuNyAgIGMwLTQuNy0zLjktOC42LTguNi04LjZoLTEuNWMtNC43LDAtOC42LDMuOS04LjYsOC42djE2LjFoMTguN0MzMy40LDM4LjgsMzMuNCwyMi43LDMzLjQsMjIuN3oiCiAgIGlkPSJwYXRoMTYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMjQsMzIuM2MtMS44LDAtMy4yLTEuNC0zLjItMy4yczEuNC0zLjIsMy4yLTMuMnMzLjIsMS40LDMuMiwzLjJTMjUuOCwzMi4zLDI0LDMyLjMiCiAgIGlkPSJwYXRoMTgiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMTgsMzIuNGMwLTAuNSwwLjItMS4zLDAuOC0yYzEtMS4xLDIuNi0xLjYsNC45LTEuNmM1LjgsMCw2LjQsMy44LDYuNCw0VjMzdjE0LjVjMCwwLjctMC41LDEuMi0xLjIsMS4yICAgcy0xLjItMC41LTEuMi0xLjJWMzMuMWMtMC4xLTAuMy0wLjctMS45LTQtMS45Yy0yLjcsMC0zLjQsMC45LTMuNCwxLjN2MTVjMCwwLjctMC41LDEuMi0xLjIsMS4ycy0xLjItMC41LTEuMi0xLjJWMzIuNiAgIEMxOCwzMi41LDE4LDMyLjUsMTgsMzIuNCIKICAgaWQ9InBhdGgyMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KPC9nPgo8L3N2Zz4K';
    const mpuIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNDYuNiA0Ni42IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0Ni42IDQ2LjY7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJNcHU2MDUwLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjItMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSkiPjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGEyMyI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICBpZD0iZGVmczIxIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzE5IgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjE4LjYwNTE1MSIKICAgaW5rc2NhcGU6Y3g9IjIzLjI5OTk5OSIKICAgaW5rc2NhcGU6Y3k9IjI1LjQ0OTk0MSIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIiAvPgo8c3R5bGUKICAgdHlwZT0idGV4dC9jc3MiCiAgIGlkPSJzdHlsZTIiPgoJLnN0MHtmaWxsOiMwMEEwRTk7fQo8L3N0eWxlPgo8ZwogICBpZD0iZzE2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0wLDIzLjNMMCwyMy4zQzAsMTcsMi40LDExLjIsNi45LDYuOGM5LjEtOS4xLDIzLjktOS4xLDMzLDBjOS4xLDkuMSw5LjEsMjMuOSwwLDMzYy05LjEsOS4xLTIzLjksOS0zMywwICAgQzIuNCwzNS4zLDAsMjkuNSwwLDIzLjMgTTQ1LDIzLjNjMC01LjYtMi4xLTExLjEtNi4zLTE1LjNjLTQuMS00LjEtOS42LTYuNC0xNS40LTYuNEMxNy41LDEuNSwxMi4xLDMuOCw4LDcuOXMtNi40LDkuNi02LjQsMTUuNHYwICAgYzAsNS44LDIuMiwxMS4yLDYuNCwxNS4zUzE3LjUsNDUsMjMuMyw0NXMxMS4zLTIuMiwxNS40LTYuM0M0Mi45LDM0LjQsNDUsMjguOSw0NSwyMy4zeiIKICAgaWQ9InBhdGg0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTguOSwxNWMwLTEuOCwwLjUtMy40LDEuNy00LjVjMy43LTMuNywxMi4xLTEsMTkuMiw2YzcuMSw3LjEsOS43LDE1LjUsNiwxOS4yYy0xLjgsMS44LTQuOSwyLjItOC42LDAuOSAgIGMtMy41LTEuMi03LjMtMy43LTEwLjYtN0MxMS42LDI0LjgsOC45LDE5LjIsOC45LDE1IE0zNS44LDMxLjJjMC0zLjctMi43LTkuMS03LjItMTMuNmMtNi4yLTYuMi0xNC05LTE3LTZjLTMsMy0wLjIsMTAuNyw2LDE3bDAsMCAgIGMzLjEsMy4xLDYuNyw1LjUsMTAsNi42YzMuMSwxLDUuNiwwLjgsNy0wLjVDMzUuNCwzMy44LDM1LjgsMzIuNiwzNS44LDMxLjJ6IgogICBpZD0icGF0aDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNOC43LDMxLjljMC0xLjMsMC4zLTIuNywwLjgtNC4yYzEuMi0zLjUsMy43LTcuMyw3LjEtMTAuNmMzLjMtMy4zLDcuMS01LjgsMTAuNy03YzMuNy0xLjMsNi44LTEsOC42LDAuOCAgIGMxLjgsMS44LDIuMSw0LjksMC44LDguNmMtMS4yLDMuNS0zLjcsNy4zLTcuMSwxMC42Yy03LjIsNy4xLTE1LjYsOS45LTE5LjIsNi4yQzkuMywzNS4yLDguNywzMy43LDguNywzMS45IE0zNS44LDE1LjEgICBjMC0xLjQtMC40LTIuNS0xLjEtMy4zYy0xLjMtMS4zLTMuOS0xLjUtNi45LTAuNGMtMy4zLDEuMS02LjksMy41LTEwLjEsNi43Yy0zLjIsMy4yLTUuNiw2LjctNi43LDEwYy0xLjEsMy4xLTAuOSw1LjYsMC40LDcgICBjMi45LDIuOSwxMC43LDAuMSwxNy02LjJjMy4yLTMuMiw1LjYtNi43LDYuNy0xMEMzNS42LDE3LjUsMzUuOCwxNi4yLDM1LjgsMTUuMXoiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xNy45LDI2LjhjMC0xLjUsMS40LTMuNywzLTUuM2MxLjktMS45LDMuOS0zLDUuMy0zYzAuNywwLDEuMSwwLjMsMS4zLDAuNWMwLjUsMC41LDAuOCwxLjQsMCwzLjEgICBjLTAuNSwxLjEtMS40LDIuNC0yLjYsMy41Yy0xLjEsMS4xLTIuNCwyLTMuNSwyLjZjLTEuOCwwLjgtMi43LDAuNC0zLjEsMEMxOC4xLDI3LjgsMTcuOSwyNy4zLDE3LjksMjYuOCBNMTkuNiwyN0wxOSwyNy42TDE5LjYsMjcgICBjMC4xLDAuMSwwLjUsMC4xLDEuNC0wLjNjMS0wLjQsMi4xLTEuMiwzLjEtMi4yczEuOC0yLjEsMi4zLTMuMWMwLjQtMC45LDAuMy0xLjMsMC4zLTEuNGMwLDAtMC4xLDAtMC4yLDBjLTAuOCwwLTIuNSwwLjktNC4yLDIuNiAgIEMxOS44LDI0LjksMTkuMywyNi44LDE5LjYsMjd6IgogICBpZD0icGF0aDEwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTAuNywzYzAtMC40LDAuNC0wLjgsMC44LTAuOGMwLjUsMCwyLjksMC4yLDYuMiwzLjljMC4zLDAuMywwLjIsMC44LTAuMSwxLjFDNy4zLDcuNSw2LjgsNy41LDYuNSw3LjEgICBjLTIuOS0zLjMtNC45LTMuNC01LTMuNEMxLjEsMy44LDAuNywzLjQsMC43LDMiCiAgIGlkPSJwYXRoMTIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMzguNSwzOS4zYzAtMC4yLDAuMS0wLjUsMC4zLTAuNmMwLjMtMC4zLDAuOC0wLjIsMS4xLDAuMmMyLjMsMy4xLDMuOSwzLjEsMy45LDMuMWMwLjQsMCwwLjgsMC4zLDAuOCwwLjggICBzLTAuMywwLjgtMC44LDAuOGMtMC42LDAtMi42LTAuMy01LjItMy43QzM4LjYsMzkuNiwzOC41LDM5LjUsMzguNSwzOS4zIgogICBpZD0icGF0aDE0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L2c+Cjwvc3ZnPgo=';
    const sdIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNjAuNSA4MC44IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MC41IDgwLjg7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJTROWNoS5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yLTIgKGU4NmM4NzA4NzksIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMTEiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnM5IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzciCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iNS4zNjUwOTkiCiAgIGlua3NjYXBlOmN4PSIzMC4yNSIKICAgaW5rc2NhcGU6Y3k9IjQwLjQwMDAwMiIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIgogICBpbmtzY2FwZTpkb2N1bWVudC1yb3RhdGlvbj0iMCIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbDojRkZFNjAwO30KPC9zdHlsZT4KPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSA2MC41LDgwLjggViA1MS45IEMgNjAuMyw1MiA2MC4xLDUyIDU5LjgsNTIgSCA1OS40IEMgNTguMSw1MiA1Nyw1MC45IDU3LDQ5LjYgdiAtMTIgYyAwLC0xLjMgMS4xLC0yLjQgMi40LC0yLjQgaCAwLjQgYyAwLjIsMCAwLjUsMCAwLjcsMC4xIFYgMC45IEwgMTkuNiwwIDAsMTYuNCBWIDgwLjMgWiBNIDUyLjEsOC43IGMgMS4zLDAgMi40LDEuMSAyLjQsMi40IHYgMTYuNyBjIDAsMS4zIC0xLjEsMi40IC0yLjQsMi40IGggLTMuMyBjIC0xLjMsMCAtMi40LC0xLjEgLTIuNCwtMi40IFYgMTEuMSBjIDAsLTEuMyAxLjEsLTIuNCAyLjQsLTIuNCB6IG0gLTEzLjIsMCBjIDEuMywwIDIuNCwxLjEgMi40LDIuNCB2IDE2LjcgYyAwLDEuMyAtMS4xLDIuNCAtMi40LDIuNCBoIC0zLjMgYyAtMS4zLDAgLTIuNCwtMS4xIC0yLjQsLTIuNCBWIDExLjEgYyAwLC0xLjMgMS4xLC0yLjQgMi40LC0yLjQgeiBtIC0xOSwyLjQgYyAwLC0xLjMgMS4xLC0yLjQgMi40LC0yLjQgaCAzLjMgYyAxLjMsMCAyLjQsMS4xIDIuNCwyLjQgdiAxNi43IGMgMCwxLjMgLTEuMSwyLjQgLTIuNCwyLjQgaCAtMy4zIGMgLTEuMywwIC0yLjQsLTEuMSAtMi40LC0yLjQgeiBNIDkuNiwzNy44IGMgLTEuMywwIC0yLjQsLTEuMSAtMi40LC0yLjQgdiAtMTIgQyA3LjIsMjIuMSA4LjMsMjEgOS42LDIxIEggMTAgYyAxLjMsMCAyLjQsMS4xIDIuNCwyLjQgdiAxMiBjIDAsMS4zIC0xLjEsMi40IC0yLjQsMi40IHoiCiAgIGlkPSJwYXRoNCIKICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz4KPC9zdmc+Cg==';
    const lightIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+Cgo8c3ZnCiAgIHZlcnNpb249IjEuMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCA5ODAgOTgwIgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlkPSJzdmcyNiIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibGlnaHQuc3ZnIgogICB3aWR0aD0iOTgwIgogICBoZWlnaHQ9Ijk4MCIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4yLjIgKDczMmEwMWRhNjMsIDIwMjItMTItMDkpIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzCiAgIGlkPSJkZWZzMzAiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBpZD0ibmFtZWR2aWV3MjgiCiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgIGJvcmRlcm9wYWNpdHk9IjAuMjUiCiAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMC43NTgiCiAgIGlua3NjYXBlOmN4PSI0ODkuNDQ1OTEiCiAgIGlua3NjYXBlOmN5PSI0OTAuMTA1NTQiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTQ1IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTkiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOSIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMjYiIC8+CjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGEyIj4gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gPC9tZXRhZGF0YT4KPGcKICAgaWQ9ImcyNCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwLC0xMCkiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPjxnCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4xLDAsMCwtMC4xLDAsNTExKSIKICAgICBpZD0iZzIyIgogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPjxwYXRoCiAgICAgICBkPSJtIDQ2NzcuNiw0MzQzLjggdiAtNjY2LjIgaCAzNTQuNiAzNTQuNiB2IDY2Ni4yIDY2Ni4yIGggLTM1NC42IC0zNTQuNiB6IgogICAgICAgaWQ9InBhdGg0IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48cGF0aAogICAgICAgZD0iTSAxNTM5LjksMzYwMi4zIDEyOTIuOCwzMzU1LjIgMTc3MiwyODc2IGwgNDc3LjEsLTQ3Ny4xIDI1MS41LDI1My42IDI1My42LDI1MS40IC00NzIuOCw0NzIuOCBjIC0yNjAsMjYwIC00NzcuMSw0NzIuOCAtNDgzLjUsNDcyLjggLTYuNSwwIC0xMjIuNiwtMTExLjggLTI1OCwtMjQ3LjIgeiIKICAgICAgIGlkPSJwYXRoNiIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PHBhdGgKICAgICAgIGQ9Im0gNzc2MS42LDMzMzMuNyAtNDcyLjgsLTQ3Mi44IDI1My42LC0yNTEuNSAyNTEuNSwtMjUzLjYgNDc3LjEsNDc3LjEgNDc5LjIsNDc5LjIgLTI0Ny4xLDI0Ny4xIGMgLTEzNS40LDEzNS40IC0yNTEuNCwyNDcuMiAtMjU3LjksMjQ3LjIgLTYuNSwwIC0yMjMuNSwtMjEyLjcgLTQ4My42LC00NzIuNyB6IgogICAgICAgaWQ9InBhdGg4IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48cGF0aAogICAgICAgZD0iTSA0NTU5LjQsMjc4NS43IEMgMzUyMy41LDI1OTguNyAyNjgzLjIsMTgyNy4yIDI0MDguMSw4MDguNSBjIC00MTQuOCwtMTUzMC4yIDU5MSwtMzA5Mi42IDIxNjguNSwtMzM3NC4xIDMwNy4zLC01NS45IDgyNS4zLC0zNi41IDExMTcuNSwzOC43IDEwODEsMjgzLjcgMTg1OSwxMTQ3LjYgMjAyNC41LDIyNTAuMSAxNTIuNiw5OTUgLTI4NS44LDIwMTMuNyAtMTExNy41LDI2MDQuNyAtMzA3LjMsMjE5LjIgLTcyMi4xLDM5MS4xIC0xMDkzLjksNDU3LjggLTIzMCwzOC42IC03MzIuOSw0MC44IC05NDcuOCwwIHogbSA5NTQuMywtNjk4LjUgQyA2MTE5LjcsMTk0MS4xIDY2NTkuMiwxNDgzLjMgNjkwMiw5MDcuMyA3MDI2LjYsNjEwLjcgNzA1Mi40LDQ3Ny41IDcwNTIuNCwxMTAgYyAwLC0zNjkuNiAtMjUuOCwtNTAwLjcgLTE1MC40LC03OTkuNSAtMzM5LjYsLTgwNS45IC0xMjA1LjYsLTEzMTcuNCAtMjA2OS42LC0xMjIyLjggLTg0NC42LDkyLjQgLTE1MDYuNSw2NDYuOSAtMTc1OCwxNDc0LjMgLTUzLjcsMTc4LjQgLTYwLjIsMjIzLjUgLTYwLjIsNTQ4IDAsMzI0LjUgNi40LDM2OS43IDYwLjIsNTQ4IDE3NC4xLDU3NiA1MzkuNCwxMDE2LjUgMTA1NS4yLDEyNzIuMyAyMTQuOSwxMDcuNSA0MTkuMSwxNjcuNiA3MDkuMiwyMDguNSAxMjksMTkuMyA0OTguNiwtMTAuOCA2NzQuOSwtNTEuNiB6IgogICAgICAgaWQ9InBhdGgxMCIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PHBhdGgKICAgICAgIGQ9Im0gMTAwLDE0Mi4yIHYgLTM1NC42IGggNjY2LjIgNjY2LjIgViAxNDIuMiA0OTYuOCBIIDc2Ni4yIDEwMCBaIgogICAgICAgaWQ9InBhdGgxMiIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PHBhdGgKICAgICAgIGQ9Ik0gODU2Ny41LDc3LjggViAtMjc2LjggSCA5MjMzLjcgOTkwMCBWIDc3LjggNDMyLjQgSCA5MjMzLjggODU2Ny42IFYgNzcuOCBaIgogICAgICAgaWQ9InBhdGgxNCIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PHBhdGgKICAgICAgIGQ9Im0gMTcxNi4xLC0yNjA0LjMgYyAtMjQ5LjMsLTI1MS41IC00NTUuNiwtNDY2LjQgLTQ1NS42LC00NzcuMSAwLC0xMi45IDExMS44LC0xMzMuMyAyNDcuMSwtMjY4LjYgbCAyNDcuMSwtMjQ3LjEgNDc3LjEsNDc5LjIgNDc5LjMsNDc3LjEgLTI0Ny4xLDI0Ny4xIGMgLTEzNS40LDEzNS40IC0yNTUuNywyNDcuMSAtMjY4LjYsMjQ3LjEgLTEyLjksMCAtMjI3LjgsLTIwNi4zIC00NzkuMywtNDU3LjcgeiIKICAgICAgIGlkPSJwYXRoMTYiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjxwYXRoCiAgICAgICBkPSJtIDc0OTUuMSwtMjQzNC42IC0yNDUsLTI0Ny4xIDYyLjMsLTcwLjkgYyAxMDcuNSwtMTE4LjIgODc0LjcsLTg3Ni44IDg4Ny42LC04NzYuOCA4LjYsMCAxMjQuNiwxMTEuOCAyNjAsMjQ3LjEgbCAyNDcuMSwyNDcuMSAtNDcyLjgsNDcyLjggYyAtMjYwLDI2MCAtNDc3LjEsNDcyLjggLTQ4My42LDQ3Mi44IC02LjUsMCAtMTIyLjMsLTEwOS42IC0yNTUuNiwtMjQ1IHoiCiAgICAgICBpZD0icGF0aDE4IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48cGF0aAogICAgICAgZD0iTSA0NjEzLjIsLTQxMjMuOCBWIC00NzkwIGggMzU0LjYgMzU0LjYgdiA2NjYuMiA2NjYuMiBoIC0zNTQuNiAtMzU0LjYgeiIKICAgICAgIGlkPSJwYXRoMjAiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjwvZz48L2c+Cjwvc3ZnPgo=';
    const wifiIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+Cgo8c3ZnCiAgIHZlcnNpb249IjEuMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCA5ODAuMDM5ODYgODYxLjI5OTk5IgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlkPSJzdmcxMCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iV2lGaS5zdmciCiAgIHdpZHRoPSI5ODAuMDM5ODYiCiAgIGhlaWdodD0iODYxLjI5OTk5IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMiAoNzMyYTAxZGE2MywgMjAyMi0xMi0wOSkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnMKICAgaWQ9ImRlZnMxNCIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcxMiIKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgYm9yZGVyb3BhY2l0eT0iMC4yNSIKICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBzaG93Z3VpZGVzPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMC41MzU5ODY5NCIKICAgaW5rc2NhcGU6Y3g9IjQ5MC42ODM2IgogICBpbmtzY2FwZTpjeT0iNDQ0Ljk3MzUzIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijk0NSIKICAgaW5rc2NhcGU6d2luZG93LXg9IjEyNzEiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOSIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMTAiPjxzb2RpcG9kaTpndWlkZQogICAgIHBvc2l0aW9uPSIxODcuODEwNzcsLTEzNi42ODIzMyIKICAgICBvcmllbnRhdGlvbj0iLTAuNzA3MTA2NzgsLTAuNzA3MTA2NzgiCiAgICAgaWQ9Imd1aWRlMTYiCiAgICAgaW5rc2NhcGU6bG9ja2VkPSJmYWxzZSIgLz48L3NvZGlwb2RpOm5hbWVkdmlldz4KPG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTIiPiBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiA8L21ldGFkYXRhPgo8ZwogICBpZD0iZzgiCiAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMC4wNzg0MDYsLTY5LjMpIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj48cGF0aAogICAgIGQ9Im0gNDk4LjUsNjkuMyBjIC0xNzYuMiwwIC0zNTIuNCw3MS40IC00NzguMiwxOTQuNSAtMTguNSwyMy44IC0xMS45LDY4LjggMTkuOSw3OS40IDIxLjIsNy45IDQ1LDEuMyA1OS42LC0xNS45IDEzMy44LC0xMjMuMSAzMjguNSwtMTc5LjkgNTA4LjcsLTE0NC4yIDExMS4zLDIxLjIgMjE4LjYsNzQuMSAyOTkuNCwxNTMuNSAyNS4yLDE5LjggNjguOSwxMS45IDc5LjUsLTE4LjUgNi42LC0yMi41IDEuMywtNDkgLTE3LjIsLTYyLjIgQyA4NDQuMiwxMzguMSA2NzIsNjkuMyA0OTguNSw2OS4zIFogbSAtOCwyMDUuMSBjIC04Mi4xLDIuNiAtMTY0LjMsMjMuOCAtMjM0LjUsNjYuMiAtMzguNCwyMi41IC03NC4yLDQ5IC0xMDIsODIgLTE1LjksMTkuOCAtMTEuOSw1MC4zIDcuOSw2Ni4yIDE5LjksMTcuMiA1MS43LDE1LjkgNzAuMiwtMS4zIEMgMzA5LDQwOCA0MjQuMywzNjUuNyA1MzUuNSwzNzguOSBjIDg2LjEsNy45IDE3MC45LDQ2LjMgMjMwLjUsMTA4LjUgMTguNSwxNy4yIDUwLjMsMTguNSA3MC4yLDEuMyAxOS45LC0xNS45IDIzLjgsLTQ2LjMgNy45LC02Ni4yIEMgODEyLjMsMzg2LjggNzcyLjYsMzU3LjcgNzMxLjUsMzMzLjggNjU3LjQsMjkyLjkgNTc0LDI3My4xIDQ5MC41LDI3NC40IFogbSA2LjYsMjA1LjEgYyAtNDcuNywxLjMgLTk2LjcsMTQuNiAtMTM3LjgsMzkuNyAtMjMuOCwxNC42IC00Ni40LDMwLjQgLTYzLjYsNTEuNiAtMjEuMiwzMy4xIDkuMyw4MC43IDQ3LjcsNzguMSAyMy44LC0xLjMgMzguNCwtMjMuOCA1NywtMzQuNCAzOS43LC0yNy44IDg4LjgsLTQxIDEzNi40LC0yOS4xIDM1LjgsNS4zIDY2LjIsMjcuOCA5MS40LDUyLjkgMTguNSwxNS45IDQ5LDEzLjIgNjQuOSwtNS4zIDE4LjUsLTE3LjIgMjEuMiwtNDkgMi42LC02OC44IC01MC4yLC01MS42IC0xMjMuMSwtODcuNCAtMTk4LjYsLTg0LjcgeiIKICAgICBpZD0icGF0aDQiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48cGF0aAogICAgIGQ9Im0gNDk5LjgsNjk3LjggYyAtNjQuOSwwIC0xMTcuOSw1MS42IC0xMTcuOSwxMTYuNCAwLDYzLjUgNTMsMTE2LjQgMTE3LjksMTE2LjQgNjQuOSwwIDExNi42LC01Mi45IDExNi42LC0xMTYuNCAwLC02NC44IC01MS43LC0xMTYuNCAtMTE2LjYsLTExNi40IHoiCiAgICAgaWQ9InBhdGg2IgogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PC9nPgo8L3N2Zz4K';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    const analogPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_readAnalogPin')
        .getField('PIN')
        .getOptions();


    //变量
    Blockly.Blocks.KS_variables_declare = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_declare,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'variables_type',
                        options:[[(Blockly.Msg.KS_global), "global_variate"],[(Blockly.Msg.KS_local), "local_variate"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options:[[Blockly.Msg.KS_MATH_INT, 'int'],[Blockly.Msg.KS_MATH_UNSIGNED_INT, 'unsigned int'],[Blockly.Msg.KS_MATH_LONG, 'long'],[Blockly.Msg.KS_MATH_UNSIGNED_LONG, 'unsigned long'],[Blockly.Msg.KS_MATH_FLOAT, 'float'],[Blockly.Msg.KS_MATH_DOUBLE, 'double'],[Blockly.Msg.KS_MATH_BOOLEAN, 'boolean'],[Blockly.Msg.KS_MATH_BYTE, 'byte'],[Blockly.Msg.KS_MATH_CHAR, 'char'],[Blockly.Msg.KS_MATH_UNSIGNED_CHAR, 'unsigned char'],[Blockly.Msg.KS_MATH_STRING, 'String']]
                    },
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE',
                    },    
                ],
                "tooltip": "创建变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }
    };
    //变量get
    Blockly.Blocks.KS_variables_get = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_value,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color,
                extensions: ['output_number']
            });
        }
    };
    //变量set
    Blockly.Blocks.KS_variables_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_set,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }  
                ],
                "tooltip": "设置变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };
    //变量++--
    Blockly.Blocks.KS_variables_change = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_change,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options:[['++', '++'],['- -', '--']]
                    }
                ],
                "tooltip": "设置变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };

    //字符串变量set
    Blockly.Blocks.KS_variables_stringSet = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_setString,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }  
                ],
                "tooltip": "设置字符串变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };

    //字符
    Blockly.Blocks.KS_CHAR = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_char,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color1,
                extensions: ['output_number']
            });
        }     
    };

    Blockly.Blocks.KS_STRING = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_string,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color1,
                extensions: ['output_number']
            });
        }     
    };

    Blockly.Blocks.KS_data = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_data,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color1,
                extensions: ['output_number']
            });
        }
    };
    
    //logic
    Blockly.Blocks.KS_judge = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_judge,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VALUE1',
                    }, 
                    {
                        type: 'field_dropdown',
                        name: 'judge',
                        options:[["==", "=="],["≠", "!="],[">", ">"],[">=", ">="],["<", "<"],["<=", "<="]]
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE2',
                    },    
                ],
                "tooltip": "逻辑比较",
                colour:color2,
                extensions: ['output_boolean']
            });
        }
    };


    Blockly.Blocks.Button_readState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BUTTON_READ_STATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [ 
                            ['A', '0'],
                            ['B', '17']
                           ]  
                    }
                ],
                colour: color3,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
                // extensions: ['output_number']
                // extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Button_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BUTTON_READ_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: [ 
                            ['A', '0'],
                            ['B', '17']
                           ]  

                    }
                ],
                colour: color3,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };


    Blockly.Blocks.touchSwitch_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TOUCHSWITCH_READ_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color3,
                // secondaryColour: secondaryColour,
                //extensions: ['output_boolean']
                 extensions: ['output_number']
                // extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.touchSwitch_state = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TOUCHSWITCH_STATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color3,
                // secondaryColour: secondaryColour,
                extensions: ['output_boolean']
                //extensions: ['output_number']
                // extensions: ['shape_statement']
            });
        }
    };


    //buzzer
    Blockly.Blocks.buzzer_tone_d = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BUZZER_TONE_D,
                args0: [
                    {
                        type: 'field_image',
                        src: buzzerIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'fre',
                        options: [
                            ['NOTE_C3', '131'],
                            ['NOTE_D3', '147'],
                            ['NOTE_E3', '165'],
                            ['NOTE_F3', '175'],
                            ['NOTE_G3', '196'],
                            ['NOTE_A3', '220'],
                            ['NOTE_B3', '247'],
                            ['NOTE_C4', '262'],
                            ['NOTE_D4', '294'],
                            ['NOTE_E4', '330'],
                            ['NOTE_F4', '349'],
                            ['NOTE_G4', '392'],
                            ['NOTE_A4', '440'],
                            ['NOTE_B4', '494'],
                            ['NOTE_C5', '532'],
                            ['NOTE_D5', '587'],
                            ['NOTE_E5', '659'],
                            ['NOTE_F5', '698'],
                            ['NOTE_G5', '784'],
                            ['NOTE_A5', '880'],
                            ['NOTE_B5', '988']
                            ]
                    },
                    {
                        type: 'input_value',
                        name: 'dur'
                    },
                ],
                colour: color4,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.buzzer_music = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BUZZER_MUSIC,
                args0: [
                    {
                        type: 'field_image',
                        src: buzzerIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mus',
                        options: [
                            ['Birthday', 'Music.birthday();'],
                            ['Tetris', 'Music.tetris();'],
                            ['Ode to Joy', 'Music.Ode_to_Joy();'],
                            ['Christmas', 'Music.christmas();'],
                            ['Super mario', 'Music.super_mario();'],
                            ['Star war tone', 'Music.star_war_tone();']
                            ]
                    }
                ],
                colour: color4,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.buzzer_notone = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BUZZER_NOTONE,
                args0: [
                    {
                        type: 'field_image',
                        src: buzzerIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: color4,
                extensions: ['shape_statement']
            });
        }
    };
 


    Blockly.Blocks.AHT20_21= {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.AHT20_21,
                args0: [
                    {
                        type: 'field_image',
                        src: dhtIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [ 
                                 ['temperature','AHT21.GetTemperature()'],
                                 ['humidity', 'AHT21.GetHumidity()'],
                                 ['dewpoint', 'AHT21.GetDewPoint()']
                                ]                         
                    },
                ],
                colour: color5,
                extensions: ['output_number']
            });
        }
    };


    //5*5 RGB Matrix  
 
   Blockly.Blocks.bbrgbLedStrip_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BBRGBLEDSTRIP_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'LEN'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: color6,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.bbrgbLedStrip_display = {
        init: function() {
          this.jsonInit({
            message0: '%1',
            message1: Blockly.Msg.BBRGBLEDSTRIP_DISPLAY,
            args0: [
                {
                    type: 'field_image',
                    src: rgb6812IconUrl,
                    width: 50,
                    height: 27
                }
            ],
            args1: [
             
                {
                    type: 'input_value',
                    name: 'NUM'
                },
                {
                    type: 'input_value',
                    name: 'COLOR'
                },
                {
                    type: "field_vertical_separator"
                },
                {
                    type: "input_value",
                    name: "MATRIX"
                },
            ],
            category: Blockly.Categories.pen,
            extensions: ["colours_pen","scratch_extension"],
            colour: color6,
            extensions: ['shape_statement']
          });
        }
      };


    Blockly.Blocks.rgbLedStrip_setPixelColor = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BBRGBLEDSTRIP_SETPIXELCOLOR,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'NO'
                    },
                    {
                        type: 'input_value',
                        name: 'COLOR'
                    },
                ],
                colour: color6,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_fill = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BBRGBLEDSTRIP_FILL,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'FIRST'
                    },
                    {
                        type: 'input_value',
                        name: 'COUNT'
                    },
                    {
                        type: 'input_value',
                        name: 'COLOR'
                    },
                ],
                colour: color6,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_color = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BBRGBLEDSTRIP_COLOR,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'input_value',
                        name: 'G'
                    },
                    {
                        type: 'input_value',
                        name: 'B'
                    },
                ],
                colour: color6,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_setBrightness = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BBRGBLEDSTRIP_SETBRIGHTNESS,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'BRT'
                    },
                    
                ],
                colour: color6,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.rgb_change = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGB_CHANGE,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    },
                    {
                        type: 'input_value',
                        name: 'WAIT'
                    },
                ],
                colour: color6,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rgb_loop = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGB_LOOP,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    },
                    {
                        type: 'input_value',
                        name: 'WAIT'
                    },
                ],
                colour: color6,
                extensions: ['shape_statement']
            });
        }
    };


      Blockly.Blocks.rgbLedStrip_clear = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BBRGBLEDSTRIP_CLEAR,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color6,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_show = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BBRGBLEDSTRIP_SHOW,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color6,
                extensions: ['shape_statement']
            });
        }
    };

  

    Blockly.Blocks.analogVoice_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ANALOGVOICE_READ_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                    }
                ],
                colour: color7,
                // secondaryColour: secondaryColour,
                extensions: ['output_number']
                // extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.current_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.CURRENT_READ_VALUE,
                args0: [
                ],
                colour: color7,
                extensions: ['output_number']
            });
        }
    };

  
    Blockly.Blocks.mpu6050_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MPU6050_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: mpuIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color8,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mpu6050_refresh = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MPU6050_REFRESH,
                args0: [
                    {
                        type: 'field_image',
                        src: mpuIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color8,
                extensions: ['shape_statement']
            });
        }
    };

   
    Blockly.Blocks.mpu6050_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MPU6050_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: mpuIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['angleX', 'mpu6050.getAngleX()'],
                            ['angleY', 'mpu6050.getAngleY()'],
                            ['angleZ', 'mpu6050.getAngleZ()'],
                            ['X-Gyro', 'mpu6050.getGyroX()'],
                            ['Y-Gyro', 'mpu6050.getGyroY()'],
                            ['Z-Gyro', 'mpu6050.getGyroZ()'],
                            ['Termperature', 'mpu6050.getTemp()']
                            ]
                    }
                ],
                colour: color8,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.wifi_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: wifiIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWD'
                    }
                ],
                colour: color9,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.wifi_read_ip = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_READ_IP,
                args0: [
                    {
                        type: 'field_image',
                        src: wifiIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    
                ],
                colour: color9,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.sd_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    },
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'cs'
                    },
                    {
                        type: 'input_value',
                        name: 'mosi'
                    },
                    {
                        type: 'input_value',
                        name: 'miso'
                    },
                    {
                        type: 'input_value',
                        name: 'sck'
                    },
                ],
                
                colour: color10,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sd_refresh = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_REFRESH,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color10,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sd_type = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_TYPE,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                ],
                colour: color10,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.sd_list = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_LIST,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color10,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sd_var = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_VAR,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['Cluster Count', 'volume.clusterCount()'],
                            ['Blocks Per Cluster', 'volume.blocksPerCluster()'],
                            ['Total blocks', 'volume.blocksPerCluster() * volume.clusterCount()'],
                            ['FatType', '(volume.fatType(), DEC)'],
                            ['Volume(KB)', 'volume.blocksPerCluster()*volume.clusterCount()/2'],
                            ['Volume(MB)', 'volume.blocksPerCluster()*volume.clusterCount()/2/1024'],
                            ['Volume(GB)', 'volume.blocksPerCluster()*volume.clusterCount()/2/1024/1024.0'],
                            ]
                    },
                ],
                
                colour: color10,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.sd_judge = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_JUDGE,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'file'
                    },
                ],
                
                colour: color10,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.sd_delete = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_DELETE,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'file'
                    },
                ],
                
                colour: color10,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sd_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'file'
                    },
                ],
                
                colour: color10,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sd_write = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_WRITE,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'file'
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['true', 'myFile.println("");'],
                            ['fasle', 'myFile.print("");'],
                            ]
                    }
                ],
                
                colour: color10,
                extensions: ['shape_statement']
            });
        }
    };

    //light
    Blockly.Blocks.lightSensor_readValue = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.LIGHTSENSOR_READ_VALUE,
                args0: [
                    {
                        type: 'field_image',
                        src: lightIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: analogPins
                    }
                ],
                colour: color11,
                extensions: ['output_number']
                // extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;

