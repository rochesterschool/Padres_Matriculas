
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.EventualidadPersonas
 *  04/07/2014 10:33:45
 * 
 */
public class EventualidadPersonas {

    private Integer idEventualidadPersonas;
    private SubtipoEventualidad subtipoEventualidad;
    private Eventualidades eventualidades;
    private Persona persona;

    public Integer getIdEventualidadPersonas() {
        return idEventualidadPersonas;
    }

    public void setIdEventualidadPersonas(Integer idEventualidadPersonas) {
        this.idEventualidadPersonas = idEventualidadPersonas;
    }

    public SubtipoEventualidad getSubtipoEventualidad() {
        return subtipoEventualidad;
    }

    public void setSubtipoEventualidad(SubtipoEventualidad subtipoEventualidad) {
        this.subtipoEventualidad = subtipoEventualidad;
    }

    public Eventualidades getEventualidades() {
        return eventualidades;
    }

    public void setEventualidades(Eventualidades eventualidades) {
        this.eventualidades = eventualidades;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
