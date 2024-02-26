import AdminLayout from '@/layouts/AdminLayout.vue';
import AddTours from '@/views/AddTours.vue';
import BookingForm from '@/views/BookingForm.vue';
import Bookings from '@/views/Bookings.vue';
import CustomerForm from '@/views/CustomerForm.vue';
import CustomerInfo from '@/views/CustomerInfo.vue';
import CustomerInformation from '@/views/CustomerInformation.vue';
import CustomerPage from '@/views/CustomersPage.vue';
import DashboardPage from '@/views/DashboardPage.vue';
import ForgotPassword from '@/views/ForgotPassword.vue';
import HomePage from '@/views/HomePage.vue';
import LoginForm from '@/views/LoginForm.vue';
import SignUp from '@/views/SignUp.vue';
import ToursPage from '@/views/ToursPage.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
        path: '/',
        redirect: '/homepage', // Redirect the root path to /homepage
    },
    { path: '/signup', component: SignUp, },
    { path: '/login', component: LoginForm, },
    { path: '/forgotpassword', component: ForgotPassword, },
    { path: '/homepage', component: HomePage, },

    {
        path: '/admin',
        component: AdminLayout,
        children: [
            { path: '', redirect: 'dashboard' },
            { path: '/dashboard', component: DashboardPage, },
            { path: '/bookings', component: Bookings, },
            { path: '/customers', component: CustomerPage, },
            { path: '/customerform', component: CustomerForm, },
            { path: '/tours', component: ToursPage, },
            { path: '/booking_form', component: BookingForm, },
            { path: '/customer_info', component: CustomerInfo, },
            {
                path: '/customer_information/:customerId',
                component: CustomerInformation,
                name: 'CustomerInformation',
                props: true
            },
            { path: '/add_tours', component: AddTours, },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes,
});


export default router;