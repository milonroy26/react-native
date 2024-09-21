import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function BookList() {

    const books = [
        {
          "id": 1,
          "title": "The World Of Eragon",
          "author": "Random House",
          "price": "72",
          "image": "https://i.ibb.co/2yhshhm/book-9.png",
          "isfavourite": true,
          "published": "2006"
        },
        {
          "id": 2,
          "title": "After The Firm",
          "author": "Random House",
          "price": "92",
          "image": "https://i.ibb.co/4jQ1xv1/book-10.png",
          "isfavourite": false,
          "published": "2023"
        },
        {
          "id": 3,
          "title": "Starts With Us",
          "author": "Random House",
          "price": "64",
          "image": "https://i.ibb.co/HYjXczC/book3.png",
          "isfavourite": true,
          "published": "2022"
        },
        {
          "id": 4,
          "title": "Atomic Habits",
          "author": "Penguin Group Usa",
          "price": "66",
          "image": "https://i.ibb.co/hRvXcJp/book-4.png",
          "isfavourite": false,
          "published": "2018"
        },
        {
          "id": 5,
          "title": "Fourth Wing",
          "author": "Macmillan",
          "price": "102",
          "image": "https://i.ibb.co/r3ryFwD/book-5.png",
          "isfavourite": false,
          "published": "2023"
        },
      ]

  return (
    <View>
      <Text style={styles.headingText}>Books List</Text>

      <ScrollView horizontal>
        {
            books.map((book) => (
                <View key={book.id} style={[styles.card, styles.cardElevated]}>
                    <View style={styles.cardImageWrapper}>
                        <Image
                            style={styles.cardImage}
                            source={{uri: book.image }}
                        />
                    </View>

                    <View style={styles.cardBody}>
                        <Text style={styles.title}> {book.title} </Text>

                        <View style={styles.subtitle}>
                            <Text > {book.author} </Text>
                            <Text style={styles.bookPrice}> ${book.price} </Text>
                        </View>
                        
                        <View style={styles.cardFooter}>
                            <TouchableOpacity>
                                <Text>Read More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            ))
        }
      </ScrollView>
      

    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 8,
    },

    card: {
        width: 310,
        height: 310,
        borderRadius: 7,
        marginVertical: 10,
        marginHorizontal:6,
        padding: 2,
    },

    cardElevated: {
        backgroundColor: '#f1f1f1',
        elevation: 1,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },

    cardImageWrapper: {
        padding: 6,
    },

    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        resizeMode: "contain",
    },

    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },

    title: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },

    subtitle:{
        color: '#000000',
        marginBottom: 6,

        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    bookPrice: {
        color: 'green',
        fontWeight: 'bold',
    },

    description: {
        color: '#000000',
        fontSize: 12,
        marginBottom: 12,
        flexShrink: 1,
        marginTop: 6
    },

    cardFooter: {
        color: 'navy',
        fontSize: 12,
        fontWeight: '500',
        marginTop: 4,
        marginBottom: 2,
        textAlign: 'right',
    },
})