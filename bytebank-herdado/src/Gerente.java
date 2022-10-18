public class Gerente extends Funcionario implements Autenticavel {
    private AutenticacaoUtil autenticador;

    Gerente(){
        this.autenticador = new AutenticacaoUtil();
    }

    public double getBonificacao() {
        System.out.println("chamando bonificacao do GERENTE");
        return super.getSalario();
    }

    @Override
    public void setSenha(int senha) {
        autenticador.setSenha(senha);
    }

    @Override
    public boolean autentica(int senha) {
        return autenticador.autentica(senha);
    }
}

