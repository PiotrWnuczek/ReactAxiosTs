import React from 'react';
import { Typography, Avatar } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
import { FolderOpen } from '@mui/icons-material';

const ItemCard = ({ item }: { item: { id: string; } }) => (
  <Card
    sx={{ borderRadius: 2 }}
    variant='outlined'
  >
    <CardHeader
      title={item.id}
      avatar={<Avatar>
        <FolderOpen />
      </Avatar>}
    />
    <CardContent>
      <Typography>{item.id}</Typography>
    </CardContent>
  </Card>
);

export default ItemCard;
