import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Plus } from 'lucide-react-native'
import React from 'react'

export function Home() {
  function handleAddNewParticipant() {
    console.log('opa')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Quinta, 4 de Janeiro de 2024.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddNewParticipant}
        >
          <Plus style={styles.plusIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
