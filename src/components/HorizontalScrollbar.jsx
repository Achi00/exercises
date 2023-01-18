import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { Box, Typography } from '@mui/material';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useContext } from 'react';
import ExerciseCard from './ExerciseCard'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        {/* <img src={LeftArrowIcon} alt="right-arrow" /> */}
        <AiOutlineArrowLeft size="50px"/>
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <AiOutlineArrowRight size="50px"/>
      </Typography>
    );
  }

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart , isBodyParts}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map(item => 
        <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
        >
          {isBodyParts ?  <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> 
          : <ExerciseCard exercise={item}/>
          }
        </Box>
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar