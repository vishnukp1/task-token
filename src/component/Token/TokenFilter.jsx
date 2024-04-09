import { Box, Typography } from '@mui/material'

const filterLimit = [
    { id: 'name', label: 'All' },
    { id: 'code', label: '142' },
    { id: 'code', label: '56' },
    { id: 'code', label: '88' }
];

const TokenFilter = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {filterLimit.map((column) => (
        <Box
          key={column.id}
          sx={{ mx: "15px", marginBottom: '10px', textAlign: 'center' }}
        >
          <Typography sx={{ fontSize: "15px" }} variant="subtitle1">{column.label}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default TokenFilter;
