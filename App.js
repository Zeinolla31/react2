import React, { useState } from "react";
import { View, Text, Image, Button, TouchableOpacity, Modal, StyleSheet } from "react-native";

const countries = [
  { name: "Россия", capital: "Москва", independenceYear: 1991, flagUrl: "https://flagcdn.com/w320/ru.png" },
  { name: "США", capital: "Вашингтон", independenceYear: 1776, flagUrl: "https://flagcdn.com/w320/us.png" },
  { name: "Франция", capital: "Париж", independenceYear: 843, flagUrl: "https://flagcdn.com/w320/fr.png" },
  { name: "Германия", capital: "Берлин", independenceYear: 1871, flagUrl: "https://flagcdn.com/w320/de.png" },
  { name: "Китай", capital: "Пекин", independenceYear: -221, flagUrl: "https://flagcdn.com/w320/cn.png" },
  { name: "Япония", capital: "Токио", independenceYear: -660, flagUrl: "https://flagcdn.com/w320/jp.png" },
  { name: "Бразилия", capital: "Бразилиа", independenceYear: 1822, flagUrl: "https://flagcdn.com/w320/br.png" },
  { name: "Индия", capital: "Нью-Дели", independenceYear: 1947, flagUrl: "https://flagcdn.com/w320/in.png" },
  { name: "Канада", capital: "Оттава", independenceYear: 1867, flagUrl: "https://flagcdn.com/w320/ca.png" },
  { name: "Австралия", capital: "Канберра", independenceYear: 1901, flagUrl: "https://flagcdn.com/w320/au.png" }
];

const App = () => {
  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const nextCountry = () => {
    if (index < countries.length - 1) setIndex(index + 1);
  };

  const prevCountry = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onLongPress={() => setModalVisible(true)}>
        <Image source={{ uri: countries[index].flagUrl }} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{countries[index].name}</Text>
      <Text style={styles.subtitle}>
        Столица: {countries[index].capital}, Год независимости: {countries[index].independenceYear}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Предыдущая" onPress={prevCountry} disabled={index === 0} />
        <Button title="Следующая" onPress={nextCountry} disabled={index === countries.length - 1} />
      </View>
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Дополнительная информация о стране {countries[index].name}</Text>
          <Button title="Закрыть" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  image: { width: 300, height: 200, borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { fontSize: 18, marginBottom: 10, textAlign: "center" },
  buttonContainer: { flexDirection: "row", gap: 10 },
  modalView: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.7)" },
  modalText: { color: "#fff", fontSize: 20, marginBottom: 20 }
});

export default App;
