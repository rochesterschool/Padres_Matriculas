
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoInscAsig
 *  04/07/2014 10:33:43
 * 
 */
public class TipoInscAsig {

    private Integer idTipoInscAsig;
    private String tipo;
    private Set<com.aprendoz_desarrollo.data.Asignatura> asignaturas = new HashSet<com.aprendoz_desarrollo.data.Asignatura>();

    public Integer getIdTipoInscAsig() {
        return idTipoInscAsig;
    }

    public void setIdTipoInscAsig(Integer idTipoInscAsig) {
        this.idTipoInscAsig = idTipoInscAsig;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Set<com.aprendoz_desarrollo.data.Asignatura> getAsignaturas() {
        return asignaturas;
    }

    public void setAsignaturas(Set<com.aprendoz_desarrollo.data.Asignatura> asignaturas) {
        this.asignaturas = asignaturas;
    }

}
