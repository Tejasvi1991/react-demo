import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={8}
      gap={4}
    >
      <Typography variant="h4">Counter: {count}</Typography>

      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setCount(0)}
        >
          Reset
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
