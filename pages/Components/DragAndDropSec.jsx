import React from 'react'
import ImagesDragDrop from './ImagesDragDrop'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DragAndDropSec = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <ImagesDragDrop />
        </DndProvider>
    )
}

export default DragAndDropSec
