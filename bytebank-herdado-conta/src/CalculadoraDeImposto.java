public class CalculadoraDeImposto {
    private double valorImposto;
    public void calculaValorImposto(Tributavel t){
        double imposto = t.getPorcentagemImposto();
        double saldo = t.getValorTributavel();
        this.valorImposto = saldo * imposto;
    }
    public double getValorImposto(){
        return this.valorImposto;
    }
}
