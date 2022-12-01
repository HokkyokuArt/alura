import javax.swing.event.MouseInputAdapter;

public class FluxoComError {
    public static void main(String[] args) {
        System.out.println("Inicio do main");
        try {
            metodo1();
        } catch (MinhaExcecao ex) {
            String  msg = ex.getMessage();
            System.out.println("Exception: " + msg);
            ex.printStackTrace();
        }


        System.out.println("Fim do main");
    }

    private static void metodo1() throws MinhaExcecao{
        System.out.println("Inicio do metodo1");
        metodo2();
        System.out.println("Fim do metodo1");
    }

    private static void metodo2() throws MinhaExcecao{
        System.out.println("Inicio do metodo2");
        throw new MinhaExcecao("Deu muito errado");
    }
}
