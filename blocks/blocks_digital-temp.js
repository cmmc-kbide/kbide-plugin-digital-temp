Blockly.Blocks["ky_028_digital_temp_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY_028_DIGITAL_TEMP");
      this.appendDummyInput()
        .appendField("ANALOG PIN")
        .appendField(
          new Blockly.FieldTextInput("A0"),
          "KY_028_DIGITAL_TEMP_ANALOG_PIN"
        )
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_028_DIGITAL_TEMP_ANALOG_VALUE"),
          "KY_028_DIGITAL_TEMP_ANALOG_VALUE"
        );
      this.appendDummyInput()
        .appendField("DIGITAL PIN")
        .appendField(
          new Blockly.FieldTextInput("0"),
          "KY_028_DIGITAL_TEMP_DIGITAL_PIN"
        )
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_028_DIGITAL_TEMP_DIGITAL_VALUE"),
          "KY_028_DIGITAL_TEMP_DIGITAL_VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };