//importar librerias y complementos
import com.aprendoz_desarrollo.*;
import org.hibernate.Session;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.server.DownloadResponse;
import java.net.URL;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import java.io.ByteArrayOutputStream;
import java.io.ByteArrayInputStream;
import java.util.Map;
import java.util.HashMap;
import com.wavemaker.runtime.server.ParamName;
import org.springframework.mail.javamail.ConfigurableMimeFileTypeMap;

import net.sf.jasperreports.engine.JRResultSetDataSource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import java.util.*;
import java.io.*;
import java.awt.*;
import com.wavemaker.runtime.RuntimeAccess;

public class reciboExtractos extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
  public DownloadResponse getReport(String idp) throws Exception {
    
       //int idper= Integer.valueOf(idp); 
        
       DownloadResponse ret= new DownloadResponse();
       ConfigurableMimeFileTypeMap mimeFileTypeMap = new ConfigurableMimeFileTypeMap();
       
       Aprendoz_desarrollo service = (Aprendoz_desarrollo) RuntimeAccess.getInstance().getService(Aprendoz_desarrollo.class);
       service.begin();
       Session session= service.getDataServiceManager().getSession();
       
       try {
          //enviar parametros al reporte
          Map parameters= new HashMap();
          parameters.put("codigoAlumno", idp);
          
          //direccion del archivo Jasper
          URL fileUrl = this.getClass().getResource("reciboMensualidades2.jasper");
          System.out.println("leyo el jasper");
          //para cargar el jasper
          JasperReport report2 = (JasperReport)JRLoader.loadObject(fileUrl);
          System.out.println("cargo el jasper");
          //cargar conexion de la base de datos al reporte y el archivo Jasper
          JasperPrint jasperPrint = JasperFillManager.fillReport(report2,parameters,session.connection());
          System.out.println("cargo parametro");
          //exportar a pdf
          ByteArrayOutputStream out= new ByteArrayOutputStream();
          JasperExportManager.exportReportToPdfStream(jasperPrint, out);
          System.out.println("genera pdf");
          //cargar pdf como una respuesta de descarga
          ret.setContentType(mimeFileTypeMap.getContentType("reciboMensualidades2.jasper"));
          ret.setContents(new ByteArrayInputStream(out.toByteArray()));
          //ret.setFileName("Asignatura: ""Estudiante: "+cadenaEst+".pdf");
          ret.setFileName("Extracto_"+idp+".pdf");

       } catch(Exception e) {
          System.out.println("Error creando el PDF");
          e.printStackTrace();
       }
       finally{
       service.commit();
       }
       return ret;
    }

}