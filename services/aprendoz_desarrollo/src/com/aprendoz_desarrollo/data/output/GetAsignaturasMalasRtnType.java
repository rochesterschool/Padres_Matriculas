
package com.aprendoz_desarrollo.data.output;

import java.math.BigDecimal;


/**
 * Generated for query "getAsignaturasMalas" on 04/07/2014 10:34:35
 * 
 */
public class GetAsignaturasMalasRtnType {

    private BigDecimal puntaje;
    private BigDecimal porcent;
    private Integer esperados;
    private Integer logrados;
    private String calificacion;
    private Integer persona;
    private String asig;

    public BigDecimal getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(BigDecimal puntaje) {
        this.puntaje = puntaje;
    }

    public BigDecimal getPorcent() {
        return porcent;
    }

    public void setPorcent(BigDecimal porcent) {
        this.porcent = porcent;
    }

    public Integer getEsperados() {
        return esperados;
    }

    public void setEsperados(Integer esperados) {
        this.esperados = esperados;
    }

    public Integer getLogrados() {
        return logrados;
    }

    public void setLogrados(Integer logrados) {
        this.logrados = logrados;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

    public Integer getPersona() {
        return persona;
    }

    public void setPersona(Integer persona) {
        this.persona = persona;
    }

    public String getAsig() {
        return asig;
    }

    public void setAsig(String asig) {
        this.asig = asig;
    }

}
