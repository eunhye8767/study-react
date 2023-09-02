import styled from "@emotion/styled";
import { Routes, Route } from "react-router-dom";

import { DataView } from "components/DataView";
import { InputContainer } from "components/InputContainer";
import { ToDoListContextProvider } from "contexts/ToDoList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #eee;
`;

function App() {
  return (
    <Container>
      <ToDoListContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <DataView />
                <InputContainer />
              </>
            }
          />
        </Routes>
      </ToDoListContextProvider>
    </Container>
  );
}

export default App;
