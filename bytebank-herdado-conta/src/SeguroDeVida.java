public class SeguroDeVida implements Tributavel{
    private double valorImposto = 0.2;

    @Override
    public double getPorcentagemImposto() {
        return this.valorImposto;
    }

    @Override
    public double getValorTributavel() {
        return 0;
    }
}
