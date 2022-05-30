import AppRouter from './config/router';
import './App.css';
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store = {store}>
      <AppRouter />
    </Provider>
  )
}

export default App;
