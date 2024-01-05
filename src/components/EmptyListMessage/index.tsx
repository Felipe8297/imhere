import { Text, View } from 'react-native'
import { styles } from './styles'

export function EmptyListMessage() {
  return (
    <View>
      <Text style={styles.emptyList}>
        Ninguém chegou no evento ainda? Adicione participantes a sua lista de
        presença.
      </Text>
    </View>
  )
}
