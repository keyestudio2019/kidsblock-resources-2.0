/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF4500';
    const color2 = '#41be8a';
    const color3 = '#573e00';
    const color4 = '#E30B5C';
    const color5 = '#008000';
    const color6 = '#3F00FF';

    const secondaryColour = '#CD5C5C';

    const motorIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+Cgo8c3ZnCiAgIHZlcnNpb249IjEuMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCA5ODAuMDAyOTkgOTgwLjI0MiIKICAgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwMCAxMDAwIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnMTk2NSIKICAgc29kaXBvZGk6ZG9jbmFtZT0id2hlbGwuc3ZnIgogICB3aWR0aD0iOTgwLjAwMjk5IgogICBoZWlnaHQ9Ijk4MC4yNDIiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4yICg3MzJhMDFkYTYzLCAyMDIyLTEyLTA5KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcwogICBpZD0iZGVmczE5NjkiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBpZD0ibmFtZWR2aWV3MTk2NyIKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgYm9yZGVyb3BhY2l0eT0iMC4yNSIKICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBpbmtzY2FwZTp6b29tPSIwLjIzNiIKICAgaW5rc2NhcGU6Y3g9IjQ5MS41MjU0MiIKICAgaW5rc2NhcGU6Y3k9IjQ5My42NDQwNyIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMjgwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI5NDUiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOSIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii05IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcxOTY1IiAvPgo8bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMTk1NSI+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+CjxnCiAgIGlkPSJnMTk2MyIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkuOTk2OTk3NiwtOS44NzgwMDMzKSIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+PGcKICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjEsMCwwLC0wLjEsMCw1MTEpIgogICAgIGlkPSJnMTk2MSIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIj48cGF0aAogICAgICAgZD0iTSA0MzM2LjMsNDk2NS42IEMgMzUyOC41LDQ4NTUuNiAyNzc3LjIsNDU0Ny41IDIwNzAsNDAzOC4zIDE4MTUuNCwzODU2IDEyNTIuNywzMjkzLjMgMTA3MC40LDMwMzguNyA1NDguNiwyMzE1LjcgMjUzLjEsMTU4My4zIDE0My4xLDc0NC4xIC0yMy41LC01MjIuNiAyOTQsLTE3NDIuMiAxMDcwLjQsLTI4MjAuNCBjIDE4NS41LC0yNTcuNyA3MTMuNSwtNzg5IDk4NywtOTkwLjEgMTc2Ni42LC0xMzA3LjYgNDEyMC45LC0xMzA3LjYgNTg4NC4zLDAgMjc5LjgsMjA3LjUgNzcwLjEsNjk3LjggOTc3LjYsOTc3LjYgMTMwNy42LDE3NjMuNCAxMzA3LjYsNDExNy43IDAsNTg4NC4zIC0yMDEuMiwyNzMuNSAtNzMyLjQsODAxLjUgLTk5MC4xLDk4NyBDIDY4NTEsNDgxNy45IDU2MDMuMSw1MTM4LjUgNDMzNi4zLDQ5NjUuNiBaIG0gMTM1Ny45LC05NzQuNCBjIDIzNS43LC00MC45IDc5NS4zLC0yMDQuMyA4MzkuMywtMjQ4LjMgNi4zLC05LjQgLTI0MiwtNDA4LjYgLTU1My4yLC04ODkuNiBsIC01NjksLTg3My44IC00MTEuOCwzLjEgSCA0NTg3LjcgTCA0MDIyLDI4NDcgYyAtMzA4LDQ3NC42IC01NjIuNyw4NzAuNyAtNTYyLjcsODgwLjEgMCwyOC4zIDMzMCwxNDQuNiA2MjIuNCwyMTYuOSA1MDIuOSwxMjUuOCAxMDM0LjIsMTQxLjUgMTYxMi41LDQ3LjIgeiBNIDMxMjMsMjMwNi40IDM1OTQuNSwxMzgyLjMgMzQ1MywxMTc0LjggQyAzMzc0LjQsMTA1OC41IDMyODYuNCw5MDEuMyAzMjU4LjEsODI1LjkgTCAzMjA0LjcsNjg3LjYgMjQyOC4zLDY0Ni43IEMgMjAwMC44LDYyNy44IDE1MjMsNTk5LjYgMTM2Mi43LDU5MC4xIGwgLTI4NiwtMTguOCA0NCwyMzIuNiBjIDEyOC45LDY3OSAzNjEuNSwxMTk0LjUgNzg1LjgsMTc0NC41IDIwNC4zLDI2NCA2NjYuNCw3MTAuNCA3MTYuNyw2OTQuNyAxNS43LC02LjMgMjQyLjEsLTQyNy41IDQ5OS44LC05MzYuNyB6IG0gNDYzNi40LDYwOS44IGMgNjA5LjgsLTYxMi45IDk2MS45LC0xMjczIDExMTUuOSwtMjA5Ni42IGwgNDcuMSwtMjQ4LjMgLTMwMS43LDE4LjggYyAtMTY5LjgsMTIuNiAtNjQ3LjUsMzcuNyAtMTA2NS42LDU2LjYgbCAtNzYwLjcsNDAuOSAtNTMuNCwxMzguMyBjIC0yOC4zLDc1LjUgLTExNi4zLDIzMi42IC0xOTEuOCwzNDguOSBsIC0xNDEuNSwyMDcuNSAyMTAuNiw0MjQuMyBjIDM4My41LDc3Ni40IDc0MS44LDE0NDUuOSA3NzMuMiwxNDQ1LjkgMTUuOCwwIDE3OS4zLC0xNTAuOSAzNjcuOSwtMzM2LjMgeiBNIDU0MDUsMTQ2NCBjIDEwMy44LC0zMS40IDI1MS41LC05NC4zIDMyMy44LC0xMzguMyAxNjkuNywtOTcuNCA0MzYuOSwtMzc3LjIgNTIxLjgsLTU0My44IDIxNi45LC00MjQuMyAyMTYuOSwtOTIxIDAsLTEzNDUuMyAtODQuOSwtMTY2LjYgLTM1Mi4xLC00NDYuNCAtNTIxLjgsLTU0My44IC00NDAuMSwtMjU3LjcgLTEwMTguNCwtMjU3LjcgLTE0NTguNSwwIC0xNjkuNyw5Ny41IC00MzYuOSwzNzcuMiAtNTIxLjgsNTQzLjggLTIxNi45LDQyNC40IC0yMTYuOSw5MjEgMCwxMzQ1LjMgODQuOSwxNjYuNiAzNTIsNDQ2LjQgNTIxLjgsNTQzLjggMzMzLjIsMTk0LjggNzc2LjQsMjUxLjQgMTEzNC43LDEzOC4zIHogbSAtMjk2MSwtMTg5Mi4zIDc2MC43LC00MC44IDUzLjQsLTEzOC4zIGMgMjguMywtNzUuNCAxMTYuMywtMjMyLjYgMTk0LjksLTM0OC45IEwgMzU5NC41LC0xMTYzLjggMzEyMywtMjA4OCBjIC0yNTcuNywtNTA5LjIgLTQ4Ny4yLC05MzMuNiAtNTA2LjEsLTkzOS45IC01Ni42LC0xOC44IC03MDEsNjUwLjcgLTg3MC43LDkwNS4zIC0zMTEuMiw0NjguNCAtNTI4LjEsOTk2LjQgLTYyNS41LDE1MjEuNCBsIC00NCwyNDguMyAzMDEuNywtMTguOCBjIDE2OS44LC05LjQgNjQ3LjYsLTM3LjggMTA2NS42LC01Ni42IHogbSA2NDMxLjMsLTE3NiBjIC0xNTAuOSwtNzkyLjEgLTUyMS44LC0xNDk5LjMgLTEwOTMuOSwtMjA3MS40IC00MzYuOSwtNDQwLjEgLTM2NC42LC00NjguNCAtNzUxLjMsMjc2LjYgLTE3OS4xLDM1Mi4xIC0zOTIuOSw3NzMuMyAtNDc0LjYsOTM2LjcgbCAtMTQ3LjcsMjk4LjYgMTQxLjUsMjA3LjUgYyA3NS40LDExNi4zIDE2My41LDI3My40IDE5NC45LDM0OC45IGwgNTAuMywxNDEuNCA4NzAuNyw0Ny4xIGMgNDc3LjgsMjUuMSA5NTguNyw1MC4zIDEwNjIuNCw1MC4zIGwgMTk0LjksNi4zIHogTSA1OTY0LjYsLTI2MTIuOSBjIDMwNC45LC00NjUuMiA1NTkuNSwtODYxLjMgNTY1LjgsLTg4MC4xIDE1LjcsLTQwLjggLTQ0My4yLC0yMDEuMiAtNzQ1LC0yNjQuMSAtNDQwLjEsLTkxLjEgLTExNzguNywtOTEuMSAtMTU4Ny40LDAgLTMyMC42LDcyLjMgLTc0MS44LDIyNi4zIC03MjkuMywyNjQuMSA5LjQsMjIgMjY0LjEsNDIxLjIgNTY1LjgsODg2LjQgbCA1NTMuMiw4NDUuNSA0MTEuOCwtMy4xIGggNDExLjggeiIKICAgICAgIGlkPSJwYXRoMTk1NyIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PHBhdGgKICAgICAgIGQ9Ik0gNDgwNC43LDEzMDMuNyBDIDQxNjAuMywxMTkzLjYgMzcwMS40LDU2NSAzODA1LjEsLTcwIGMgMTMyLC04MDEuNSA5NzEuMywtMTI0Ny45IDE3MDkuOSwtOTExLjYgNzE5LjgsMzMwIDkxNC43LDEzMTAuOCAzNzcuMiwxOTA0LjkgLTI2MC44LDI5Mi4zIC03MDAuOSw0NDMuMiAtMTA4Ny41LDM4MC40IHogTSA1MTI1LjMsODI5IGMgMjguMywtNTAuMyAyNS4xLC04MS43IC0xNS43LC0xNDEuNSAtNTkuNywtOTEuMiAtMTQ0LjYsLTk3LjQgLTIyMCwtMTIuNiAtNDcuMiw1My40IC01MC4zLDc1LjQgLTIyLDE0MS40IDQ3LjEsMTAwLjcgMjA3LjQsMTEwLjIgMjU3LjcsMTIuNyB6IE0gNDQ0MC4xLDM0MS44IGMgNDQsLTk3LjUgMy4xLC0xNzkuMiAtOTcuNCwtMTk0LjkgLTg4LC0xMi42IC0xNjAuMyw0NCAtMTYwLjMsMTMyIC0wLjEsMTU3LjIgMTk0LjgsMjA0LjMgMjU3LjcsNjIuOSB6IG0gMTMzOSw0NCBjIDk0LjMsLTk0LjMgOS40LC0yNjAuOSAtMTIyLjYsLTIzOC45IC0xMDAuNiwxNS43IC0xNDEuNCw5Ny40IC05Ny40LDE5NC45IDQwLjgsODggMTU0LDExMCAyMjAsNDQgeiBNIDQ2NzguOSwtNDMxLjUgYyA5NC4zLC05NC4zIDkuNCwtMjYwLjkgLTEyMi42LC0yMzguOSAtMTAwLjYsMTUuNyAtMTQxLjUsOTcuNCAtOTcuNCwxOTQuOSA0MC45LDg4LjEgMTU0LDExMC4xIDIyMCw0NCB6IG0gODQ4LjcsMCBjIDg4LC04OCAyMiwtMjQ1LjIgLTEwMy43LC0yNDUuMiAtODQuOSwwIC0xNDEuNSw1Ni42IC0xNDEuNSwxNDEuNCAwLDg0LjkgNTYuNiwxNDEuNSAxNDEuNSwxNDEuNSAzNy43LDAuMSA4MS43LC0xNS43IDEwMy43LC0zNy43IHoiCiAgICAgICBpZD0icGF0aDE5NTkiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjwvZz48L2c+Cjwvc3ZnPgo=';
    const hc_sr04IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNzEuNyAzMi4xIgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3MS43IDMyLjE7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSLotoXlo7Dms6Iuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTI3Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMjUiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MjMiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMTUuNTkyNzQ4IgogICBpbmtzY2FwZTpjeD0iMzUuODQ5OTk4IgogICBpbmtzY2FwZTpjeT0iMTYuMDQ5OTk5IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i5Zu+5bGCXzEiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGw6IzAwQ0FFNTt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnMTgiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTUzLjUsMjguNmMtNi44LDAtMTIuMy01LjctMTIuMy0xMi43YzAtNyw1LjUtMTIuNywxMi4zLTEyLjdzMTIuMyw1LjcsMTIuMywxMi43UzYwLjMsMjguNiw1My41LDI4LjZ6ICAgIE01My41LDdjLTQuNywwLTguNSw0LTguNSw4LjlzMy44LDguOSw4LjUsOC45czguNS00LDguNS04LjlTNTguMiw3LDUzLjUsN3oiCiAgIGlkPSJwYXRoNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xOC4yLDI4LjZjLTYuOCwwLTEyLjMtNS43LTEyLjMtMTIuN2MwLTcsNS41LTEyLjcsMTIuMy0xMi43czEyLjMsNS43LDEyLjMsMTIuN1MyNSwyOC42LDE4LjIsMjguNnogTTE4LjIsNyAgIGMtNC43LDAtOC41LDQtOC41LDguOXMzLjgsOC45LDguNSw4LjlzOC41LTQsOC41LTguOVMyMi45LDcsMTguMiw3eiIKICAgaWQ9InBhdGg2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTYzLjYsMjguMmMtMS4xLDAtMi0wLjktMi0yczAuOS0yLDItMmMxLjEsMCwyLDAuOSwyLDJTNjQuNywyOC4yLDYzLjYsMjguMnogTTYzLjYsMjUuOCAgIGMtMC4yLDAtMC40LDAuMi0wLjQsMC40YzAsMC41LDAuOSwwLjUsMC45LDBDNjQsMjYsNjMuOCwyNS44LDYzLjYsMjUuOHoiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik02My42LDguMWMtMS4xLDAtMi0wLjktMi0yczAuOS0yLDItMmMxLjEsMCwyLDAuOSwyLDJTNjQuNyw4LjEsNjMuNiw4LjF6IE02My42LDUuN2MtMC4yLDAtMC40LDAuMi0wLjQsMC40ICAgYzAsMC41LDAuOSwwLjUsMC45LDBDNjQsNS44LDYzLjgsNS43LDYzLjYsNS43eiIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik04LjQsMjguMmMtMS4xLDAtMi0wLjktMi0yczAuOS0yLDItMnMyLDAuOSwyLDJTOS41LDI4LjIsOC40LDI4LjJ6IE04LjQsMjUuOEM4LjIsMjUuOCw4LDI2LDgsMjYuMiAgIGMwLDAuNSwwLjksMC41LDAuOSwwQzguOCwyNiw4LjYsMjUuOCw4LjQsMjUuOHoiCiAgIGlkPSJwYXRoMTIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNOC40LDguMWMtMS4xLDAtMi0wLjktMi0yczAuOS0yLDItMnMyLDAuOSwyLDJTOS41LDguMSw4LjQsOC4xeiBNOC40LDUuN0M4LjIsNS43LDgsNS44LDgsNi4xICAgYzAsMC41LDAuOSwwLjUsMC45LDBDOC44LDUuOCw4LjYsNS43LDguNCw1Ljd6IgogICBpZD0icGF0aDE0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTM4LjksMjcuMmgtNi40Yy0xLjYsMC0yLjktMS4zLTIuOS0zczEuMy0zLDIuOS0zaDYuNGMxLjYsMCwzLDEuMywzLDNDNDEuOSwyNS45LDQwLjYsMjcuMiwzOC45LDI3LjJ6ICAgIE0zMi41LDIzLjljLTAuMiwwLTAuNCwwLjItMC40LDAuNGMwLDAuMiwwLjIsMC40LDAuNCwwLjRoNi40YzAuMiwwLDAuNC0wLjIsMC40LTAuNGMwLTAuMi0wLjItMC40LTAuNC0wLjRIMzIuNXoiCiAgIGlkPSJwYXRoMTYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+CjwvZz4KPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTY4LjQsMzIuMWgtNjVjLTEuOCwwLTMuMy0xLjUtMy4zLTMuM1YzLjNDMCwxLjUsMS41LDAsMy4zLDBoNjVjMS44LDAsMy4zLDEuNSwzLjMsMy4zdjI1LjUgIEM3MS43LDMwLjYsNzAuMiwzMi4xLDY4LjQsMzIuMXogTTMuMywxQzIsMSwxLDIsMSwzLjN2MjUuNWMwLDEuMywxLDIuMywyLjMsMi4zaDY1YzEuMywwLDIuMy0xLDIuMy0yLjNWMy4zYzAtMS4zLTEtMi4zLTIuMy0yLjMgIEgzLjN6IgogICBpZD0icGF0aDIwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L3N2Zz4K';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
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
                colour:color2,
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
                colour:color2,
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
                colour:color2,
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
                colour:color3,
                extensions: ['output_boolean']
            });
        }
    };

    

 // Motor

    Blockly.Blocks.motor130_digital = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MOTOR130_DIGITAL,
                args0: [
                    {
                        type: 'field_image',
                        src: motorIconUrl,
                        width: 50,
                        height: 35
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
                        name: 'state1',
                        options: [
                            ['HIGH', 'HIGH'],
                            ['LOW', 'LOW']
                            ]
                    },

                    {
                        type: 'field_dropdown',
                        name: 'IN2',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state2',
                        options: [
                            ['HIGH', 'HIGH'],
                            ['LOW', 'LOW']
                            ]
                    }
                ],
                colour: color4,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.motor130_analog = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MOTOR130_ANALOG,
                args0: [
                    {
                        type: 'field_image',
                        src: motorIconUrl,
                        width: 50,
                        height: 35
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
                        name: 'state1',
                        options: [
                            ['HIGH', 'HIGH'],
                            ['LOW', 'LOW']
                            ]
                    },

                    {
                        type: 'field_dropdown',
                        name: 'IN2',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED2'
                    },
                ],
                colour: color4,
                extensions: ['shape_statement']
            });
        }
    };


    //超声波
    Blockly.Blocks.hc_sr04_read_distance = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.HC_SR04_READ_DISTANCE,
                args0: [
                    {
                        type: 'field_image',
                        src: hc_sr04IconUrl,
                        width: 50,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'trig_pin',
                        options: digitalPins
                    }, 
                    {
                        type: 'field_dropdown',
                        name: 'echo_pin',
                        options: digitalPins
                    }, 
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['cm', 'CM'],
                            ['inch', 'INC']]
                    }],
                colour: color6,
                extensions: ['output_number']
            });
        }
    };



    return Blockly;
}

exports = addBlocks;

