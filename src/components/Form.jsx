import { Button, TextField, Typography } from '@mui/material';

export default function Form({ fields, handleSubmit })  {
    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <span key={field.id}>
                    <Typography>{field.title}</Typography>
                    <TextField {...field} fullWidth />
                </span>
            ))}

            {handleSubmit && <Button fullWidth type='submit' variant='contained' color='primary' sx={{ mt: '1vh' }}>
                Submit
            </Button>}
        </form>
    )
}