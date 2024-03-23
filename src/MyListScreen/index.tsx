import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { CharacterListItem } from '@/components/CharacterListItem';
import { styles } from './styles';

import { Character } from '@/models/Character';

const initialPage = "https://rickandmortyapi.com/api/character";

export default function MyListScreen() {

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<Character[]>([]);
    const [nextPage, setNextPage] = useState('');

    const fetchPage = async (url: string) => {
        if (loading) {
            return;
        }

        console.log("Fetching: " + url);
        setLoading(true);

        const response = await fetch(url);
        const responseJson = await response.json();

        setItems([...items, ...responseJson.results]);

        setNextPage(responseJson.info.next);
        setLoading(false);
    }

    const onRefresh = () => {
        setItems([]);
        setNextPage(initialPage);
        fetchPage(initialPage);
    }

    useEffect(() => {
        fetchPage(initialPage);
    }, [])


    // if (loading) {
    //     return <ActivityIndicator style={styles.containerLoading} color="#b2daed" size={100} />
    // }

    return (
        <FlatList
            style={{ marginTop: 40 }}
            data={items}
            renderItem={({ item }) => <CharacterListItem character={item} />}
            contentContainerStyle={{ gap: 10 }}
            onEndReached={() => fetchPage(nextPage)}
            onEndReachedThreshold={5}
            ListFooterComponent={() => loading && <ActivityIndicator />}
            //debug={true}
            refreshing={loading}
            onRefresh={onRefresh}
        />
    );
}