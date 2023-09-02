/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#0000ff';

    const RGBcube_IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+Cgo8c3ZnCiAgIHZlcnNpb249IjEuMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCA5NzkuOTk2NDYgOTc5Ljc2NjU0IgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlkPSJzdmcyMCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iQ1VCRTQuc3ZnIgogICB3aWR0aD0iOTc5Ljk5NjQ2IgogICBoZWlnaHQ9Ijk3OS43NjY1NCIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4yLjIgKDczMmEwMWRhNjMsIDIwMjItMTItMDkpIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzCiAgIGlkPSJkZWZzMjQiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBpZD0ibmFtZWR2aWV3MjIiCiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgIGJvcmRlcm9wYWNpdHk9IjAuMjUiCiAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMC4yMzYiCiAgIGlua3NjYXBlOmN4PSI0OTEuNTI1NDIiCiAgIGlua3NjYXBlOmN5PSI0OTMuNjQ0MDciCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTQ1IgogICBpbmtzY2FwZTp3aW5kb3cteD0iMTI3MSIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii05IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyMCIgLz4KPG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTIiPiBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiA8L21ldGFkYXRhPgo8ZwogICBpZD0iZzE4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIgogICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAuMDAzNTQxLC0xMC4xMDYyODIpIj48ZwogICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMSwwLDAsLTAuMSwwLDUxMikiCiAgICAgaWQ9ImcxNiIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIj48cGF0aAogICAgICAgZD0ibSAyMzQ1LjIsNDk5NS45IGMgLTE1Ny4xLC00NC4xIC0yNTMsLTk5LjcgLTM2OS45LC0yMTguNSAtMjQ1LjMsLTI0NS4zIC0zMDguNiwtNTk5LjkgLTE2Mi45LC05MTYuMSBsIDQ3LjksLTEwNy4zIC0yMDEuMiwtMjA1IGMgLTE4Mi4xLC0xODUuOSAtMjAxLjIsLTIxMC44IC0yMDEuMiwtMjc2IDAsLTkyIDY5LC0xNjQuOCAxNTUuMiwtMTY0LjggNTEuNywwIDkyLDMwLjcgMjc0LjEsMjEwLjggbCAyMTIuNywyMDguOSA1NS42LC0zNC41IGMgMzAuNywtMjEuMSA5MiwtNDcuOSAxMzgsLTU5LjQgbCA4NC4zLC0yNC45IHYgLTUwNCAtNTA1LjkgaCAtMTA3LjMgYyAtMTMwLjMsMCAtMTcwLjYsLTE5LjIgLTE5Ny40LC05Ny43IC00NiwtMTMwLjMgNTMuNywtMjI4LjEgMjMwLC0yMjguMSBoIDcyLjggbCA1LjgsLTE0MDEgNS43LC0xNDAwLjkgNTMuNywtNDYgYyA2OSwtNTkuNCAxNDkuNSwtNTkuNCAyMTguNSwwIGwgNTMuNyw0NiA1LjcsMTQwMC45IDUuOCwxNDAxIDE4MDEuNSwtMy44IDE4MDMuNCwtNS43IDM0LjUsLTk5LjcgYyA2OSwtMTk1LjUgMjE0LjYsLTM1Ni41IDQwOC4yLC00NTIuMyA0OTIuNSwtMjM5LjYgMTA3Ny4xLDY5IDExNjUuMiw2MTcuMSA2Ny4xLDQyNS41IC0yNTEuMSw4NTIuOCAtNjg4LDkyMS44IC0zMzMuNSw1My43IC02OTEuOSwtMTMwLjMgLTg0My4zLC00MzMuMSAtMzAuNywtNjMuMiAtNjEuMywtMTM2LjEgLTY5LC0xNjQuOCBsIC0xMS41LC01My43IEggNDUyNC4yIDI3MjIuNyB2IDUwNCA1MDYgbCA4Mi40LDI0LjkgYyAxMjIuNywzNi40IDIyOC4xLDEwNS40IDMzNS40LDIxNi42IDEwMS42LDEwOS4yIDE0OS41LDE4OS43IDE4NS45LDMxMC41IGwgMjMsNzYuNyAyMjUzLjgsOS42IDIyNTMuOCw5LjYgNDQuMSw0Mi4yIGMgMjYuOCwyOC44IDQyLjIsNjcuMSA0Mi4yLDExMS4yIDAsNDQuMSAtMTUuMyw4Mi40IC00Mi4yLDExMS4yIGwgLTQ0LjEsNDIuMiAtMjI1MS45LDkuNiAtMjI1My44LDkuNiAtMzQuNSwxMDEuNiBjIC03NC43LDIwOC45IC0yNjYuNCw0MDQuNCAtNDczLjQsNDgzIC0xNDMuNyw1My4xIC0zNjQuMSw2Ni42IC00OTguMiwyOC4yIHogbSAzNjAuMywtMzI1LjggYyAxOTcuNCwtNjcuMSAzMjkuNiwtMjUxLjEgMzI3LjcsLTQ2MCAwLC0xMzYuMSAtMzIuNiwtMjI0LjIgLTEyMC43LC0zMjUuOCAtMTg5LjcsLTIxNi42IC01MzIuOCwtMjE0LjcgLTcyOC4zLDMuOCAtMzI5LjYsMzY0LjIgNTUuNiw5NDEuMSA1MjEuMyw3ODIgeiBNIDczMzEuOSwyNjg2LjYgYyAzMzMuNSwtMTQxLjggMzgxLjQsLTYzNC40IDgwLjUsLTgzNy41IC0xMDMuNSwtNjkgLTI1MS4xLC0xMDcuMyAtMzYwLjMsLTkwLjEgLTI1OC43LDQyLjIgLTQ2MCwzMjkuNiAtNDA0LjQsNTc4LjggNzAuOSwzMTQuMyAzODkuMSw0NzUuMyA2ODQuMiwzNDguOCB6IgogICAgICAgaWQ9InBhdGg0IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48cGF0aAogICAgICAgZD0ibSA4ODc0LjcsNDk5NS45IGMgLTIyNC4yLC02My4yIC00MTIsLTIyMi4zIC01MTkuNCwtNDQwLjggLTYxLjMsLTEyNi41IC02NS4yLC0xNDMuNyAtNjUuMiwtMzQ1IDAsLTE5MS43IDUuOCwtMjIwLjQgNTUuNiwtMzMxLjYgbCA1NS42LC0xMjAuNyAtMTg0LC0xODUuOSBjIC0xMDEuNiwtMTAxLjYgLTE5My42LC0yMTAuOCAtMjAzLjIsLTIzOS42IC00NiwtMTIyLjcgODAuNSwtMjUxLjEgMjAzLjIsLTIwMy4xIDI4LjgsOS42IDEzNi4xLDEwMS42IDIzOS42LDIwMy4xIGwgMTg1LjksMTg0IDExMS4yLC00Ny45IGMgNjEuMywtMjYuOCAxMjYuNSwtNTMuNyAxNDUuNiwtNTkuNCAzMC43LC0xMS41IDMyLjYsLTEyOC40IDMyLjYsLTIwOTIuOCBWIC03NjUgbCA0Ny45LC00NiBjIDc4LjYsLTgwLjUgMjAxLjIsLTU5LjQgMjU0LjksNDIuMiAxNy4zLDMwLjcgMjMsNTczIDIzLDIxMDguMSB2IDIwNjcuOSBsIDgyLjQsMjEuMSBjIDEzMi4yLDM2LjQgMzEwLjUsMTY0LjggNDA0LjQsMjkzLjIgMTE4LjgsMTYyLjkgMTU1LjIsMjc2IDE1NS4yLDQ5OC4zIDAsMTY0LjggLTUuNywxOTMuNiAtNjEuMywzMTIuNCAtODQuMywxNzYuMyAtMjI4LjEsMzIzLjkgLTQwMC41LDQwOC4yIC0xMTYuOSw1OS40IC0xNjIuOSw3MC45IC0yOTksNzYuNyAtMTA1LjUsNS43IC0xOTMuNiwtMiAtMjY0LjUsLTIxLjIgeiBtIDQzMy4xLC0zNTAuNyBjIDE3Mi41LC04OC4yIDI2NC41LC0yNDEuNSAyNjYuNCwtNDM1IDAsLTExMy4xIC05LjYsLTE0OS41IC01NS42LC0yMzUuNyAtMTkzLjYsLTM0OC44IC02OTkuNSwtMzM1LjQgLTg2Ni4yLDI0LjkgLTEyNi41LDI2OC4zIDkuNiw1ODAuNyAyOTUuMSw2NzQuNiA5NS44LDMyLjUgMjY4LjMsMTkuMSAzNjAuMywtMjguOCB6IgogICAgICAgaWQ9InBhdGg2IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48cGF0aAogICAgICAgZD0ibSA3NzEuOCwzMDQ4LjggYyAtNDIxLjYsLTcwLjkgLTczNCwtNTA2IC02NjEuMiwtOTI1LjcgNTEuNywtMzA2LjYgMjc2LC01NzMgNTQ4LjEsLTY1My41IGwgODAuNSwtMjMgOS42LC0yMDkwLjkgOS42LC0yMDkwLjkgNDIuMiwtNDQuMSBjIDYzLjIsLTYzLjIgMTcwLjYsLTU3LjUgMjI4LjEsMTEuNSBsIDQ2LDUxLjcgViAtNjM4LjYgMTQzNyBsIDg4LjIsMzAuNyBjIDIxOC41LDc0LjcgNDMxLjIsMjcwLjIgNTA2LDQ2NS43IDUzLjcsMTM2LjEgNzAuOSwzNzEuOCA0MC4yLDQ5OC4zIC01OS40LDIzMS45IC0yNDEuNSw0NTggLTQ0Ni41LDU1MS45IC04OC4yLDQwLjIgLTMxMC41LDkwLjEgLTM2OS45LDg0LjMgLTkuOCwtMS45IC02NS40LC05LjUgLTEyMC45LC0xOS4xIHogbSAzMzMuNCwtMzUyLjcgYyAxNjEsLTY1LjIgMjk1LjEsLTI2NC41IDI5NS4xLC00MzguOSAwLC0xMzkuOSAtMzYuNCwtMjM1LjcgLTEyOC40LC0zMzcuMyAtMjQ5LjEsLTI3NiAtNjk5LjUsLTE4NCAtODE4LjMsMTY4LjYgLTEzNi4xLDM5NC45IDI2MC43LDc2NC44IDY1MS42LDYwNy42IHoiCiAgICAgICBpZD0icGF0aDgiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjxwYXRoCiAgICAgICBkPSJtIDcwMjEuNCwxMDQ5LjkgLTUzLjcsLTQ2IC01LjcsLTE0MjAuMSAtMy44LC0xNDIwLjEgSCA1MTU0LjggYyAtMTY5OCwwIC0xODAxLjUsMS45IC0xODExLjEsMzQuNSAtMTExLjIsMzMxLjUgLTM0Ni45LDU0Mi40IC02NjUsNTk3LjkgLTQzMy4xLDc2LjcgLTg1Ni43LC0yMzAgLTkzNS4zLC02NzguNCAtMjYuOCwtMTUzLjMgLTMuOCwtMzA4LjYgNjksLTQ2Ny42IGwgNDcuOSwtMTA1LjQgLTIwMS4yLC0yMDUuMSBjIC0xODIuMSwtMTg1LjkgLTIwMS4yLC0yMTAuOCAtMjAxLjIsLTI3NiAwLC05MiA2OSwtMTY0LjggMTU3LjIsLTE2NC44IDUzLjcsMCA5MC4xLDI4LjggMjY4LjMsMjA1LjEgbCAyMDUuMSwyMDMuMSAxMTUsLTUxLjcgYyA0NjMuOCwtMjA3IDk3My42LDIzIDExMzAuNyw1MTEuNyBsIDI0LjksNzAuOSBoIDE3OTkuNiAxNzk5LjYgdiAtNTA0IC01MDQgbCAtMTAzLjUsLTMyLjYgYyAtMjE0LjYsLTY5IC00MjEuNiwtMjgxLjcgLTUwMi4xLC01MTUuNSAtNTEuOCwtMTQ3LjYgLTQ2LC0zOTIuOSAxMS41LC01MzguNSA3OC42LC0yMDcgMjY0LjUsLTM5Mi45IDQ3My40LC00NzUuMyAxNTcuMiwtNjMuMyA0MjcuNCwtNjEuMyA1ODYuNCwwIDM0OC44LDEzNi4xIDU2OS4yLDUxNS41IDUwOS44LDg4MS42IC00Ny45LDMwNC43IC0yNTYuOCw1NTUuOCAtNTQyLjQsNjUzLjUgbCAtOTcuNywzMi42IHYgNDk2LjQgNDk2LjQgbCAyODMuNiw5LjYgYyAyNzAuMiw5LjYgMjg3LjUsMTEuNSAzMjIsNTUuNiA0OS44LDYxLjMgNDYsMTQxLjggLTkuNiwyMDcgLTQ2LDUzLjcgLTQ2LDUzLjcgLTMyNS44LDU5LjQgbCAtMjc5LjgsNS44IHYgMTQyNS45IDE0MjUuOSBsIC00OS44LDM4LjMgYyAtNjcuMiw1My4zIC0xNDcuNyw0OS41IC0yMTIuOSwtNi4xIHogTSAyNzg5LjgsLTE1ODUuMyBjIDI3OS44LC0xNTUuMiAzMzEuNSwtNTQwLjQgMTAxLjYsLTc3MC40IC0yMzEuOSwtMjMwIC02MzIuNCwtMTYyLjkgLTc3Ni4yLDEzMC4zIC0xMzkuOSwyODUuNSAxNy4zLDYxOSAzMjUuOCw2OTcuNiA5Ny44LDI0LjkgMjQ1LjMsMCAzNDguOCwtNTcuNSB6IG0gNDQ5OCwtMTkyMi4yIGMgOTkuNywtMjguNyAyMzEuOSwtMTQ3LjYgMjgzLjYsLTI1MyA1NS42LC0xMTYuOSA1NS42LC0yODEuNyAtMS45LC00MTIuMSAtOTUuOCwtMjI0LjIgLTM2NC4xLC0zNDEuMSAtNTk0LjEsLTI2MC42IC0yNTMsOTAuMSAtMzg3LjEsMzQzIC0zMTQuMyw1OTYgMjQuOSw5MC4xIDUxLjcsMTMyLjIgMTMwLjMsMjA4LjkgNTUuNiw1My43IDEzMC4zLDEwNy4zIDE2Ni43LDExOC44IDkwLjIsMjguOCAyMzcuNywzMC43IDMyOS43LDIgeiIKICAgICAgIGlkPSJwYXRoMTAiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjxwYXRoCiAgICAgICBkPSJtIDg5MzIuMiwtMTIwMy45IGMgLTIzOS42LC00OS44IC00NzEuNCwtMjMzLjggLTU3OC44LC00NTggLTEwNS40LC0yMTguNSAtOTMuOSwtNTQ4LjEgMjMsLTc0MS43IGwgMzYuNCwtNTcuNSAtMjc3LjksLTI3Ny45IGMgLTE1My4zLC0xNTEuNCAtMjg3LjUsLTI5NS4yIC0yOTcuMSwtMzIwLjEgLTQyLjIsLTEwNy4zIDc2LjcsLTIzMy44IDE5My42LC0yMDUuMSAyNi44LDcuNyAxNzIuNSwxMzYuMSAzMjcuNywyODkuNCBsIDI3Ny45LDI3Ny45IDEwNS40LC00Ny45IGMgMzQ1LC0xNTkuMSA3NDcuNCwtNjMuMiA5ODcsMjMxLjkgMTIyLjcsMTQ5LjUgMTY4LjcsMjg1LjUgMTY4LjcsNTA0IDEuOSwyNzkuOCAtODYuMyw0NjMuOCAtMzA4LjYsNjQzLjkgLTE3MC41LDE0MCAtNDQwLjgsMjA1LjIgLTY1Ny4zLDE2MS4xIHogbSAzNzcuNSwtMzY2LjEgYyA0NiwtMjMgMTExLjIsLTc0LjcgMTQ3LjYsLTExNi45IDI3OS44LC0zMjUuOCA1My43LC04MDQuOSAtMzc1LjYsLTgwMyAtMTQzLjcsMCAtMjU4LjcsNTMuNyAtMzU2LjUsMTY0LjggLTE2Ni43LDE4OS43IC0xNjEsNDU2LjEgMTUuMyw2NDUuOSAxNTEuNCwxNjQuOCAzNjYuMSwyMDcgNTY5LjIsMTA5LjIgeiIKICAgICAgIGlkPSJwYXRoMTIiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjxwYXRoCiAgICAgICBkPSJNIDY1OC43LC0zMTkzLjIgQyA1MDMuNSwtMzI0OC44IDM1NCwtMzM1OCAyNjIsLTM0ODQuNSBjIC0xMTguOCwtMTYyLjkgLTE1NS4yLC0yNzYgLTE1NS4yLC00OTguMyAwLC0xNjQuOCA1LjcsLTE5My42IDYxLjMsLTMxMi40IDg0LjMsLTE3OC4yIDIyNi4xLC0zMjMuOSA0MDYuMywtNDEyLjEgMTM2LjEsLTY3LjEgMTUzLjMsLTcwLjkgMzI1LjgsLTcwLjkgMjIyLjMsMCAzMzcuMywzNi40IDQ5Ni40LDE1My4zIDEyNi41LDkyIDI2Mi42LDI3Ny45IDI5Ny4xLDQwNi4zIGwgMjEuMSw4Mi40IGggMjA2Ny45IGMgMTUzNS4xLDAgMjA3Ny41LDUuNyAyMTA4LjEsMjMgMTAxLjYsNTMuNyAxMjIuNywxNzYuMyA0Mi4yLDI1NC45IGwgLTQ2LDQ3LjkgSCAzNzk2IGMgLTIwMjUuNywwIC0yMDg5LDEuOSAtMjA4OSwzNi40IDAsMTkuMiAtMzAuNyw5NS44IC02Ny4xLDE2OC42IC04Mi40LDE2Ni43IC0yMTQuNywyOTMuMiAtMzg5LDM3NS42IC0xMTEuMiw1MS44IC0xNTMuMyw2MS4zIC0zMTAuNSw2NS4yIC0xMzkuOSw1LjkgLTIwNS4xLC0xLjggLTI4MS43LC0yOC42IHogbSA0NjMuOCwtMzM3LjMgYyAxNjguNiwtNzguNiAyNzcuOSwtMjQ3LjIgMjc2LC00MzMuMSAwLC0xOTcuNCAtODQuMywtMzM5LjIgLTI1MS4xLC00MzMuMSAtMTMyLjIsLTcwLjkgLTMyNS44LC03OC42IC00NDYuNSwtMTMuNCAtMjc5LjgsMTQ5LjUgLTM1OC40LDQ4MyAtMTcyLjUsNzM1LjkgMTMwLjMsMTgwLjEgMzg1LjIsMjQxLjQgNTk0LjEsMTQzLjcgeiIKICAgICAgIGlkPSJwYXRoMTQiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjwvZz48L2c+Cjwvc3ZnPgo=';
    
    Blockly.Blocks.RGBcube_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBCUBE_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: RGBcube_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.RGBcube_all = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBCUBE_ALL,
                args0: [
                    {
                        type: 'field_image',
                        src: RGBcube_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.BLUE, 'BLUE'],
                            [Blockly.Msg.RED, 'RED'],
                            [Blockly.Msg.GREEN, 'GREEN'],
                            [Blockly.Msg.ORANGE, 'ORANGE'],
                            [Blockly.Msg.PINK, 'PINK'],
                            [Blockly.Msg.PURPLE, 'PURPLE'],
                            [Blockly.Msg.BLACK, 'BLACK'],
                            [Blockly.Msg.WHITE, 'WHITE'],
                            [Blockly.Msg.YELLOW, 'YELLOW']
                            ],
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.RGBcube_any = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBCUBE_ANY,
                args0: [
                    {
                        type: 'field_image',
                        src: RGBcube_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'red',
                    },
                    {
                        type: 'input_value',
                        name: 'green',
                    },
                    {
                        type: 'input_value',
                        name: 'blue'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.RGBcube_single = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBCUBE_SINGLE,
                args0: [
                    {
                        type: 'field_image',
                        src: RGBcube_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'X',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Y',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Z',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'input_value',
                        name: 'red',
                    },
                    {
                        type: 'input_value',
                        name: 'green',
                    },
                    {
                        type: 'input_value',
                        name: 'blue'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.RGBcube_single2 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBCUBE_SINGLE2,
                args0: [
                    {
                        type: 'field_image',
                        src: RGBcube_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'Z'
                    },
                    {
                        type: 'input_value',
                        name: 'red'
                    },
                    {
                        type: 'input_value',
                        name: 'green'
                    },
                    {
                        type: 'input_value',
                        name: 'blue'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.RGBcube_line = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBCUBE_LINE,
                args0: [
                    {
                        type: 'field_image',
                        src: RGBcube_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'X1',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Y1',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Z1',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'X2',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Y2',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Z2',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.BLUE, 'BLUE'],
                            [Blockly.Msg.RED, 'RED'],
                            [Blockly.Msg.GREEN, 'GREEN'],
                            [Blockly.Msg.ORANGE, 'ORANGE'],
                            [Blockly.Msg.PINK, 'PINK'],
                            [Blockly.Msg.PURPLE, 'PURPLE'],
                            [Blockly.Msg.BLACK, 'BLACK'],
                            [Blockly.Msg.WHITE, 'WHITE'],
                            [Blockly.Msg.YELLOW, 'YELLOW']
                            ],
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.RGBcube_line2 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBCUBE_LINE2,
                args0: [
                    {
                        type: 'field_image',
                        src: RGBcube_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'X1'
                    },
                    {
                        type: 'input_value',
                        name: 'Y1'
                    },
                    {
                        type: 'input_value',
                        name: 'Z1'
                    },
                    {
                        type: 'input_value',
                        name: 'X2'
                    },
                    {
                        type: 'input_value',
                        name: 'Y2'
                    },
                    {
                        type: 'input_value',
                        name: 'Z2'
                    },
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
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    
    Blockly.Blocks.RGBcube_plane = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBCUBE_PLANE,
                args0: [
                    {
                        type: 'field_image',
                        src: RGBcube_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'AXIS',
                        options: [
                            [Blockly.Msg.X, 'X'],
                            [Blockly.Msg.Y, 'Y'],
                            [Blockly.Msg.Z, 'Z']
                            ],
                    },
                    {
                        type: 'field_dropdown',
                        name: 'LAY',
                        options: [
                            [Blockly.Msg.FIRST, '0'],
                            [Blockly.Msg.SECOND, '1'],
                            [Blockly.Msg.THIRD, '2'],
                            [Blockly.Msg.FOURTH, '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COL',
                        options: [
                            [Blockly.Msg.BLUE, 'BLUE'],
                            [Blockly.Msg.RED, 'RED'],
                            [Blockly.Msg.GREEN, 'GREEN'],
                            [Blockly.Msg.ORANGE, 'ORANGE'],
                            [Blockly.Msg.PINK, 'PINK'],
                            [Blockly.Msg.PURPLE, 'PURPLE'],
                            [Blockly.Msg.BLACK, 'BLACK'],
                            [Blockly.Msg.WHITE, 'WHITE'],
                            [Blockly.Msg.YELLOW, 'YELLOW']
                            ],
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.RGBcube_plane2 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBCUBE_PLANE2,
                args0: [
                    {
                        type: 'field_image',
                        src: RGBcube_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'AXIS'
                    },
                    {
                        type: 'input_value',
                        name: 'LAY'
                    },
                    {
                        type: 'input_value',
                        name: 'R',
                    },
                    {
                        type: 'input_value',
                        name: 'G',
                    },
                    {
                        type: 'input_value',
                        name: 'B',
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.RGBcube_sphere = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBCUBE_SPHERE,
                args0: [
                    {
                        type: 'field_image',
                        src: RGBcube_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'X',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Y',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Z',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'SIZE',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR1',
                        options: [
                            [Blockly.Msg.BLUE, 'BLUE'],
                            [Blockly.Msg.RED, 'RED'],
                            [Blockly.Msg.GREEN, 'GREEN'],
                            [Blockly.Msg.ORANGE, 'ORANGE'],
                            [Blockly.Msg.PINK, 'PINK'],
                            [Blockly.Msg.PURPLE, 'PURPLE'],
                            [Blockly.Msg.BLACK, 'BLACK'],
                            [Blockly.Msg.WHITE, 'WHITE'],
                            [Blockly.Msg.YELLOW, 'YELLOW']
                            ],
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR2',
                        options: [
                            [Blockly.Msg.BLUE, 'BLUE'],
                            [Blockly.Msg.RED, 'RED'],
                            [Blockly.Msg.GREEN, 'GREEN'],
                            [Blockly.Msg.ORANGE, 'ORANGE'],
                            [Blockly.Msg.PINK, 'PINK'],
                            [Blockly.Msg.PURPLE, 'PURPLE'],
                            [Blockly.Msg.WHITE, 'WHITE'],
                            [Blockly.Msg.BLACK, 'BLACK'],
                            [Blockly.Msg.YELLOW, 'YELLOW']
                            ],
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.RGBcube_sphere2 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBCUBE_SPHERE2,
                args0: [
                    {
                        type: 'field_image',
                        src: RGBcube_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'Z'
                    },
                    {
                        type: 'input_value',
                        name: 'SIZE'
                    },
                    {
                        type: 'input_value',
                        name: 'R1'
                    },
                    {
                        type: 'input_value',
                        name: 'G1'
                    },
                    {
                        type: 'input_value',
                        name: 'B1'
                    },
                    {
                        type: 'input_value',
                        name: 'R2'
                    },
                    {
                        type: 'input_value',
                        name: 'G2'
                    },
                    {
                        type: 'input_value',
                        name: 'B2'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.RGBcube_box = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBCUBE_BOX,
                args0: [
                    {
                        type: 'field_image',
                        src: RGBcube_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'X1',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Y1',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Z1',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'X2',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Y2',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Z2',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR1',
                        options: [
                            [Blockly.Msg.BLUE, 'BLUE'],
                            [Blockly.Msg.RED, 'RED'],
                            [Blockly.Msg.GREEN, 'GREEN'],
                            [Blockly.Msg.ORANGE, 'ORANGE'],
                            [Blockly.Msg.PINK, 'PINK'],
                            [Blockly.Msg.PURPLE, 'PURPLE'],
                            [Blockly.Msg.BLACK, 'BLACK'],
                            [Blockly.Msg.WHITE, 'WHITE'],
                            [Blockly.Msg.YELLOW, 'YELLOW']
                            ],
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STYLE',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR2',
                        options: [
                            [Blockly.Msg.BLUE, 'BLUE'],
                            [Blockly.Msg.RED, 'RED'],
                            [Blockly.Msg.GREEN, 'GREEN'],
                            [Blockly.Msg.ORANGE, 'ORANGE'],
                            [Blockly.Msg.PINK, 'PINK'],
                            [Blockly.Msg.PURPLE, 'PURPLE'],
                            [Blockly.Msg.BLACK, 'BLACK'],
                            [Blockly.Msg.WHITE, 'WHITE'],
                            [Blockly.Msg.YELLOW, 'YELLOW']
                            ],
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.RGBcube_box2 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBCUBE_BOX2,
                args0: [
                    {
                        type: 'field_image',
                        src: RGBcube_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'X1'
                    },
                    {
                        type: 'input_value',
                        name: 'Y1'
                    },
                    {
                        type: 'input_value',
                        name: 'Z1'
                    },
                    {
                        type: 'input_value',
                        name: 'X2'
                    },
                    {
                        type: 'input_value',
                        name: 'Y2'
                    },
                    {
                        type: 'input_value',
                        name: 'Z2'
                    },
                    {
                        type: 'input_value',
                        name: 'R1'
                    },
                    {
                        type: 'input_value',
                        name: 'G1'
                    },
                    {
                        type: 'input_value',
                        name: 'B1'
                    },
                    {
                        type: 'input_value',
                        name: 'STYLE'
                    },
                    {
                        type: 'input_value',
                        name: 'R2'
                    },
                    {
                        type: 'input_value',
                        name: 'G2'
                    },
                    {
                        type: 'input_value',
                        name: 'B2'
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
