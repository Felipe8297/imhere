import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'
import { styles } from './styles'
import { Plus } from 'lucide-react-native'
import React from 'react'
import { Participant } from '../../components/Participant'
import { EmptyListMessage } from '../../components/EmptyListMessage'

export function Home() {
  const users = [
    'Felipe',
    'Marsola',
    'Diego3g',
    'Gabriel',
    'Aron',
    'Mayk',
    'Matheus',
    'Pedro',
    'Theus',
    'Ropeiro',
  ]

  function handleAddNewParticipant() {
    if (users.includes('Felipe')) {
      return Alert.alert(
        'Participante Existe',
        'Já existe um participante na lista com esse nome',
      )
    }
  }
  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name} da lista?`, [
      {
        text: 'Sim',
        onPress: () =>
          Alert.alert(
            `O participante ${name} foi removido da lista com sucesso`,
          ),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
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

      <FlatList
        data={users}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyListMessage />}
      />
    </View>
  )
}
