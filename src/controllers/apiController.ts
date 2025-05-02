import { Request, Response } from 'express';

// senha forte:
// deve haver lowercase
// deve haver uppercase
// deve haver ao menos um caracter especial
// quantidade miníma de caracteres = 8?
// deve haver pelo menos um número

export function verificarSenhaForte (senha: string): boolean {
    const temLower = /[a-z]/.test(senha);
    const temUpper = /[A-Z]/.test(senha);
    const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    const tem8Char = senha.length >= 8;
    const temNum = /\d/.test(senha);
    const ehForte = temUpper && temLower && temEspecial && tem8Char && temNum;
    console.log (ehForte ? "senha forte" : "senha fraca" ); 
    return ehForte;
}

export function converterParaBinario (num: number): string {
    const binario = num.toString(2);
    console.log (binario);
    return binario;
}

export function ehPar(numero: number): boolean {
    const ehPar = numero % 2 === 0;
    console.log(ehPar ? "É par" : "Não é par");
    return ehPar; 
}

export function mediaArray(numeros: number[]): number {
    if (numeros.length === 0) {
        return NaN;
    }
    const soma = numeros.reduce((total, valor) => total + valor, 0);
    return soma / numeros.length;
}

export function validarCEP(cep: string): boolean {
    const cepValido = /[x{8}!@#$%^&*(),.?":{}|<>]/;
    return cepValido.test(cep);
}

export function contarPalavras(frase: string): number {
    if(!frase){
        return 0
    }
    const palavras = frase.trim().split(/\s+/);
    return palavras.filter(p => p.length > 0).length;
}