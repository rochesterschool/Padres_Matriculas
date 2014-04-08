
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.ImportacionDaviviendaFaltantes
 *  04/07/2014 10:33:45
 * 
 */
public class ImportacionDaviviendaFaltantes {

    private Integer idImportacionDavivienda;
    private String tarjeta;
    private String nombresocio;
    private String numeroidentificacion;
    private String estado;
    private Date fechaCreacion;
    private Date fechaModificacion;

    public Integer getIdImportacionDavivienda() {
        return idImportacionDavivienda;
    }

    public void setIdImportacionDavivienda(Integer idImportacionDavivienda) {
        this.idImportacionDavivienda = idImportacionDavivienda;
    }

    public String getTarjeta() {
        return tarjeta;
    }

    public void setTarjeta(String tarjeta) {
        this.tarjeta = tarjeta;
    }

    public String getNombresocio() {
        return nombresocio;
    }

    public void setNombresocio(String nombresocio) {
        this.nombresocio = nombresocio;
    }

    public String getNumeroidentificacion() {
        return numeroidentificacion;
    }

    public void setNumeroidentificacion(String numeroidentificacion) {
        this.numeroidentificacion = numeroidentificacion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaModificacion() {
        return fechaModificacion;
    }

    public void setFechaModificacion(Date fechaModificacion) {
        this.fechaModificacion = fechaModificacion;
    }

}
