import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Layout, NotFound } from 'containers';
import { BotContext } from 'contexts';

export default function App() {
  return (
    <BrowserRouter basename=''>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};