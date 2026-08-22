Feature: Registro de formulario Novus Technology
 
  @declarativo
Scenario: Completar los datos en el formulario correctamente
  
    Given accedo a la web de registro de Novus Technology
    When Digito mis nombres 
    And apellidos
     And Selecciono los pasatiempos que me caracterizan
    And Selecciono al género que pertenezco
    And Digito mi Numero de Telefono
    And Digito mi Correo Electrónico
    And Selecciono Departamento de nacimiento
    And Selecciono Ciudad de nacimiento
    And Selecciono alguna opción de Comandos de Selenium
    And Cargo un documento
    And Presiono en botón Enviar

@outline
Scenario Outline: Completar los datos en el formulario correctamente
    Given accedo a la web de registro de Novus Technology
    When Digito mis "<nombres>"
    And apellidos "<apellidos>"
     And Selecciono los pasatiempos que me caracterizan
    And Selecciono al género que pertenezco
    And Digito mi Numero de Telefono "<telefono>"
    And Digito mi Correo Electrónico "<correo>"
    And Selecciono Departamento de nacimiento "<departamento>"
    And Selecciono Ciudad de nacimiento "<ciudad>"
    And Selecciono alguna opción de Comandos de Selenium "<comandos>"
    And Cargo un documento con el nombre "<documento>"
    And Presiono en botón Enviar
  Examples:
    | nombres | apellidos | telefono    | correo            | departamento  | ciudad    | comandos      | documento     |
    | Juan    | Perez     | 1234567890  | juan@example.com  | LIMA          | LIMA      | Wait Commands | firma.png      |
    | Jorge    | Perez     | 1234567890  | jorge@example.com  | LIMA          | LIMA      | Wait Commands | pantalla.png      |
