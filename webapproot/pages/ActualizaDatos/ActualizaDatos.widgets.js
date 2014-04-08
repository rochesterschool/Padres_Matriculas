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
}