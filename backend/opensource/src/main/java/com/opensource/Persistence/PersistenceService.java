package com.opensource.Persistence;


import com.opensource.Database.*;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//Contrladora de persistencias, donde se coordinan las operaciones CRUD
@Service
public class PersistenceService {
    
    private final ArticuloJpaController AC;
    
    private final ClientesJpaController CC;
    
    private final ElencoJpaController EC;
    
    private final EmpleadosJpaController EmC;
    
    private final GenerosJpaController GC;
    
    private final IdiomasJpaController IC;
    
    private final RentaDevolucionJpaController RC;
    
    private final TiposArticulosJpaController TAC;

    @Autowired
    public PersistenceService(ArticuloJpaController AC, ClientesJpaController CC, ElencoJpaController EC, EmpleadosJpaController EmC, GenerosJpaController GC, IdiomasJpaController IC, RentaDevolucionJpaController RC, TiposArticulosJpaController TAC) {
        this.AC = AC;
        this.CC = CC;
        this.EC = EC;
        this.EmC = EmC;
        this.GC = GC;
        this.IC = IC;
        this.RC = RC;
        this.TAC = TAC;
    }
    
    

    @SuppressWarnings("null")
    public void CrearArticulo(Articulo a){
        
        AC.save(a);
        
    }
    
    @SuppressWarnings("null")
    @Transactional
    public void EditarArticulo(Articulo a){
        
        Optional<Articulo> oa = AC.findById(a.getId());
        
        Articulo ab = oa.get();
        
        ab.setDiasRenta(a.getDiasRenta()); 
        ab.setEntregaTardia(a.getEntregaTardia());
        ab.setEstado(a.getEstado());
        ab.setIdiomas(a.getIdiomas());
        ab.setRentaXDias(a.getRentaXDias());
        ab.setTipos(a.getTipos());
        ab.setTitulo(a.getTitulo());
        AC.save(ab);
    }
        
    
    @SuppressWarnings("null")
    public void ElimArticulo(Long id){
        
        try {
            AC.deleteById(id);
        } catch (Exception ex) {
            throw new IllegalStateException("Elemento con id " + id + " no existe exist");
        }        
    }
    
    
    public List<Articulo> obtenerArticulo(){
        
        return AC.findAll();
    }
    
    
    @SuppressWarnings("null")
    public Optional<Articulo> obtenerArticulo(Long id){
        
        return AC.findById(id);
    }
    
    
    @SuppressWarnings("null")
    public void CrearCliente(Clientes c){
        
        CC.save(c);
        
    }
    
    @SuppressWarnings("null")
    @Transactional
    public void EditarCliente(Clientes c){
        
        Optional<Clientes> oa = CC.findById(c.getId());
        
        Clientes ab = oa.get();
        
        ab.setCedula(c.getCedula());
        ab.setEstado(c.getEstado());
        ab.setLimiteCredito(c.getLimiteCredito());
        ab.setNoTargetaCR(c.getNoTargetaCR());
        ab.setNombre(c.getNombre());
        ab.setTipoPersona(c.getTipoPersona());
        
        CC.save(ab);
        
    }
        
    
    @SuppressWarnings("null")
    public void ElimCliente(Long id){
        
        try {
            CC.deleteById(id);
        } catch (Exception ex) {
            throw new IllegalStateException("Elemento con id " + id + " no existe exist");
        }        
    }
    
    
    public List<Clientes> obtenerCliente(){
        return CC.findAll();
    }
    
    
    
    @SuppressWarnings("null")
    public Optional<Clientes> obtenerCliente(Long id){
        return CC.findById(id);
    }
    
    
    @SuppressWarnings("null")
    public void CrearElenco(Elenco e){
        
        EC.save(e);        
    }
    
    @SuppressWarnings("null")
    @Transactional
    public void EditarElenco(Elenco e){
        
        Optional<Elenco> oa = EC.findById(e.getId());
        
        Elenco ab = oa.get();
        
        ab.setDescripcion(e.getDescripcion());
        ab.setEstado(e.getEstado());
        
        EC.save(ab);
        
    }
        
    
    @SuppressWarnings("null")
    public void ElimElenco(Long id){
        
        try {
            EC.deleteById(id);
        } catch (Exception ex) {
            throw new IllegalStateException("Elemento con id " + id + " no existe exist");
        }        
    }
    
    
    public List<Elenco> obtenerElenco(){

        return EC.findAll();
    }
    
    
    @SuppressWarnings("null")
    public Optional<Elenco> obtenerElenco(Long id){

        return EC.findById(id);
    }
    
    
    @SuppressWarnings("null")
    public void CrearEmpleado(Empleados em){
        
        EmC.save(em);        
    }
    
    @SuppressWarnings("null")
    @Transactional
    public void EditarEmpleado(Empleados em){
        
        Optional<Empleados> oa = EmC.findById(em.getId());
        
        Empleados ab = oa.get();
        
        ab.setCedula(em.getCedula());
        ab.setEstado(em.getEstado());
        ab.setFechaIngreso(em.getFechaIngreso());
        ab.setNombre(em.getNombre());
        ab.setPorcientoComision(em.getPorcientoComision());
        ab.setTandaLaboral(em.getTandaLaboral());
        
        EmC.save(ab);
        
    }
        
    
    @SuppressWarnings("null")
    public void ElimEmpleado(Long id){
        
        try {
            EmC.deleteById(id);
        } catch (Exception ex) {
            throw new IllegalStateException("Elemento con id " + id + " no existe exist");
        }        
    }
    
    
    public List<Empleados> obtenerEmpleado(){

        return EmC.findAll();
    }
    
    
    @SuppressWarnings("null")
    public Optional<Empleados> obtenerEmpleado(Long id){
        return EmC.findById(id);
    }
    
    
    @SuppressWarnings("null")
    public void CrearGenero(Generos g){
        
        GC.save(g);
        
    }
    
    @SuppressWarnings("null")
    @Transactional
    public void EditarGenero(Generos g){
        
        Optional<Generos> oa = GC.findById(g.getId());
        
        Generos ab = oa.get();
        
        ab.setDescripcion(g.getDescripcion());
        ab.setEstado(g.getEstado());
        
        GC.save(ab);
        
    }
        
    
    @SuppressWarnings("null")
    public void ElimGenero(Long id){
        
        try {
            GC.deleteById(id);
        } catch (Exception ex) {
            throw new IllegalStateException("Elemento con id " + id + " no existe exist");
        }        
    }
    
    
    public List<Generos> obtenerGenero(){

        return GC.findAll();
    }
    
    
    @SuppressWarnings("null")
    public Optional<Generos> obtenerGenero(Long id){

        return GC.findById(id);
    }
    
    
    
    @SuppressWarnings("null")
    public void CrearIdioma(Idiomas i){
        
        IC.save(i);       
    }
    
    @SuppressWarnings("null")
    @Transactional
    public void EditarIdioma(Idiomas i){
        
        Optional<Idiomas> oa = IC.findById(i.getId());
        
        Idiomas ab = oa.get();
        
        ab.setDescripcion(i.getDescripcion());
        ab.setEstado(i.getEstado());
        
        IC.save(ab);
        
    }
        
    
    @SuppressWarnings("null")
    public void ElimIdioma(Long id){
        
        try {
            IC.deleteById(id);
        } catch (Exception ex) {
            throw new IllegalStateException("Elemento con id " + id + " no existe exist");
        }        
    }
    
    
    public List<Idiomas> obtenerIdioma(){

        return IC.findAll();
    }
    
    
    @SuppressWarnings("null")
    public Optional<Idiomas> obtenerIdioma(Long id){
        return IC.findById(id);
    }
    
    
    @SuppressWarnings("null")
    public void CrearRentaDevolucion(RentaDevolucion rd){
        
        RC.save(rd);
        
    }
    
    @SuppressWarnings("null")
    @Transactional
    public void EditarRentaDevolucion(RentaDevolucion rd){
        
        Optional<RentaDevolucion> oa = RC.findById(rd.getId());
        
        RentaDevolucion ab = oa.get();
        
        ab.setArticulo(rd.getArticulo());
        ab.setCantidadDias(rd.getCantidadDias());
        ab.setCliente(rd.getCliente());
        ab.setComentario(rd.getComentario());
        ab.setEmpleado(rd.getEmpleado());
        ab.setEstado(rd.getEstado());
        ab.setFechaDevolucion(rd.getFechaDevolucion());
        ab.setFechaRenta(rd.getFechaRenta());
        
        
        RC.save(ab);        
    }
        
    
    @SuppressWarnings("null")
    public void ElimRentaDeolucion(Long id){
        
        try {
            RC.deleteById(id);
        } catch (Exception ex) {
            throw new IllegalStateException("Elemento con id " + id + " no existe exist");
        }        
    }
    
    
    public List<RentaDevolucion> obtenerRentaDevolucion(){
        
        return RC.findAll();
    }
    
    
    @SuppressWarnings("null")
    public Optional<RentaDevolucion> obtenerRentaDevolucion(Long id){
        
        return RC.findById(id);
    }
    
    
    @SuppressWarnings("null")
    public void CrearTiposArticulo(TiposArticulos ta){
        
        TAC.save(ta);
        
    }
    
    @SuppressWarnings("null")
    @Transactional
    public void EditarTiposArticulo(TiposArticulos ta){
        
        Optional<TiposArticulos> oa = TAC.findById(ta.getId());
        
        TiposArticulos ab = oa.get();
        
        ab.setDescripcion(ta.getDescripcion());
        ab.setEstado(ta.getEstado());
        
        TAC.save(ab);
        
    }
        
    
    @SuppressWarnings("null")
    public void ElimTiposArticulos(Long id){
        
        try {
            TAC.deleteById(id);
        } catch (Exception ex) {
            throw new IllegalStateException("Elemento con id " + id + " no existe exist");
        }        
    }
    
    
    public List<TiposArticulos> obtenerTiposArticulo(){
        return TAC.findAll();
    }
    
    
    @SuppressWarnings("null")
    public Optional<TiposArticulos> obtenerTiposArticulo(Long id){
        return TAC.findById(id);
    }
}
