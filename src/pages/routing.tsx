import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Layout, Toaster } from '@/shared/ui';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { QuotesPage } from '@/pages/quotes';
import { QuotesDetailsPage } from '@/pages/quotes-details';

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
                </Route>
            </Routes>
        </>
    );
};

export { Routing };
