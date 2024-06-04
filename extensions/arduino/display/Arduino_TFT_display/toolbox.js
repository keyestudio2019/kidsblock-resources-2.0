/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    const IMG_TFT_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYzNjYwNTYxNDQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNjYyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiPjxwYXRoIGQ9Ik04NDggODY0SDE3NmMtMTcuNiAwLTMyIDE0LjQtMzIgMzJzMTQuNCAzMiAzMiAzMmg2NzJjMTcuNiAwIDMyLTE0LjQgMzItMzJzLTE0LjQtMzItMzItMzJ6TTYwOCAyNzYuOGwtMTkyIDExMmMtMTQuNCA5LjYtMjAuOCAyOC44LTExLjIgNDMuMiA4IDE2IDI4LjggMjAuOCA0My4yIDExLjJsMTkyLTExMmMxNC40LTkuNiAyMC44LTI4LjggMTEuMi00My4yLTgtMTYtMjcuMi0yMC44LTQzLjItMTEuMnpNODk2IDk2SDEyOGMtMzUuMiAwLTY0IDI4LjgtNjQgNjR2NTc2YzAgMzUuMiAyOC44IDY0IDY0IDY0aDc2OGMzNS4yIDAgNjQtMjguOCA2NC02NFYxNjBjMC0zNS4yLTI4LjgtNjQtNjQtNjR6IG0wIDYyNGMwIDkuNi02LjQgMTYtMTYgMTZIMTQ0Yy05LjYgMC0xNi02LjQtMTYtMTZWMTc2YzAtOS42IDYuNC0xNiAxNi0xNmg3MzZjOS42IDAgMTYgNi40IDE2IDE2djU0NHpNNTYwIDQ1Mi44bC0xOTIgMTEyYy0xNC40IDkuNi0yMC44IDI4LjgtMTEuMiA0My4yIDggMTYgMjguOCAyMC44IDQzLjIgMTEuMmwxOTItMTEyYzE0LjQtOS42IDIwLjgtMjguOCAxMS4yLTQzLjItOC0xNi0yNy4yLTIwLjgtNDMuMi0xMS4yeiIgcC1pZD0iMTA2NjMiIGZpbGw9IiM1YmE1YTUiPjwvcGF0aD48L3N2Zz4="
    return `
<category name="TFT"  id="Arduino_TFT_CATEGORY" colour="#FF7F50" secondaryColour="#FF6347" iconURI="${IMG_TFT_ICO}"> 
  <block type="Arduino_TFT_begin2">
    <field name="RST">3</field>
    <field name="CS">9</field>
    <field name="DC">10</field>
    <field name="TFT_tab">240, 320</field>
  </block>
  <block type="Arduino_TFT_begin1">
    <field name="RST">9</field>
    <field name="CS">8</field>
    <field name="DC">10</field>
    <field name="MOSI">11</field>
    <field name="SCLK">13</field>
  </block>
  
  <block type="Arduino_TFT_invertDisplay"></block>
  <block type="Arduino_TFT_backlight">
    <value name="brightness">
      <shadow type="math_number">
          <field name="NUM">255</field>
      </shadow>
    </value>   
  </block>
  <block type="Arduino_TFT_setRotation"></block>
  <block type="Arduino_TFT_set_cursor">
    <value name="set_cursor_x">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
    <value name="set_cursor_y">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
  </block>
  <block type="Arduino_TFT_qr_code_display">
    <value name="text">
        <shadow type="text">
            <field name="TEXT">test</field>
        </shadow>
    </value>
    <value name="X">
        <shadow type="math_number">
            <field name="NUM">6</field>
        </shadow>
    </value>
    <value name="Y">
        <shadow type="math_number">
            <field name="NUM">58</field>
        </shadow>
    </value>
    <value name="Zoom">
        <shadow type="math_number">
            <field name="NUM">3</field>
        </shadow>
    </value>
  </block>
  <block type="Arduino_TFT_setTextSize" ></block>
  <block type="color_rgb565" >
      <value name="color">
          <shadow type="colour_picker"/>
      </value>
  </block>
  <block type="Arduino_TFT_set_screen_color">
      <value name="set_text_color_data">
        <shadow type="color_rgb565">
          <value name="color">
              <shadow type="colour_picker"/>
          </value>
        </shadow>
      </value>
  </block>
  <block type="Arduino_TFT_set_text_background_color">
      <value name="set_text_color_data">
        <shadow type="color_rgb565">
          <value name="color">
              <shadow type="colour_picker"/>
          </value>
        </shadow>
      </value>
      <value name="set_text_color_background">
        <shadow type="color_rgb565">
          <value name="color">
              <shadow type="colour_picker"/>
          </value>
        </shadow>
      </value>
  </block>      
  <block type="Arduino_TFT_show_english">
      <value name="set_text_x">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
      <value name="set_text_y">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
      <value name="set_text_color">
        <shadow type="color_rgb565">
          <value name="color">
              <shadow type="colour_picker"/>
          </value>
        </shadow>
      </value>
      <value name="set_background_color">
        <shadow type="color_rgb565">
          <value name="color">
              <shadow type="colour_picker"/>
          </value>
        </shadow>
      </value>
      <value name="set_text_data">
        <shadow type="text">
          <field name="TEXT">hello</field>
        </shadow>
      </value>
  </block>
  
    <block type="Arduino_TFT_show_text">
        <value name="content">
          <shadow type="text">
            <field name="TEXT">hello</field>
          </shadow>
        </value>
    </block>
    <block type="Arduino_TFT_show_num">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
    </block>

    <block type="Fast_TFT_draw_pixel">
        <value name="st7735_draw_pixel_x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="Fast_TFT_draw_line">
        <value name="st7735_draw_pixel_start_x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_start_y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_end_x">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_end_y">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="Fast_TFT_draw_angle_line">
        <value name="st7735_draw_angle_line_x1">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="st7735_draw_angle_line_y1">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="st7735_draw_angle_line_length">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
        </value>
        <value name="st7735_draw_angle_line_angle">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_angle_line_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="Fast_TFT_draw_line1">
        <field name="st7735_draw_line1_type">drawFastHLine</field>
        <value name="st7735_draw_pixel_start_x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_start_y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_length">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_pixel_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="Fast_TFT_draw_rect_change">
        <value name="st7735_draw_rect_x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_width">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_hight">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="Fast_TFT_draw_Roundrect_change">
        <value name="st7735_draw_rect_x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_width">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_hight">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_radius">
          <shadow type="math_number">
            <field name="NUM">5</field>
          </shadow>
        </value>
        <value name="st7735_draw_rect_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="Fast_TFT_draw_circle">
        <value name="st7735_draw_circle_x">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_y">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_radius">
          <shadow type="math_number">
            <field name="NUM">63</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="Fast_TFT_draw_CircleHelper">
        <value name="st7735_draw_circle_x">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_y">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_radius">
          <shadow type="math_number">
            <field name="NUM">63</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_cornername">
          <shadow type="math_number">
            <field name="NUM">0x0</field>
          </shadow>
          <block type="Fast_TFT_draw_CircleHelper_data">
          </block>
        </value>
        <value name="st7735_draw_circle_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
    <block type="Fast_TFT_fill_CircleHelper">
        <field name="st7735_name">tft</field>
        <value name="st7735_draw_circle_x">
          <shadow type="math_number">
            <field name="NUM">20</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_y">
          <shadow type="math_number">
            <field name="NUM">20</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_radius">
          <shadow type="math_number">
            <field name="NUM">20</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_cornername">
          <shadow type="math_number">
            <field name="NUM">0x0</field>
          </shadow>
          <block type="Fast_TFT_oled_fill_CircleHelper_data">
          </block>
        </value>
        <value name="st7735_draw_circle_delta">
          <shadow type="math_number">
            <field name="NUM">20</field>
          </shadow>
        </value>
        <value name="st7735_draw_circle_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block>
  
    <block type="Fast_TFT_draw_triangle">
        <value name="st7735_draw_triangle_x1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_triangle_y1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_triangle_x2">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_triangle_y2">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="st7735_draw_triangle_x3">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_triangle_y3">
          <shadow type="math_number">
            <field name="NUM">127</field>
          </shadow>
        </value>
        <value name="st7735_draw_triangle_color">
          <shadow type="color_rgb565">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
          </shadow>
        </value>
    </block> 
    </category>
`;
}
exports = addToolbox;