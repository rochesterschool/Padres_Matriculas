dojo.declare("ActualizaDatos", wm.Page, {
"preferredDevice": "desktop",
start: function() {
/* var _isChecked=  this.hijoDeExalumnoEditor1.getDataValue();
if(_isChecked== true){
this.promocionEditor1.show();
}
if(_isChecked== false){
this.promocionEditor1.hide();
} */
},
a_getUsernameActualizaDatosSuccess: function(inSender, inDeprecated) {
var userName= this.a_getUsernameActualizaDatos.getData().dataValue;
console.log(userName);
this.a_getGrupoFamiliar.input.setValue("username", userName);
this.a_getGrupoFamiliar.update();
this.a_getRoleByUsernameSV.input.setValue("user", userName);
this.a_getRoleByUsernameSV.update();
},
/* a_getGrupoFamiliarSuccess: function(inSender, inDeprecated) {
try {
var json= this.a_getGrupoFamiliar.getItem(0);
var _familia= json.data.idgf;
var _persona= json.data.idp;
this.a_getUserGroup.input.setValue("idgrupo", _familia);
this.a_getUserGroup.update();
} catch(e) {
console.error('ERROR IN a_getGrupoFamiliarSuccess: ' + e);
}},*/
personaSelectChange: function(inSender, inDisplayValue, inDataValue) {
try {
var _persona= this.personaSelect.getDataValue();
if(_persona == undefined){
}
if(_persona > 0){
this.editPanel1.cancelEdit();
var _persona= this.personaSelect.getDataValue();
this.personaLiveVariable1.filter.setValue("idPersona", _persona);
this.personaLiveVariable1.update();
}
} catch(e) {
console.error('ERROR IN personaSelectChange: ' + e);
}},
personaLiveVariable1Success: function(inSender, inDeprecated) {
try {
this.personaDataGrid1.select(0);
} catch(e) {
console.error('ERROR IN personaLiveVariable1Success: ' + e);
}},
personaDataGrid1Selected: function(inSender, inIndex) {
try {
this.editPanel1.beginDataUpdate();
} catch(e) {
console.error('ERROR IN personaDataGrid1Selected: ' + e);
}},
boton_actualizarClick: function(inSender, inEvent) {
try {
this.editPanel1.saveData();
} catch(e) {
console.error('ERROR IN boton_actualizarClick: ' + e);
}},
personaLiveForm1UpdateData: function(inSender) {
try {
var _persona= this.personaSelect.getDataValue();
this.getUserByIdPersona.input.setValue("id", _persona);
this.getUserByIdPersona.update();
} catch(e) {
console.error('ERROR IN personaLiveForm1UpdateData: ' + e);
}},
getUserByIdPersonaSuccess: function(inSender, inDeprecated) {
try {
var _persona= this.personaSelect.getDataValue();
var _getterUsuario= this.getUserByIdPersona.getItem(0);
var _usuario= _getterUsuario.data.user;
this.returnValueIfExists.input.setValue("user", _usuario);
this.returnValueIfExists.update();
} catch(e) {
console.error('ERROR IN getUserByIdPersonaSuccess: ' + e);
}},
returnValueIfExistsSuccess: function(inSender, inDeprecated) {
try {
var _persona= this.personaSelect.getDataValue();
var _bool= 1;
var _fecha= new Date().getTime();
var _json= this.returnValueIfExists.getItem(0);
var rt= _json.data.retorno;
if(rt == 0){
//alert("inserta");
this.v_insertActualizaPersona.setValue("persona.idPersona", _persona);
this.v_insertActualizaPersona.setValue("actualizado", _bool);
this.v_insertActualizaPersona.setValue("fecha", _fecha);
this.insertVerificacionPersonaLiveForm.setDataSet(this.v_insertActualizaPersona);
this.insertVerificacionPersonaLiveForm.insertData();
}
if(rt == 1){
//alert("Actualiza");
this.a_updatePersona.input.setValue("idp", _persona);
this.a_updatePersona.input.setValue("pbool", _bool);
this.a_updatePersona.update();
}
} catch(e) {
console.error('ERROR IN returnValueIfExistsSuccess: ' + e);
}},
insertVerificacionPersonaLiveFormSuccess: function(inSender, inData) {
try {
//verificacion del registro en ActualizacionGrupoFamiliar
var _persona= this.personaSelect.getDataValue();
this.getFamiliarGrupebyIdPersona.input.setValue("idp", _persona);
this.getFamiliarGrupebyIdPersona.update();
alert("Mensaje del sistema:\n\nLa actualización se ha guardado exitosamente. Por favor cambie el integrante del grupo familiar y realice el proceso nuevamente.");
} catch(e) {
console.error('ERROR IN insertVerificacionPersonaLiveFormSuccess: ' + e);
}},
getFamiliarGrupebyIdPersonaSuccess: function(inSender, inDeprecated) {
try {
var _json = this.getFamiliarGrupebyIdPersona.getItem(0);
var _grupoFamiliar= _json.data.idgrupo;
this.returnValueIfGrupoFmailiarExists.input.setValue("idg", _grupoFamiliar);
this.returnValueIfGrupoFmailiarExists.update();
} catch(e) {
console.error('ERROR IN getFamiliarGrupebyIdPersonaSuccess: ' + e);
}
},
returnValueIfGrupoFmailiarExistsSuccess: function(inSender, inDeprecated) {
try {
var _json= this.returnValueIfGrupoFmailiarExists.getItem(0);
var _valor= _json.data.actualizado;
if(_valor == 0){
//alert("Creemos que aun quedan personas por actualizar!");
this.middlePanel.hide();
this.space1.hide();
this.instructivo.show();
this.headPanel.show();
this.contentPanel.show();
this.footerPanel.show();
}
if(_valor == 1){
this.headPanel.hide();
this.instructivo.hide();
this.contentPanel.hide();
this.footerPanel.hide();
this.space1.show();
this.middlePanel.show();
/* var _string= this.personaSelect.getDisplayValue();
var _codigo= _string.substring(0,5);
console.log(_codigo);
if(_codigo >= 13000 && _codigo <=13999){
//alert("Aparecera una panel con la opcion de CONTINUAR! Bienvenido");
/* this.headPanel.hide();
this.instructivo.hide();
this.contentPanel.hide();
this.footerPanel.hide();
this.space1.show();
this.middlePanel.show();
}
if(_codigo < 13000 || _codigo > 13999){
this.promocionSv.input.setValue("codigo", _codigo);
this.promocionSv.update();
}   */
}
} catch(e) {
console.error('ERROR IN returnValueIfGrupoFmailiarExistsSuccess: ' + e);
}},
a_updatePersonaSuccess: function(inSender, inDeprecated) {
try {
this.insertVerificacionPersonaLiveFormSuccess();
} catch(e) {
console.error('ERROR IN a_updatePersonaSuccess: ' + e);
}},
boton_btClick: function(inSender, inEvent) {
try {
main.enfermeria_butt.show();
} catch(e) {
console.error('ERROR IN boton_continuarClick: ' + e);
}},
a_getRoleByUsernameSVSuccess: function(inSender, inDeprecated) {
try {
var _json= this.a_getRoleByUsernameSV.getItem(0);
var _idtipo= _json.data.idtipo;
if(_idtipo == 1){
this.headPanel.hide();
this.boton_actualizar.hide();
this.middlePanel.hide();
this.contentPanel.hide();
this.personaLivePanel1.hide();
this.nonAcepted_panel.show();
}if(_idtipo > 1){
this.middlePanel.hide();
this.nonAcepted_panel.hide();
this.headPanel.show();
this.personaLivePanel1.show();
this.boton_actualizar.show();
this.contentPanel.show();
}
} catch(e) {
console.error('ERROR IN a_getRoleByUsernameSVSuccess: ' + e);
}
},
boton_continuar1Click: function(inSender, inEvent) {
try {
this.salirAprendoz.update();
app.pageDialog.dismiss("ActualizaDatos");
} catch(e) {
console.error('ERROR IN boton_continuar1Click: ' + e);
}
},
personaLiveForm1BeginUpdate: function(inSender) {
try {
var _tipo = this.personaDataGrid1.selectedItem.getData().tipoPersona.idTipoPersona;
if(_tipo==1){
//readonly
this.apellido1Editor1.setReadonly(true);
this.apellido2Editor1.setReadonly(true);
this.nombre1Editor1.setReadonly(true);
this.nombre2Editor1.setReadonly(true);
//ocultar datos laborales
this.panel4.hide();
this.celularEditor1.hide();
this.cargoEditor1.hide();
this.empresaEditor1.hide();
this.profesionEditor1.hide();
this.municipioEditor1.hide();
this.departamentoEditor1.hide();
this.direccionOficinaEditor1.hide();
this.telefonoOficinaEditor1.hide();
this.hijoDeExalumnoEditor1.hide();
this.parentescoEditor1.hide();
this.nivelAcademicoEditor1.hide();
this.panel5.show();
this.saludPrepagadaEditor1.show();
this.numeroContratoSaludEditor1.show();
this.clinicaEmergenciaEditor1.show();
this.tipoSangreEditor1.show();
this.gradoIngresoEditor1.show();
this.colegioAnteriorEditor1.show();
this.epsEditor1.show();
this.viveConEditor1.show();
this.fechaIngresoEditor1.show();
//valores por defecto
//this.gradoIngresoEditor1.setDisplayValue("PREJARDÍN");
this.nacionalidadEditor1.setDisplayValue("colombiano");
// this.fechaIngresoEditor1.setDataValue(new Date("2013-08-14"));
//datos laborales ocultos
this.celularEditor1.setDataValue(" ");
this.cargoEditor1.setDataValue(" ");
this.empresaEditor1.setDataValue(" ");
this.profesionEditor1.setDataValue(" ");
this.municipioEditor1.setDataValue(" ");
this.departamentoEditor1.setDataValue(" ");
this.direccionOficinaEditor1.setDataValue(" ");
this.telefonoOficinaEditor1.setDataValue(" ");
}if(_tipo > 1) {
//readonly
this.apellido1Editor1.setReadonly(true);
this.apellido2Editor1.setReadonly(true);
this.nombre1Editor1.setReadonly(true);
this.nombre2Editor1.setReadonly(true);
/****/
this.panel4.show();
this.celularEditor1.show();
this.cargoEditor1.show();
this.empresaEditor1.show();
this.profesionEditor1.show();
this.municipioEditor1.show();
this.departamentoEditor1.show();
this.direccionOficinaEditor1.show();
this.telefonoOficinaEditor1.show();
this.hijoDeExalumnoEditor1.show();
this.parentescoEditor1.show();
this.nivelAcademicoEditor1.show();
//ocultando informacion hospitalaria
this.panel5.hide();
this.saludPrepagadaEditor1.hide();
this.numeroContratoSaludEditor1.hide();
this.clinicaEmergenciaEditor1.hide();
this.tipoSangreEditor1.hide();
this.gradoIngresoEditor1.hide();
this.colegioAnteriorEditor1.hide();
this.epsEditor1.hide();
this.viveConEditor1.hide();
this.fechaIngresoEditor1.hide();
//valores por defecto
this.nacionalidadEditor1.setDisplayValue("colombiano");
this.fechaIngresoEditor1.setDataValue(new Date("2013-08-14"));
this.saludPrepagadaEditor1.setDataValue(" ");
this.numeroContratoSaludEditor1.setDataValue(" ");
this.clinicaEmergenciaEditor1.setDataValue(" ");
this.tipoSangreEditor1.setDisplayValue("NO APLICA");
this.gradoIngresoEditor1.setDataValue(" ");
this.colegioAnteriorEditor1.setDataValue(" ");
this.viveConEditor1.setDisplayValue("NO APLICA");
//this.fechaIngresoEditor1.setDataValue(new Date());
}
} catch(e) {
console.error('ERROR IN personaLiveForm1BeginUpdate: ' + e);
}
},
boton_continuarClick: function(inSender, inEvent) {
try {
/*botones*/
main.actualizacion_butt.hide();
main.enfermeria_butt.hide();
main.servicios_butt.hide();
main.responsable_butt.hide();
main.documentos_butt.hide();
main.pago_butt.hide();
main.preparacion_butt.hide();
main.enfermeria_butt.show();
/*paneles*/
main.panel_servicios.hide();
main.reponsable_pagos.hide();
main.impresion_documentos.hide();
main.pagos.hide();
main.page_ActualizaDatos.hide();
main.top_banner_servicios.hide();
main.top_banner.show();
main.panel_selector_principal.show();
main.header_message.show();
main.ficha_medica.show();
} catch(e) {
console.error('ERROR IN boton_continuarClick: ' + e);
}
},
roundedButton1Click: function(inSender, inEvent) {
try {
this.promocionEditor1.show();
} catch(e) {
console.error('ERROR IN roundedButton1Click: ' + e);
}
},
hijoDeExalumnoEditor1Change: function(inSender, inDisplayValue, inDataValue) {
try {
var _isChecked=  this.hijoDeExalumnoEditor1.getDataValue();
if(_isChecked== true){
this.promocionEditor1.show();
}
if(_isChecked== false){
this.promocionEditor1.hide();
}
} catch(e) {
console.error('ERROR IN hijoDeExalumnoEditor1Change: ' + e);
}},
paisLookup1Change: function(inSender, inDisplayValue, inDataValue) {
try {
var pais= this.paisLookup1.getDataValue().idPais;
this.ls_departamentos.filter.setValue("pais.idPais", pais);
this.ls_departamentos.update();
} catch(e) {
console.error('ERROR IN paisLookup1Change: ' + e);
}},
nacionalidadEditor1Change: function(inSender, inDisplayValue, inDataValue) {
try {
var tiponacionalidad= this.nacionalidadEditor1.getDataValue();
var pais= this.paisLookup1.getDataValue().idPais;
if(tiponacionalidad == "colombiano"){
this.ls_departamentos.filter.setValue("pais.idPais", pais);
this.ls_departamentos.update();
this.departamentoEditor1.setDisplayValue("Bogotá D.C");
this.lugarNacimientoMunicipioEditor1.setDataValue("Bogotá D.C");
this.paisDomicilioEditor1.setDataValue("Colombia");
this.departamentoEditor1.setDataValue("Bogotá D.C");
this.municipioEditor1.setDataValue("Bogotá D.C");
}
} catch(e) {
console.error('ERROR IN nacionalidadEditor1Change: ' + e);
}},
lugarExpedicionDepartamentoEditor1Change: function(inSender, inDisplayValue, inDataValue) {
try {
var _depto= this.lugarExpedicionDepartamentoEditor1.getDataValue();
if(_depto == "Extranjero"){
this.lugarExpedicionMunicipioEditor1.setCaption("Lugar expedición");
}else{this.lugarExpedicionMunicipioEditor1.setCaption("Ciudad de expedición");}
if(_depto == "Bogotá D.C"){
this.lugarExpedicionMunicipioEditor1.setDataValue("Bogotá D.C");
}
} catch(e) {
console.error('ERROR IN lugarExpedicionDepartamentoEditor1Change: ' + e);
}},
promocionSvSuccess: function(inSender, inDeprecated) {
try {
// debugger;
// var _json= this.promocionSv.getItem(0);
// var _academica= _json.data.academico;
// var _financiera= _json.data.financiera;
// if(_academica == false && _financiera == true ){
//   alert("Mensaje informativo:\n\nAprendoz ha encontrado que el estudiante esta pendiente Académicamente.\n\nPor favor comuníquese con Coordinador de Grupo.");
// }
// if(_financiera == false && _academica == true ){
//   alert("Mensaje informativo:\n\nAprendoz ha encontrado que el estudiante esta pendiente Financieramente.\n\nPor favor comuníquese con Giovanny Renteria al PBX 7496000 Ext 4103");
// }
// if(_academica == false && _financiera == false){
//   alert("Mensaje informativo:\n\nAprendoz ha encontrado que el estudiante esta pendiente Financieramente y Académicamente.\n\n");
// }
// if(_academica == true && _financiera == true){
//  this.headPanel.hide();
//  this.instructivo.hide();
//  this.contentPanel.hide();
//  this.footerPanel.hide();
//  this.space1.show();
//  this.middlePanel.show();
// }
} catch(e) {
console.error('ERROR IN promocionSvSuccess: ' + e);
}
},
_end: 0
});

ActualizaDatos.widgets = {
serviceVariable1: ["wm.ServiceVariable", {"operation":"findAll","service":"ActualizaDatos"}, {}, {
input: ["wm.ServiceInput", {"type":"findAllInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Id_persona.dataValue","targetProperty":"id"}, {}]
}]
}]
}],
a_getUsernameActualizaDatos: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {"onSuccess":"a_getUsernameActualizaDatosSuccess"}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
personaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.personaLiveView1","maxResults":1,"startUpdate":false,"type":"com.aprendoz_desarrollo.data.Persona"}, {"onSuccess":"personaLiveVariable1Success"}],
a_getGrupoFamiliar: ["wm.ServiceVariable", {"operation":"getIdPersonabyUser","service":"aprendoz_desarrollo"}, {"onSuccess":"a_getGrupoFamiliarSuccess"}, {
input: ["wm.ServiceInput", {"type":"getIdPersonabyUserInputs"}, {}]
}],
a_getUserGroup: ["wm.ServiceVariable", {"operation":"getGrupoFamiliarbyUser","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"getGrupoFamiliarbyUserInputs"}, {}]
}],
returnValueIfExists: ["wm.ServiceVariable", {"operation":"returExitsValue","service":"aprendoz_desarrollo"}, {"onSuccess":"returnValueIfExistsSuccess"}, {
input: ["wm.ServiceInput", {"type":"returExitsValueInputs"}, {}]
}],
v_insertActualizaPersona: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.ActualizacionDatosPersona"}, {}],
getUserByIdPersona: ["wm.ServiceVariable", {"operation":"getUserbyIdPersona","service":"aprendoz_desarrollo"}, {"onSuccess":"getUserByIdPersonaSuccess"}, {
input: ["wm.ServiceInput", {"type":"getUserbyIdPersonaInputs"}, {}]
}],
v_updateActualizaPersona: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.ActualizacionDatosPersona"}, {}],
a_updatePersona: ["wm.ServiceVariable", {"operation":"updateDatosPersona","service":"aprendoz_desarrollo"}, {"onSuccess":"a_updatePersonaSuccess"}, {
input: ["wm.ServiceInput", {"type":"updateDatosPersonaInputs"}, {}]
}],
getFamiliarGrupebyIdPersona: ["wm.ServiceVariable", {"operation":"getGrupoFamiliarbyIdPersona","service":"aprendoz_desarrollo"}, {"onSuccess":"getFamiliarGrupebyIdPersonaSuccess"}, {
input: ["wm.ServiceInput", {"type":"getGrupoFamiliarbyIdPersonaInputs"}, {}]
}],
returnValueIfGrupoFmailiarExists: ["wm.ServiceVariable", {"operation":"returnExistsValueGrupoFamiliar","service":"aprendoz_desarrollo"}, {"onSuccess":"returnValueIfGrupoFmailiarExistsSuccess"}, {
input: ["wm.ServiceInput", {"type":"returnExistsValueGrupoFamiliarInputs"}, {}]
}],
ls_paises: ["wm.ServiceVariable", {"operation":"hql_ls_pais","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"hql_ls_paisInputs"}, {}]
}],
ls_hql_grados: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"hq_ls_grado","service":"aprendoz_desarrollo","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"hq_ls_gradoInputs"}, {}]
}],
a_ls_paises: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Pais","startUpdate":false,"type":"com.aprendoz_desarrollo.data.Pais"}, {}],
ls_tipo_identificacion: ["wm.Variable", {"isList":true,"json":"[\n{name: \"Numero Unico Identificación Personal\", dataValue: \"N.U.I.P\"},\n{name: \"Tarjeta Identidad\", dataValue: \"T.I\"},\n{name: \"Cédula Ciudadanía\", dataValue: \"C.C\"},\n{name: \"Cédula Extranjería\", dataValue: \"C.E\"},\n{name: \"Pasaporte\", dataValue: \"P.S\"}\n]","type":"EntryData"}, {}],
a_getRoleByUsernameSV: ["wm.ServiceVariable", {"operation":"_typeUserByUsername","service":"aprendoz_desarrollo"}, {"onSuccess":"a_getRoleByUsernameSVSuccess"}, {
input: ["wm.ServiceInput", {"type":"_typeUserByUsernameInputs"}, {}]
}],
salirAprendoz: ["wm.ServiceVariable", {"operation":"logout","service":"securityService"}, {"onResult":"goto_salirAprendoz"}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
goto_salirAprendoz: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Login\"","targetProperty":"pageName"}, {}]
}]
}]
}],
ls_eps: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.TipoEps","startUpdate":false,"type":"com.aprendoz_desarrollo.data.TipoEps"}, {}],
ls_nacionalidades: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Nacionalidades","orderBy":"asc: nacionalidad","startUpdate":false,"type":"com.aprendoz_desarrollo.data.Nacionalidades"}, {}],
ls_departamentos: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.EstadoDepartamento","orderBy":"asc: estado","startUpdate":false,"type":"com.aprendoz_desarrollo.data.EstadoDepartamento"}, {}],
promocionSv: ["wm.ServiceVariable", {"operation":"_hqlPromociones","service":"aprendoz_desarrollo"}, {"onSuccess":"promocionSvSuccess"}, {
input: ["wm.ServiceInput", {"type":"_hqlPromocionesInputs"}, {}]
}],
_______________________________________: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
Id_persona: ["wm.TextEditor", {"caption":"Id Persona","padding":"2","showing":false,"width":"263px"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
button1: ["wm.Button", {"caption":"Click me","margin":"4","showing":false,"width":"264px"}, {"onclick":"serviceVariable1"}],
gui_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
center_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
userGroupSelector: ["wm.SelectMenu", {"caption":undefined,"dataType":"com.aprendoz_desarrollo.data.output.GetGrupoFamiliarbyUserRtnType","dataValue":undefined,"desktopHeight":"32px","displayField":"user","displayValue":"","height":"32px","placeHolder":"Seleccion una persona"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"a_getUserGroup","targetProperty":"dataSet"}, {}]
}]
}],
personaLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
middlePanel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","lock":true,"padding":"10","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
layers2: ["wm.Layers", {}, {}, {
layer2: ["wm.Layer", {"borderColor":"","caption":"layer2","horizontalAlign":"center","verticalAlign":"top"}, {}, {
message: ["wm.Label", {"align":"center","caption":"PROCESO EXITOSO <br/><br/><br/>","height":"95px","padding":"4","singleLine":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
boton_continuar: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White"]},"borderColor":"#1c74b3","caption":"OPRIMA AQUÍ PARA CONTINUAR","margin":"4","width":"250px"}, {"onclick":"boton_continuarClick"}]
}]
}]
}],
contentPanel: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
personaDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"height":"122px"}, {"onSelected":"personaDataGrid1Selected"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"personaLiveVariable1","targetProperty":"dataSet"}, {}]
}],
idPersona2: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Persona","display":"Number","field":"idPersona"}, {}, {
format1: ["wm.NumberFormatter", {}, {}]
}],
nombreLdap2: ["wm.DataGridColumn", {"caption":"NombreLdap","columnWidth":"100%","field":"nombreLdap","index":1}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
sexo2: ["wm.DataGridColumn", {"caption":"Grupo","columnWidth":"100%","field":"grupoFamiliar.grupoFamiliar","index":32}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
column1: ["wm.DataGridColumn", {"caption":"tipoPersona.idTipoPersona","field":"tipoPersona.idTipoPersona","index":3}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}]
}],
panel10: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"middle","width":"100%"}, {}, {
picture3: ["wm.Picture", {"aspect":"h","height":"25px","source":"resources/images/buttons/number_2.png","width":"25px"}, {}],
label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Completa el siguiente formulario. Los campos con (<font color=\"red\">*</font>) son obligatorios","height":"26px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
panel1: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
personaLiveForm1: ["wm.LiveForm", {"autoScroll":true,"height":"850px","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeginUpdate":"personaLiveForm1BeginUpdate","onSuccess":"personaLiveVariable1","onUpdateData":"personaLiveForm1UpdateData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"personaDataGrid1.selectedItem","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"grupoFamiliarRelatedEditor1.dataOutput","targetProperty":"dataOutput.grupoFamiliar"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"tipoPersonaRelatedEditor1.dataOutput","targetProperty":"dataOutput.tipoPersona"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"relatedEditor1.dataOutput","targetProperty":"dataOutput.pais"}, {}]
}],
idPersonaEditor1: ["wm.Editor", {"caption":"Identificador","display":"Number","formField":"idPersona","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._NumberEditor", {}, {}]
}],
nombreLdapEditor1: ["wm.Editor", {"caption":"NombreLdap","formField":"nombreLdap","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
claveEditor1: ["wm.Editor", {"caption":"Clave","formField":"clave","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
codigoEditor1: ["wm.Editor", {"caption":"Codigo","formField":"codigo","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
activoRetiradoEditor1: ["wm.Editor", {"caption":"ActivoRetirado","display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"activoRetirado","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
}],
generalInfo_panel: ["wm.Panel", {"height":"90px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
generalInfo_left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
apellido1Editor1: ["wm.Editor", {"caption":"1er Apellido","formField":"apellido1","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}],
nombre1Editor1: ["wm.Editor", {"caption":"1er Nombre","formField":"nombre1","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}],
emailEditor1: ["wm.Editor", {"caption":"Correo electrónico","formField":"email","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}]
}],
generalInfo_right: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
apellido2Editor1: ["wm.Editor", {"caption":"2do Apellido","formField":"apellido2","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}],
nombre2Editor1: ["wm.Editor", {"caption":"2do Nombre","formField":"nombre2","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}]
}]
}],
panel_encabezado_identidad: ["wm.Panel", {"_classes":{"domNode":["encabezados"]},"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
text_identidad: ["wm.Label", {"caption":"INFORMACIÓN DEL DOCUMENTO DE IDENTIDAD, GÉNERO Y DATOS DE NACIMIENTO","height":"32px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
identidad_panel: ["wm.Panel", {"height":"190px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
identidad_left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
tipoDocumentoEditor1: ["wm.Editor", {"caption":"Tipo Documento","display":"Select","formField":"tipoDocumento","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"dataValue","displayField":"name","required":true}, {}, {
optionsVar: ["wm.Variable", {"type":"EntryData"}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"ls_tipo_identificacion","targetProperty":"dataSet"}, {}]
}]
}]
}],
lugarExpedicionDepartamentoEditor1: ["wm.Editor", {"caption":"Departamento de expedición","display":"Select","formField":"lugarExpedicionDepartamento","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {"onchange":"lugarExpedicionDepartamentoEditor1Change"}, {
editor: ["wm._SelectEditor", {"dataField":"dataValue","displayField":"dataValue","options":"Amazonas, Antioquia, Arauca, Atlantico, Bolivar, Boyaca, Caldas, Caqueta, Casanare, Cauca, Cesar, Choco, Cordoba, Cundinamarca, Bogotá D.C, Extranjero, Guainia, Guaviare, Huila, La Guajira, Magdalena, Meta, Narino, Norte de Santander, Putumayo, Quindio, Risaralda, San Andres y Providencia, Santander, Sucre, Tolima, Valle del Cauca, Vaupes, Vichada, Mayotte (General)"}, {}, {
optionsVar: ["wm.Variable", {"isList":true,"type":"StringData"}, {}]
}]
}],
sexoEditor1: ["wm.Editor", {"caption":"Género","display":"Select","formField":"sexo","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"dataValue","displayField":"dataValue","options":"Femenino, Masculino"}, {}, {
optionsVar: ["wm.Variable", {"isList":true,"type":"StringData"}, {}]
}]
}],
nacionalidadEditor1: ["wm.Editor", {"caption":"Nacionalidad","display":"Select","formField":"nacionalidad","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {"onchange":"nacionalidadEditor1Change"}, {
editor: ["wm._SelectEditor", {"dataField":"nacionalidad","displayField":"nacionalidad","required":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"ls_nacionalidades","targetProperty":"dataSet"}, {}]
}]
}]
}],
lugarNacimientoDepartamentoEditor1: ["wm.Editor", {"caption":"Departamento nacimiento","display":"Select","formField":"lugarNacimientoDepartamento","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"estado","displayField":"estado"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"ls_departamentos","targetProperty":"dataSet"}, {}]
}]
}]
}],
fechaNacimientoEditor1: ["wm.Editor", {"caption":"Fecha de nacimiento","display":"Date","formField":"fechaNacimiento","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._DateEditor", {"required":true}, {}]
}],
promocion: ["wm.Text", {"border":"0","caption":"Promocion","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"promocion","height":"26px","readonly":true,"width":"100%"}, {}]
}],
identidad_right: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
noDocumentoEditor1: ["wm.Editor", {"caption":"No. Documento","display":"Number","formField":"noDocumento","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._NumberEditor", {"invalidMessage":"Por favor digitar únicamente el número sin puntos ni comas."}, {}]
}],
lugarExpedicionMunicipioEditor1: ["wm.Editor", {"caption":"Ciudad de expedición","formField":"lugarExpedicionMunicipio","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}],
religionEditor1: ["wm.Editor", {"caption":"Religión","formField":"religion","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
relatedEditor1: ["wm.RelatedEditor", {"fitToContentHeight":true,"formField":"pais","horizontalAlign":"left","lock":true,"verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"personaDataGrid1.selectedItem.pais","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"paisLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
}],
paisLookup1: ["wm.Editor", {"caption":"País de nacimiento","display":"Lookup","formField":"","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {"onchange":"paisLookup1Change"}, {
editor: ["wm._LookupEditor", {"autoDataSet":false,"displayField":"pais","startUpdate":false}, {}]
}]
}],
lugarNacimientoMunicipioEditor1: ["wm.Editor", {"caption":"Ciudad de nacimiento","formField":"lugarNacimientoMunicipio","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}],
hijoDeExalumnoEditor1: ["wm.Editor", {"caption":"Ex alumno","display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"hijoDeExalumno","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {"onchange":"hijoDeExalumnoEditor1Change"}, {
editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
}]
}]
}],
panel_encabezado_residencia: ["wm.Panel", {"_classes":{"domNode":["encabezados"]},"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
texto_residencia: ["wm.Label", {"caption":"INFORMACIÓN RESIDENCIA","height":"32px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
residencia_panel: ["wm.Panel", {"height":"135px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
residencia_left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
direccionResidenciaEditor1: ["wm.Editor", {"caption":"Dirección de residencia","formField":"direccionResidencia","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}],
paisDomicilioEditor1: ["wm.Editor", {"caption":"País de residencia","formField":"paisDomicilio","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
municipioEditor1: ["wm.Editor", {"caption":"Ciudad residencia","formField":"municipio","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}],
telefono2Editor1: ["wm.Editor", {"caption":"Celular","formField":"telefono2","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
textEditor1: ["wm.TextEditor", {"caption":"Código Postal","display":"Number","formField":"codigoPostal","padding":"2","readonly":true,"styles":{},"width":"150%"}, {}, {
editor: ["wm._NumberEditor", {}, {}]
}]
}],
residencia_right: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
barrioEditor1: ["wm.Editor", {"caption":"Barrio","formField":"barrio","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}],
departamentoEditor1: ["wm.Editor", {"caption":"Departamento residencia","formField":"departamento","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}],
telefonoEditor1: ["wm.Editor", {"caption":"Teléfono","formField":"telefono","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}],
viveConEditor1: ["wm.Editor", {"caption":"Vive con","display":"Select","formField":"viveCon","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"dataValue","displayField":"dataValue","options":"MADRE, PADRE, ACUDIENTE, AMBOS PADRES, NO APLICA","required":true}, {}, {
optionsVar: ["wm.Variable", {"isList":true,"type":"StringData"}, {}]
}]
}]
}]
}],
panel_encabezado_laboral: ["wm.Panel", {"_classes":{"domNode":["encabezados"]},"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
texto_laboral: ["wm.Label", {"caption":"INFORMACIÓN LABORAL","height":"32px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
laboral_panel: ["wm.Panel", {"height":"100px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
laboral_left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
celularEditor1: ["wm.Editor", {"caption":"Celular laboral","formField":"celular","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
empresaEditor1: ["wm.Editor", {"caption":"Empresa","formField":"empresa","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}],
direccionOficinaEditor1: ["wm.Editor", {"caption":"Dirección de la oficina","formField":"direccionOficina","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}]
}],
laboral_right: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
cargoEditor1: ["wm.Editor", {"caption":"Cargo","formField":"cargo","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}],
profesionEditor1: ["wm.Editor", {"caption":"Profesión","formField":"profesion","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}],
telefonoOficinaEditor1: ["wm.Editor", {"caption":"Telefono de oficina","formField":"telefonoOficina","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}]
}]
}],
panel_encabezado_medica: ["wm.Panel", {"_classes":{"domNode":["encabezados"]},"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
texto_medica: ["wm.Label", {"caption":"INFORMACIÓN MÉDICA","height":"32px","padding":"4","styles":{},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
panel_medica: ["wm.Panel", {"height":"90px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
medica_left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
epsEditor1: ["wm.Editor", {"caption":"E.P.S","display":"Select","formField":"eps","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"eps","displayField":"eps"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"ls_eps","targetProperty":"dataSet"}, {}]
}]
}]
}],
numeroContratoSaludEditor1: ["wm.Editor", {"caption":"No. contrato salud prepagada","formField":"numeroContratoSalud","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
clinicaEmergenciaEditor1: ["wm.Editor", {"caption":"Clínica de emergencia","formField":"clinicaEmergencia","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}]
}],
medica_right: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
saludPrepagadaEditor1: ["wm.Editor", {"caption":"Salud prepagada","formField":"saludPrepagada","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
tipoSangreEditor1: ["wm.Editor", {"caption":"Tipo de sangre (RH)","display":"Select","formField":"tipoSangre","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"dataValue","displayField":"dataValue","options":"A+, A-, AB+, AB-, B+, B-, O+, O-, NO APLICA","required":true}, {}, {
optionsVar: ["wm.Variable", {"isList":true,"type":"StringData"}, {}]
}]
}]
}]
}],
panel_encabezado_educativa: ["wm.Panel", {"_classes":{"domNode":["encabezados"]},"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
texto_educativa: ["wm.Label", {"caption":"INFORMACIÓN EDUCATIVA","height":"32px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
panel_educativa: ["wm.Panel", {"height":"90px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
educativa_left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
gradoIngresoEditor1: ["wm.Editor", {"caption":"Grado de ingreso","display":"Select","formField":"gradoIngreso","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"grado","displayField":"grado","startUpdate":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"ls_hql_grados","targetProperty":"dataSet"}, {}]
}]
}]
}],
colegioAnteriorEditor1: ["wm.Editor", {"caption":"Colegio o Jardín anterior","formField":"colegioAnterior","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {"required":true}, {}]
}],
cursoIngreso: ["wm.SelectMenu", {"caption":"Curso ingreso","captionSize":"140px","desktopHeight":"26px","formField":"cursoIngreso","height":"26px","readonly":true,"width":"100%"}, {}]
}],
educativa_right: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
fechaIngresoEditor1: ["wm.Editor", {"caption":"Fecha de ingreso","display":"Date","formField":"fechaIngreso","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._DateEditor", {"required":true}, {}]
}],
parentescoEditor1: ["wm.Editor", {"caption":"Parentesco","display":"Select","formField":"parentesco","height":"26px","padding":"2","readonly":true,"styles":{},"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"dataValue","displayField":"dataValue","options":"Padre, Madre, Hermano(a), Abuelo(a), Tio(a), Otro "}, {}, {
optionsVar: ["wm.Variable", {"isList":true,"type":"StringData"}, {}]
}]
}],
fechaIngreso: ["wm.Date", {"border":"0","caption":"Fecha ingreso","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"fechaIngreso","height":"26px","readonly":true,"width":"100%"}, {}]
}]
}],
comentarioRetiroEditor1: ["wm.Editor", {"caption":"ComentarioRetiro","formField":"comentarioRetiro","height":"26px","padding":"2","readonly":true,"showing":false,"styles":{},"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
nombrePadreExalumnoEditor1: ["wm.Editor", {"caption":"Nombre del ex-alumno","formField":"nombrePadreExalumno","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
codigoFamiliaEditor1: ["wm.Editor", {"caption":"CodigoFamilia","formField":"codigoFamilia","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
rutaMEditor1: ["wm.Editor", {"caption":"RutaM","formField":"rutaM","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
rutaTEditor1: ["wm.Editor", {"caption":"RutaT","formField":"rutaT","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
tomaAlmuerzoEditor1: ["wm.Editor", {"caption":"TomaAlmuerzo","display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"tomaAlmuerzo","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
}],
tomaMediasNuevesEditor1: ["wm.Editor", {"caption":"TomaMediasNueves","display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"tomaMediasNueves","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
}],
tomaSeguroAccidentesEditor1: ["wm.Editor", {"caption":"TomaSeguroAccidentes","display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"tomaSeguroAccidentes","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
}],
noPlaquetaEditor1: ["wm.Editor", {"caption":"NoPlaqueta","formField":"noPlaqueta","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
matriculadoEditor1: ["wm.Editor", {"caption":"Matriculado","display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"matriculado","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
}],
inscAlumCursoIdInscAlumCursoEditor1: ["wm.Editor", {"caption":"InscAlumCursoIdInscAlumCurso","display":"Number","formField":"inscAlumCursoIdInscAlumCurso","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._NumberEditor", {}, {}]
}],
editPanel1: ["wm.EditPanel", {"liveForm":"personaLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1","showing":false}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.RoundedButton", {"caption":"Guardar Datos","height":"100%","margin":"2","width":"130px"}, {"onclick":"editPanel1.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"editPanel1.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel1.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.RoundedButton", {"caption":"New","height":"100%","margin":"2","showing":false,"width":"100px"}, {"onclick":"editPanel1.beginDataInsert"}],
updateButton1: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","margin":"2","width":"130px"}, {"onclick":"editPanel1.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"editPanel1.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.RoundedButton", {"caption":"Delete","height":"100%","margin":"2","showing":false,"width":"100px"}, {"onclick":"editPanel1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"editPanel1.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
insertVerificacionPersonaLiveForm: ["wm.LiveForm", {"height":"61px","horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {"onSuccess":"insertVerificacionPersonaLiveFormSuccess"}],
nonAcepted_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","lock":true,"padding":"10","showing":false,"verticalAlign":"middle","width":"100%"}, {}, {
layers3: ["wm.Layers", {}, {}, {
layer3: ["wm.Layer", {"borderColor":"","caption":"layer2","horizontalAlign":"center","verticalAlign":"middle"}, {}, {
message1: ["wm.Label", {"align":"center","caption":"¡LO SENTIMOS!<br/>El proceso de actualización de datos por parte de tus padres, no ha sido realizado.<br>Una vez realizado podrás ingresar para ver tus calificaciones<br/><br/>Haga click en el botón para salir","height":"116px","padding":"4","singleLine":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
boton_continuar1: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White"]},"borderColor":"#DC8909","caption":"SALIR","margin":"4","width":"223px"}, {"onclick":"boton_continuar1Click"}]
}]
}]
}],
footerPanel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"40px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"align":"right","caption":"Presiona el botón Actualizar para completar el proceso","height":"26px","padding":"4","showing":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
picture4: ["wm.Picture", {"aspect":"h","height":"25px","showing":false,"source":"resources/images/buttons/number_3.png","width":"25px"}, {}],
boton_actualizar: ["wm.Button", {"borderColor":"#1c74b3","caption":"Guardar","height":"100%","margin":"6","width":"128px"}, {"onclick":"boton_actualizarClick"}]
}]
}]
}]
}]
};

ActualizaDatos.prototype._cssText = '.ActualizaDatos .ActualizaDatos-picture1 {\
background-image: url(resources/images/buttons/google+-ui-sprite-colour.png);\
display: inline-block;\
margin: 0 7px;\
float: left;\
line-height: 18px;\
height: 18px;\
width: 18px;\
max-width: 18px;\
overflow: hidden;\
text-indent: -9999px;\
background-repeat: no-repeat;\
-webkit-transition: background-image 0.20s linear;\
-moz-transition: background-image 0.20s linear;\
-o-transition: background-image 0.20s linear;\
transition: background-image 0.20s linear;\
background-position: -108px -107px;\
}\
.ActualizaDatos .ActualizaDatos-boton_continuar {\
color: white;\
border: 1px solid #1c74b3;\
border-top-color: #2c8ed1;\
border-bottom-color: #0d5b97;\
background: #2181cf;\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#37a3eb", endColorstr="#2181cf");\
background: -webkit-gradient(linear, left top, left bottom, from(#37a3eb), to(#2181cf));\
background: -moz-linear-gradient(top, #37a3eb, #2181cf);\
-moz-box-shadow: 0 1px 0 #ddd,inset 0 1px 0 rgba(255,255,255,0.2);\
-webkit-box-shadow: 0 1px 0 #ddd,inset 0 1px 0 rgba(255,255,255,0.2);\
box-shadow: 0 1px 0 #ddd,inset 0 1px 0 rgba(255,255,255,0.2);\
text-shadow: rgba(0,0,0,0.2) 0 1px 0;\
-webkit-text-shadow: rgba(0,0,0,0.2) 0 1px 0;\
-moz-text-shadow: rgba(0,0,0,0.2) 0 1px 0;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
-ms-border-radius: 3px;\
-o-border-radius: 3px;\
border-radius: 3px;\
text-align: center;\
padding: 5px 16px;\
font-size: 12px;\
font-weight: 600;\
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 18px;\
font-weight: normal;\
}\
.ActualizaDatos .ActualizaDatos-message {\
color: #4b4b4b;\
/*font-family: "Droid Sans Mono", sans-serif;*/\
font-family: "YanoneKaffeesatzLightRegular", Arial;\
font-size: 40px;\
font-weight: normal;\
text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\
}.ActualizaDatos .ActualizaDatos-boton_actualizar {\
color: white;\
border: 1px solid #1c74b3;\
border-top-color: #2c8ed1;\
border-bottom-color: #0d5b97;\
background: #2181cf;\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#37a3eb", endColorstr="#2181cf");\
background: -webkit-gradient(linear, left top, left bottom, from(#37a3eb), to(#2181cf));\
background: -moz-linear-gradient(top, #37a3eb, #2181cf);\
-moz-box-shadow: 0 1px 0 #ddd,inset 0 1px 0 rgba(255,255,255,0.2);\
-webkit-box-shadow: 0 1px 0 #ddd,inset 0 1px 0 rgba(255,255,255,0.2);\
box-shadow: 0 1px 0 #ddd,inset 0 1px 0 rgba(255,255,255,0.2);\
text-shadow: rgba(0,0,0,0.2) 0 1px 0;\
-webkit-text-shadow: rgba(0,0,0,0.2) 0 1px 0;\
-moz-text-shadow: rgba(0,0,0,0.2) 0 1px 0;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
-ms-border-radius: 3px;\
-o-border-radius: 3px;\
border-radius: 3px;\
text-align: center;\
padding: 5px 16px;\
font-size: 8px;\
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 12px;\
font-weight: normal;\
}\
.ActualizaDatos .ActualizaDatos-boton_continuar1 {\
color: white;\
border: 1px solid #1c74b3;\
border-top-color: #2c8ed1;\
border-bottom-color: #0d5b97;\
background: #FF9912;\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FF9912", endColorstr="#FFA812");\
background: -webkit-gradient(linear, left top, left bottom, from(#FF9912), to(#FFA812));\
background: -moz-linear-gradient(top, #FF9912, #FFA812);\
-moz-box-shadow: 0 1px 0 #ddd,inset 0 1px 0 rgba(255,255,255,0.2);\
-webkit-box-shadow: 0 1px 0 #ddd,inset 0 1px 0 rgba(255,255,255,0.2);\
box-shadow: 0 1px 0 #ddd,inset 0 1px 0 rgba(255,255,255,0.2);\
text-shadow: rgba(0,0,0,0.2) 0 1px 0;\
-webkit-text-shadow: rgba(0,0,0,0.2) 0 1px 0;\
-moz-text-shadow: rgba(0,0,0,0.2) 0 1px 0;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
-ms-border-radius: 3px;\
-o-border-radius: 3px;\
border-radius: 3px;\
text-align: center;\
padding: 5px 16px;\
font-size: 13px;\
font-weight: 600;\
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 18px;\
font-weight: normal;\
}\
.ActualizaDatos .ActualizaDatos-message1 {\
color: #4b4b4b;\
/*font-family: "Droid Sans Mono", sans-serif;*/\
font-family: "YanoneKaffeesatzLightRegular", Arial;\
font-size: 18px;\
font-weight: normal;\
text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\
}\
.ActualizaDatos .ActualizaDatos-generalInfo_left {\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
color: #000000;\
}\
';
ActualizaDatos.prototype._htmlText = '';