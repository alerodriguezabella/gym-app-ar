import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function BackButton() {
    const navigate = useNavigate()

    return (
        <ArrowBackIosNewIcon 
            className='link-primary'    
            onClick={() => navigate(-1)} 
            style={{marginRight: '10px'}}
        />
    )
}