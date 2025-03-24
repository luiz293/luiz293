def eh_primo(numero):
  
  if numero <= 1:
    return False
  if numero <= 3:
    return True
  if numero % 2 == 0 or numero % 3 == 0:
    return False
  i = 5
  while i * i <= numero:
    if numero % i == 0 or numero % (i + 2) == 0:
      return False
    i += 6
  return True

def encontrar_primos_ate(limite):

  primos = []
  for numero in range(2, limite + 1):
    if eh_primo(numero):
      primos.append(numero)
  return primos


def main():
 while True:
    print("\nEscolha uma opção:")
    print("1. Verificar se um número é primo")
    print("2. Encontrar todos os primos até um limite")
    print("3. Sair")

    opcao = input("Opção: ")

    if opcao == "1":
      try:
        numero = int(input("Digite um número: "))
        if eh_primo(numero):
          print(f"{numero} é um número primo.")
        else:
          print(f"{numero} não é um número primo.")
      except ValueError:
        print("Entrada inválida. Digite um número inteiro.")

    elif opcao == "2":
      try:
        limite = int(input("Digite o limite superior: "))
        if limite < 2:
          print("O limite deve ser maior ou igual a 2.")
        else:
          primos = encontrar_primos_ate(limite)
          print(f"Números primos até {limite}: {primos}")
      except ValueError:
        print("Entrada inválida. Digite um número inteiro.")

    elif opcao == "3":
      print("Saindo do aplicativo...")
      break

    else:
      print("Opção inválida. Tente novamente.")


if __name__ == "__main__":
  main()
