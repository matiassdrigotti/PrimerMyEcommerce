import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const RenderItemTask = ({item, onPressTask}) => {

    return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={ 
                    item.completed ? 
                    styles.taskCompleted : 
                    styles.task
                } key={item.id}>
                <Text style={styles.taskText}>{item.task}</Text>
            </View>
        </Pressable>
    )
}



const styles = StyleSheet.create({
    task: {
        width: 200,
        padding: 10,
        backgroundColor: "#ff0000",
        borderRadius: 6,
        borderColor: "#000",
        borderBottomWidth: 3,
        marginBottom: 15,
    },
    taskCompleted: {
        width: 200,
        padding: 10,
        backgroundColor: "#ffff00",
        borderRadius: 6,
        borderColor: "#000",
        borderBottomWidth: 3,
        marginBottom: 15,
    },
    taskText: {
        fontSize: 20,
    },
})

export default RenderItemTask