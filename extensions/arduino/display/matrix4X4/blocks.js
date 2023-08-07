/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';

      Blockly.Blocks.extend_matrix = {
        init: function() {
          this.jsonInit({
            message0: '%1',
            message1: Blockly.Msg.EXTEND_MATRIX,
            args0: [
                {
                    type: 'field_image',
                   // src: matrix_iic_IconUrl,
                    width: 50,
                    height: 27
                }
            ],
            args1: [
              {
                type: "field_vertical_separator"
              },
              {
                type: "input_value",
                name: "MATRIX_CUSTOM"
              },
            ],
            category: Blockly.Categories.pen,
            extensions: ["colours_pen","scratch_extension"],
            colour: color,
            extensions: ['shape_statement']
          });
        }
      };
    return Blockly;
}

exports = addBlocks;
