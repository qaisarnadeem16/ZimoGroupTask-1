import React,{useState} from 'react'
import img1 from '../../public/asssets/p1.png'
import img2 from '../../public/asssets/p2.png'
import img3 from '../../public/asssets/p3.png'
import img4 from '../../public/asssets/p4.png'
import Image from 'next/image'
import { useDrag, useDrop } from 'react-dnd';

const ImagesDragDrop = () => {
  const [imageItems, setImageItems] = useState([
    {
      id: '1',
      src: img1,
    },
    {
      id: '2',
      src: img2,
    },
    {
      id: '3',
      src: img3,
    },
    {
      id: '4',
      src: img4,
    },
  ]);

  const moveImageItem = (dragIndex, hoverIndex) => {
    const dragImageItem = imageItems[dragIndex];
    const hoverImageItem = imageItems[hoverIndex];
    setImageItems((prevImageItems) => {
      const newImageItems = [...prevImageItems];
      newImageItems[dragIndex] = hoverImageItem;
      newImageItems[hoverIndex] = dragImageItem;
      return newImageItems;
    });
  };

  const ImageItem = ({ id, src, index }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'IMAGE_ITEM',
      item: { id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    const [{ isOver }, drop] = useDrop(() => ({
      accept: 'IMAGE_ITEM',
      drop: (item) => {
        const dragIndex = item.index;
        const hoverIndex = index;
        if (dragIndex === hoverIndex) {
          return;
        }
        moveImageItem(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }));

    return (
      <div
        ref={drop}
        className="md:w-1/4 sm:w-1/2 w-full  h-1/4 p-2 border-2 border-gray-300 rounded-lg flex items-center justify-center"
        style={{ opacity: isDragging ? 0.5 : 1, backgroundColor: isOver ? '#FCD34D' : 'white' }}
      >
        <Image ref={drag} src={src} alt="Image" />
      </div>
    );
  };

  return (
    <>
        <h1 className="text-xl text-black font-bold text-center p-3">Images Drag and Drop</h1>
  
    <div className="flex  flex-col sm:flex-row gap-4 p-5">
      {imageItems.map((imageItem, index) => (
        <ImageItem key={imageItem.id} id={imageItem.id} src={imageItem.src} index={index} />
      ))}
    </div>
    </>
  );
};

export default ImagesDragDrop;
