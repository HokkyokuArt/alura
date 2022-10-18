public class TesteCalculadoraDeImposto {
    public static void main(String[] args) {
        ContaCorrente contaCorrente = new ContaCorrente();
        contaCorrente.deposita(1000.0);
        System.out.println("Saldo da conta corrente: " + contaCorrente.getSaldo());

        ContaPoupanca contaPoupanca = new ContaPoupanca();
        contaPoupanca.deposita(1300.0);

        SeguroDeVida seguroDeVida = new SeguroDeVida();

        CalculadoraDeImposto calculadoraDeImposto = new CalculadoraDeImposto();
        calculadoraDeImposto.calculaValorImposto(contaCorrente);
        double valorCC = calculadoraDeImposto.getValorImposto();
        calculadoraDeImposto.calculaValorImposto(seguroDeVida);
        double valorSV = calculadoraDeImposto.getValorImposto();
        System.out.println("ValorImposto Conta Corrente: " + valorCC +
                "\nValorImposto Seguro de Vida: " + valorSV);

//        Como garantir que a calculadora não vai aceitar a contaPoupanca? (test)
//        calculadoraDeImposto.calculaValorImposto(contaPoupanca);


    }
}
