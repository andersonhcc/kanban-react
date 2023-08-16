import GlobalTheme from "./presentation/styles/index";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { HomePage } from "./presentation/components/pages/home";

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalTheme />
      <HomePage />
    </DndProvider>
  )
}