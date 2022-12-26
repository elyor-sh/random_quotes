import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Layout, Toaster } from '@/shared/ui';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { QuotesPage } from '@/pages/quotes';
import { QuotesDetailsPage } from '@/pages/quotes-details';
import { AuthorsPage } from '@/pages/authors';
import { GenresPage } from '@/pages/genres';
import { RandomQuotePage } from '@/pages/random-quote';

const Routing = () => {
    return (
        <>
            <Toaster />
            <Routes>
                <Route path="/" element={<Navigate to="/quotes" />} />
                <Route
                    element={
                        <Layout header={<Header />} footer={<Footer />}>
                            <Outlet />
                        </Layout>
                    }
                >
                    <Route path="/quotes" element={<QuotesPage />} />
                    <Route
                        path="/quotes/details/:slug"
                        element={<QuotesDetailsPage />}
                    />
                    <Route
                        path="/quotes/random"
                        element={<RandomQuotePage />}
                    />
                    <Route path="/authors" element={<AuthorsPage />} />
                    <Route
                        path="/authors/:slug/genres"
                        element={<GenresPage />}
                    />
                </Route>
            </Routes>
        </>
    );
};

export { Routing };
