public class TesteGerente {
    public static void main(String[] args) {
        Gerente g1 = new Gerente();

        g1.setNome("nome");
        g1.setCpf("123123123");
        g1.setSalario(5000.0);

        g1.setSenha(2222);
        System.out.println(g1.autentica(2222));

        System.out.println(g1.getBonificacao());
    }
}
