import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import ImagesDragDrop from './Components/ImagesDragDrop'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const TopSection = () => {
  return (
    <>
    
    <DndProvider backend={HTML5Backend}>
          <ImagesDragDrop />
        </DndProvider>
    <div className="topSection w-full h-full">
    <Navbar/>
    <HeroSection/>
    </div>
    </>
  )
}

export default TopSection
