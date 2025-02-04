## 📝 Resumo do Código

Este código é um exemplo de um componente React Native que calcula qual combustível é mais vantajoso (álcool ou gasolina) com base nos preços fornecidos pelo usuário. Abaixo está a explicação detalhada:

---

## 🚀 Funcionamento

1. O usuário insere os preços do álcool e da gasolina.
2. Ao clicar em "Calcular", o componente determina qual combustível é mais econômico.
3. O resultado é exibido na tela, informando se o álcool ou a gasolina é a melhor opção.

---

## 💡 Exemplo de Uso

- **Preço do Álcool**: R$ 4,00
- **Preço da Gasolina**: R$ 6,00
- **Resultado**: `O melhor combustível é: Álcool` ✅

---

## 📦 Importações

```javascript
import { useState } from "react";
import styles from "./style";
import { View, Text, TextInput, Button } from "react-native";
```

- `useState`: Hook do React para gerenciar estados.
- `styles`: Estilos importados de um arquivo externo.
- Componentes do React Native: `View`, `Text`, `TextInput`, `Button`.

---

## 🧮 Função `calcularVantagem`

```javascript
const calcularVantagem = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    const razao = precoAlcool / precoGasolina;

    const combustivelVantajoso = razao <= 0.7 ? "Álcool" : "Gasolina";

    setResultado(`O melhor combustível é: ${combustivelVantajoso}`);
};
```

- Calcula a razão entre o preço do álcool e da gasolina.
- Se a razão for `≤ 0.7`, o álcool é mais vantajoso.
- Caso contrário, a gasolina é a melhor opção.
- O resultado é armazenado no estado `resultado`.

---

## 🖥️ Interface do Usuário

```javascript
return (
    <View style={styles.container}>
        <Text style={styles.title}>Álcool ou Gasolina?</Text>
        <TextInput
            style={styles.input}
            placeholder="Preço do Álcool"
            keyboardType="numeric"
            value={alcool}
            onChangeText={setAlcool}
        />
        <TextInput
            style={styles.input}
            placeholder="Preço da Gasolina"
            keyboardType="numeric"
            value={gasolina}
            onChangeText={setGasolina}
        />
        <Button title="Calcular" onPress={calcularVantagem} />
        {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
    </View>
);
```

- **Título**: "Álcool ou Gasolina?"
- **Inputs**:
  - Preço do álcool.
  - Preço da gasolina.
- **Botão**: "Calcular" que executa a função `calcularVantagem`.
- **Resultado**: Exibe qual combustível é mais vantajoso.

---
