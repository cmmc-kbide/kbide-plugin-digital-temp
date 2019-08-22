Blockly.Blocks['ky_028_temp_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-028 TEMP");
    this.appendValueInput("KY_028_TEMP_ANALOG_PIN")
        .setCheck("Number")
        .appendField("ANALOG PIN");
    this.appendValueInput("KY_028_TEMP_DIGITAL_PIN")
        .setCheck("Number")
        .appendField("DIGITAL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};