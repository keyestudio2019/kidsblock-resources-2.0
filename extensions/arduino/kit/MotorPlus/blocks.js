/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF4500';
    const color2 = '#41be8a';
    const color3 = '#573e00';
    const color4 = '#0000FF';
    const secondaryColour = '#CD5C5C';
     const forwardIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+Cgo8c3ZnCiAgIHZlcnNpb249IjEuMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAxODguODQ5MzggMjM1Ljg3ODQ2IgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNTYgMjU2IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnMTEwIgogICBzb2RpcG9kaTpkb2NuYW1lPSJ1cC5zdmciCiAgIHdpZHRoPSIxODguODQ5MzgiCiAgIGhlaWdodD0iMjM1Ljg3ODQ2IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMiAoNzMyYTAxZGE2MywgMjAyMi0xMi0wOSkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnMKICAgaWQ9ImRlZnMxMTQiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBpZD0ibmFtZWR2aWV3MTEyIgogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjMDAwMDAwIgogICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjAuOTIxODc1IgogICBpbmtzY2FwZTpjeD0iOTMuODMwNTA4IgogICBpbmtzY2FwZTpjeT0iMTE4Ljc3OTY2IgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijk0NSIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii05IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTkiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzExMCIgLz4KPG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTEwMCI+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+CjxnCiAgIGlkPSJnMTA4IgogICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzMuNTI1NjE5LC0xMC4wMjE1MzkpIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj48ZwogICAgIGlkPSJnMTA2IgogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPjxnCiAgICAgICBpZD0iZzEwNCIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPjxwYXRoCiAgICAgICAgIGZpbGw9IiMwMDAwMDAiCiAgICAgICAgIGQ9Im0gMTIzLjUsMTAuNSBjIC0xLDAuNCAtMi44LDEuMyAtMy45LDIgLTIuNSwxLjUgLTgwLjksNzkuOCAtODMuNCw4My4zIC01LjQsNy42IC0yLjMsMTguNyA2LjQsMjMgMi41LDEuMiAyLjUsMS4yIDIwLjMsMS4zIGwgMTcuOSwwLjEgMC4xLDU3LjIgMC4xLDU3LjIgMS4yLDIuNSBjIDEuNSwzLjIgNC41LDYuMSA3LjYsNy42IGwgMi41LDEuMiBoIDM1LjcgMzUuNyBsIDIuNSwtMS4yIGMgMy4yLC0xLjUgNi4xLC00LjUgNy42LC03LjYgbCAxLjIsLTIuNSAwLjEsLTU3LjIgMC4xLC01Ny4yIDE3LjksLTAuMSBjIDE3LjgsLTAuMSAxNy44LC0wLjEgMjAuMywtMS4zIDMuMSwtMS42IDYuMSwtNC42IDcuNywtNy43IDEuNywtMy41IDEuNywtOS44IDAsLTEzLjMgLTAuOSwtMiAtOS41LC0xMC44IC00Mi4xLC00My40IC00NS40LC00NS41IC00My43LC00NCAtNTAuMywtNDQuMyAtMiwtMC4yIC00LDAgLTUuMiwwLjQgeiIKICAgICAgICAgaWQ9InBhdGgxMDIiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PC9nPjwvZz48L2c+Cjwvc3ZnPgo=';
    const backIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+Cgo8c3ZnCiAgIHZlcnNpb249IjEuMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAxODguODk2NzYgMjM2LjAxNTEyIgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNTYgMjU2IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnMTIiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImJhY2suc3ZnIgogICB3aWR0aD0iMTg4Ljg5Njc2IgogICBoZWlnaHQ9IjIzNi4wMTUxMiIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4yLjIgKDczMmEwMWRhNjMsIDIwMjItMTItMDkpIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzCiAgIGlkPSJkZWZzMTYiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBpZD0ibmFtZWR2aWV3MTQiCiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgIGJvcmRlcm9wYWNpdHk9IjAuMjUiCiAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMC45MjE4NzUiCiAgIGlua3NjYXBlOmN4PSItMTEuOTMyMjAzIgogICBpbmtzY2FwZTpjeT0iMTIyLjAzMzkiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMjEwMSIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTIzIgogICBpbmtzY2FwZTp3aW5kb3cteD0iMjgxIgogICBpbmtzY2FwZTp3aW5kb3cteT0iMCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMTIiIC8+CjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGEyIj4gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gPC9tZXRhZGF0YT4KPGcKICAgaWQ9ImcxMCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzLjU3ODIzNiwtMTApIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj48ZwogICAgIGlkPSJnOCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIj48ZwogICAgICAgaWQ9Imc2IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+PHBhdGgKICAgICAgICAgZmlsbD0iIzAwMDAwMCIKICAgICAgICAgZD0iTSA5Mi44LDEwLjMgQyA4OC40LDExLjQgODQuMywxNC43IDgyLjIsMTkgTCA4MSwyMS40IDgwLjksNzguNiA4MC44LDEzNS44IDYyLjksMTM2IGMgLTE3LjgsMC4xIC0xNy44LDAuMSAtMjAuMywxLjMgLTMuMiwxLjYgLTYuNSw0LjkgLTcuNyw3LjggLTIuMiw0LjkgLTEuNiwxMSAxLjQsMTUuMyAwLjksMS4zIDE5LjYsMjAuMyA0MS43LDQyLjQgNDUuMyw0NS4zIDQyLjksNDMuMiA1MC4xLDQzLjIgMy42LDAgNC41LC0wLjIgNi45LC0xLjQgMy45LC0yIDg0LjUsLTgyLjYgODYuMiwtODYuMiAxLjcsLTMuNSAxLjcsLTkuOCAwLC0xMy4zIC0xLjYsLTMuMSAtNC42LC02LjEgLTcuNywtNy43IC0yLjUsLTEuMiAtMi41LC0xLjIgLTIwLjMsLTEuMyBsIC0xNy45LC0wLjEgLTAuMSwtNTcuMiAtMC4xLC01Ny4yIC0xLjIsLTIuNSBjIC0xLjUsLTMuMiAtNC41LC02LjEgLTcuNiwtNy42IEwgMTYzLjgsMTAuMyAxMjksMTAgYyAtMTkuMSwwIC0zNS4zLDAuMSAtMzYuMiwwLjMgeiIKICAgICAgICAgaWQ9InBhdGg0IgogICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjwvZz48L2c+PC9nPgo8L3N2Zz4K';
    const leftIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+Cgo8c3ZnCiAgIHZlcnNpb249IjEuMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAyMzUuODE2NSAxODguOTMwNSIKICAgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjU2IDI1NiIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgaWQ9InN2Zzc4IgogICBzb2RpcG9kaTpkb2NuYW1lPSJsZWZ0LnN2ZyIKICAgd2lkdGg9IjIzNS44MTY1IgogICBoZWlnaHQ9IjE4OC45MzA1IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMiAoNzMyYTAxZGE2MywgMjAyMi0xMi0wOSkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnMKICAgaWQ9ImRlZnM4MiIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXc4MCIKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgYm9yZGVyb3BhY2l0eT0iMC4yNSIKICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBpbmtzY2FwZTp6b29tPSIwLjkyMTg3NSIKICAgaW5rc2NhcGU6Y3g9IjExNy42OTQ5MiIKICAgaW5rc2NhcGU6Y3k9Ijk0LjkxNTI1NCIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMjgwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI5NDUiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOSIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii05IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmc3OCIgLz4KPG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTY4Ij4gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gPC9tZXRhZGF0YT4KPGcKICAgaWQ9Imc3NiIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkuOTgzNDk1NiwtMzMuNTQ0NTA4KSIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+PGcKICAgICBpZD0iZzc0IgogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPjxnCiAgICAgICBpZD0iZzcyIgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+PHBhdGgKICAgICAgICAgZmlsbD0iIzAwMDAwMCIKICAgICAgICAgZD0ibSA5OS42LDM0LjEgYyAtMS4xLDAuMyAtMywxLjQgLTQuMiwyLjIgQyA5NC4yLDM3LjEgNzUuMyw1NS45IDUzLjMsNzcuOCA3LjksMTIzLjEgMTAsMTIwLjcgMTAsMTI4IGMgMCw3LjIgLTIuMiw0LjggNDQuMiw1MS4xIDMyLjcsMzIuNiA0MS41LDQxLjEgNDMuNSw0Mi4xIDMuNSwxLjcgOS44LDEuNyAxMy4zLDAgMy4xLC0xLjYgNi4xLC00LjYgNy43LC03LjcgMS4yLC0yLjUgMS4yLC0yLjUgMS4zLC0yMC4zIGwgMC4xLC0xNy45IDU3LjIsLTAuMSA1Ny4yLC0wLjEgMi41LC0xLjIgYyAzLjIsLTEuNSA2LjEsLTQuNSA3LjYsLTcuNiBsIDEuMiwtMi41IFYgMTI4IDkyLjMgbCAtMS4yLC0yLjUgYyAtMS41LC0zLjIgLTQuNSwtNi4xIC03LjYsLTcuNiBMIDIzNC41LDgxIDE3Ny4zLDgwLjkgMTIwLjEsODAuOCAxMjAsNjIuOCBDIDExOS45LDQ1IDExOS45LDQ1IDExOC43LDQyLjUgYyAtMS42LC0zLjEgLTQuNiwtNi4yIC03LjYsLTcuNiAtMywtMS40IC04LjUsLTEuOCAtMTEuNSwtMC44IHoiCiAgICAgICAgIGlkPSJwYXRoNzAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PC9nPjwvZz48L2c+Cjwvc3ZnPgo=';
    const rightIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+Cgo8c3ZnCiAgIHZlcnNpb249IjEuMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAyMzUuODE1MDYgMTg4Ljk2MjcyIgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNTYgMjU2IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnMTIiCiAgIHNvZGlwb2RpOmRvY25hbWU9InJpZ2h0LnN2ZyIKICAgd2lkdGg9IjIzNS44MTUwNiIKICAgaGVpZ2h0PSIxODguOTYyNzIiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4yICg3MzJhMDFkYTYzLCAyMDIyLTEyLTA5KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcwogICBpZD0iZGVmczE2IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgaWQ9Im5hbWVkdmlldzE0IgogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjMDAwMDAwIgogICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjAuOTIxODc1IgogICBpbmtzY2FwZTpjeD0iMTE3LjY5NDkyIgogICBpbmtzY2FwZTpjeT0iOTQuOTE1MjU0IgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijk0NSIKICAgaW5rc2NhcGU6d2luZG93LXg9IjEyNzEiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOSIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMTIiIC8+CjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGEyIj4gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gPC9tZXRhZGF0YT4KPGcKICAgaWQ9ImcxMCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwLC0zMy41MTIyNzIpIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj48ZwogICAgIGlkPSJnOCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIj48ZwogICAgICAgaWQ9Imc2IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+PHBhdGgKICAgICAgICAgZmlsbD0iIzAwMDAwMCIKICAgICAgICAgZD0ibSAxNDYuNSwzNC40IGMgLTMuMiwxLjEgLTUuOCwzLjIgLTcuNyw1LjkgLTIuNywzLjkgLTIuOSw1LjEgLTIuOSwyMy41IFYgODAuNyBMIDc4LjcsODAuOCAyMS4zLDgxIDE4LjgsODIuMiBjIC0zLjIsMS41IC02LjEsNC41IC03LjYsNy42IEwgMTAsOTIuNCB2IDM1LjcgMzUuNyBsIDEuMiwyLjUgYyAxLjUsMy4yIDQuNSw2LjEgNy42LDcuNiBsIDIuNSwxLjIgNTcuMiwwLjEgNTcuMiwwLjEgMC4xLDE3LjkgYyAwLjEsMTcuOCAwLjEsMTcuOCAxLjMsMjAuMyAxLjYsMy4xIDQuNiw2LjEgNy43LDcuNyAzLjUsMS43IDkuOCwxLjcgMTMuMywwIDMuNiwtMS43IDg0LjIsLTgyLjMgODYuMywtODYuMyAxLjIsLTIuNCAxLjQsLTMuMyAxLjQsLTYuOSAwLC03LjIgMi4xLC00LjkgLTQzLjMsLTUwLjIgLTIyLC0yMiAtNDAuOSwtNDAuNyAtNDIuMSwtNDEuNSAtMy43LC0yLjggLTkuMiwtMy42IC0xMy45LC0xLjkgeiIKICAgICAgICAgaWQ9InBhdGg0IgogICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjwvZz48L2c+PC9nPgo8L3N2Zz4K';
    const stopIconUrl = ' data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+Cgo8c3ZnCiAgIHZlcnNpb249IjEuMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAyMzYgMjM2IgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNTYgMjU2IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnNzYiCiAgIHNvZGlwb2RpOmRvY25hbWU9InN0b3Auc3ZnIgogICB3aWR0aD0iMjM2IgogICBoZWlnaHQ9IjIzNiIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4yLjIgKDczMmEwMWRhNjMsIDIwMjItMTItMDkpIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzCiAgIGlkPSJkZWZzODAiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBpZD0ibmFtZWR2aWV3NzgiCiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgIGJvcmRlcm9wYWNpdHk9IjAuMjUiCiAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMC45MjE4NzUiCiAgIGlua3NjYXBlOmN4PSIxMTcuNjk0OTIiCiAgIGlua3NjYXBlOmN5PSIxMTguNzc5NjYiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTQ1IgogICBpbmtzY2FwZTp3aW5kb3cteD0iMTI3MSIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii05IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmc3NiIgLz4KPG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTY4Ij4gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gPC9tZXRhZGF0YT4KPGcKICAgaWQ9Imc3NCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwLC0xMCkiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPjxnCiAgICAgaWQ9Imc3MiIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIj48cGF0aAogICAgICAgZmlsbD0iIzAwMDAwMCIKICAgICAgIGQ9Ik0gMTI4LDEwIEMgNjIuOCwxMCAxMCw2Mi44IDEwLDEyOCAxMCwxOTMuMiA2Mi44LDI0NiAxMjgsMjQ2IDE5My4yLDI0NiAyNDYsMTkzLjIgMjQ2LDEyOCAyNDYsNjIuOCAxOTMuMiwxMCAxMjgsMTAgWiBtIDAsMjEzLjkgQyA3NSwyMjMuOSAzMi4xLDE4MSAzMi4xLDEyOCAzMi4xLDc1LjEgNzUsMzIuMSAxMjgsMzIuMSBjIDUzLDAgOTUuOSw0Mi45IDk1LjksOTUuOSAwLDUzIC00Mi45LDk1LjkgLTk1LjksOTUuOSB6IE0gODMuOCw4My44IGggODguNSB2IDg4LjUgSCA4My44IFoiCiAgICAgICBpZD0icGF0aDcwIgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48L2c+PC9nPgo8L3N2Zz4K';
    
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
    
    //robot move

    Blockly.Blocks.robot_forward = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.ROBOT_FORWARD,
                args0: [
                    {
                        type: 'field_image',
                        src: forwardIconUrl,
                        width: 50,
                        height: 30
                    }
                        
                ],
                args1: [
                
                    {
                        type: 'input_value',
                        name: 'SPEED_L'
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED_R'
                    }
                ],
                colour: color4,
                extensions: ['shape_statement']
            });
        }
    };
        Blockly.Blocks.robot_back = {
            init: function () {
                this.jsonInit({
                    message0: '%1',
                    message1: Blockly.Msg.ROBOT_BACK,
                    args0: [
                        {
                            type: 'field_image',
                            src: backIconUrl,
                            width: 50,
                            height: 30
                        }
                            
                    ],
                    args1: [
                
                        {
                            type: 'input_value',
                            name: 'SPEED_L'
                        },
                        {
                            type: 'input_value',
                            name: 'SPEED_R'
                        }
                    ],
                    colour: color4,
                    extensions: ['shape_statement']
                });
            }
        };
    
        Blockly.Blocks.robot_left = {
            init: function () {
                this.jsonInit({
                    message0: '%1',
                    message1: Blockly.Msg.ROBOT_LEFT,
                    args0: [
                        {
                            type: 'field_image',
                            src: leftIconUrl,
                            width: 50,
                            height: 27
                        }
                            
                    ],
                    args1: [
                
                        {
                            type: 'input_value',
                            name: 'SPEED_L'
                        },
                        {
                            type: 'input_value',
                            name: 'SPEED_R'
                        }
                    ],
                    colour: color4,
                    extensions: ['shape_statement']
                });
            }
        };
    
        Blockly.Blocks.robot_right = {
            init: function () {
                this.jsonInit({
                    message0: '%1',
                    message1: Blockly.Msg.ROBOT_RIGHT,
                    args0: [
                        {
                            type: 'field_image',
                            src: rightIconUrl,
                            width: 50,
                            height: 27
                        }
                            
                    ],
                    args1: [
                
                        {
                            type: 'input_value',
                            name: 'SPEED_L'
                        },
                        {
                            type: 'input_value',
                            name: 'SPEED_R'
                        }
                    ],
                    colour: color4,
                    extensions: ['shape_statement']
                });
            }
        };
    
        Blockly.Blocks.robot_stop = {
            init: function () {
                this.jsonInit({
                    message0: '%1',
                    message1: Blockly.Msg.ROBOT_STOP,
                    args0: [
                        {
                            type: 'field_image',
                            src: stopIconUrl,
                            width: 50,
                            height: 30
                        }
                            
                    ],
                
                    colour: color4,
                    extensions: ['shape_statement']
                });
            }
        }; 

    return Blockly;
}

exports = addBlocks;

