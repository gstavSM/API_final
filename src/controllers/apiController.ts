import { Request, Response } from 'express';

// senha forte:
// deve haver lowercase
// deve haver uppercase
// deve haver ao menos um caracter especial
// quantidade miníma de caracteres = 8?
// deev haver pelo menos um número

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
    
}