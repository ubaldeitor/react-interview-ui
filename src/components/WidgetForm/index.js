import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addWidget, getWidgetById, updateWidget } from '../../lib/apiConnect';



const WidgetForm = () => {
    const { id } = useParams();

    const [widget, setWidget] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        console.log(`Update widget ${id}`);
        if (id) {
            getWidgetById(id)
                .then(setWidget)
                .catch((error) => console.error('Error adding widget', error));
        }
    }, [id])

    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setWidget(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(widget);
        addWidget(widget)
            .then(alert('Widget added correctly'))
            .catch((error) => console.error('Error adding widget', error));
        navigate('/');
    }

    function handleUpdate(event) {
        event.preventDefault();
        console.log(widget);
        console.log('updating....');
        updateWidget(widget.name, widget)
            .then(alert('Widget updated correctly'))
            .catch((error) => console.error('Error adding widget', error));
        navigate('/');
    }

    return (
        <Stack spacing={4} justifyContent="center" sx={{ margin: 'auto', maxWidth: 900, paddingTop: '4em', width: '100%' }}>
            <Typography sx={{ textAlign: 'center' }} variant="h4">
                {id ? 'Update widget:' : 'Add widget'}
            </Typography>
            <form onSubmit={id ? handleUpdate : handleSubmit} action={<Link to="/" />} width="100%">
                <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <TextField
                            type="text"
                            id="name"
                            label="Widget name"
                            variant="outlined"
                            size="small"
                            value={widget.name || ""}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="description"
                            label="Widget description"
                            variant="outlined"
                            size="small"
                            value={widget.description || ""}
                            onChange={handleChange} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="price"
                            label="Widget price"
                            variant="outlined"
                            size="small"
                            value={widget.price || ""}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant='contained' type="submit" size="small">{id ? 'Update' : 'Add'}</Button>
                    </Grid>
                </Grid>
            </form>
        </Stack>
    )
}

export default WidgetForm;