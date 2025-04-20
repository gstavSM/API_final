import request from "supertest";
import server from "../../server";
import{
  verificarSenhaForte,
  converterParaBinario,
  /*mediaArray,*/
  ehPar,
  /*validarCEP,
  contarPalavras,*/
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

