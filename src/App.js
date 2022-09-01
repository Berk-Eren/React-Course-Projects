import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import {FeedbackProvider} from './context/FeedbackContext';

import AboutPage from './pages/AboutPage';
import AboutLink from './pages/AboutLink';


function App() {
    const title = "Feedback UI";
    const descp = "This is an example app";

    return (
        <>
        <FeedbackProvider>
            <Router>
                <div className="container">
                    <Routes>
                        <Route path="/"
                                    element={
                                        <>
                                            <Header title={title} descp={descp}/>
                                            <FeedbackForm />
                                            <FeedbackStats />
                                            <FeedbackList />
                                            <AboutLink />
                                        </>
                                    }>
                        </Route>
                        <Route path="/about/"
                            element={
                                    <>
                                        <AboutPage />
                                    </>
                            }>
                        </Route>
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
        </>
    )
}

export default App;
