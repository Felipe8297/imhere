import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Minus } from 'lucide-react-native'

interface ParticipantProps {
  name: string
  onRemove: () => void
}

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Minus style={styles.minusIcon} />
      </TouchableOpacity>
    </View>
  )
}
