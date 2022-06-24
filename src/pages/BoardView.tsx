import React, { useEffect } from 'react';
import { AppState } from 'index';
import { useApp } from 'assets/useApp';
import { connect } from 'react-redux';
import { fetchItems } from 'store/itemsActions';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { format } from 'date-fns';
import MainLayout from 'pages/MainLayout';
import ItemCard from 'molecules/ItemCard';

const BoardView = (
  { fetchItems, items }: { fetchItems: () => void, items: { id: string; }[] }
) => {
  const [sidebar, setSidebar] = useApp();
  useEffect(() => { fetchItems() });

  return (
    <MainLayout navbar={
      <Box sx={{ display: 'flex', alignItems: 'center', m: { xs: 1.2, sm: 2.2 } }}>
        <IconButton
          sx={{ display: { xs: 'flex', sm: 'none' }, mr: 2 }}
          onClick={() => setSidebar(!sidebar)}
        >
          <Menu />
        </IconButton>
        <Typography variant='h6'>
          Today is the {format(new Date(), 'do MMMM Y')}
        </Typography>
      </Box>
    }>
      <Grid sx={{ p: 2 }} container spacing={2}>
        {items && items.map(item =>
          <Grid item xs={12} key={item.id}>
            <ItemCard item={item} />
          </Grid>
        )}
      </Grid>
    </MainLayout>
  )
};

const mapStateToProps = (state: AppState) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchItems: () => dispatch(fetchItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)
  (BoardView);
