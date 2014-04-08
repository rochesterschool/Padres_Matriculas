Date.prototype.getWeek = function() {
var onejan = new Date(this.getFullYear(),0,1);
return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
},
dojo.declare("Main", wm.Page, {
start: function() {
/**Funcion de Dojo**/
app.pageDialog.showPage("Mensaje_inicio", false, 900, 600);
dojo.subscribe("session-expiration", this, "mySessionExpiredMethod");
},
mySessionExpiredMethod: function(){
/* alert("Aviso importante: Sesión expirada \n\n"+ "Su sesión ha excedido el tiempo de inactividad permitido. Por favor ingrese nuevamente.");
window.location.reload();*/
},
"preferredDevice": "desktop",
/*initialization global variables*/
a_getUserNameSvSuccess: function(inSender, inDeprecated) {
var _username= main.a_getUserNameSv.getData().dataValue;
main._svHideLayer.input.setValue("user", _username);
main._svHideLayer.update();
},
/*global var end*/
button1Click: function(inSender, inEvent) {
url= "resources/pdfcontrato/contratoRochester2011.pdf";
window.open(url,"_BLANK");
},
button2Click: function(inSender, inEvent) {
url= "resources/pdfcontrato/Matriculas_Instrucciones_2011-2012.pdf";
window.open(url,"_BLANK");
},
Informacion_documentosShow: function(inSender) {
this.l_documentos_Vista_Personas_promocion.update();
this.documentos_butt_modelo_contrato.disable();
this.documentos_butt_matricula.disable();
this.documentos_butt_mensualidades.disable();
},
a_getUserNameChange: function(inSender, inDisplayValue, inDataValue) {
this.a_getInforUser.input.setValue("username", this.a_getUserName.getDataValue());
this.a_getInforUser.update();
this.a_getTipoPersona.input.setValue("user", this.a_getUserName.getDataValue());
this.a_getTipoPersona.update();
this.a_informacionUsuario.input.setValue("user", this.a_getUserName.getDataValue());
this.a_informacionUsuario.update();
},
a_getInforUserSuccess: function(inSender, inDeprecated) {
var nombre= main.a_getInforUser.getItem(0);
var n1 = nombre.data.n1;
var nombre2 = main.a_getInforUser.getItem(0);
var n2 = nombre2.data.n2;
var apellido = main.a_getInforUser.getItem(0);
var a1 = apellido.data.a1;
var apellido2 = main.a_getInforUser.getItem(0);
var a2 = apellido2.data.a2;
var nombreCompleto = n1+" "+n2+" "+a1+" "+a2;
var tipo = main.a_getInforUser.getItem(0);
var rol = tipo.data.tipoPe;
var codigoFamilia = main.a_getInforUser.getItem(0);
var codigo= codigoFamilia.data.idFamilia;
var grupoFamiliar = main.a_getInforUser.getItem(0);
var familia = grupoFamiliar.data.grupoFamilia;
this.inicio_nombreCompleto_label.setCaption("BIENVENIDO, "+nombreCompleto);
this.inicio_grupo_familiar_laber.setCaption("Grupo familiar "+familia +" • "+" "+rol);
this.a_getGroupCode.setDataValue(codigo);
this.isUpdatedGrupoFamiliar.input.setValue("idg",codigo);
this.estudiante_grupoFamiliar.input.setValue("idg", codigo);
this.isUpdatedGrupoFamiliar.update();
this.estudiante_grupoFamiliar.update();
},
inicio_ir_a_facturacionClick: function(inSender, inEvent) {
url= "http://aprendoz.rochester.edu.co:8080/Aprendoz_Facturacion";
window.open(url,"_BLANK");
},
isAuthenticatedSVSuccess: function(inSender, inDeprecated) {
if(this.isAuthenticatedSV.dataValue = true){
}
if(this.isAuthenticatedSV.dataValue = false){
app.pageDialog.showPage("SesionExpirada", true, 900, 660);
}
},
matricula_select_estudianteChange: function(inSender, inDisplayValue, inDataValue) {
var _value= this.matricula_select_estudiante.getDisplayValue();
var _sub= _value.substring(0,5);
if(_sub >= 12000 && _sub <=13999){
this.controls_panel.hide();
this.html_nuevo.show();
this.html_antiguo.hide();
}if(_sub < 12000 || _sub > 13999){
this.controls_panel.show();
this.html_antiguo.show();
this.html_nuevo.hide();
}
var value= main.matricula_select_estudiante.getDataValue();
main._fichaMedicasv.input.setValue("idp", value);
main._fichaMedicasv.update();
main._hqlAlergias.input.setValue("idp", value);
main._hqlAlergias.update();
var value= main.matricula_select_estudiante.getDataValue();
if(value == undefined){
this.asopadres_butt.disable();
this.alimento_butt.disable();
this.transporte_butt.disable();
this.seguro_butt.disable();
this.impresion_butt.disable();
this.pagar_pse.disable();
this.enfermeria_butt.disable();
}
if(value > 0){
this.asopadres_butt.enable();
this.alimento_butt.enable();
this.transporte_butt.enable();
this.seguro_butt.enable();
this.impresion_butt.enable();
this.enfermeria_butt.enable();
}
},
alimento_buttClick: function(inSender, inEvent) {
try {
/*var idpersona= this.matricula_select_estudiante.getDataValue();
this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
this.estudiante_gradoGrupoFamiliar.update();
this.transporte.hide();
this.seguro.hide();
this.asopadres.hide();
this.alimentacion.show(); */
} catch(e) {
console.error('ERROR IN alimento_buttClick: ' + e);
}},
transporte_buttClick: function(inSender, inEvent) {
try {
/*var idpersona= this.matricula_select_estudiante.getDataValue();
this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
this.estudiante_gradoGrupoFamiliar.update();
this.alimentacion.hide();
this.seguro.hide();
this.asopadres.hide();
// this.panel_boton_transporte.show();
this.transporte.show();*/
} catch(e) {
console.error('ERROR IN transporte_buttClick: ' + e);
}},
seguro_buttClick: function(inSender, inEvent) {
try {
/* var idpersona= this.matricula_select_estudiante.getDataValue();
this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
this.estudiante_gradoGrupoFamiliar.update();
this.alimentacion.hide();
this.transporte.hide();
this.asopadres.hide();
this.seguro.show(); */
} catch(e) {
console.error('ERROR IN seguro_buttClick: ' + e);
}},
asopadres_buttClick: function(inSender, inEvent) {
try {
/*this.alimentacion.hide();
this.transporte.hide();
this.seguro.hide();
this.asopadres.show();*/
} catch(e) {
console.error('ERROR IN asopadres_buttClick: ' + e);
}},
impresion_buttClick: function(inSender, inEvent) {
try {
var _grupofamiliar=  this.a_getGroupCode.getDataValue();
this.impresion_grupoFamiliar.input.setValue("gf", _grupofamiliar);
this.impresion_grupoFamiliar.update();
this._verificarResponsablePagoShowPanel.input.setValue("idgf", _grupofamiliar);
this._verificarResponsablePagoShowPanel.update();
this.alimentacion.hide();
this.transporte.hide();
this.adicionales.hide();
this.seguro.hide();
this.mensaje.hide();
this.ficha_medica.hide();
this.impresion.show();
} catch(e) {
console.error('ERROR IN impresion_buttClick: ' + e);
}},
home_buttClick: function(inSender) {
try {
this.alimentacion.hide();
this.transporte.hide();
this.adicionales.hide();
this.seguro.hide();
this.ficha_medica.hide();
this.impresion.hide();
this.mensaje.show();
} catch(e) {
console.error('ERROR IN home_buttClick: ' + e);
}},
actualizacion_buttClick: function(inSender, inEvent) {
try {
/*jQuery("#main_actualizacion_butt").css(
{
'background-color' : 'red'
}
);*/
this.panel_servicios.hide();
this.ficha_medica.hide();
this.panel_botones.hide();
this.panel_selector_principal.hide();
this.header_message.hide();
this.top_banner.hide();
this.reponsable_pagos.hide();
this.page_ActualizaDatos.show();
} catch(e) {
console.error('ERROR IN actualizacion_buttClick: ' + e);
}},
servicios_buttClick: function(inSender, inEvent) {
try {
this.ficha_medica.hide();
this.page_ActualizaDatos.hide();
this.top_banner.show();
this.panel_botones.show();
this.panel_selector_principal.show();
this.header_message.show();
this.panel_servicios.show();
} catch(e) {
console.error('ERROR IN servicios_buttClick: ' + e);
}},
enfermeria_buttClick: function(inSender, inEvent) {
try {
this.asopadres.hide();
this.panel_servicios.hide();
this.page_ActualizaDatos.hide();
this.top_banner.show();
this.panel_selector_principal.show();
this.header_message.show();
this.ficha_medica.show();
} catch(e) {
console.error('ERROR IN enfermeria_buttClick: ' + e);
}},
estudiante_gradoGrupoFamiliarSuccess: function(inSender, inDeprecated) {
try {
var idpersona= this.matricula_select_estudiante.getDataValue();
var _json= main.estudiante_gradoGrupoFamiliar.getItem(0);
var _grado= _json.data.idgrado;
var _sy= _json.data.idsy;
var _codigoTransportes= "0023";
var _codigoTransportes2= "0023A";
var _codigoAlimentos= "0021";
var _codigoAlimentos2= "0022";
var _seguroVida= "0011";
var _seguroAccidente= "0012";
var _asopadres= "0014";
var _asopadres2= "0015";
var _asopadres3= "0016";
var _false= false;
var _true= true;
var _codigo= _json.data.codigo;
if(_codigo >= 12000 && _codigo <= 13999){
//transportes
this.a_listadoServicios.input.setValue("idp", idpersona);
this.a_listadoServicios.input.setValue("cod", _codigoTransportes);
this.a_listadoServicios.input.setValue("cod2", _codigoTransportes);
this.a_listadoServicios.input.setValue("cod3", _codigoTransportes2);
this.a_listadoServicios.input.setValue("nuevo", _true);
this.a_listadoServicios.input.setValue("sy", _sy);
this.a_listadoServicios.input.setValue("idgrado", _grado);
this.a_listadoServicios.update();
//alimentos
this.a_listadoServiciosAlimentos.input.setValue("idp", idpersona);
this.a_listadoServiciosAlimentos.input.setValue("cod", _codigoAlimentos);
this.a_listadoServiciosAlimentos.input.setValue("nuevo", _true);
this.a_listadoServiciosAlimentos.input.setValue("sy", _sy);
this.a_listadoServiciosAlimentos.input.setValue("cod2", _codigoAlimentos2);
this.a_listadoServiciosAlimentos.input.setValue("cod3", _codigoAlimentos2);
this.a_listadoServiciosAlimentos.input.setValue("idgrado", _grado);
this.a_listadoServiciosAlimentos.update();
//seguros
this.a_listadoServiciosSeguros.input.setValue("idp", idpersona);
this.a_listadoServiciosSeguros.input.setValue("cod", _seguroVida);
this.a_listadoServiciosSeguros.input.setValue("nuevo", _true);
this.a_listadoServiciosSeguros.input.setValue("sy", _sy);
this.a_listadoServiciosSeguros.input.setValue("cod2", _seguroAccidente);
this.a_listadoServiciosSeguros.input.setValue("cod3", _seguroAccidente);
this.a_listadoServiciosSeguros.input.setValue("idgrado", _grado);
this.a_listadoServiciosSeguros.update();
//asopadres
this.a_listadoServiciosAsopadres.input.setValue("idp", idpersona);
this.a_listadoServiciosAsopadres.input.setValue("cod", _asopadres);
this.a_listadoServiciosAsopadres.input.setValue("cod2", _asopadres2);
this.a_listadoServiciosAsopadres.input.setValue("cod3", _asopadres3);
this.a_listadoServiciosAsopadres.input.setValue("nuevo", _true);
this.a_listadoServiciosAsopadres.input.setValue("sy", _sy);
this.a_listadoServiciosAsopadres.input.setValue("idgrado", _grado);
this.a_listadoServiciosAsopadres.update();
}
else if(_codigo < 12000 || _codigo >13999){
//transportes
this.a_listadoServicios.input.setValue("idp", idpersona);
this.a_listadoServicios.input.setValue("cod", _codigoTransportes);
this.a_listadoServicios.input.setValue("cod2", _codigoTransportes);
this.a_listadoServicios.input.setValue("cod3", _codigoTransportes2);
this.a_listadoServicios.input.setValue("nuevo", _false);
this.a_listadoServicios.input.setValue("sy", _sy);
this.a_listadoServicios.input.setValue("idgrado", _grado);
this.a_listadoServicios.update();
//alimentos
this.a_listadoServiciosAlimentos.input.setValue("idp", idpersona);
this.a_listadoServiciosAlimentos.input.setValue("cod", _codigoAlimentos);
this.a_listadoServiciosAlimentos.input.setValue("nuevo", _false);
this.a_listadoServiciosAlimentos.input.setValue("sy", _sy);
this.a_listadoServiciosAlimentos.input.setValue("cod2", _codigoAlimentos2);
this.a_listadoServiciosAlimentos.input.setValue("cod3", _codigoAlimentos2);
this.a_listadoServiciosAlimentos.input.setValue("idgrado", _grado);
this.a_listadoServiciosAlimentos.update();
//seguros
this.a_listadoServiciosSeguros.input.setValue("idp", idpersona);
this.a_listadoServiciosSeguros.input.setValue("cod", _seguroVida);
this.a_listadoServiciosSeguros.input.setValue("nuevo", _false);
this.a_listadoServiciosSeguros.input.setValue("sy", _sy);
this.a_listadoServiciosSeguros.input.setValue("cod2", _seguroAccidente);
this.a_listadoServiciosSeguros.input.setValue("cod3", _seguroAccidente);
this.a_listadoServiciosSeguros.input.setValue("idgrado", _grado);
this.a_listadoServiciosSeguros.update();
//asopadres
this.a_listadoServiciosAsopadres.input.setValue("idp", idpersona);
this.a_listadoServiciosAsopadres.input.setValue("cod", _asopadres);
this.a_listadoServiciosAsopadres.input.setValue("cod2", _asopadres2);
this.a_listadoServiciosAsopadres.input.setValue("cod3", _asopadres3);
this.a_listadoServiciosAsopadres.input.setValue("nuevo", _false);
this.a_listadoServiciosAsopadres.input.setValue("sy", _sy);
this.a_listadoServiciosAsopadres.input.setValue("idgrado", _grado);
this.a_listadoServiciosAsopadres.update();
}
} catch(e) {
console.error('ERROR IN estudiante_gradoGrupoFamiliarSuccess: ' + e);
}},
agregar_alimClick: function(inSender, inEvent) {
try {
var _iac= this.alimentosDataGrid.selectedItem.getData().idiac;
this.a_actualizaServicio.input.setValue("idiac", _iac );
this.a_actualizaServicio.input.setValue("inscribir", "true" );
this.a_actualizaServicio.update();
} catch(e) {
console.error('ERROR IN agregar_alimClick: ' + e);
}},
a_actualizaServicioSuccess: function(inSender, inDeprecated) {
try {
this.a_listadoServiciosAlimentos.update();
} catch(e) {
console.error('ERROR IN a_actualizaServicioSuccess: ' + e);
}
},
quitar_alimClick: function(inSender, inEvent) {
try {
var _iac= this.alimentosDataGrid.selectedItem.getData().idiac;
this.a_actualizaServicio.input.setValue("idiac", _iac );
this.a_actualizaServicio.input.setValue("inscribir", "false" );
this.a_actualizaServicio.update();
} catch(e) {
console.error('ERROR IN quitar_alimClick: ' + e);
}},
agregar_transClick: function(inSender, inEvent) {
try {
var _iac= this.transporteDataGrid.selectedItem.getData().idiac;
this.a_actualizaServicioTrans.input.setValue("idiac", _iac );
this.a_actualizaServicioTrans.input.setValue("inscribir", "true" );
this.a_actualizaServicioTrans.update();
} catch(e) {
console.error('ERROR IN agregar_transClick: ' + e);
}
},
quitar_transClick: function(inSender, inEvent) {
try {
var _iac= this.transporteDataGrid.selectedItem.getData().idiac;
this.a_actualizaServicioTrans.input.setValue("idiac", _iac );
this.a_actualizaServicioTrans.input.setValue("inscribir", "false" );
this.a_actualizaServicioTrans.update();
} catch(e) {
console.error('ERROR IN quitar_transClick: ' + e);
}
},
agregar_segClick: function(inSender, inEvent) {
try {
var _iac= this.seguroDataGrid.selectedItem.getData().idiac;
this.a_actualizaServicioSeg.input.setValue("idiac", _iac );
this.a_actualizaServicioSeg.input.setValue("inscribir", "true" );
this.a_actualizaServicioSeg.update();
} catch(e) {
console.error('ERROR IN agregar_segClick: ' + e);
}
},
quitar_segClick: function(inSender, inEvent) {
try {
var _iac= this.seguroDataGrid.selectedItem.getData().idiac;
this.a_actualizaServicioSeg.input.setValue("idiac", _iac );
this.a_actualizaServicioSeg.input.setValue("inscribir", "false" );
this.a_actualizaServicioSeg.update();
} catch(e) {
console.error('ERROR IN agregar_segClick: ' + e);
}
},
a_actualizaServicioTransSuccess: function(inSender, inDeprecated) {
try {
this.a_listadoServicios.update();
} catch(e) {
console.error('ERROR IN a_actualizaServicioTransSuccess: ' + e);
}},
isUpdatedGrupoFamiliarSuccess: function(inSender, inDeprecated) {
try {
var _count= main.isUpdatedGrupoFamiliar.getCount();
if(_count == 1){
var idgrupo= this.a_getGroupCode.getDataValue();
this.isUpdatedGrupoFamiliarBool.input.setValue("idg", idgrupo);
this.isUpdatedGrupoFamiliarBool.update();
}
if(_count == 0){
//app.pageDialog.showPage("ActualizaDatos", true, 900, 600);
}
} catch(e) {
console.error('ERROR IN isUpdatedGrupoFamiliarSuccess: ' + e);
}
},
isUpdatedGrupoFamiliarBoolSuccess: function(inSender, inDeprecated) {
try {
var _json= main.isUpdatedGrupoFamiliarBool.getItem(0);
var _bool= _json.data.actualizado;
var _count= main.isUpdatedGrupoFamiliar.getCount();
if(_bool==1 && _count==1){
}
if(_bool==0 && _count==1){
//app.pageDialog.showPage("ActualizaDatos", true, 900, 600);
}
} catch(e) {
console.error('ERROR IN isUpdatedGrupoFamiliarBoolSuccess: ' + e);
}
},
a_actualizaServicioSegSuccess: function(inSender, inDeprecated) {
try {
this.a_listadoServiciosSeguros.update();
} catch(e) {
console.error('ERROR IN a_actualizaServicioSegSuccess: ' + e);
}},
agregar_impClick: function(inSender, inEvent) {
try {
var _idgf= this.responsableDataGrid.selectedItem.getData().idGrupoFamiliar;
this._verificarResponsablePago.input.setValue("idgf", _idgf);
this._verificarResponsablePago.update();
this.continuar_responsable.enable();
} catch(e) {
console.error('ERROR IN agregar_impClick: ' + e);
}},
quitar_imprClick: function(inSender, inEvent) {
try {
var _id= this.responsableDataGrid.selectedItem.getData().idunico;
this.updateResponsable.input.setValue("idipgf", _id);
this.updateResponsable.input.setValue("responsable", "false");
this.updateResponsable.update();
this.continuar_responsable.disable();
this.mensaje_final.setCaption("");
this.picture10.hide();
this.panel_documentos.hide();
} catch(e) {
console.error('ERROR IN quitar_imprClick: ' + e);
}},
agregar_asoClick: function(inSender, inEvent) {
try {
var _iac= this.asopadresDatGrid.selectedItem.getData().idiac;
this.a_actualizaServicioAsopadres.input.setValue("idiac", _iac );
this.a_actualizaServicioAsopadres.input.setValue("inscribir", "true" );
this.a_actualizaServicioAsopadres.update();
} catch(e) {
console.error('ERROR IN agregar_asoClick: ' + e);
}
},
quitar_asoClick: function(inSender, inEvent) {
try {
var _iac= this.asopadresDatGrid.selectedItem.getData().idiac;
this.a_actualizaServicioAsopadres.input.setValue("idiac", _iac );
this.a_actualizaServicioAsopadres.input.setValue("inscribir", "false" );
this.a_actualizaServicioAsopadres.update();
} catch(e) {
console.error('ERROR IN quitar_asoClick: ' + e);
}
},
updateResponsableSuccess: function(inSender, inDeprecated) {
try {
this.impresion_grupoFamiliar.update();
} catch(e) {
console.error('ERROR IN updateResponsableSuccess: ' + e);
}},
pagare_buttClick: function(inSender, inEvent) {
try {
var url= "http://bit2media.com/servicios/pagare.pdf";
window.open(url, "_BLANK");
/* main.a_informacionUsuario.update();
var getter = main.a_informacionUsuario.getItem(0);
var id= getter.data.idpersona;
var clave= getter.data.clave;
var _persona=   this.matricula_select_estudiante.getDataValue();
var formatType= "PDF";
$.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
httpMethod: "POST",
data:{ idp: id,
pass: clave,
uri: "/aprendozreports/MAT005",
format: formatType,
params: {idpersona: _persona}
}
});
inEvent.preventDefault(); */
} catch(e) {
console.error('ERROR IN pagare_buttClick: ' + e);
}
},
contrato_buttClick: function(inSender, inEvent) {
try {
main.a_informacionUsuario.update();
var getter = main.a_informacionUsuario.getItem(0);
var id= getter.data.idpersona;
var clave= getter.data.clave;
var _persona=   this.matricula_select_estudiante.getDataValue();
var formatType= "PDF";
$.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
httpMethod: "POST",
data:{ idp: id,
pass: clave,
uri: "/aprendozreports/MAT008",
format: formatType,
params: {idpersona: _persona}
}
});
inEvent.preventDefault();
} catch(e) {
console.error('ERROR IN contrato_buttClick: ' + e);
}
},
recibo_matricula_buttClick: function(inSender, inEvent) {
try {
} catch(e) {
console.error('ERROR IN recibo_matricula_buttClick: ' + e);
}
},
mensualidades_buttClick: function(inSender, inEvent) {
try {
main.a_informacionUsuario.update();
var getter = main.a_informacionUsuario.getItem(0);
var id= getter.data.idpersona;
var clave= getter.data.clave;
var _persona=   this.matricula_select_estudiante.getDataValue();
var formatType= "PDF";
$.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
httpMethod: "POST",
data:{ idp: id,
pass: clave,
uri: "/aprendozreports/MAT006",
format: formatType,
params: {idpersona: _persona}
}
});
inEvent.preventDefault();
} catch(e) {
console.error('ERROR IN mensualidades_buttClick: ' + e);
}},
recibo_matricula_buttClick: function(inSender, inEvent) {
try {
main.a_informacionUsuario.update();
var getter = main.a_informacionUsuario.getItem(0);
var id= getter.data.idpersona;
var clave= getter.data.clave;
var _persona=   this.matricula_select_estudiante.getDataValue();
var formatType= "PDF";
$.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
httpMethod: "POST",
data:{ idp: id,
pass: clave,
uri: "/aprendozreports/MAT007",
format: formatType,
params: {idpersona: _persona}
}
});
inEvent.preventDefault();
} catch(e) {
console.error('ERROR IN recibo_matricula_buttClick: ' + e);
}},
/*bancos_buttClick: function(inSender, inEvent) {
try {
main.a_informacionUsuario.update();
var getter = main.a_informacionUsuario.getItem(0);
var id= getter.data.idpersona;
var clave= getter.data.clave;
var _persona=   this.matricula_select_estudiante.getDataValue();
var formatType= "PDF";
$.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
httpMethod: "POST",
data:{ idp: id,
pass: clave,
uri: "/aprendozreports/MAT007",
format: formatType,
params: {idpersona: _persona}
}
});
inEvent.preventDefault();
} catch(e) {
console.error('ERROR IN bancos_buttClick: ' + e);
}},*/
contrato_trans_buttClick: function(inSender, inEvent) {
try {
main.a_informacionUsuario.update();
var getter = main.a_informacionUsuario.getItem(0);
var id= getter.data.idpersona;
var clave= getter.data.clave;
var _persona=   this.matricula_select_estudiante.getDataValue();
var formatType= "PDF";
$.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
httpMethod: "POST",
data:{ idp: id,
pass: clave,
uri: "/aprendozreports/MAT002",
format: formatType,
params: {idpersona: _persona}
}
});
inEvent.preventDefault();
} catch(e) {
console.error('ERROR IN contrato_trans_buttClick: ' + e);
}},
contrato_alim_buttClick: function(inSender, inEvent) {
try {
main.a_informacionUsuario.update();
var getter = main.a_informacionUsuario.getItem(0);
var id= getter.data.idpersona;
var clave= getter.data.clave;
var _persona=   this.matricula_select_estudiante.getDataValue();
var formatType= "PDF";
$.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
httpMethod: "POST",
data:{ idp: id,
pass: clave,
uri: "/aprendozreports/MAT003",
format: formatType,
params: {idpersona: _persona}
}
});
inEvent.preventDefault();
} catch(e) {
console.error('ERROR IN contrato_trans_butt1Click: ' + e);
}},
contrato_seg_buttClick: function(inSender, inEvent) {
try {
var url= "http://aprendoz.rochester.edu.co/recursos/SOLICITUD_VG_EDUCATIVO_SIMPLIFICADA.pdf";
window.open(url, "_BLANK");
} catch(e) {
console.error('ERROR IN contrato_seg_buttClick: ' + e);
}},
pagar_bancoClick: function(inSender, inEvent) {
try {
var url= "http://aprendoz.rochester.edu.co/recursos/Formato_de_consignacion_Banco_de_Bogota.pdf";
window.open(url, "_BLANK");
} catch(e) {
console.error('ERROR IN pagar_bancoClick: ' + e);
}
},
a_getGroupCodeChange: function(inSender, inDisplayValue, inDataValue) {
try {
var _grupo= this.a_getGroupCode.getDataValue();
this.getNuevo.input.setValue("grupo", _grupo);
this.getNuevo.update();
} catch(e) {
console.error('ERROR IN a_getGroupCodeChange: ' + e);
}},
_svHideLayerSuccess: function(inSender, inDeprecated) {
try {
var json= main._svHideLayer.getItem(0);
var _tipo= json.data.idtipo;
} catch(e) {
console.error('ERROR IN _svHideLayerSuccess: ' + e);
}},
getNuevoSuccess: function(inSender, inDeprecated) {
try {
var _grupo= main.getNuevo.getItem(0);
var _cont= _grupo.data.numero;
var json= main._svHideLayer.getItem(0);
var _tipo= json.data.idtipo;
if(_cont> 0 && _tipo>1){
this.matricula.show();
}else{
this.matricula.hide();
}
} catch(e) {
console.error('ERROR IN getNuevoSuccess: ' + e);
}},
_fichaMedicasvSuccess: function(inSender, inDeprecated) {
try {
var _json = main._fichaMedicasv.getItem(0);
var _nombre = _json.data.nombrecompleto;
var _emergencia = _json.data.emergencia;
var _eps = _json.data.eps;
var _fecha = _json.data.fecha;
var _grado = _json.data.grado;
var _prepagada = _json.data.prepagada;
var _rh = _json.data.rh;
var _telefono= _json.data.telefono;
var now= new Date();
var yearNow= now.getFullYear();
var monthNow= now.getMonth()+1;
var dayNow= now.getDate();
var pureDate= _fecha;
var bornDate = new Date(pureDate);
var yearBorn= bornDate.getFullYear();
var monthBorn= bornDate.getMonth()+1;
var dayBorn= bornDate.getDate();
console.log("<-- Año: "+yearNow+" "+"Mes: "+monthNow+" "+"Dia: "+dayNow);
console.log("--> Año: "+yearBorn+" "+"Mes: "+monthBorn+" "+"Dia: "+dayBorn);
var age= yearNow-yearBorn;
if(monthBorn <= monthNow){
//if(dayBorn <= dayNow){
this.edad.setDataValue((age+1)+" Años");
//  }
// else if(dayBorn = dayNow && dayBorn > dayNow){
//   this.edad.setDataValue((age)+" Añosy");
//  }
}
else if(monthBorn > monthNow){
this.edad.setDataValue((age)+" Años");
}
this.nombrecompleto.setDataValue(_nombre);
this.gradoIngreso.setDataValue(_grado);
this.rh.setDataValue(_rh);
this.eps.setDataValue(_eps);
this.prepagada.setDataValue(_prepagada);
this.telefono.setDataValue(_telefono);
this.clinica_emergencia.setDataValue(_emergencia);
} catch(e) {
console.error('ERROR IN _fichaMedicasvSuccess: ' + e);
}
},
pagar_pseClick: function(inSender, inEvent) {
try {
var _grupo= this.a_getGroupCode.getDataValue();
var _json= main.a_getInforUser.getItem(0);
var n1 = _json.data.n1;
var n2 = _json.data.n2;
var a1 = _json.data.a1;
var a2 = _json.data.a2;
var nombreCompleto = n1+" "+n2+" "+a1+" "+a2;
var role = _json.data.tipoPe;
var _documento= _json.data.documento;
this._whoIsPayResponsible.input.setValue("idgf", _grupo);
this._whoIsPayResponsible.update();
this.concepto.setDataValue("PAGO_MATRICULA_2013-2014_FUND._COLEGIO_ROCHESTER");
this.pagar_pse_butt.enable();
var _id=  this.matricula_select_estudiante.getDataValue();
this.getNombreAlumno.input.setValue("id", _id);
this.getNombreAlumno.update();
this._totalPagarSV.input.setValue("idp", _id);
this._totalPagarSV.update();
} catch(e) {
console.error('ERROR IN pagar_pseClick: ' + e);
}
},
getNombreAlumnoSuccess: function(inSender, inDeprecated) {
try {
var _json =  main.getNombreAlumno.getItem(0);
var _nombre= _json.data.nombrecompleto;
var _codigo= _json.data.codigo;
this.estudiante.setDataValue(_nombre);
this.code_estudiante.setDataValue(_codigo);
} catch(e) {
console.error('ERROR IN getNombreAlumnoSuccess: ' + e);
}
},
_totalPagarSVSuccess: function(inSender, inDeprecated) {
try {
var _json= main._totalPagarSV.getItem(0);
var _valor= _json.data.totalPagar;
this.valor.setDataValue(_valor);
} catch(e) {
console.error('ERROR IN _totalPagarSVSuccess: ' + e);
}
},
pse_logoClick: function(inSender) {
try {
var psedata = {
id : this.noDocumento.getDataValue(),
value : this.valor.getDataValue(),
subject : this.concepto.getDataValue(),
idpersona : this.matricula_select_estudiante.getDataValue()
};
$.ajax({
url: 'http://aprendoz.rochester.edu.co/enr/send/data.json',
data: psedata,
dataType: 'jsonp'
}).done(function( msg ) {
});
} catch(e) {
console.error('ERROR IN pse_logoClick: ' + e);
}
},
pagar_pse_buttClick: function(inSender, inEvent) {
try {
var psedata = {
id : this.noDocumento.getDataValue(),
value : this.valor.getDataValue(),
subject : this.concepto.getDataValue(),
idpersona : this.matricula_select_estudiante.getDataValue(),
code: this.code_estudiante.getDataValue()
};
this.pagar_pse_butt.disable();
$.ajax({
url: 'http://aprendoz.rochester.edu.co/enr/send/data.json',
data: psedata,
dataType: 'jsonp',
success : function(data) {
window.open(data.url);
},
fail : function(data) {
this.pagar_pse_butt.enable();
alert("Error: " + data);
}
});
} catch(e) {
console.error('ERROR IN button9Click: ' + e);
}
},
_verificarResponsablePagoSuccess: function(inSender, inDeprecated) {
try {
var _json= main._verificarResponsablePago.getItem(0);
var _cont= main._verificarResponsablePago.getCount();
if(_cont == 1){
alert("ACCIÓN NO VALIDA:\n\nSolo debe existir un responsable por Grupo Familiar.\n\nRetire el responsable existenge (- Retirar) y a continuación elija un nuevo responsable (+ Elegir)");
}
if(_cont == 0){
var _id= this.responsableDataGrid.selectedItem.getData().idunico;
this.updateResponsable.input.setValue("idipgf", _id);
this.updateResponsable.input.setValue("responsable", "true");
this.updateResponsable.update();
this.mensaje_final.setCaption("Has click sobre cada boton, descarga e imprime cada documento, estos los necesitará en el proceso de Matrícula");
this.picture10.show();
this.panel_documentos.show();
}
} catch(e) {
console.error('ERROR IN _verificarResponsablePagoSuccess: ' + e);
}},
_verificarResponsablePagoShowPanelSuccess: function(inSender, inDeprecated) {
try {
var _cont= main._verificarResponsablePagoShowPanel.getCount();
console.log(_cont);
if(_cont == 1){
this.continuar_responsable.enable();
}
if(_cont == 0){
this.continuar_responsable.enable();
}
} catch(e) {
console.error('ERROR IN _verificarResponsablePagoShowPanelSuccess: ' + e);
}},
responsableDataGridSelected: function(inSender, inIndex) {
try {
this.continuar_responsable.enable();
} catch(e) {
console.error('ERROR IN responsableDataGridSelected: ' + e);
}},
responsableDataGridDeselected: function(inSender, inIndex) {
try {
this.continuar_responsable.disable();
} catch(e) {
console.error('ERROR IN responsableDataGridDeselected: ' + e);
}},
_whoIsPayResponsibleSuccess: function(inSender, inDeprecated) {
try {
var _cont= main._whoIsPayResponsible.getCount();
if(_cont == 1){
var _json=  main._whoIsPayResponsible.getItem(0);
var _dni= _json.data.dni;
var _nombre= _json.data.nombrecompleto;
var _tipo= _json.data.tipo;
this.rol.setCaption(_tipo);
this.rol.setDataValue(_nombre);
this.noDocumento.setDataValue(_dni);
this.resument_de_pago.show();
}
if(_cont == 0){
alert("AVISO IMPORTANTE:\nEl sistema no registra un responsable de pago. Por favor elija uno e intentelo nuevamente");
}
} catch(e) {
console.error('ERROR IN _whoIsPayResponsibleSuccess: ' + e);
}},
guardar_restricciones_alimenticiasClick: function(inSender, inEvent) {
try {
//---> id persona
var idpersona= this.matricula_select_estudiante.getDataValue();
var detalles= this.detalles_importantes.getDataValue();
var now= new Date();
this.alimentoVar.setValue("persona.idPersona", idpersona);
this.alimentoVar.setValue("alergias", detalles);
this.alimentoVar.setValue("recomendacionesEspeciales", detalles);
this.detalleAlimento.setDataSet(this.alimentoVar);
this.detalleAlimento.insertData();
} catch(e) {
console.error('ERROR IN guardar_restricciones_alimenticiasClick: ' + e);
}
},
detalleAlimentoSuccess: function(inSender, inData) {
try {
alert("Detalles guardados exitosamente!");
} catch(e) {
console.error('ERROR IN detalleAlimentoSuccess: ' + e);
}
},
_hqlAlergiasSuccess: function(inSender, inDeprecated) {
try {
var _json=  main._hqlAlergias.getItem(0);
var _idficha= _json.data.idficha;
var _alergias= _json.data.alergias;
var _medico= _json.data.medico;
var _enfermedades = _json.data.enfermedades;
var _antecedentesQuirurgicos = _json.data.antecedentes;
var _medicamentosActuales= _json.data.medicamentosActualidad;
var _medicamentosAlerta = _json.data.restricciones;
var _recomendaciones= _json.data.recomendaciones;
this.idFicha.setDataValue(_idficha);
this.medico_tratante.setDataValue(_medico);
this.alergias.setDataValue(_alergias);
this.enfermedades.setDataValue(_enfermedades);
this.antecedentes.setDataValue(_antecedentesQuirurgicos);
this.medicamentos.setDataValue(_medicamentosActuales);
this.medicamentos_no_permitidos.setDataValue(_medicamentosAlerta);
this.recomendaciones.setDataValue(_recomendaciones);
} catch(e) {
console.error('ERROR IN _hqlAlergiasSuccess: ' + e);
}},
guardar_fichaClick: function(inSender, inEvent) {
try {
var _string= this.matricula_select_estudiante.getDisplayValue();
var _codigo= _string.substring(0,5);
console.log(_codigo);
if(_codigo >= 13000 && _codigo <=13999){
var idpersona= this.matricula_select_estudiante.getDataValue();
this._verificaExistenciaFichaMedica.input.setValue("idp", idpersona);
this._verificaExistenciaFichaMedica.update();
}
if(_codigo < 13000 || _codigo > 13999){
this.hsl_promociones.input.setValue("codigo", _codigo);
this.hsl_promociones.update();
}
/*var idpersona= this.matricula_select_estudiante.getDataValue();
this._verificaExistenciaFichaMedica.input.setValue("idp", idpersona);
this._verificaExistenciaFichaMedica.update();*/
} catch(e) {
console.error('ERROR IN guardar_fichaClick: ' + e);
}},
hsl_promocionesSuccess: function(inSender, inDeprecated) {
try {
var idpersona= this.matricula_select_estudiante.getDataValue();
var _json= this.hsl_promociones.getItem(0);
var _academica= _json.data.academico;
var _financiera= _json.data.financiera;
if(_academica == false && _financiera == true ){
alert("Mensaje informativo:\n\nEn el sistema no se ha registrado la aprobación de matrícula desde el punto de vista académico. Por favor comuníquese con el Director de Nivel.");
}
if(_financiera == false && _academica == true ){
alert("Mensaje informativo:\n\nEn el sistema no se ha registrado la aprobación de matrícula desde el punto de vista administrativo (CRA, Mantenimiento o el Area Financiera). Por favor comuníquese con Giovanny Renteria (Ext. 4103) para identificar el tema pendiente.");
}
if(_academica == false && _financiera == false){
alert("Mensaje informativo:\n\nEn el sistema no se ha registrado la aprobación de matrícula desde el punto de vista académico, ni administrativo (CRA, Mantenimiento o el Area Financiera). Por favor comuníquese con el Director de Nivel y con Giovanny Rentería (Ext. 4103) para identificar los temas pendientes.");
}
if(_academica == true && _financiera == true){
this._verificaExistenciaFichaMedica.input.setValue("idp", idpersona);
this._verificaExistenciaFichaMedica.update();
}
} catch(e) {
console.error('ERROR IN hsl_promocionesSuccess: ' + e);
}},
_verificaExistenciaFichaMedicaSuccess: function(inSender, inDeprecated) {
try {
var idpersona= this.matricula_select_estudiante.getDataValue();
var _json= main._verificaExistenciaFichaMedica.getItem(0);
var _cont= main._verificaExistenciaFichaMedica.getCount();
var _idficha= this.idFicha.getDataValue();
var _medico = this.medico_tratante.getDataValue();
var _alergias= this.alergias.getDataValue();
var _enfermedades= this.enfermedades.getDataValue();
var _antecedentes= this.antecedentes.getDataValue();
var _medicamentos= this.medicamentos.getDataValue();
var _medicamentosAlerta= this.medicamentos_no_permitidos.getDataValue();
var _recomendaciones= this.recomendaciones.getDataValue();
if(_cont == 1){
this._fichaMedicaVar.setValue("idfichaMedica", _idficha);
this._fichaMedicaVar.setValue("persona.idPersona", idpersona);
this._fichaMedicaVar.setValue("medicoTratante", _medico);
this._fichaMedicaVar.setValue("alergias", _alergias);
this._fichaMedicaVar.setValue("enfermedadesRecientes", _enfermedades);
this._fichaMedicaVar.setValue("antecedentesQuirurgicos", _antecedentes);
this._fichaMedicaVar.setValue("medicamentosActualidad", _medicamentos);
this._fichaMedicaVar.setValue("medicamentosAlerta", _medicamentosAlerta);
this._fichaMedicaVar.setValue("recomendacionesEspeciales", _recomendaciones);
this.formularioFichaMedica.setDataSet(this._fichaMedicaVar);
this.formularioFichaMedica.updateData();
}
if(_cont == 0){
this._fichaMedicaVar.setValue("persona.idPersona", idpersona);
this._fichaMedicaVar.setValue("medicoTratante", _medico);
this._fichaMedicaVar.setValue("alergias", _alergias);
this._fichaMedicaVar.setValue("enfermedadesRecientes", _enfermedades);
this._fichaMedicaVar.setValue("antecedentesQuirurgicos", _antecedentes);
this._fichaMedicaVar.setValue("medicamentosActualidad", _medicamentos);
this._fichaMedicaVar.setValue("medicamentosAlerta", _medicamentosAlerta);
this._fichaMedicaVar.setValue("recomendacionesEspeciales", _recomendaciones);
this.formularioFichaMedica.setDataSet(this._fichaMedicaVar);
this.formularioFichaMedica.insertData();
}
} catch(e) {
console.error('ERROR IN _verificaExistenciaFichaMedicaSuccess: ' + e);
}},
formularioFichaMedicaSuccess: function(inSender, inData) {
try {
var value= main.matricula_select_estudiante.getDataValue();
main._hqlAlergias.input.setValue("idp", value);
main._hqlAlergias.update();
/*botones*/
main.actualizacion_butt.hide();
main.responsable_butt.hide();
main.documentos_butt.hide();
main.pago_butt.hide();
main.preparacion_butt.hide();
main.enfermeria_butt.hide();
this.servicios_butt.show();
/*paneles*/
this.panel_documentos.hide();
this.pagos.hide();
this.ficha_medica.hide();
this.reponsable_pagos.hide();
this.impresion_documentos.hide();
this.pagos.hide();
this.page_ActualizaDatos.hide();
this.top_banner.hide();
this.panel_selector_principal.show();
this.header_message.show();
this.top_banner_servicios.show();
this.panel_botones.show();
this.panel_servicios.show();
this.panel_botones.show();
//se ejecuta el mismo boton de Alimentos();
var idpersona= this.matricula_select_estudiante.getDataValue();
this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
this.estudiante_gradoGrupoFamiliar.update();
this.transporte.hide();
this.seguro.hide();
this.alimentacion.show();
var _alergias= this.alergias.getDataValue();
this.detalles_importantes.setDataValue(_alergias);
} catch(e) {
console.error('ERROR IN formularioFichaMedicaSuccess: ' + e);
}},
iraTransporteClick: function(inSender, inEvent) {
try {
this.transporte_buttClick(inSender, inEvent);
} catch(e) {
console.error('ERROR IN iraTransporteClick: ' + e);
}},
iraSeguroClick: function(inSender, inEvent) {
try {
this.seguro_buttClick(inSender, inEvent);
} catch(e) {
console.error('ERROR IN iraSeguroClick: ' + e);
}},
iraFichaClick: function(inSender, inEvent) {
try {
this.enfermeria_buttClick(inSender, inEvent);
} catch(e) {
console.error('ERROR IN button10Click: ' + e);
}},
iraFinalizarClick: function(inSender, inEvent) {
try {
this.impresion_buttClick(inSender, inEvent);
} catch(e) {
console.error('ERROR IN iraFinalizarClick: ' + e);
}},
btClick: function(inSender, inEvent) {
try {
alert("sipp!!");
$("#main_bt").css({"background-color": "blue"});
} catch(e) {
console.error('ERROR IN btClick: ' + e);
}},
continuar_responsableClick: function(inSender, inEvent) {
try {
/*botones*/
this.actualizacion_butt.hide();
this.pago_butt.hide();
this.preparacion_butt.hide();
this.enfermeria_butt.hide();
this.servicios_butt.hide();
this.responsable_butt.hide();
this.documentos_butt.show();
/*botones de pago*/
this.pagar_pse.enable();
this.pagar_banco.enable();
/*panales*/
this.panel_documentos.hide();
this.pagos.hide();
this.panel_servicios.hide();
this.ficha_medica.hide();
this.panel_botones.hide();
this.panel_selector_principal.hide();
this.header_message.hide();
this.page_ActualizaDatos.hide();
this.reponsable_pagos.hide();
this.top_banner.hide();
this.impresion_documentos.show();
this.panel_documentos.show();
} catch(e) {
console.error('ERROR IN continuar_responsableClick: ' + e);
}
},
documentos_continuarClick: function(inSender, inEvent) {
try {
/*botones*/
this.actualizacion_butt.hide();
this.preparacion_butt.hide();
this.enfermeria_butt.hide();
this.servicios_butt.hide();
this.responsable_butt.hide();
this.documentos_butt.hide();
this.pago_butt.show();
/*panales*/
this.panel_servicios.hide();
this.ficha_medica.hide();
this.panel_botones.hide();
this.panel_selector_principal.hide();
this.header_message.hide();
this.page_ActualizaDatos.hide();
this.reponsable_pagos.hide();
this.impresion_documentos.hide();
this.panel_documentos.hide();
this.top_banner.hide();
this.pagos.show();
} catch(e) {
console.error('ERROR IN documentos_continuarClick: ' + e);
}
},
continuar_finalClick: function(inSender, inEvent) {
try {
/*botones*/
this.actualizacion_butt.hide();
this.enfermeria_butt.hide();
this.servicios_butt.hide();
this.responsable_butt.hide();
this.documentos_butt.hide();
this.pago_butt.hide();
this.preparacion_butt.show();
/*panales*/
this.panel_servicios.hide();
this.ficha_medica.hide();
this.panel_botones.hide();
this.panel_selector_principal.hide();
this.header_message.hide();
this.page_ActualizaDatos.hide();
this.reponsable_pagos.hide();
this.impresion_documentos.hide();
this.panel_documentos.hide();
this.pagos.hide();
this.top_banner.hide();
this.preparacion.show();
} catch(e) {
console.error('ERROR IN continuar_finalClick: ' + e);
}},
volver_buttClick: function(inSender, inEvent) {
try {
this.actualizacion_butt.hide();
this.preparacion_butt.hide();
this.preparacion.hide();
this.enfermeria_butt.show();
this.ficha_medica.show();
this.panel_selector_principal.show();
} catch(e) {
console.error('ERROR IN volver_buttClick: ' + e);
}},
/*navegacion servicios*/
asopadres_finalizarClick: function(inSender, inEvent) {
try {
/*botones*/
this.actualizacion_butt.hide();
this.documentos_butt.hide();
this.pago_butt.hide();
this.preparacion_butt.hide();
this.enfermeria_butt.hide();
this.servicios_butt.hide();
this.responsable_butt.show();
/*panales*/
this.panel_botones.hide();
this.panel_documentos.hide();
this.pagos.hide();
this.panel_servicios.hide();
this.ficha_medica.hide();
this.panel_botones.hide();
this.panel_selector_principal.hide();
this.header_message.hide();
this.page_ActualizaDatos.hide();
this.top_banner.hide();
this.top_banner_servicios.hide();
this.reponsable_pagos.show();
/*detalles de los reponsables de pagos*/
var _grupofamiliar=  this.a_getGroupCode.getDataValue();
this.impresion_grupoFamiliar.input.setValue("gf", _grupofamiliar);
this.impresion_grupoFamiliar.update();
this._verificarResponsablePagoShowPanel.input.setValue("idgf", _grupofamiliar);
this._verificarResponsablePagoShowPanel.update();
} catch(e) {
console.error('ERROR IN asopadres_finalizarClick: ' + e);
}
},
atras_asopadresClick: function(inSender, inEvent) {
try {
var idpersona= this.matricula_select_estudiante.getDataValue();
this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
this.estudiante_gradoGrupoFamiliar.update();
this.alimentacion.hide();
this.transporte.hide();
this.asopadres.hide();
this.seguro.show();
} catch(e) {
console.error('ERROR IN atras_asopadresClick: ' + e);
}
},
atras_seguroClick: function(inSender, inEvent) {
try {
var idpersona= this.matricula_select_estudiante.getDataValue();
this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
this.estudiante_gradoGrupoFamiliar.update();
this.alimentacion.hide();
this.seguro.hide();
this.asopadres.hide();
this.transporte.show();
} catch(e) {
console.error('ERROR IN atras_seguroClick: ' + e);
}
},
continuar_seguroClick: function(inSender, inEvent) {
try {
this.alimentacion.hide();
this.transporte.hide();
this.seguro.hide();
this.asopadres.show();
} catch(e) {
console.error('ERROR IN continuar_seguroClick: ' + e);
}
},
continuar_segurosClick: function(inSender, inEvent) {
try {
var idpersona= this.matricula_select_estudiante.getDataValue();
this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
this.estudiante_gradoGrupoFamiliar.update();
this.alimentacion.hide();
this.transporte.hide();
this.asopadres.hide();
this.seguro.show();
} catch(e) {
console.error('ERROR IN continuar_segurosClick: ' + e);
}
},
volver_transportesClick: function(inSender, inEvent) {
try {
var idpersona= this.matricula_select_estudiante.getDataValue();
this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
this.estudiante_gradoGrupoFamiliar.update();
this.transporte.hide();
this.seguro.hide();
this.asopadres.hide();
this.alimentacion.show();
} catch(e) {
console.error('ERROR IN volver_transportesClick: ' + e);
}
},
continuar_serviciosClick: function(inSender, inEvent) {
try {
var idpersona= this.matricula_select_estudiante.getDataValue();
this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
this.estudiante_gradoGrupoFamiliar.update();
this.alimentacion.hide();
this.seguro.hide();
this.asopadres.hide();
this.transporte.show();
} catch(e) {
console.error('ERROR IN continuar_serviciosClick: ' + e);
}
},
atras_preparacionClick: function(inSender, inEvent) {
try {
/*botones*/
this.actualizacion_butt.hide();
this.preparacion_butt.hide();
this.enfermeria_butt.hide();
this.servicios_butt.hide();
this.responsable_butt.hide();
this.documentos_butt.hide();
this.pago_butt.show();
/*panales*/
this.preparacion.hide();
this.panel_servicios.hide();
this.ficha_medica.hide();
this.panel_botones.hide();
this.panel_selector_principal.hide();
this.header_message.hide();
this.page_ActualizaDatos.hide();
this.reponsable_pagos.hide();
this.impresion_documentos.hide();
this.panel_documentos.hide();
this.top_banner.hide();
this.pagos.show();
} catch(e) {
console.error('ERROR IN atras_preparacionClick: ' + e);
}
},
volver_ficha_medicaClick: function(inSender, inEvent) {
try {
this.panel_servicios.hide();
this.ficha_medica.hide();
this.panel_botones.hide();
this.panel_selector_principal.hide();
this.header_message.hide();
this.top_banner.hide();
this.reponsable_pagos.hide();
this.page_ActualizaDatos.show();
main.page_ActualizaDatos.page.middlePanel.hide();
} catch(e) {
console.error('ERROR IN volver_ficha_medicaClick: ' + e);
}
},
volver_serviciosClick: function(inSender, inEvent) {
try {
/*botones*/
this.actualizacion_butt.hide();
this.enfermeria_butt.hide();
this.servicios_butt.hide();
this.responsable_butt.hide();
this.documentos_butt.hide();
this.pago_butt.hide();
this.preparacion_butt.hide();
this.enfermeria_butt.show();
/*paneles*/
this.panel_botones.hide();
this.panel_servicios.hide();
this.reponsable_pagos.hide();
this.impresion_documentos.hide();
this.pagos.hide();
this.page_ActualizaDatos.hide();
this.top_banner_servicios.hide();
this.top_banner.show();
this.panel_selector_principal.show();
this.header_message.show();
this.ficha_medica.show();
} catch(e) {
console.error('ERROR IN volver_serviciosClick: ' + e);
}
},
volver_responsableClick: function(inSender, inEvent) {
try {
/*botones*/
main.actualizacion_butt.hide();
main.responsable_butt.hide();
main.documentos_butt.hide();
main.pago_butt.hide();
main.preparacion_butt.hide();
main.enfermeria_butt.hide();
this.servicios_butt.show();
/*paneles*/
this.panel_documentos.hide();
this.pagos.hide();
this.ficha_medica.hide();
this.reponsable_pagos.hide();
this.impresion_documentos.hide();
this.pagos.hide();
this.page_ActualizaDatos.hide();
this.top_banner.hide();
this.panel_selector_principal.show();
this.header_message.show();
this.top_banner_servicios.show();
this.panel_botones.show();
this.panel_servicios.show();
this.panel_botones.show();
this.transporte.hide();
this.seguro.hide();
this.asopadres.hide();
this.alimentacion.show();
} catch(e) {
console.error('ERROR IN volver_responsableClick: ' + e);
}
},
volver_impresionClick: function(inSender, inEvent) {
try {
/*botones*/
this.actualizacion_butt.hide();
this.documentos_butt.hide();
this.pago_butt.hide();
this.preparacion_butt.hide();
this.enfermeria_butt.hide();
this.servicios_butt.hide();
this.responsable_butt.show();
/*panales*/
this.impresion_documentos.hide();
this.panel_botones.hide();
this.panel_documentos.hide();
this.pagos.hide();
this.panel_servicios.hide();
this.ficha_medica.hide();
this.panel_botones.hide();
this.panel_selector_principal.hide();
this.header_message.hide();
this.page_ActualizaDatos.hide();
this.top_banner.hide();
this.top_banner_servicios.hide();
this.reponsable_pagos.show();
/*detalles de los reponsables de pagos*/
var _grupofamiliar=  this.a_getGroupCode.getDataValue();
this.impresion_grupoFamiliar.input.setValue("gf", _grupofamiliar);
this.impresion_grupoFamiliar.update();
this._verificarResponsablePagoShowPanel.input.setValue("idgf", _grupofamiliar);
this._verificarResponsablePagoShowPanel.update();
} catch(e) {
console.error('ERROR IN volver_impresionClick: ' + e);
}},
volver_pagoClick: function(inSender, inEvent) {
try {
/*botones*/
this.actualizacion_butt.hide();
this.pago_butt.hide();
this.preparacion_butt.hide();
this.enfermeria_butt.hide();
this.servicios_butt.hide();
this.responsable_butt.hide();
this.documentos_butt.show();
/*botones de pago*/
this.pagar_pse.enable();
this.pagar_banco.enable();
/*panales*/
this.panel_documentos.hide();
this.pagos.hide();
this.panel_servicios.hide();
this.ficha_medica.hide();
this.panel_botones.hide();
this.panel_selector_principal.hide();
this.header_message.hide();
this.page_ActualizaDatos.hide();
this.reponsable_pagos.hide();
this.top_banner.hide();
this.impresion_documentos.show();
this.panel_documentos.show();
} catch(e) {
console.error('ERROR IN volver_pagoClick: ' + e);
}},
a_actualizaServicioAsopadresSuccess: function(inSender, inDeprecated) {
try {
this.a_listadoServiciosAsopadres.update();
} catch(e) {
console.error('ERROR IN a_actualizaServicioAsopadresSuccess: ' + e);
}
},
_end: 0
});

Main.widgets = {
getCodigoFamilia: ["wm.ServiceVariable", {"operation":"getUserId","service":"securityService","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getUserIdInputs"}, {}]
}],
logout: ["wm.ServiceVariable", {"operation":"logout","service":"securityService"}, {"onResult":"salir"}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
salir: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Login\"","targetProperty":"pageName"}, {}]
}]
}]
}],
personaLiveVariable3: ["wm.LiveVariable", {"autoUpdate":false,"designMaxResults":10,"ignoreCase":true,"liveSource":"app.personaLiveView3","maxResults":10,"startUpdate":false,"type":"com.aprendoz_desarrollo.data.Persona"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"source":"tabla_familia_principal.selectedItem.id.idPersona","targetProperty":"filter.idPersona"}, {}]
}]
}],
nacionalidad: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Pais","startUpdate":false,"type":"com.aprendoz_desarrollo.data.Pais"}, {"onBeforeUpdate":"nacionalidadBeforeUpdate","onSuccess":"nacionalidadSuccess"}],
estados: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.EstadoDepartamento","startUpdate":false,"type":"com.aprendoz_desarrollo.data.EstadoDepartamento"}, {"onBeforeUpdate":"estadosBeforeUpdate","onSuccess":"estadosSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"idpCodigo.dataValue","targetProperty":"filter.pais.idPais"}, {}]
}]
}],
listaEstados2: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.EstadoDepartamento","startUpdate":false,"type":"com.aprendoz_desarrollo.data.EstadoDepartamento"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"selectEditor1.dataValue","targetProperty":"filter.pais.pais"}, {}]
}]
}],
listaSY: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Sy","orderBy":"desc: schoolYear","startUpdate":false,"type":"com.aprendoz_desarrollo.data.Sy"}, {}],
ultimaCalificacionLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.CalificacionFinal","maxResults":100,"startUpdate":false,"type":"com.aprendoz_desarrollo.data.CalificacionFinal"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"aprendizajes.selectedItem.idAprendizaje","targetProperty":"filter.aprendizaje.idAprendizaje"}, {}],
wire1: ["wm.Wire", {"source":"personaDataGrid1.selectedItem.idPersona","targetProperty":"filter.persona.idPersona"}, {}]
}]
}],
Vista_Alumn_Asig: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.PadresVistaInscAlumAsig","orderBy":"asc: id.asignatura","startUpdate":false,"type":"com.aprendoz_desarrollo.data.PadresVistaInscAlumAsig"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"personaDataGridX.selectedItem.id.idPersona","targetProperty":"filter.id.personaIdPersona"}, {}],
wire1: ["wm.Wire", {"source":"selectEditor2.dataValue","targetProperty":"filter.id.idSy"}, {}]
}]
}],
Vista_Ultima_Calif: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.PadresVistaCalifFinal","maxResults":5,"startUpdate":false,"type":"com.aprendoz_desarrollo.data.PadresVistaCalifFinal"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"personaDataGridX.selectedItem.id.idPersona","targetProperty":"filter.id.personaIdPersona"}, {}],
wire1: ["wm.Wire", {"source":"aprendizajes.selectedItem.id.idAprendizaje","targetProperty":"filter.id.aprendizajeIdAprendizaje"}, {}]
}]
}],
listaGrado: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Grado","startUpdate":false,"type":"com.aprendoz_desarrollo.data.Grado"}, {"onBeforeUpdate":"listaGradoBeforeUpdate","onSuccess":"listaGradoSuccess"}],
listaCurso: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Curso","startUpdate":false,"type":"com.aprendoz_desarrollo.data.Curso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"gradoIngresoEditor1.dataValue","targetProperty":"filter.grado.idGrado"}, {}]
}]
}],
list_nacionalidades: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Nacionalidades","startUpdate":false,"type":"com.aprendoz_desarrollo.data.Nacionalidades"}, {}],
l_documentos_Vista_Personas_promocion: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.PadresVistaPersonasPromocion","startUpdate":false,"type":"com.aprendoz_desarrollo.data.PadresVistaPersonasPromocion"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"source":"ao_escolar_box.dataValue","targetProperty":"filter.id.syIdSy"}, {}],
wire: ["wm.Wire", {"source":"a_getGroupCode.dataValue","targetProperty":"filter.id.idGrupoFamiliar"}, {}]
}]
}],
a_sv_sendMail_request: ["wm.ServiceVariable", {"operation":"sendEmailNotification","service":"EnviarMail"}, {"onBeforeUpdate":"a_sv_sendMail_requestBeforeUpdate","onError":"a_sv_sendMail_requestError","onSuccess":"a_sv_sendMail_requestSuccess"}, {
input: ["wm.ServiceInput", {"type":"sendEmailNotificationInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"transporte_email.dataValue","targetProperty":"correo"}, {}]
}]
}]
}],
transporte_lista_rutas: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.VistaPadresRutasAlumnos","startUpdate":false,"type":"com.aprendoz_desarrollo.data.VistaPadresRutasAlumnos"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"transporte_alumnos.selectedItem.id.idPersona","targetProperty":"filter.id.idPersona"}, {}]
}]
}],
transporte_lista_personas: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.VistaPadresTransportePersonas","startUpdate":false,"type":"com.aprendoz_desarrollo.data.VistaPadresTransportePersonas"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"a_getGroupCode.dataValue","targetProperty":"filter.id.idGrupoFamiliar"}, {}]
}]
}],
a_insertData_logs: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.LogDocentes"}, {}],
novedadesLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.novedadesLiveView1","startUpdate":false,"type":"com.aprendoz_desarrollo.data.Novedades"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"transporte_alumnos.selectedItem.id.idPersona","targetProperty":"filter.persona.idPersona"}, {}]
}]
}],
rutasLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.rutasLiveView1","startUpdate":false,"type":"com.aprendoz_desarrollo.data.Rutas"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"transporte_alumnos.selectedItem.id.idGrupoFamiliar","targetProperty":"filter.grupoFamiliar.idGrupoFamiliar"}, {}]
}]
}],
a_lista_grupoFamiliar: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.GrupoFamiliar","startUpdate":false,"type":"com.aprendoz_desarrollo.data.GrupoFamiliar"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"a_getGroupCode.dataValue","targetProperty":"filter.idGrupoFamiliar"}, {}]
}]
}],
a_lista_tipo_transporte: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.TipoTransporte","startUpdate":false,"type":"com.aprendoz_desarrollo.data.TipoTransporte"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"idTipoTransporte.dataValue","targetProperty":"filter.idtipoTransporte"}, {}]
}]
}],
inscalumtransporteLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.inscalumtransporteLiveView1","startUpdate":false,"type":"com.aprendoz_desarrollo.data.InscAlumTransporte"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"transporte_alumnos.selectedItem.id.idPersona","targetProperty":"filter.persona.idPersona"}, {}]
}]
}],
transporte_lista_rutas_dias: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Rutas","startUpdate":false,"type":"com.aprendoz_desarrollo.data.Rutas"}, {}],
l_familia_tipo_persona: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.TipoPersona","startUpdate":false,"type":"com.aprendoz_desarrollo.data.TipoPersona"}, {}],
a_getUserNameSv: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {"onSuccess":"a_getUserNameSvSuccess"}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
a_getInforUser: ["wm.ServiceVariable", {"operation":"personaGetInfo","service":"aprendoz_desarrollo"}, {"onSuccess":"a_getInforUserSuccess"}, {
input: ["wm.ServiceInput", {"type":"personaGetInfoInputs"}, {}]
}],
l_sv_solicitudes_informacionPadre: ["wm.ServiceVariable", {"operation":"mailPadre","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"mailPadreInputs"}, {}]
}],
l_sv_solicitudes_informacionMadre: ["wm.ServiceVariable", {"operation":"mailMadre","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"mailMadreInputs"}, {}]
}],
l_sv_solicitudes_informacionAcudiente: ["wm.ServiceVariable", {"operation":"mailAcudiente","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"mailAcudienteInputs"}, {}]
}],
a_getTipoPersona: ["wm.ServiceVariable", {"operation":"getTipoPersonaByUser","service":"aprendoz_desarrollo"}, {"onSuccess":"a_getTipoPersonaSuccess"}, {
input: ["wm.ServiceInput", {"type":"getTipoPersonaByUserInputs"}, {}]
}],
a_getCordinators_byId: ["wm.ServiceVariable", {"operation":"getCoordinatorInfo","service":"aprendoz_desarrollo"}, {"onSuccess":"a_getCordinators_byIdSuccess"}, {
input: ["wm.ServiceInput", {"type":"getCoordinatorInfoInputs"}, {}]
}],
a_sv_sendMailPermanent: ["wm.ServiceVariable", {"operation":"sendEmailNotification","service":"EnviarMailPermanente"}, {"onBeforeUpdate":"a_sv_sendMailPermanentBeforeUpdate","onError":"a_sv_sendMailPermanentError","onSuccess":"a_sv_sendMailPermanentSuccess"}, {
input: ["wm.ServiceInput", {"type":"sendEmailNotificationInputs"}, {}]
}],
isAuthenticatedSV: ["wm.ServiceVariable", {"operation":"isAuthenticated","service":"securityService"}, {"onSuccess":"isAuthenticatedSVSuccess"}, {
input: ["wm.ServiceInput", {"type":"isAuthenticatedInputs"}, {}]
}],
getCount: ["wm.ServiceVariable", {"operation":"returExitsValue","service":"aprendoz_desarrollo"}, {"onSuccess":"getCountSuccess"}, {
input: ["wm.ServiceInput", {"type":"returExitsValueInputs"}, {}]
}],
iraCountDown: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"SesionExpirada\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":"true","targetProperty":"hideControls"}, {}]
}]
}]
}],
isUpdatedGrupoFamiliar: ["wm.ServiceVariable", {"operation":"returnExistsValueGrupoFamiliar","service":"aprendoz_desarrollo"}, {"onSuccess":"isUpdatedGrupoFamiliarSuccess"}, {
input: ["wm.ServiceInput", {"type":"returnExistsValueGrupoFamiliarInputs"}, {}]
}],
estudiante_grupoFamiliar: ["wm.ServiceVariable", {"operation":"listadoEstudiantesGrupoFamiliar","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"listadoEstudiantesGrupoFamiliarInputs"}, {}]
}],
estudiante_gradoGrupoFamiliar: ["wm.ServiceVariable", {"operation":"getGradoUsuario","service":"aprendoz_desarrollo"}, {"onSuccess":"estudiante_gradoGrupoFamiliarSuccess"}, {
input: ["wm.ServiceInput", {"type":"getGradoUsuarioInputs"}, {}]
}],
a_listadoServicios: ["wm.ServiceVariable", {"operation":"getTodosCostos","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"getTodosCostosInputs"}, {}]
}],
a_listadoServiciosAlimentos: ["wm.ServiceVariable", {"operation":"getTodosCostos","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"getTodosCostosInputs"}, {}]
}],
a_actualizaServicio: ["wm.ServiceVariable", {"operation":"updateServicios","service":"aprendoz_desarrollo"}, {"onSuccess":"a_actualizaServicioSuccess"}, {
input: ["wm.ServiceInput", {"type":"updateServiciosInputs"}, {}]
}],
a_actualizaServicioTrans: ["wm.ServiceVariable", {"operation":"updateServicios","service":"aprendoz_desarrollo"}, {"onSuccess":"a_actualizaServicioTransSuccess"}, {
input: ["wm.ServiceInput", {"type":"updateServiciosInputs"}, {}]
}],
isUpdatedGrupoFamiliarBool: ["wm.ServiceVariable", {"operation":"returnExistsValueGrupoFamiliar","service":"aprendoz_desarrollo"}, {"onSuccess":"isUpdatedGrupoFamiliarBoolSuccess"}, {
input: ["wm.ServiceInput", {"type":"returnExistsValueGrupoFamiliarInputs"}, {}]
}],
a_listadoServiciosSeguros: ["wm.ServiceVariable", {"operation":"getTodosCostos","service":"aprendoz_desarrollo"}, {"onSuccess":"a_listadoServiciosSegurosSuccess"}, {
input: ["wm.ServiceInput", {"type":"getTodosCostosInputs"}, {}]
}],
a_actualizaServicioSeg: ["wm.ServiceVariable", {"operation":"updateServicios","service":"aprendoz_desarrollo"}, {"onSuccess":"a_actualizaServicioSegSuccess"}, {
input: ["wm.ServiceInput", {"type":"updateServiciosInputs"}, {}]
}],
impresion_grupoFamiliar: ["wm.ServiceVariable", {"operation":"getInscPersonaGrupoFamiliar","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"getInscPersonaGrupoFamiliarInputs"}, {}]
}],
updateResponsable: ["wm.ServiceVariable", {"operation":"updateInscPersonaGrupoFamiliar","service":"aprendoz_desarrollo"}, {"onSuccess":"updateResponsableSuccess"}, {
input: ["wm.ServiceInput", {"type":"updateInscPersonaGrupoFamiliarInputs"}, {}]
}],
a_informacionUsuario: ["wm.ServiceVariable", {"operation":"showInformationUser","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"showInformationUserInputs"}, {}]
}],
getNuevo: ["wm.ServiceVariable", {"operation":"haveNewIntegrants","service":"aprendoz_desarrollo"}, {"onSuccess":"getNuevoSuccess"}, {
input: ["wm.ServiceInput", {"type":"haveNewIntegrantsInputs"}, {}]
}],
getNombreAlumno: ["wm.ServiceVariable", {"operation":"getUserbyIdPersona","service":"aprendoz_desarrollo"}, {"onSuccess":"getNombreAlumnoSuccess"}, {
input: ["wm.ServiceInput", {"type":"getUserbyIdPersonaInputs"}, {}]
}],
alimentoVar: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.FichaMedica"}, {}],
a_anuncio: ["wm.ServiceVariable", {"operation":"_getAnuncio","service":"aprendoz_desarrollo"}, {"onSuccess":"a_anuncioSuccess"}, {
input: ["wm.ServiceInput", {"type":"_getAnuncioInputs"}, {}]
}],
hsl_promociones: ["wm.ServiceVariable", {"operation":"_hqlPromociones","service":"aprendoz_desarrollo"}, {"onSuccess":"hsl_promocionesSuccess"}, {
input: ["wm.ServiceInput", {"type":"_hqlPromocionesInputs"}, {}]
}],
a_listadoServiciosAsopadres: ["wm.ServiceVariable", {"operation":"getTodosCostos","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"getTodosCostosInputs"}, {}]
}],
a_actualizaServicioAsopadres: ["wm.ServiceVariable", {"operation":"updateServicios","service":"aprendoz_desarrollo"}, {"onSuccess":"a_actualizaServicioAsopadresSuccess"}, {
input: ["wm.ServiceInput", {"type":"updateServiciosInputs"}, {}]
}],
layoutBox1: ["wm.Layout", {"height":"908px","horizontalAlign":"left","verticalAlign":"top","width":"740px"}, {}, {
FancyCentered: ["wm.Template", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
FancyCentered1: ["wm.Template", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
templateMain: ["wm.Template", {"_classes":{"domNode":["template-main"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
content: ["wm.Panel", {"freeze":true,"height":"800px","horizontalAlign":"left","verticalAlign":"top","width":"950px"}, {}, {
panelHeader: ["wm.Panel", {"_classes":{"domNode":["template-header-panel","wm_BackgroundColor_White"]},"height":"80px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}],
panel1: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
templateTopLeft: ["wm.Panel", {"_classes":{"domNode":["template-top-left"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}],
templateTop: ["wm.Panel", {"_classes":{"domNode":["template-top-center"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
templateTopRight: ["wm.Panel", {"_classes":{"domNode":["template-top-right"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}]
}],
panel2: ["wm.Panel", {"freeze":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
templateLeft: ["wm.Panel", {"_classes":{"domNode":["template-left"]},"freeze":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}],
templateContent: ["wm.Panel", {"_classes":{"domNode":["template-content"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
aprendoz_header: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
logo: ["wm.Picture", {"aspect":"v","height":"100%","showing":false,"source":"resources/images/logos/logo.jpg","width":"150px"}, {}],
anuncioLivePanel1: ["wm.LivePanel", {"_classes":{"domNode":["wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px"]},"border":"2","borderColor":"#B22222","horizontalAlign":"left","padding":"3","showing":false,"verticalAlign":"top"}, {}, {
html2: ["wm.Html", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_TextAlign_Justify"]},"height":"100%","html":"<b><font color=\"black\"><center><h4>¡BIENVENIDOS A UN NUEVO Y MAGNÍFICO AÑO!</h4></center></font></b><h5><font color=\"black\">Por favor mantenga actualizada la información de domicilio y contacto durante el nuevo año escolar ingresando a nuestra sección de 'ACTUALIZACIÓN DE DATOS'. <br><br>Gracias y éxitos para este año.</font></h5>","minDesktopHeight":15}, {}]
}],
spacer1: ["wm.Spacer", {"height":"11px","width":"100%"}, {}],
label11: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"align":"center","caption":"Salir","height":"23px","padding":"4","width":"46px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
picture3: ["wm.Picture", {"height":"33px","source":"resources/images/Doorex.png","width":"47px"}, {"onclick":"logout"}],
layers2: ["wm.Layers", {"height":"120%","showing":false,"width":"300px"}, {}, {
layer2: ["wm.Layer", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_SilverBlueTheme_LightBlueOutsetPanel"]},"borderColor":"","caption":"layer2","horizontalAlign":"right","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
panel4: ["wm.Panel", {"height":"35px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
picture4: ["wm.Picture", {"aspect":"v","height":"100%","showing":false,"source":"resources/images/Calendar.ico","width":"28px"}, {}],
dateEditor1: ["wm.DateEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"displayValue":"08/04/2014","padding":"2","readonly":true,"showing":false,"width":"91px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}],
editor: ["wm._DateEditor", {}, {}]
}],
spacer2: ["wm.Spacer", {"height":"48px","width":"5px"}, {}],
picture5: ["wm.Picture", {"aspect":"v","height":"100%","source":"resources/images/Wall%20Clock.ico","width":"28px"}, {}],
timeEditor1: ["wm.TimeEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"displayValue":"07:12 a.m.","padding":"2","readonly":true,"width":"88px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}],
editor: ["wm._TimeEditor", {}, {}]
}]
}],
panel7: ["wm.Panel", {"height":"51px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
layers1: ["wm.Layers", {}, {}, {
layer3: ["wm.Layer", {"borderColor":"","caption":"layer3","horizontalAlign":"right","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
user: ["wm.TextEditor", {"_classes":{"domNode":["wm_TextAlign_Center","wm_FontSizePx_14px","wm_TextDecoration_Bold"],"captionNode":["wm_TextAlign_Center","wm_TextDecoration_Bold"]},"captionAlign":"center","display":"Number","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._NumberEditor", {}, {}]
}],
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Verdana","wm_TextDecoration_Bold"]},"align":"center","caption":"BIENVENIDOS A: APRENDOZ PADRES","height":"20px","padding":"4","showing":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
picture1: ["wm.Picture", {"aspect":"h","height":"28px","source":"resources/images/awesome-icon.png","width":"34px"}, {"onclick":"picture1Click"}],
label2: ["wm.Label", {"align":"right","caption":"<u>Capturar Pantalla</u>","height":"20px","padding":"4","width":"96%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
}]
}]
}]
}],
Actualizacion: ["wm.TabLayers", {}, {}, {
Informacion_familiar: ["wm.Layer", {"caption":"INFO FAMILIAR","horizontalAlign":"left","margin":"2,0,2,0","showing":false,"verticalAlign":"top"}, {}, {
user2: ["wm.TextEditor", {"caption":"user2","disabled":true,"padding":"2","styles":{}}, {"onchange":"Vista_Alumnos2"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"getCodigoFamilia.dataValue","targetProperty":"dataValue"}, {}]
}],
editor: ["wm._TextEditor", {}, {}]
}]
}],
matricula: ["wm.Layer", {"caption":"PROCESO DE MATRÍCULA","horizontalAlign":"left","margin":"2,0,2,0","padding":"5","verticalAlign":"top"}, {}, {
panel_botones_pasos: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
bt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"margin":"4","showing":false,"width":"96px"}, {"onclick":"btClick"}],
actualizacion_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"borderColor":"#1E0E67","caption":"1. ACTUALIZACIÓN DE DATOS","height":"100%","margin":"4","width":"100%"}, {"onclick":"actualizacion_buttClick"}],
enfermeria_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"borderColor":"#1E0E67","caption":"2. FICHA DE SALUD","height":"100%","margin":"4","showing":false,"width":"100%"}, {"onclick":"enfermeria_buttClick"}],
servicios_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"borderColor":"#1E0E67","caption":"3. INFORMACIÓN Y SELECCIÓN DE SERVICIOS","height":"100%","margin":"4","showing":false,"width":"100%"}, {"onclick":"servicios_buttClick"}],
responsable_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"borderColor":"#1E0E67","caption":"4. SELECCIONAR EL RESPONSABLE DE PAGOS","height":"100%","margin":"4","showing":false,"width":"100%"}, {}],
documentos_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"borderColor":"#1E0E67","caption":"5. IMPRESIÓN DE DOCUMENTOS","height":"100%","margin":"4","showing":false,"width":"100%"}, {}],
pago_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"borderColor":"#1E0E67","caption":"6. SELECCIONAR MODALIDAD DE PAGO","height":"100%","margin":"4","showing":false,"width":"100%"}, {}],
preparacion_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"borderColor":"#1E0E67","caption":"7. PREPARACIÓN DE DOCUMENTOS","height":"100%","margin":"4","showing":false,"width":"100%"}, {}]
}],
top_banner: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px"]},"border":"1","borderColor":"#aaa","height":"132px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
header_iframe: ["wm.IFrame", {"height":"140px","source":"http://bit2media.com/servicios/bnr_salud/bnr_salud.html","width":"100%"}, {}]
}],
top_banner_servicios: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px"]},"border":"1","borderColor":"#aaa","height":"132px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
header_iframe1: ["wm.IFrame", {"height":"140px","source":"http://aprendoz.rochester.edu.co/recursos/bnr_servicios/bnr_servicios.html","width":"100%"}, {}]
}],
header_message: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"align":"center","caption":"Por favor seleccione el estudiante, pase por cada una de las pestañas y agregue los servicios que va a contratar","height":"48px","padding":"4","showing":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
panel_selector_principal: ["wm.Panel", {"height":"32px","horizontalAlign":"center","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"middle","width":"100%"}, {}, {
matricula_select_estudiante: ["wm.SelectEditor", {"caption":"Seleccione el estudiante","captionSize":"72%","height":"28px","padding":"2","width":"400px"}, {"onchange":"matricula_select_estudianteChange"}, {
editor: ["wm._SelectEditor", {"dataField":"idpersona","displayExpression":"${codigo}+\" - \"+${completo}","displayField":"completo","required":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"estudiante_grupoFamiliar","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
page_ActualizaDatos: ["wm.PageContainer", {"deferLoad":true,"pageName":"ActualizaDatos","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}],
ficha_medica: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"center","lock":true,"padding":"0, 0, 0, 250","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
label19: ["wm.Label", {"align":"center","caption":"DATOS DEL ESTUDIANTE","height":"30px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
idFicha: ["wm.NumberEditor", {"caption":"id ficha tecnica","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
editor: ["wm._NumberEditor", {}, {}]
}],
nombrecompleto: ["wm.TextEditor", {"caption":"Nombre y Apellidos","height":"32px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
panel41: ["wm.Panel", {"height":"35px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
edad: ["wm.NumberEditor", {"caption":"Edad","captionSize":"75%","display":"Text","height":"32px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
gradoIngreso: ["wm.TextEditor", {"caption":"Grado Ingreso","height":"32px","padding":"2","readonly":true,"singleLine":false,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}]
}],
label20: ["wm.Label", {"align":"center","caption":"INFORMACIÓN MÉDICA","height":"30px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
panel42: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
rh: ["wm.TextEditor", {"caption":"Grupo sanguineo","captionSize":"80%","height":"100%","padding":"2","readonly":true,"width":"150%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
eps: ["wm.TextEditor", {"caption":"EPS","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
prepagada: ["wm.TextEditor", {"caption":"PREPAGADA","height":"100%","padding":"2","readonly":true,"width":"150%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}]
}],
panel43: ["wm.Panel", {"height":"35px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
telefono: ["wm.TextEditor", {"caption":"Télefono","captionSize":"75%","height":"32px","padding":"2","readonly":true,"width":"50%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
clinica_emergencia: ["wm.NumberEditor", {"caption":"Clinica de Emergencia","captionSize":"80%","display":"Text","height":"32px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}]
}],
seguro_medico: ["wm.TextEditor", {"caption":"¿Tendrá el seguro de accidentes de Suramericana? ","captionSize":"80%","height":"32px","padding":"2","showing":false,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
medico_tratante: ["wm.TextEditor", {"caption":"Médico Tratante","captionSize":"80%","height":"32px","padding":"2","width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
panel16: ["wm.Panel", {"height":"54px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
alergias: ["wm.TextAreaEditor", {"caption":"Alergias a medicamentos o alimentos","captionAlign":"left","captionPosition":"top","height":"50px","padding":"2","width":"100%"}, {}, {
editor: ["wm._TextAreaEditor", {}, {}]
}],
picture6: ["wm.Picture", {"height":"100%","source":"http://www.seoclerks.com/files/user/images/ArrowDownOrange.gif","width":"50px"}, {}]
}],
enfermedades: ["wm.TextAreaEditor", {"caption":"Enfermedades Recientes","captionAlign":"left","captionPosition":"top","height":"50px","padding":"2","width":"100%"}, {}, {
editor: ["wm._TextAreaEditor", {}, {}]
}],
antecedentes: ["wm.TextAreaEditor", {"caption":"Antecedentes Quirúrgicos","captionAlign":"left","captionPosition":"top","height":"50px","padding":"2","width":"100%"}, {}, {
editor: ["wm._TextAreaEditor", {}, {}]
}],
medicamentos: ["wm.TextAreaEditor", {"caption":"Medicamentos que toma en la actualidad","captionAlign":"left","captionPosition":"top","height":"50px","padding":"2","width":"100%"}, {}, {
editor: ["wm._TextAreaEditor", {}, {}]
}],
medicamentos_no_permitidos: ["wm.TextAreaEditor", {"caption":"Medicamentos que no debe recibir","captionAlign":"left","captionPosition":"top","height":"50px","padding":"2","width":"100%"}, {}, {
editor: ["wm._TextAreaEditor", {}, {}]
}],
recomendaciones: ["wm.TextAreaEditor", {"caption":"Recomendaciones especiales","captionAlign":"left","captionPosition":"top","height":"50px","padding":"2","width":"100%"}, {}, {
editor: ["wm._TextAreaEditor", {}, {}]
}],
formularioFichaMedica: ["wm.LiveForm", {"height":"100px","horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {"onSuccess":"formularioFichaMedicaSuccess"}],
nav_panel_fichamedica: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"58px","horizontalAlign":"right","layoutKind":"left-to-right","lock":true,"padding":"4","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
iraFinalizar: ["wm.Button", {"borderColor":"#Aaa","caption":"Continuar al paso No. 5","iconMargin":"0 0px 0 0","iconUrl":"resources/images/buttons/bank0.png","margin":"4","width":"260px"}, {"onclick":"iraFinalizarClick"}]
}],
panel48: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
volver_ficha_medica: ["wm.Button", {"borderColor":"#1c74b3","caption":"Atras","height":"100%","margin":"4","width":"96px"}, {"onclick":"volver_ficha_medicaClick"}],
guardar_ficha: ["wm.Button", {"borderColor":"#1c74b3","caption":"Guardar","height":"100%","margin":"4","width":"120px"}, {"onclick":"guardar_fichaClick"}],
actualizar_ficha: ["wm.Button", {"borderColor":"#aaa","caption":"Actualizar","height":"100%","margin":"4","showing":false,"width":"94px"}, {"onclick":"actualizar_fichaClick"}]
}]
}],
panel_botones: ["wm.Panel", {"height":"52px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
home_butt: ["wm.Picture", {"aspect":"h","border":"1","borderColor":"#aaa","height":"100%","margin":"4","showing":false,"source":"resources/images/buttons/home.png","width":"60px"}, {"onclick":"home_buttClick"}],
volver_servicios: ["wm.Button", {"borderColor":"#1c74b3","caption":"Atras","height":"100%","margin":"4","width":"70px"}, {"onclick":"volver_serviciosClick"}],
alimento_butt: ["wm.Button", {"borderColor":"#aaa","caption":"1. Alimentación","disabled":true,"height":"100%","margin":"4","showing":false,"width":"115px"}, {"onclick":"alimento_buttClick"}],
transporte_butt: ["wm.Button", {"borderColor":"#aaa","caption":"2. Transporte","disabled":true,"height":"100%","margin":"4","showing":false,"width":"105px"}, {"onclick":"transporte_buttClick"}],
seguro_butt: ["wm.Button", {"borderColor":"#aaa","caption":"3. Seguros","disabled":true,"height":"100%","margin":"4","showing":false,"width":"96px"}, {"onclick":"seguro_buttClick"}],
impresion_butt: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White"]},"borderColor":"#3079ED","caption":"Finalizar y pagar","disabled":true,"height":"100%","iconHeight":"18px","iconUrl":"resources/images/buttons/print.png","iconWidth":"18px","margin":"4","showing":false,"width":"180px"}, {"onclick":"impresion_buttClick"}],
asopadres_butt: ["wm.Button", {"borderColor":"#aaa","caption":"4. Información de asopadres","disabled":true,"height":"100%","margin":"4","showing":false,"width":"190px"}, {"onclick":"asopadres_buttClick"}]
}],
panel_servicios: ["wm.Panel", {"autoScroll":true,"border":"1","borderColor":"#bbbbbb","height":"100%","horizontalAlign":"left","lock":true,"padding":"10","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
alimentacion: ["wm.Panel", {"height":"730px","horizontalAlign":"left","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
iFrame2: ["wm.IFrame", {"height":"450px","source":"http://aprendoz.rochester.edu.co/recursos/alimentacion/alimentacion.html","width":"100%"}, {}],
panel27: ["wm.Panel", {"height":"19px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}],
panel30: ["wm.Panel", {"height":"110px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
alimentosDataGrid: ["wm.DataGrid", {"width":"70%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"a_listadoServiciosAlimentos","targetProperty":"dataSet"}, {}]
}],
nombre2: ["wm.DataGridColumn", {"caption":"Nombre servicio","columnWidth":"100%","field":"nombre","index":2}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
idcosto2: ["wm.DataGridColumn", {"caption":" ","columnWidth":"20px","dataExpression":"'<img src=\"resources/images/imagelists/buy.gif\" height=\"16\" width=\"16\" /><center>'","display":"Number","field":"idcosto"}, {}, {
format1: ["wm.NumberFormatter", {}, {}]
}],
valor2: ["wm.DataGridColumn", {"caption":"Valor (COP)","dataExpression":"\"$ \"+${valor}","display":"Number","field":"valor","index":3}, {}, {
format1: ["wm.NumberFormatter", {}, {}]
}],
inscrito2: ["wm.DataGridColumn", {"caption":"Inscrito","columnWidth":"47px","dataExpression":"if(${inscrito}==true){\t'<img src=\"resources/images/imagelists/ok.gif\" height=\"16\" width=\"16\" /><center>' \t}  if(${inscrito}==false){\t'<img src=\"resources/images/imagelists/bad.png\" height=\"16\" width=\"16\" /><center>' }","field":"inscrito","index":4}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
column1: ["wm.DataGridColumn", {"caption":"+","columnWidth":"45px","field":"idcosto","index":1}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}]
}],
controls_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"110px"}, {}, {
agregar_alim: ["wm.Button", {"borderColor":"#538312","caption":"+ Agregar","margin":"0","width":"102px"}, {"onclick":"agregar_alimClick"}],
spacer15: ["wm.Spacer", {"height":"4px","width":"96px"}, {}],
quitar_alim: ["wm.Button", {"borderColor":"#980c10","caption":"- Quitar","margin":"0","width":"102px"}, {"onclick":"quitar_alimClick"}]
}],
spacer28: ["wm.Spacer", {"height":"48px","width":"115px"}, {}]
}],
panel46: ["wm.Panel", {"height":"33px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
picture12: ["wm.Picture", {"height":"18px","showing":false,"source":"resources/images/buttons/nearView.png","width":"22px"}, {}],
label22: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Alergias señaladas en la ficha médica","height":"26px","padding":"4","singleLine":false,"width":"70%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
spacer25: ["wm.Spacer", {"height":"48px","width":"115px"}, {}]
}],
panel45: ["wm.Panel", {"height":"65px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
detalles_importantes: ["wm.TextEditor", {"height":"60px","padding":"2","singleLine":false,"width":"70%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
panel47: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"110px"}, {}, {
guardar_restricciones_alimenticias: ["wm.Button", {"borderColor":"#Aaa","caption":"Guardar detalles","margin":"4","showing":false,"width":"100%"}, {"onclick":"guardar_restricciones_alimenticiasClick"}]
}]
}],
detalleAlimento: ["wm.LiveForm", {"height":"18px","horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {"onSuccess":"detalleAlimentoSuccess"}],
base_boton_continuar: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
continuar_servicios: ["wm.Button", {"borderColor":"#1c79b3","caption":"Continuar con Transporte","margin":"4","width":"230px"}, {"onclick":"continuar_serviciosClick"}]
}],
panel38: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}]
}],
transporte: ["wm.Panel", {"height":"640px","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
iFrame1: ["wm.IFrame", {"height":"450px","source":"http://aprendoz.rochester.edu.co/recursos/transporte/transporte.html","width":"100%"}, {}],
panel34: ["wm.Panel", {"height":"19px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}],
panel33: ["wm.Panel", {"height":"110px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
transporteDataGrid: ["wm.DataGrid", {"width":"70%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"a_listadoServicios","targetProperty":"dataSet"}, {}]
}],
nombre2: ["wm.DataGridColumn", {"caption":"Nombre servicio","columnWidth":"100%","field":"nombre","index":2}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
idcosto2: ["wm.DataGridColumn", {"caption":"+","columnWidth":"45px","field":"idcosto","index":1}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
valor2: ["wm.DataGridColumn", {"caption":"Valor (COP)","dataExpression":"\"$ \"+${valor}","display":"Number","field":"valor","index":3}, {}, {
format1: ["wm.NumberFormatter", {}, {}]
}],
column1: ["wm.DataGridColumn", {"caption":"Inscrito","columnWidth":"47px","dataExpression":"if(${inscrito}==true){\t'<img src=\"resources/images/imagelists/ok.gif\" height=\"16\" width=\"16\" /><center>' \t}  if(${inscrito}==false){\t'<img src=\"resources/images/imagelists/bad.png\" height=\"16\" width=\"16\" /><center>' }","field":"inscrito","index":4}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
column2: ["wm.DataGridColumn", {"caption":" ","columnWidth":"20px","dataExpression":"'<img src=\"resources/images/imagelists/buy.gif\" height=\"16\" width=\"16\" /><center>'"}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}]
}],
layers8: ["wm.Layers", {"width":"110px"}, {}, {
layer23: ["wm.Layer", {"borderColor":"","caption":"layer23","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
agregar_trans: ["wm.Button", {"borderColor":"#538312","caption":"+ Agregar","margin":"0","width":"102px"}, {"onclick":"agregar_transClick"}],
spacer18: ["wm.Spacer", {"height":"4px","width":"96px"}, {}],
quitar_trans: ["wm.Button", {"borderColor":"#980c10","caption":"- Quitar","margin":"0","width":"102px"}, {"onclick":"quitar_transClick"}]
}]
}]
}],
spacer29: ["wm.Spacer", {"height":"153px","showing":false,"width":"95px"}, {}],
nav_panel_transportes: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"58px","horizontalAlign":"right","layoutKind":"left-to-right","lock":true,"padding":"4","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
iraSeguro: ["wm.Button", {"borderColor":"#Aaa","caption":"Continuar al paso No. 3","height":"100%","iconMargin":"0 0px 0 0","iconUrl":"resources/images/buttons/daycare.png","margin":"4","width":"260px"}, {"onclick":"iraSeguroClick"}]
}],
panel8: ["wm.Panel", {"height":"46px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
volver_transportes: ["wm.Button", {"borderColor":"#1c79b3","caption":"Atras","height":"100%","margin":"4","width":"96px"}, {"onclick":"volver_transportesClick"}],
continuar_seguros: ["wm.Button", {"borderColor":"#1c79b3","caption":"Continuar con Seguros","height":"100%","margin":"4","width":"230px"}, {"onclick":"continuar_segurosClick"}]
}]
}],
seguro: ["wm.Panel", {"height":"650px","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
iFrame4: ["wm.IFrame", {"height":"450px","source":"http://aprendoz.rochester.edu.co/recursos/seguros/seguros.html","width":"100%"}, {}],
panel28: ["wm.Panel", {"height":"19px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}],
panel31: ["wm.Panel", {"height":"110px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
seguroDataGrid: ["wm.DataGrid", {"width":"70%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"a_listadoServiciosSeguros","targetProperty":"dataSet"}, {}]
}],
nombre2: ["wm.DataGridColumn", {"caption":"Nombre servicio","columnWidth":"100%","field":"nombre","index":2}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
idcosto2: ["wm.DataGridColumn", {"caption":"+","columnWidth":"45px","field":"idcosto","index":1}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
valor2: ["wm.DataGridColumn", {"caption":"Valor (COP)","display":"Number","field":"valor","index":4}, {}, {
format1: ["wm.NumberFormatter", {}, {}]
}],
inscrito2: ["wm.DataGridColumn", {"caption":"Inscrito","columnWidth":"47px","dataExpression":"if(${inscrito}==true){\t'<img src=\"resources/images/imagelists/ok.gif\" height=\"16\" width=\"16\" /><center>' \t}  if(${inscrito}==false){\t'<img src=\"resources/images/imagelists/bad.png\" height=\"16\" width=\"16\" /><center>' }","field":"inscrito","index":5}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
column1: ["wm.DataGridColumn", {"caption":" ","columnWidth":"20px","dataExpression":"'<img src=\"resources/images/imagelists/buy.gif\" height=\"16\" width=\"16\" /><center>'","field":"idcosto"}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}]
}],
layers10: ["wm.Layers", {"width":"110px"}, {}, {
layer5: ["wm.Layer", {"borderColor":"","caption":"layer5","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
agregar_seg: ["wm.Button", {"borderColor":"#538312","caption":"+ Agregar","margin":"0","width":"102px"}, {"onclick":"agregar_segClick"}],
spacer20: ["wm.Spacer", {"height":"4px","width":"96px"}, {}],
quitar_seg: ["wm.Button", {"borderColor":"#980c10","caption":"- Quitar","margin":"0","width":"102px"}, {"onclick":"quitar_segClick"}]
}]
}]
}],
panel12: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
atras_seguro: ["wm.Button", {"borderColor":"#1c79b3","caption":"Atras","height":"100%","margin":"4","width":"96px"}, {"onclick":"atras_seguroClick"}],
continuar_seguro: ["wm.Button", {"borderColor":"#1c79b3","caption":"Continuar con Asopadres","height":"100%","margin":"4","width":"190px"}, {"onclick":"continuar_seguroClick"}]
}]
}],
asopadres: ["wm.Panel", {"height":"610px","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
iFrame3: ["wm.IFrame", {"height":"450px","source":"http://aprendoz.rochester.edu.co/recursos/asopadres/asopadres.html","width":"100%"}, {}],
panel17: ["wm.Panel", {"height":"110px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
asopadresDatGrid: ["wm.DataGrid", {"width":"70%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"a_listadoServiciosAsopadres","targetProperty":"dataSet"}, {}]
}],
nombre2: ["wm.DataGridColumn", {"caption":"Nombre servicio","columnWidth":"100%","field":"nombre","index":2}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
idcosto2: ["wm.DataGridColumn", {"caption":" ","columnWidth":"20px","dataExpression":"'<img src=\"resources/images/imagelists/buy.gif\" height=\"16\" width=\"16\" /><center>'","display":"Number","field":"idcosto"}, {}, {
format1: ["wm.NumberFormatter", {}, {}]
}],
valor2: ["wm.DataGridColumn", {"caption":"valor","display":"Number","field":"valor","index":5}, {}, {
format1: ["wm.NumberFormatter", {}, {}]
}],
inscrito2: ["wm.DataGridColumn", {"caption":"Inscrito","columnWidth":"47px","dataExpression":"if(${inscrito}==true){\t'<img src=\"resources/images/imagelists/ok.gif\" height=\"16\" width=\"16\" /><center>' \t}  if(${inscrito}==false){\t'<img src=\"resources/images/imagelists/bad.png\" height=\"16\" width=\"16\" /><center>' }","field":"inscrito","index":6}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
column1: ["wm.DataGridColumn", {"caption":"+","columnWidth":"45px","field":"idcosto","index":1}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}]
}],
buttons_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"111px"}, {}, {
agregar_aso: ["wm.Button", {"borderColor":"#538312","caption":"+ Agregar","margin":"0","width":"102px"}, {"onclick":"agregar_asoClick"}],
spacer8: ["wm.Spacer", {"height":"4px","width":"96px"}, {}],
quitar_aso: ["wm.Button", {"borderColor":"#980c10","caption":"- Quitar","margin":"0","width":"102px"}, {"onclick":"quitar_asoClick"}]
}]
}],
panel13: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
atras_asopadres: ["wm.Button", {"borderColor":"#1c79b3","caption":"Atras","height":"100%","margin":"4","width":"96px"}, {"onclick":"atras_asopadresClick"}],
asopadres_finalizar: ["wm.Button", {"borderColor":"#1c79b3","caption":"Continuar","height":"100%","margin":"4","width":"110px"}, {"onclick":"asopadres_finalizarClick"}]
}]
}]
}],
reponsable_pagos: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"padding":"20","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
reponsable_pago_main_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","lock":true,"padding":"10","verticalAlign":"top","width":"100%"}, {}, {
panel35: ["wm.Panel", {"height":"94px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"height":"18px","width":"18px"}, {}],
label14: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Por favor seleccione la persona responsable de los pagos ante el colegio, quien deberá asistir el día de la matrícula, traer su documento de identidad original y una fotocopia de la misma, ampliada al 150% y diligenciar el formulario de solicitud de tarjeta de crédito Diners de Davivienda para efectuar los pagos de las mensualidades.","height":"100%","padding":"4","singleLine":false,"width":"581px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
spacer26: ["wm.Spacer", {"height":"15px","width":"96px"}, {}],
panel49: ["wm.Panel", {"height":"55px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"middle","width":"100%"}, {}, {
spacer27: ["wm.Spacer", {"height":"48px","width":"25px"}, {}],
picture13: ["wm.Picture", {"height":"18px","width":"18px"}, {}],
label23: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"¡Importante!<br/>Seleccione el <u>Responsable de pago</u> para habilitar los botones <b>PAGAR EN LINEA</b> y <b>PAGAR EN BANCO</b>","height":"45px","padding":"4","singleLine":false,"width":"83%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
panel32: ["wm.Panel", {"height":"300px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
layers11: ["wm.Layers", {"height":"300px","width":"620px"}, {}, {
layer6: ["wm.Layer", {"borderColor":"","caption":"layer6","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
responsableDataGrid: ["wm.DataGrid", {}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"impresion_grupoFamiliar","targetProperty":"dataSet"}, {}]
}],
responsable2: ["wm.DataGridColumn", {"caption":"Responsable de pago","columnWidth":"77px","dataExpression":"if(${responsable}==true){\t'<center><img src=\"resources/images/imagelists/ok.gif\" height=\"16\" width=\"16\" /></center>' \t}  if(${responsable}==false){\t'<center><img src=\"resources/images/imagelists/bad.png\" height=\"16\" width=\"16\" /></center>' }","field":"responsable","index":2}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
apellido3: ["wm.DataGridColumn", {"caption":"Integrante grupo familiar","columnWidth":"100%","dataExpression":"${nombre1}+\" \"+${nombre2}+\" \"+${apellido1}+\" \"+${apellido2}","field":"apellido2","index":1}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
tipoPersona2: ["wm.DataGridColumn", {"caption":"Rol","columnWidth":"85px","field":"tipoPersona","index":3}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
column1: ["wm.DataGridColumn", {"caption":"+","columnWidth":"69px","field":"dni"}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
column2: ["wm.DataGridColumn", {"caption":" ","columnWidth":"100px","field":"grupoFamiliar","index":4}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}]
}]
}]
}],
spacer21: ["wm.Spacer", {"height":"48px","width":"15px"}, {}],
layers12: ["wm.Layers", {"height":"300px","width":"120px"}, {}, {
layer25: ["wm.Layer", {"borderColor":"","caption":"layer25","horizontalAlign":"center","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
agregar_imp: ["wm.Button", {"borderColor":"#538312","caption":"+ Elegir","margin":"0","width":"102px"}, {"onclick":"agregar_impClick"}],
spacer22: ["wm.Spacer", {"height":"3px","width":"96px"}, {}],
quitar_impr: ["wm.Button", {"borderColor":"#980c10","caption":"- Retirar","margin":"0","width":"102px"}, {"onclick":"quitar_imprClick"}]
}]
}]
}],
panel15: ["wm.Panel", {"height":"50px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
volver_responsable: ["wm.Button", {"borderColor":"#1c74b3","caption":"Atras","margin":"4","width":"96px"}, {"onclick":"volver_responsableClick"}],
continuar_responsable: ["wm.Button", {"borderColor":"#1c74b3","caption":"Continuar","disabled":true,"margin":"4","width":"150px"}, {"onclick":"continuar_responsableClick"}]
}]
}]
}],
impresion_documentos: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
panel29: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
mensaje_documentos: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"align":"center","caption":"Por favor oprima clic sobre cada uno de los botones e imprima los documentos allí señalados.","height":"48px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
panel_documentos: ["wm.Panel", {"height":"56px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
contrato_butt: ["wm.Button", {"borderColor":"#1c74bc","caption":"Contrato de Matrícula","margin":"4","width":"130px"}, {"onclick":"contrato_buttClick"}],
contrato_alim_butt: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"borderColor":"#1c79b3","caption":"Contrato alimentos","margin":"4","width":"130px"}, {"onclick":"contrato_alim_buttClick"}],
contrato_trans_butt: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"borderColor":"#1c79b3","caption":"Contrato transporte","margin":"4","width":"130px"}, {"onclick":"contrato_trans_buttClick"}],
recibo_matricula_butt: ["wm.Button", {"borderColor":"#1c74bc","caption":"Recibo de matrícula","margin":"4","width":"125px"}, {"onclick":"recibo_matricula_buttClick"}],
bancos_butt: ["wm.Button", {"caption":"Recibo de pago en bancos","margin":"4","showing":false,"width":"130px"}, {"onclick":"bancos_buttClick"}]
}],
panel5: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
mensualidades_butt: ["wm.Button", {"borderColor":"#1c74bc","caption":"Presupuesto de mensualidades","margin":"4","width":"170px"}, {"onclick":"mensualidades_buttClick"}],
pagare_butt: ["wm.Button", {"borderColor":"#1c74bc","caption":"Pagaré","margin":"4","width":"110px"}, {"onclick":"pagare_buttClick"}],
contrato_seg_butt: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"borderColor":"#1c79b3","caption":"Contrato seguro de vida","height":"100%","margin":"4","width":"200px"}, {"onclick":"contrato_seg_buttClick"}]
}],
spacer6: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
panel50: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
volver_impresion: ["wm.Button", {"borderColor":"#1c74bc","caption":"Atras","margin":"4","width":"96px"}, {"onclick":"volver_impresionClick"}],
documentos_continuar: ["wm.Button", {"borderColor":"#1c74bc","caption":"Continuar","margin":"4","width":"150px"}, {"onclick":"documentos_continuarClick"}]
}]
}],
pagos: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"padding":"10","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
pago_head_message: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"align":"center","caption":"Oprima clic en una de las dos opciones de pago para seleccionar la que más se acomode a sus necesidades.","height":"48px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
panel40: ["wm.Panel", {"height":"50px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pagar_pse: ["wm.Button", {"caption":"PAGAR EN LINEA","disabled":true,"height":"100%","iconHeight":"20px","iconMargin":"0 0px 0 0","iconUrl":"resources/images/buttons/pse_conx.png","iconWidth":"25px","margin":"4","width":"190px"}, {"onclick":"pagar_pseClick"}],
pagar_banco: ["wm.Button", {"caption":"PAGAR EN BANCO<br/>(comprobante de pago de matrícula)","disabled":true,"height":"100%","iconHeight":"20px","iconMargin":"0 0px 0 0","iconUrl":"resources/images/buttons/bank.png","iconWidth":"25px","margin":"4","width":"230px"}, {"onclick":"pagar_bancoClick"}]
}],
resument_de_pago: ["wm.Panel", {"_classes":{"domNode":["wm_Border_BottomStyleCurved12px","wm_BackgroundColor_White","wm_Border_TopStyleCurved4px"]},"border":"1","borderColor":"#bbb","height":"344px","horizontalAlign":"center","lock":true,"padding":"3","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
panel44: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_Border_TopStyleCurved4px"]},"border":"1","borderColor":"#bbb","height":"34px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
picture11: ["wm.Picture", {"height":"18px","source":"resources/images/buttons/check.png","width":"20px"}, {}],
label21: ["wm.Label", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"caption":"A continuación verifique los detalles antes de realizar el Pago por PSE","height":"30px","padding":"4","width":"60%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
rol: ["wm.TextEditor", {"height":"32px","padding":"2","readonly":true,"width":"350px"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
noDocumento: ["wm.TextEditor", {"caption":"No. Documento","height":"32px","padding":"2","readonly":true,"width":"350px"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
estudiante: ["wm.TextEditor", {"caption":"Estudiante","height":"32px","padding":"2","readonly":true,"width":"350px"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
code_estudiante: ["wm.TextEditor", {"caption":"Código","height":"32px","padding":"2","readonly":true,"width":"350px"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
concepto: ["wm.TextEditor", {"caption":"Concepto","height":"32px","padding":"2","readonly":true,"width":"350px"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
valor: ["wm.TextEditor", {"caption":"Valor (COP)","display":"Currency","height":"32px","padding":"2","readonly":true,"width":"350px"}, {}, {
editor: ["wm._CurrencyEditor", {"currency":"COP"}, {}]
}],
pse_logo: ["wm.Picture", {"aspect":"h","height":"30px","showing":false,"source":"resources/images/buttons/PSE-logo.png"}, {"onclick":"pse_logoClick"}],
pagar_pse_butt: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved12px","wm_Border_BottomStyleCurved12px","wm_BackgroundColor_White"]},"borderColor":"#bbb","caption":"","disabled":true,"iconHeight":"50%","iconMargin":"0 0px 0 0","iconWidth":"200%","margin":"0","width":"109px"}, {"onclick":"pagar_pse_buttClick"}]
}],
spacer30: ["wm.Spacer", {"height":"29px","width":"96px"}, {}],
panel36: ["wm.Panel", {"height":"62px","horizontalAlign":"center","layoutKind":"left-to-right","lock":true,"verticalAlign":"middle","width":"100%"}, {}, {
volver_pago: ["wm.Button", {"borderColor":"#1c74bc","caption":"Atras","margin":"4","width":"96px"}, {"onclick":"volver_pagoClick"}],
continuar_final: ["wm.Button", {"borderColor":"#1c74bc","caption":"Continuar","margin":"4","width":"150px"}, {"onclick":"continuar_finalClick"}]
}]
}],
preparacion: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"padding":"5","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
message_final: ["wm.Label", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_TopStyleCurved8px"]},"align":"center","caption":"Para finalizar el proceso de matrícula, por favor organizar los documentos relacionados a continuación y traerlos el día asignado en las instrucciones enviadas a su correo.","height":"55px","padding":"4","singleLine":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
html_nuevo: ["wm.Html", {"height":"100%","html":"<p><span style=\"font-size:14px\">Para su comodidad y nuestra organizaci&oacute;n, les solicitamos traer en el mismo orden los siguientes documentos:</span></p>  <ul> \t<li><span style=\"font-size:14px\">Paz y Salvo de Tesorer&iacute;a del Jard&iacute;n o Colegio anterior.</span></li> \t<li><span style=\"font-size:14px\">Fotocopia del carn&eacute; de la EPS a la que est&aacute; afiliado el ni&ntilde;o (a).</span></li> \t<li><span style=\"font-size:14px\">Examen de optometr&iacute;a y ort&oacute;ptica.</span></li> \t<li><span style=\"font-size:14px\">Examen de audiometr&iacute;a.Informe m&eacute;dico de salud general en el que, adem&aacute;s, manifiesten si el ni&ntilde;o(a) puede tomar clases de nataci&oacute;n, e indique el esquema de vacunaci&oacute;n al d&iacute;a.</span></li> \t<li><span style=\"font-size:14px\">Contrato de servicios educativos, de alimentos y de transportes firmados, en lo posible, por ambos padres y acudiente.</span></li> \t<li><span style=\"font-size:14px\">Recibo firmado de pago en bancos (factura de matr&iacute;cula) Presupuesto de mensualidades firmado por ambos padres y acudiente.</span></li> \t<li><span style=\"font-size:14px\">Pagar&eacute; y carta de instrucciones con los nombres, firmas y n&uacute;meros de documentos de identidad de ambos padres y, si es el caso, del acudiente responsable de los pagos.</span></li> \t<li><span style=\"font-size:14px\">Fotocopia ampliada al 150% de la c&eacute;dula de ciudadan&iacute;a de quienes firman los documentos relacionados en el punto anterior.</span></li> \t<li><span style=\"font-size:14px\">Comprobante del pago realizado a trav&eacute;s del bot&oacute;n PSE o consignaci&oacute;n realizada en la cuenta de ahorros del banco de Bogot&aacute; No. 085218527 a nombre de la Fundaci&oacute;n Educativa Rochester, por la suma de $869.000 valor en el que est&aacute; inclu&iacute;do $49.000 correspondiente al seguro de accidentes escolares (opcional).</span></li> </ul>","minDesktopHeight":15,"padding":"15"}, {}],
html_antiguo: ["wm.Html", {"height":"100%","html":"<ul> \t<li><span style=\"font-size:14px\">Fotocopia del carn&eacute; de la EPS a la que est&aacute; afiliado el ni&ntilde;o (a), en el caso de haberse cambiado de dicha entidad entre agosto de 2012 y junio de 2013</span></li> \t<li><span style=\"font-size:14px\">Fotocopia de la tarjeta de identidad o c&eacute;dula de ciudadan&iacute;a, en el caso de haber cumplido 7 &oacute; 18 a&ntilde;os entre agosto de 2013 y junio de 2013</span></li> \t<li><span style=\"font-size:14px\">Examen de optometr&iacute;a y ort&oacute;ptica.</span></li> \t<li><span style=\"font-size:14px\">Examen de audiometr&iacute;a.</span></li> \t<li><span style=\"font-size:14px\">Informe m&eacute;dico de salud general en el que, adem&aacute;s, manifiesten si el ni&ntilde;o(a) puede tomar clases de nataci&oacute;n, e indique el esquema de vacunaci&oacute;n al d&iacute;a (&uacute;nicamente para estudiantes que ingresan a quinto grado 5&ordm; el a&ntilde;o escolar 2012-2013)</span></li> </ul>  <p><span style=\"font-size:14px\"><strong>&nbsp;A<em>dem&aacute;s, los siguientes documentos firmados por ambos padres y,&nbsp; si es el caso, por el acudiente responsable de los pagos.</em></strong></span></p>  <ul> \t<li><span style=\"font-size:14px\">Contrato de servicios educativos, de alimentos y de transporte</span></li> \t<li><span style=\"font-size:14px\">Recibo firmado de pago en bancos (factura de matr&iacute;cula)</span></li> \t<li><span style=\"font-size:14px\">Presupuesto de mensualidades</span></li> \t<li><span style=\"font-size:14px\">Pagar&eacute; y carta de instrucciones diligenciados</span></li> \t<li><span style=\"font-size:14px\">Fotocopia ampliada al 150% de la c&eacute;dula de ciudadan&iacute;a de quienes firman los documentos relacionados en el punto anterior.</span></li> \t<li><span style=\"font-size:14px\">Comprobante del pago realizado a trav&eacute;s del bot&oacute;n PSE o consignaci&oacute;n realizada en la cuenta de ahorros del banco de Bogot&aacute; N&ordm; 085218527 a nombre de la Fundaci&oacute;n Educativa Rochester-registrando el c&oacute;digo del estudiante, por el valor se&ntilde;alado en el recibo de matr&iacute;cula impreso del sistema.</span></li> </ul>","minDesktopHeight":15,"showing":false}, {}],
panel6: ["wm.Panel", {"_classes":{"domNode":["wm_Border_BottomStyleCurved8px","wm_BackgroundColor_White"]},"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
atras_preparacion: ["wm.Button", {"borderColor":"#1c74b3","caption":"Atras","height":"100%","margin":"4","width":"96px"}, {"onclick":"atras_preparacionClick"}],
volver_butt: ["wm.Button", {"borderColor":"#1c74b3","caption":"Matricular otro estudiante","height":"100%","margin":"4","showing":false,"width":"200px"}, {"onclick":"volver_buttClick"}],
terminar_butt: ["wm.Button", {"borderColor":"#1c74b3","caption":"Terminar","height":"100%","margin":"4","width":"200px"}, {"onclick":"logout"}]
}]
}]
}]
}]
}],
templateRight: ["wm.Panel", {"_classes":{"domNode":["template-right"]},"freeze":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}]
}],
panel3: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
templateBottomLeft: ["wm.Panel", {"_classes":{"domNode":["template-bottom-left"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}],
templateBottom: ["wm.Panel", {"_classes":{"domNode":["template-bottom-center"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
templateBottomRight: ["wm.Panel", {"_classes":{"domNode":["template-bottom-right"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}]
}],
panelFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px","wm_FontColor_Graphite"]},"align":"right","caption":"Aprendoz  Colegio Rochester<br>Todos los derechos reservados 2012 -2013","height":"48px","padding":"10,20","singleLine":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
}]
}]
}]
};

Main.prototype._cssText = '/*********************************************\
*Esquema de colores Aprendoz\
*Colores basados en el escudo e imagen institucional\
*  Azul oscuro: #281d73\
*  Azul claro:  #5c548c\
*  Rojo Oscuro: #a62121\
*  Rojo Claro:  #bf5e5e\
*  Blanco:      #f2f2f2\
*\
*  ***Esquema alterno***\
*  Rojo Vino:       #690011\
*  Rojo:            #bf0426\
*  Rojo claro:      #bf0426\
*  Amarillo claro:  #f2d99c\
*  Amarrillo:       #e5b96f\
*********************************************/\
.Main .Main-rendimiento_aprendizajes {\
}\
.Main .Main-aviso2{\
background: #FFCC00;\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -webkit-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -o-linear-gradient(center top , #FFCC00, #FFCC00);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-button7{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-button6{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-button8{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-inscalumasigDataGrid1{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-aprendizajes{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-UltimaCalifdataGrid1{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-HistorialdataGrid5{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-dataGrid3{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-personaDataGrid2{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-boton_generar_informe{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-aviso_info_familiar{\
font-weight: normal;\
color: #000000;\
/* text-shadow: 0 1px rgba(0, 0, 0, 0.1); */\
/* text-transform: uppercase; */\
/* cursor: pointer; */\
border-radius: 2px 2px 2px 2px;\
vertical\
}\
.Main .Main-picture3{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-personaDataGridX{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-inscalumasigDataGridX{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-aprendizajes{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}.Main .Main-tabla_familia_principal{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-max {\
cursor: pointer\
}\
.Main .Main-min {\
cursor: pointer\
}\
.Main .Main-Logrados {\
visibility: hidden\
}\
.Main .Main-Esperados {\
visibility: hidden\
}\
.Main .Main-documentos_mensaje_informativo_error {\
background: none repeat scroll 0 0 #FCD116;\
background-image: -moz-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -webkit-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -moz-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -o-linear-gradient(center top , #FCD116, #FCD116);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-documentos_mensaje_informativo_aprovado {\
background: none repeat scroll 0 0 #9CCB19;\
background-image: -moz-linear-gradient(center top , #9CCB19, #9CCB19);\
background-image: -webkit-linear-gradient(center top , #9CCB19, #9CCB19);\
background-image: -moz-linear-gradient(center top , #9CCB19, #9CCB19);\
background-image: -o-linear-gradient(center top , #9CCB19, #9CCB19);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-documentos_mensaje_informativo_error_financiera {\
background: none repeat scroll 0 0 #FCD116;\
background-image: -moz-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -webkit-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -moz-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -o-linear-gradient(center top , #FCD116, #FCD116);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-documentos_butt_modelo_contrato {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-documentos_butt_matricula {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-documentos_butt_mensualidades {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-bottom-right-radius: 10px;\
}\
.Main .Main-documentos_datag_estudiantes {\
cursor: pointer;\
}\
.Main .Main-personaDetailsPanel1 {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-aviso_info_familiar {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
}\
.Main .Main-personaGridPanel {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-inscalumasigGridPanel {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-aviso_rendimiento {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
}\
.Main .Main-personaDataGridX {\
color: #000000;\
}\
.Main .Main-inscalumasigDataGridX {\
color: #000000;\
}\
.Main .Main-ver_ejemplo {\
background: #4D90FE;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-cerrar {\
background: #B0B0B0;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-panel_imag {\
background: #B0B0B0;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-bottom-right-radius: 10px;\
}\
.Main .Main-imagen {\
border-top-left-radius: 5px;\
border-top-right-radius: 5px;\
border-bottom-left-radius: 5px;\
border-bottom-right-radius: 5px;\
}\
.Main .Main-transporte_alumnos {\
cursor: pointer;\
}\
.Main .Main-transporte_datagrid_rutas {\
cursor: pointer;\
}\
.Main .Main-transporte_menu_rutas {\
border-bottom-left-radius: 4px;\
border-top-left-radius: 4px;\
cursor: pointer;\
}\
.Main .Main-transporte_menu_programacion {\
border-bottom-left-radius: 4px;\
border-top-left-radius: 4px;\
cursor: pointer;\
}\
.Main .Main-picture6 {\
border-bottom-left-radius: 4px;\
border-top-left-radius: 4px;\
}\
.Main .Main-pestana_rutas {\
background: #FFB90F;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-pestana_programacion {\
background: #0276FD;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-transporte_panel_novedades {\
background: #0276FD;\
}\
.Main .Main-transporte_panel_rutas {\
background: #FFB90F;\
}\
.Main .Main-pestana_solicitudes {\
background: #CD3333;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-transporte_panel_solicitudes {\
background: #CD3333;\
}\
.Main .Main-transporte_menu_solicitudes {\
border-bottom-left-radius: 4px;\
border-top-left-radius: 4px;\
cursor: pointer;\
}\
.Main .Main-novedadesDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-inscalumtransporteDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-rutasDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-inicio {\
background-color: #f2f2f2;\
}\
.Main .Main-panel20 {\
background: white;\
border-top-left-radius: 50px;\
border-bottom-right-radius: 50px;\
}\
.Main .Main-inicio_nombreCompleto_label {\
color: #B22418;\
text-shadow: 0 1px rgba(0, 0, 0, 0.3);\
}\
.Main .Main-inicio_rol_label {\
color: #281d73;\
text-shadow: 0 1px rgba(0, 0, 0, 0.3);\
}\
.Main .Main-inicio_grupo_familiar_laber {\
color: #281d73;\
text-shadow: 0 1px rgba(0, 0, 0, 0.3);\
}\
.Main .Main-picture1 {\
cursor: pointer;\
}\
.Main .Main-inicio_ir_a_facturacion {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
text-decoration: blink;\
-webkit-animation-name: blink;\
-webkit-animation-iteration-count: infinite;\
-webkit-animation-timing-function: cubic-bezier(1.0,0,0,1.0);\
-webkit-animation-duration: 1s;\
}\
.Main .Main-matricula {\
background-color: #f2f2f2;\
}\
.Main .Main-transporte_boton {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-alimento_boton {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
}\
.Main .Main-panel_servicios {\
padding: 15px;\
background: #f1f1f1;\
border-radius: 3px;\
}\
.Main .Main-transporte_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-alimento_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-alimentosDataGrid {\
cursor: pointer;\
}\
.Main .Main-agregar_alim {\
color: #e8f0de;\
border: solid 1px #538312;\
background: #64991e;\
background: -webkit-gradient(linear, left top, left bottom, from(#7db72f), to(#4e7d0e));\
background: -moz-linear-gradient(top, #7db72f, #4e7d0e);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7db72f", endColorstr="#4e7d0e");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-quitar_alim {\
color: #faddde;\
border: solid 1px #980c10;\
background: #d81b21;\
background: -webkit-gradient(linear, left top, left bottom, from(#ed1c24), to(#aa1317));\
background: -moz-linear-gradient(top, #ed1c24, #aa1317);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ed1c24", endColorstr="#aa1317");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-agregar_trans {\
color: #e8f0de;\
border: solid 1px #538312;\
background: #64991e;\
background: -webkit-gradient(linear, left top, left bottom, from(#7db72f), to(#4e7d0e));\
background: -moz-linear-gradient(top, #7db72f, #4e7d0e);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7db72f", endColorstr="#4e7d0e");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-quitar_trans {\
color: #faddde;\
border: solid 1px #980c10;\
background: #d81b21;\
background: -webkit-gradient(linear, left top, left bottom, from(#ed1c24), to(#aa1317));\
background: -moz-linear-gradient(top, #ed1c24, #aa1317);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ed1c24", endColorstr="#aa1317");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-adicional_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-seguro_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-layoutBox1 .template-main{\
background: #666666 url(resources/images/gradients/escheresque.png) repeat;\
margin: 0px;\
padding: 0px;\
}.Main .Main-agregar_seg {\
color: #e8f0de;\
border: solid 1px #538312;\
background: #64991e;\
background: -webkit-gradient(linear, left top, left bottom, from(#7db72f), to(#4e7d0e));\
background: -moz-linear-gradient(top, #7db72f, #4e7d0e);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7db72f", endColorstr="#4e7d0e");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-quitar_seg {\
color: #faddde;\
border: solid 1px #980c10;\
background: #d81b21;\
background: -webkit-gradient(linear, left top, left bottom, from(#ed1c24), to(#aa1317));\
background: -moz-linear-gradient(top, #ed1c24, #aa1317);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ed1c24", endColorstr="#aa1317");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-impresion_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(0, 0, 0, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
border: 1px solid #3079ED !important;\
background: #4B8DF8;\
background: -webkit-linear-gradient(top, #4C8FFD, #4787ED);\
background: -moz-linear-gradient(top, #4C8FFD, #4787ED);\
background: -ms-linear-gradient(top, #4C8FFD, #4787ED);\
background: -o-linear-gradient(top, #4C8FFD, #4787ED);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: rgb(255, 255, 255);\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
cursor: pointer;\
}\
.Main .Main-impresion_butt .wmbutton .wmbutton-img{\
background: url(resources/images/buttons/google+-ui-sprite-gray.png) no-repeat;\
background-color: transparent;\
background-position: -216px -126px;\
}.Main .Main-reponsable_pago_main_panel {\
background: #666666 url(resources/images/gradients/brillant.png) repeat;\
margin: 0px;\
padding: 0px;\
}\
.Main .Main-picture2 {\
background: url(resources/images/buttons/google+-ui-sprite-colour.png);\
background-position: -0px -90px;\
}\
.Main .Main-responsableDataGrid {\
cursor: pointer;\
}\
.Main .Main-agregar_imp {\
color: #e8f0de;\
border: solid 1px #538312;\
background: #64991e;\
background: -webkit-gradient(linear, left top, left bottom, from(#7db72f), to(#4e7d0e));\
background: -moz-linear-gradient(top, #7db72f, #4e7d0e);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7db72f", endColorstr="#4e7d0e");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-quitar_impr {\
color: #faddde;\
border: solid 1px #980c10;\
background: #d81b21;\
background: -webkit-gradient(linear, left top, left bottom, from(#ed1c24), to(#aa1317));\
background: -moz-linear-gradient(top, #ed1c24, #aa1317);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ed1c24", endColorstr="#aa1317");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-picture10 {\
background: url(resources/images/buttons/google+-ui-sprite-colour.png);\
background-position: -36px -36px;\
}\
.Main .Main-pagare_butt {\
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
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 12px;\
font-weight: normal;\
}\
.Main .Main-contrato_butt {\
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
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 12px;\
font-weight: normal;\
}\
.Main .Main-mensualidades_butt {\
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
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 12px;\
font-weight: normal;\
}\
.Main .Main-bancos_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border: solid 1px #EE9A00 !important;\
border-radius: .3em;\
}\
.Main .Main-contrato_trans_butt {\
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
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-weight: normal;\
}\
.Main .Main-contrato_alim_butt {\
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
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-weight: normal;\
}\
.Main .Main-contrato_seg_butt {\
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
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-weight: normal;\
}\
.Main .Main-enfermeria_butt {\
background-color: #B22418;\
color: white;\
font-weight: bold;\
line-height: 24px;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 20px;\
}\
.Main .Main-label19 {\
background-color: #B22418;\
color: white;\
}\
.Main .Main-label20 {\
background-color: #B22418;\
color: white;\
}\
.Main .Main-pagar_pse {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(0, 0, 0, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
border: 1px solid #3079ED !important;\
background: #4B8DF8;\
background: -webkit-linear-gradient(top, #4C8FFD, #4787ED);\
background: -moz-linear-gradient(top, #4C8FFD, #4787ED);\
background: -ms-linear-gradient(top, #4C8FFD, #4787ED);\
background: -o-linear-gradient(top, #4C8FFD, #4787ED);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: rgb(255, 255, 255);\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
cursor: pointer;\
}\
.Main .Main-transporteDataGrid {\
cursor: pointer;\
}\
.Main .Main-pagar_pse_butt {\
background-image: url(//www.cafeexpress.co/img/cms/PSE-logo.PNG);\
background-size: 100%;\
background-repeat: no-repeat;\
cursor: pointer;\
}\
.Main .Main-pagar_banco {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(0, 0, 0, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
border: 1px solid #3079ED !important;\
background: #4B8DF8;\
background: -webkit-linear-gradient(top, #4C8FFD, #4787ED);\
background: -moz-linear-gradient(top, #4C8FFD, #4787ED);\
background: -ms-linear-gradient(top, #4C8FFD, #4787ED);\
background: -o-linear-gradient(top, #4C8FFD, #4787ED);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: rgb(255, 255, 255);\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
cursor: pointer;\
}\
.Main .Main-guardar_restricciones_alimenticias {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-guardar_ficha {\
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
.Main .Main-actualizar_ficha {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-home_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-picture13 {\
background: url(resources/images/buttons/google+-ui-sprite-colour.png);\
background-position: -18px -36px;\
}\
.Main .Main-iraTransporte {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 2px;\
-moz-border-radius: 2px;\
border-radius: 2px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 16px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-iraFicha {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 2px;\
-moz-border-radius: 2px;\
border-radius: 2px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 16px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-iraSeguro {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 2px;\
-moz-border-radius: 2px;\
border-radius: 2px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 16px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-iraFinalizar {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 2px;\
-moz-border-radius: 2px;\
border-radius: 2px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 16px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-actualizacion_butt {\
background-color: #B22418;\
color: white;\
font-weight: bold;\
line-height: 24px;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 20px;\
}\
.Main .Main-servicios_butt {\
background-color: #B22418;\
color: white;\
font-weight: bold;\
line-height: 24px;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 20px;\
}\
.Main .Main-responsable_butt {\
background-color: #B22418;\
color: white;\
font-weight: bold;\
line-height: 24px;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 20px;\
}\
.Main .Main-pago_butt {\
background-color: #B22418;\
color: white;\
font-weight: bold;\
line-height: 24px;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 20px;\
}\
/*.Main .Main-actualizacion_butt:hover{ background-color: #282828; }*/\
.Main .wmButton .actualizacion_butt:hover{\
background-color: #282828;\
}\
/*.wmbutton:hover {\
background: #dfe5f1 repeat-x url(images/wmsb_btn_bg.png);\
border: 1px solid #939fb6;\
color: #294473;\
}\
*/\
.Main .Main-bt {\
background-color: white;\
}\
.Main .Main-documentos_butt {\
background-color: #B22418;\
color: white;\
font-weight: bold;\
line-height: 24px;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 20px;\
}\
.Main .Main-preparacion_butt {\
background-color: #B22418;\
color: white;\
font-weight: bold;\
line-height: 24px;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 20px;\
}\
.Main .Main-asopadres_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-impresion_documentos {\
background: #666666 url(resources/images/gradients/brillant.png) repeat;\
margin: 0px;\
padding: 0px;\
}\
.Main .Main-recibo_matricula_butt {\
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
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 12px;\
font-weight: normal;\
}\
.Main .Main-documentos_continuar {\
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
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 17px;\
font-weight: normal;\
}\
.Main .Main-pagos {\
background: #666666 url(resources/images/gradients/brillant.png) repeat;\
margin: 0px;\
padding: 0px;\
}\
.Main .Main-continuar_servicios {\
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
font-size: 14px;\
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-weight: normal;\
}\
.Main .Main-continuar_responsable {\
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
font-size: 18px;\
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-weight: normal;\
}\
.Main .Main-continuar_final {\
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
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 17px;\
font-weight: normal;\
}\
.Main .Main-message_final {\
color: #4b4b4b;\
/*font-family: "Droid Sans Mono", sans-serif;*/\
font-family: "YanoneKaffeesatzLightRegular", Arial;\
font-size: 20px;\
font-weight: normal;\
text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\
}\
.Main .Main-volver_butt {\
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
font-weight: 600;\
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 12px;\
font-weight: normal;\
}\
.Main .Main-terminar_butt {\
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
font-weight: 600;\
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 12px;\
font-weight: normal;\
}\
.Main .Main-volver_ficha_medica {\
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
.Main .Main-continuar_seguros {\
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
font-size: 14px;\
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-weight: normal;\
}\
.Main .Main-volver_transportes {\
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
font-size: 14px;\
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-weight: normal;\
}\
.Main .Main-atras_seguro {\
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
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-weight: normal;\
}\
.Main .Main-continuar_seguro {\
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
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-weight: normal;\
}\
.Main .Main-atras_asopadres {\
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
font-size: 14px;\
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-weight: normal;\
}\
.Main .Main-asopadres_finalizar {\
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
font-size: 14px;\
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-weight: normal;\
}\
.Main .Main-atras_preparacion {\
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
font-weight: 600;\
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 12px;\
font-weight: normal;\
}\
.Main .Main-volver_servicios {\
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
font-weight: 600;\
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 12px;\
font-weight: normal;\
}\
.Main .Main-volver_responsable {\
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
font-weight: 600;\
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 12px;\
font-weight: normal;\
}\
.Main .Main-volver_impresion {\
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
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 17px;\
font-weight: normal;\
}\
.Main .Main-volver_pago {\
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
cursor: pointer;\
overflow: visible;\
font-family: "Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif;\
font-size: 17px;\
font-weight: normal;\
}\
.Main .Main-agregar_aso {\
color: #e8f0de;\
border: solid 1px #538312;\
background: #64991e;\
background: -webkit-gradient(linear, left top, left bottom, from(#7db72f), to(#4e7d0e));\
background: -moz-linear-gradient(top, #7db72f, #4e7d0e);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7db72f", endColorstr="#4e7d0e");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-quitar_aso {\
color: #faddde;\
border: solid 1px #980c10;\
background: #d81b21;\
background: -webkit-gradient(linear, left top, left bottom, from(#ed1c24), to(#aa1317));\
background: -moz-linear-gradient(top, #ed1c24, #aa1317);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ed1c24", endColorstr="#aa1317");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
';
Main.prototype._htmlText = '';