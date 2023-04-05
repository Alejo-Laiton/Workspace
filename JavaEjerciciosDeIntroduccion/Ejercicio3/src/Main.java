public class Main {

    public static void main(String[] args) {
        Persona persona = new Persona();
        persona.setEdad(26);
        persona.setNombre("Alejandro");
        persona.setTelefono(1234567890);
        System.out.println("Mi nombre es " + persona.getNombre() + " tengo " + persona.getEdad() + " años y mi número de celular es " + persona.getTelefono());

    }
}
class Persona {
    private int edad;
    private String nombre;
    private long telefono;

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setTelefono(long telefono) {
        this.telefono = telefono;
    }
    public int getEdad(){
        return edad;
    }
    public String getNombre(){
        return nombre;
    }
    public long getTelefono(){
        return telefono;
    }
}






