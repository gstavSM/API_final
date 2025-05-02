import request from "supertest";
import server from "../../server";
import{
  verificarSenhaForte,
  converterParaBinario,
  mediaArray,
  ehPar,
  validarCEP,
  contarPalavras,
} from "../apiController"


describe("Esse é um teste que irá validar se a senha é forte ou fraca", () => {
  it("Irá retornar true se a senha for forte", () => {
  expect(verificarSenhaForte("Abc@1234")).toBe(true);
  });  
  it("Irá retornar false se a senha for fraca", () => {
  expect(verificarSenhaForte("senhaFraca")).toBe(false);
  })
});

describe("Esse teste deve retornar um binário", () => {
  it("Deve transformar um número decimal em binário", () => {
  expect(typeof converterParaBinario(10)).toBe("string");
  })
  it("Deve transformar um número decimal em binário", () => {
    expect(typeof converterParaBinario(255)).toBe("string");
  })
})

describe ("Esse teste deve verificar se o número é par", () => {
  it("Irá verificar se o número 4 é par e deve dar true", () => {
    expect(ehPar(4)).toBe(true);
  })
  it("Irá verificar se o número 7 é par e deve dar false", () => {
    expect(ehPar(7)).toBe(false);
  })
})

describe ("Esse teste deve validar a média dos dois arrays", () => {
  it ("Irá verificar a média deste array e deve receber 10", () => {
    expect(mediaArray([5,10,15])).toBe(10);
  })
  it ("Irá verificar a media deste array e deve receber 200" ,() => {
    expect(mediaArray([100,200,300])).toBe(200);
  })
})

describe ("Esse teste deve verificar se o cep é válido", () => {
  it ("Irá verificar este cep e deve receber true", () => {
    expect(validarCEP("12345678")).toBe(true);
  })
  it ("Irá verificar este cep e deve receber false" ,() => {
    expect(validarCEP("12A4567")).toBe(false);
  })
})

describe ("Esse teste deve contar a quantidade correta de palavras nas frases", () => {
  it ("Deve contar as palavras e retornar true", () => {
    expect(contarPalavras("Isso é um teste simples")).toBe(5);
  })
  it ("Deve contar as palavras, remover espaçoes extras e retornar false" ,() => {
    expect(contarPalavras("    Espaços    Extras      ")).toBe(2);
  })
  it ("Deve retornar 0 se for string vazia ou só espaços", () => {
    expect(contarPalavras("  ")).toBe(0);
  })
})