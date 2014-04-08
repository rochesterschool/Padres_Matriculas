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
}