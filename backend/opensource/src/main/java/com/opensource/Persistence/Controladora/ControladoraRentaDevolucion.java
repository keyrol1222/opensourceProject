package com.opensource.Persistence.Controladora;

import com.opensource.Persistence.PersistenceService;
import com.opensource.Database.RentaDevolucion;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//Controladora donde se pueden acceder a los metodos de RentaDevolucion
@CrossOrigin
@RestController
@RequestMapping("/rendevlolucion")
public class ControladoraRentaDevolucion {
    
    private final PersistenceService con;
    
    @Autowired
    public ControladoraRentaDevolucion (PersistenceService con) {
        
        this.con = con;
    }
    
    @PostMapping
    public void CrearRentaDevoluciones(@RequestBody RentaDevolucion rd){
        
        con.CrearRentaDevolucion(rd);        
    }
    
    @PutMapping
    public void EditarRentaDevoluciones(RentaDevolucion rd){
        
        con.EditarRentaDevolucion(rd);        
    }
        
    @DeleteMapping(path = "{id}")
    public void ElimRentaDevoluciones(@PathVariable("id") Long id){
        
        con.ElimRentaDeolucion(id);
        
    }
    
    @GetMapping
    public List<RentaDevolucion> obtenerRentaDevoluciones(){
        return con.obtenerRentaDevolucion();
    }
    
    @GetMapping("/rendevlolucion/{id}")
    public Optional<RentaDevolucion> obtenerRentaDevoluciones(@PathVariable("id") Long id){
        return con.obtenerRentaDevolucion(id);
    }
    
}
