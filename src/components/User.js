import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

const User = ({user}) => {
    const { email, name, phone, picture, location } = user;
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar src={picture?.medium} alt="user-img" />
                </ListItemAvatar>
                <ListItemText
                primary={ 
                    <Typography
                        sx={{ display: 'block' }}
                        component="span"
                        variant="body1"
                        color="text.primary"
                    >
                        {name?.first} {name?.last}
                    </Typography> 
                }
                secondary={
                    <>
                        <Typography
                            sx={{ display: 'block' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Email: {email }
                        </Typography>
                        <Typography
                            sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Phone: { phone }
                        </Typography>
                        <Typography
                            sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Location: { location?.city }, { location?.country}
                        </Typography>
                    </>
                }
                />       
            </ListItem>        
    </List>
    );
};

export default User;