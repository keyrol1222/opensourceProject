package com.opensource.Database;

import java.io.Serializable;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Generos implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    
    private String Descripcion;
    
    private String Estado;

    //Constructor con todo
    public Generos(Long Id, String Descripcion, String Estado) {
        this.Id = Id;
        this.Descripcion = Descripcion;
        this.Estado = Estado;
    }
    //Constructor sin id
    public Generos(String Descripcion, String Estado) {
        this.Descripcion = Descripcion;
        this.Estado = Estado;
    }
    
    public Generos() {
    }
    
    
      
}
