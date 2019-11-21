import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Title, List, FAB, Colors } from 'react-native-paper';
import Header from '../../components/Header'

export default function PanelContainer() {
  const Icon = () => <List.Icon style={styles.icon} icon="format-list-bulleted" />;

  return (
    <>
      <Header
        showBackButton={true}
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <List.Section>
          <List.Subheader>Your Lists</List.Subheader>
          <List.Item
            left={() => <Icon />}
            title="List item 1"
            description="Describes item 1"
            onPress={() => console.log('Pressed')}
          />
          <List.Item
            left={() => <Icon />}
            title="List item 2"
            description="Describes item 2"
            onPress={() => console.log('Pressed')}
          />
        </List.Section>
      </ScrollView>

      <FAB
        style={styles.fab}
        small
        icon="plus"
        label="New List"
        onPress={() => console.log('Pressed')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  content: {
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  icon: {
    marginVertical: 1,
    marginHorizontal: 0,
  },
  item: {
    paddingVertical: 2,
    paddingHorizontal: 0,
  },
  fab: {
    position: 'absolute',
    marginEnd: 18,
    marginBottom: 24,
    right: 0,
    bottom: 0,
  },
});