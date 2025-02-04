import { useState } from "react";
import styles from "./style";
import { View, Text, TextInput, Button } from "react-native";

const Calcular = () => {
    
    const [alcool, setAlcool] = useState("");
    const [gasolina, setGasolina] = useState("");
    const [resultado, setResultado] = useState("");
    
    // Função que cálcula os valores dos combustíveis.
    const calcularVantagem = () => {
        const precoAlcool = parseFloat(alcool);
        const precoGasolina = parseFloat(gasolina);

        const razao = precoAlcool / precoGasolina;

        const combustivelVantajoso = razao <= 0.7 ? "Álcool" : "Gasolina";

        setResultado(`O melhor combustível é: ${combustivelVantajoso}`)
    }
    
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
                placeholder="Preço do Gasolina"
                keyboardType="numeric"
                value={gasolina}
                onChangeText={setGasolina}
            />
            <Button title="Calcular" onPress={calcularVantagem}/>

            {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
        </View>
    );
}

export default Calcular;