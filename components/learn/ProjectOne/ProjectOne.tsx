import {Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import FlatCards from './FlatCards'
import ElevatedCards from './ElevatedCards'
import FancyCard from './FancyCard'
import BookList from './BookList'
import ActionCard from './ActionCard'

const ProjectOne = () => {
    const Images = [
        "https://picsum.photos/400/300.jpg",
        "https://picsum.photos/seed/picsum/400/300"
    ]
  return (
    <SafeAreaView>
      <ScrollView>
          <FlatCards />
          <ElevatedCards />

          {
            Images.map((image, index) => {
                return <FancyCard key={index} bestImage={image} />
            })
          }

          <ActionCard />

          <BookList />
          
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProjectOne

