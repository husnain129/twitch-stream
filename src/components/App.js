import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./stream/StreamCreate";
import StreamDelete from "./stream/StreamDelete";
import StreamEdit from "./stream/StreamEdit";
import StreamList from "./stream/StreamList";
import StreamShow from "./stream/StreamShow";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<StreamList />} />
          <Route path="/stream/new" exact element={<StreamCreate />} />
          <Route path="/stream/edit" exact element={<StreamEdit />} />
          <Route path="/stream/delete" exact element={<StreamDelete />} />
          <Route path="/stream/show" exact element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
