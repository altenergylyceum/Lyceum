import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/layout/layout';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NewsPage from './pages/news';
import SpecialtiesPage from './pages/specialties';
import StudentsTeachersPage from './pages/students-teachers';
import ApplicantsPage from './pages/applicants';
import TrainingCentersPage from './pages/training-centers';
import QualificationCenterPage from './pages/qualification-center';
import NotFoundPage from './pages/not-found';
import AdministrationPage from './pages/about/administration';
import HistoryPage from './pages/about/history';

const App: React.FC = () => {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Switch>
          <Route exact path="/">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage />
            </motion.div>
          </Route>
          <Route path="/about">
            <Switch>
              <Route exact path="/about">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <AboutPage />
                </motion.div>
              </Route>
              <Route path="/about/history">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <HistoryPage />
                </motion.div>
              </Route>
              <Route path="/about/administration">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <AdministrationPage />
                </motion.div>
              </Route>
            </Switch>
          </Route>
          <Route path="/news">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <NewsPage />
            </motion.div>
          </Route>
          <Route path="/specialties">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <SpecialtiesPage />
            </motion.div>
          </Route>
          <Route path="/students-teachers">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StudentsTeachersPage />
            </motion.div>
          </Route>
          <Route path="/applicants">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ApplicantsPage />
            </motion.div>
          </Route>
          <Route path="/training-centers">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TrainingCentersPage />
            </motion.div>
          </Route>
          <Route path="/qualification-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <QualificationCenterPage />
            </motion.div>
          </Route>
          <Route>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <NotFoundPage />
            </motion.div>
          </Route>
        </Switch>
      </AnimatePresence>
    </Layout>
  );
};

export default App;