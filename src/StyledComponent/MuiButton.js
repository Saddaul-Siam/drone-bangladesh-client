import { styled } from "@mui/system";
import Button from '@mui/material/Button';

const PrimaryButton = styled(Button)({
    background: 'linear-gradient(#ff589b,#ff136f)',
    color: '#fff',
    padding: '8px 20px',
    borderRadius: '52px',
    border: 0,
    outline: 0,
    fontSize: '14px',
    fontWeight:"bolder"
});

export const DeleteButton = styled(Button)({
    background: 'linear-gradient(#DC3545,#DC143C)',
    color: '#fff',
    padding: '8px 20px',
    borderRadius: '52px',
    border: 0,
    outline: 0,
    fontSize: '14px',
    fontWeight:"bolder"
})
export const SuccessButton = styled(Button)({
    background: 'linear-gradient(#198754,#599a59)',
    color: '#fff',
    padding: '8px 20px',
    borderRadius: '52px',
    border: 0,
    outline: 0,
    fontSize: '14px',
    fontWeight:"bolder"
})

export default PrimaryButton;