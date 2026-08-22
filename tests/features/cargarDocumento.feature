Feature: Carga de documento



  Scenario: Cargar un documento
    Given accedo a la web de carga de documentos
    And doy click en examinar
    When elijo el archivo "jorge-paz.png" y selecciono el documento
    Then se carga el nombre del documento "jorge-paz.png" en el titulo
    And puedo dar click en cargar
    And se muestra el mensaje de archivo cargado "jorge-paz.png"
    And se muestra el nombre del documento "jorge-paz.png"

 @carga
  Scenario Outline: Cargar tres documentos
    Given accedo a la web de carga de documentos
    And doy click en examinar
    When elijo el archivo "<archivo>" y selecciono el documento
    Then se carga el nombre del documento "<archivo>" en el titulo
    And puedo dar click en cargar
    And se muestra el mensaje de archivo cargado "<archivo>"
    And se muestra el nombre del documento "<archivo>"

    Examples:
      | archivo       |  
      | firma.png |
      | pantalla.png |
      
