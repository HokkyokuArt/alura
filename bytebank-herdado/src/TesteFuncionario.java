public class TesteFuncionario {
    public static void main(String[] args) {
        Gerente nico = new Gerente();
        nico.setNome("Nico");
        nico.setSalario(1000.0);
        System.out.println(nico.getNome());
        System.out.println(nico.getBonificacao());
    }
}
