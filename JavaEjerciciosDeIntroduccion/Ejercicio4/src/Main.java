public class Main {
    public static void main(String[] args) {
        Cliente cliente = new Cliente();
        cliente.setNombre("Alejandro Rugeles");
        cliente.setEdad(26);
        cliente.setTelefono("1234567890");
        cliente.setCredito(2000000);

        Trabajador trabajador = new Trabajador();
        trabajador.setNombre("Juan Laiton");
        trabajador.setEdad(27);
        trabajador.setTelefono("876543211");
        trabajador.setSalario(2500000);

        System.out.println("El cliente " + cliente.getNombre());
        System.out.println("Edad " + cliente.getEdad()+" años");
        System.out.println("Número de telefono " + cliente.getTelefono());
        System.out.println("Posee un crédito de $" + cliente.getCredito());

        System.out.println("El trabajador " + trabajador.getNombre());
        System.out.println("Edad " + trabajador.getEdad()+" años");
        System.out.println("Número de telefono " + trabajador.getTelefono());
        System.out.println("Posee un salario base de $" + trabajador.getSalario());
    }
}
    class Persona {
        int edad;
        String nombre;
        String telefono;

        public void setEdad(int edad){
            this.edad = edad;
        }
        public int getEdad () {
            return this.edad;
        }
        public void setNombre(String nombre){
            this.nombre = nombre;
        }
        public String getNombre(){
            return this.nombre;
        }
        public void setTelefono(String telefono) {
            this.telefono = telefono;
        }
        public String getTelefono(){
            return this.telefono;
        }
    }

    class Cliente extends Persona {
        double credito;

        public void setCredito(double credito){
            this.credito = credito;
        }
        public double getCredito(){
            return this.credito;
        }
    }

    class Trabajador extends Persona{
        double salario;

        public void setSalario(double salario){
            this.salario = salario;
        }
        public double getSalario(){
            return this.salario;
        }
    }
