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