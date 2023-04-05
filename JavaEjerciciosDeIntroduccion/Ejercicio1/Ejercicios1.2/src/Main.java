public class Main {
    public static void main(String[] args) {
        Coche miCoche = new Coche();
        miCoche.Sumarpuertas();
        miCoche.Sumarpuertas();

        System.out.println(miCoche.puertas);
    }
}

class Coche {
    public int puertas = 0;

    public void Sumarpuertas(){
        this.puertas++;
    }
}