package controllers;

import java.io.IOException;
import java.io.Writer;
import javax.servlet.ServletException;
import javax.servlet.http.*;

public class BookController extends HttpServlet {


    private static final String[] descriptions = {
            "description1",
            "description2",
            "description3",
            "description4",
    };

    //service recibe tanto como post como get
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //aqui le llega un parametro desde el navegador, los dos parametros que reicibimos en esta funcion, vienen desde el naegadr
        String paramFromBrowser = req.getParameter("identificador");
        //indice
        int indxDesc = Integer.parseInt(paramFromBrowser);

        String description = descriptions[indxDesc];

        //enviar respuesta
        //le deicmos que clase de datos le enviamos
        resp.setContentType("text/plain");

        //este try hace automaticamente el close del writer
        try(Writer wr = resp.getWriter()){
            wr.write(description);
        }

    }

}
