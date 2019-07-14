## Projeto Cypher 

## 1) Cifra de César

A cifra de César é um dos primeiros tipos de criptografias conhecidos na história. 
É um tipo de cifra por substituição, em que uma letra no texto original é substituída 
por outra, seguindo um número fixo para essa subtituição.

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Atualmente todas as cifras de substituição alfabética simples, são descifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de
César muitas vezes pode fazer parte de um sistema mais complexo de
criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2) Definindo Usuários

O aniversário da sua mãe está se aproximando e você está organizando uma festa
surpresa. Para manter a festa em segredo foi criado um grupo de Whatsapp com
amigxs e familiares. O problema é que as vezes sua mãe utiliza o seu celular
e pode ser que ela veja as suas mensagens. Como a festa é surpresa, você
decide criar uma aplicação que permita enviar mensagens criptografadas e depois
descriptografar. 
Para isso, o usuário precisa simplesmente digitar a mensagem que quer criptografar, 
escolher o deslocamento desejado do alfabeto e clicar no botão cifrar, dessa forma 
a mensagem aparecerá cifrada na caixa de texto abaixo. NO caso contrário, quando o 
usuário deseja decifrar uma mensagem, ele só precisa realizar o mesmo procedimento 
e clicar no botão decifrar dessa vez.

## 3) Requerimentos

* [ ] `README.md` com explicações e desenho do projeto
* [ ] Usar VanillaJS.
* [ ] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  cifrado.
* [ ] Mostrar o resultado da cifra corretamente.
* [ ] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  descifrado.
* [ ] Mostrar o resultado descifrado corretamente.
* [ ] Permitir escolher o `offset` (_deslocamento_) a ser usado na
  cifragem/descifragem.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Criar testes unitários.


## 4) Diagrama de Blocos e Processo

![caeser-cipher](https://github.com/loraineamaral/caesar-cipher/blob/master/Diagrama%20de%20Blocos.jpeg)

O programa consiste basicamente em duas entradas de dados que são a mensagem a 
ser criptografada e o deslocamento alfabético desejado. Em seguida existem duas 
funções diferentes, uma para cifrar e outra para decifrar o texto. Foi criada 
também um função para ligar o javascript ao html que coleta os dados inseridos 
e imprime o resultado na tela. 




