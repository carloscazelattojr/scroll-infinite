import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import { Character } from '@/models/Character';

type CharacterListItem = {
    character: Character;
};

export function CharacterListItem({ character }: CharacterListItem) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{character.name}</Text>
            <Image source={{ uri: character.image }} style={styles.image} />
        </View>
    );
}