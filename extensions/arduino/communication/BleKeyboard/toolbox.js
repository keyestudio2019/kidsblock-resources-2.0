/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const BLEKEYBOARD_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEhElEQVR4nO2ba4hWVRSGH5VMIsqKILGChuyiVHSRyhwHuqn/pPohUxR2QaSCIsmKsCTKilLrh2WmWRTZRSKjjCI0TUmzzJQh0rGYLiOiWWaXUacvNqwDb2vOfGcuzHjOd/YL69d71p6917f3WmuvvQYiIiIiInKJY4AJwHRgPvAm8AHwFvAK8AhwPXA6NYjjgTuAtcBBoNJFaQHmAudTcJwMPAv8lbLIPcA64H3bFe8Bq4FfOjHKKuAKCoYjgPuAP2UhYScsB6YAp2bonwBcAywG9jmDvAOcQgFwGvCFTPwP4AlgWA/HOwq4E/hRxtwLTCLHGAf8KhN+vRcGSDPIbOCAjf0v8DA5xNXiC8IumNxHf+dStzuCM80VPrOJtQLnZHw7ALgIuBG4H5hnv+5UM+iQDP2TgK/FGKPIEW4FPgRGVPmmzqJIS0bY3G95xfgqYx0HvAu8BhxJgfKIOUCbW3C7hctNQDPwd4pRPgbOowYwEtghCwshdSEwERic8n04VjOB70QnGPAmCoxxFuoSL78EGN6NXCRko7vFILMoKFbJLxruDz3NS3R3nEEBMRlYBtT3cpwTgRWWl6Qdp4hawUBzpleakxxEyTDI6hGtLlTuAh40R1kKzM9IqEKhphSYlWGIZygRZndihEXmOyizMRaV0QgJ5pgRFpbZCFrbjIgoCEZYxqcylOJglJv75cDRXVUeYJWfs61o4kPbBuPzLmM7Cc2fyDdhram42VWga13CWqd5IwyXMnmZpN0Xmq/KwaQOl9ymhpiQgwkdLrk9GoJoiErWjthjbwh1JiGX+EiU3rYGjoQf7d4ipghXZy/iCRfeLs4SbqQryj7pdCcJFyrgDY5/Ufj1wJnChRziB+cHVHd6liG2pITVp0QpVI88fhbed7nUC/dGiu4K4UMbgOJY4UIV3GOq8C+n8CuFDz+Afz+NhiAaous74jdrz7nQ5GJ55a7YVh4t/ET3nnmPcEEeF64JuEy4eneOn3e6tzgfca1w4SV9qfCbgTHCN7gjO8ON/WgMn8Q8otLdhOpbYKPJV+4O8g/wpfDb3KCtwm20cKx5/WbhttiWT/jfne5PbuzvHa+NaoescSThtjrdnU53d5YhmumI50TpMccNdDfWcx0/XrjQPuixWvgbHDfMLdR30dwtfGgq8dgg/AWOC34whk9i+Ox6+GyiI+aKUuhk8dhZpXehwaXnHpq+X5fSbpRwB1IqStOEfzXj2Plms7FZhmi3xvAFJi+4hbYIt8D6FdQprXS8ntN9dj9IuMWuNfkbp6vpd9Jxq7zeU/a6sV8yx57wnzrdz2MeQcwjKt3JI9rspXqGSWgG3S5Ka4Tra1niJjzP8XrsQoviA8LNdM3sS53u8ixDbE1xOk+LUiP9h6HOWVa7hge/1lkjW8WeJxRjeptHNNJ/yHU9opGSGKI5o80nXI37Cz7F9v3Wd2Wk2Ot7kmJfIkSTu3S1VbkY9aX4xvUdjt/vDLWpyoXOXwZ3Cfe/RtjBplwpmbTav0118NL3ugysluWhbvSFR0REREQE/AdaW4ucWVWQYgAAAABJRU5ErkJggg==';
    return `
<category name="%{BKY_QH_BLEKEYBOARD_CATEGORY}" id="QH_BLEKEYBOARD_CATEGORY" colour="#FF3399" secondaryColour="#C71585" iconURI="${BLEKEYBOARD_ICO}">
    <block type="esp32_BleKeyboard_init">
        <value name="deviceName">
            <shadow type="text">
                <field name="TEXT">QDP_BleKeyboard</field>
            </shadow>
        </value>
        <value name="deviceManufacturer">
            <shadow type="text">
                <field name="TEXT">QDProbot</field>
            </shadow>
        </value>
    </block>
    <block type="esp32_BleKeyboard_isConnected" ></block>
    <block type="esp32_BleKeyboard_KeyValue" ></block>
     <block type="esp32_BleKeyboard_write_press" >
            <field name="model">0</field>
            <value name="KeyValue">
        <block type="QH_char">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">a</field>
            </shadow>
        </value>
    </block>
   </value>
 </block>
</category>`;
}

exports = addToolbox;
