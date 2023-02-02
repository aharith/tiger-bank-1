import { Paper, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import './style.css'

function HistoryList() {
  const history = useSelector((state) => state.history.historyList);
  console.log(history);

  if (!history) return <></>;
  return (
    <Paper elevation={8} className="history-list">
      <h3>Search History</h3>
      <Stack spacing={1} className="history-list-items-container">
        {history.slice(0).reverse().map((name, i) => (
          <Paper key={i} className="history-list-items">
            {name}
          </Paper>
        ))}
      </Stack>
    </Paper>
  );
}

export default HistoryList;
