public class ContaCorrente extends Conta implements Tributavel{
    private double porcentagemImposto = 0.1;
    public ContaCorrente(){
    }
    public ContaCorrente(int agencia, int numero) {
        super(agencia, numero);
    }

    @Override
    public void deposita(double valor) {
        super.saldo += valor;
    }

    @Override
    public boolean saca(double valor) {
        double valorASacar = valor + 0.2;
        return super.saca(valorASacar);
    }

    @Override
    public double getPorcentagemImposto() {
        return this.porcentagemImposto;
    }

    @Override
    public double getValorTributavel() {
        return super.saldo;
    }
}
