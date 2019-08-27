Blockly.JavaScript["ky_028_digital_temp_block"] = function(block) {
    var text_ky_028_digital_temp_analog_pin = block.getFieldValue(
      "KY_028_DIGITAL_TEMP_ANALOG_PIN"
    );
    var variable_ky_028_digital_temp_analog_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_028_DIGITAL_TEMP_ANALOG_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    var text_ky_028_digital_temp_digital_pin = block.getFieldValue(
      "KY_028_DIGITAL_TEMP_DIGITAL_PIN"
    );
    var variable_ky_028_digital_temp_digital_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_028_DIGITAL_TEMP_DIGITAL_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
  
  #VARIABLE
  int KY_028_DIGITAL_TEMP_DIGITAL_PIN = ${text_ky_028_digital_temp_digital_pin}; // KY-028 digital interface
  int KY_028_DIGITAL_TEMP_ANALOG_PIN = ${text_ky_028_digital_temp_analog_pin}; // KY-028 analog interface
  #END
  
  #SETUP
    pinMode(KY_028_DIGITAL_TEMP_DIGITAL_PIN, INPUT);
    pinMode(KY_028_DIGITAL_TEMP_ANALOG_PIN, OUTPUT);
    Serial.begin(9600);
  #END

  // Read the digital interface
    ${variable_ky_028_digital_temp_digital_value} = digitalRead(KY_028_DIGITAL_TEMP_DIGITAL_PIN); 
    // Read the analog interface
    ${variable_ky_028_digital_temp_analog_value} = analogRead(KY_028_DIGITAL_TEMP_ANALOG_PIN); 
    delay(100);
    `;
    return code;
  };