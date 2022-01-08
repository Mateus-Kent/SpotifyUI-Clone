import React from "react"
import { View, Text, Image } from "react-native"

import { styles } from "./styles"

type SongJson = {
  song: any
}

export function RecommendedContainer({ song }: SongJson) {
  return (
    <View style={styles.container}>
      {song.slice(0, 6).map(() => {
        ;<View style={styles.songCard} key={song.id}>
          <Image style={styles.containerImage} source={song.photo} />
          <Text style={styles.containerTitle}>{song.name}</Text>
        </View>
      })}
    </View>
  )
}
