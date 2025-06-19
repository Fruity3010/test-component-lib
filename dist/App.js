import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './components/Button';
const App = () => {
    return _jsx(Button, { text: "Test Button", onClick: () => alert('Clicked!') });
};
export default App;
