import styled from "@emotion/styled";
import { Routes, Route } from "react-router-dom";

import { DataView } from "pages/DataView";
import { ToDoInput } from "pages/ToDoInput";
import { Header } from "components/Header";
import { ToDoListContextProvider } from "contexts/ToDoList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #eee;
`;

const NotFound = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <ToDoListContextProvider>
        <Header />

        <Routes>
          <Route path="/" element={<DataView />} />
          <Route path="/add" element={<ToDoInput />} />
          <Route
            path="*"
            element={
              <NotFound>
                404
                <br />
                NOT FOUND
              </NotFound>
            }
          />
        </Routes>
      </ToDoListContextProvider>
    </Container>
  );
}

export default App;
