import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from 'firebase/auth'; // Import Firebase auth
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Import Firestore functions
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';
import UserMain from './views/UserMain.vue';
import UserDashboard from './views/UserDashboard.vue';
import UserProfile from './views/UserProfile.vue';
import UserOrders from './views/UserOrders.vue';
import AdminPanel from './views/AdminPanel.vue';
import AdminDashboard from './views/AdminDashboard.vue';
import AdminManageUsers from './views/AdminManageUsers.vue';
import AdminSettings from './views/AdminSettings.vue';
import AdminSalesPrediction from './views/AdminSalesPrediction.vue';
import AdminProductRecommendation from './views/AdminProductRecommendation.vue';
import AdminSalesAnalytics from './views/AdminSalesAnalytics.vue';
import AdminInventory from './views/AdminInventory.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  {
    path: '/user',
    component: UserMain,
    children: [
      { path: 'dashboard', component: UserDashboard },
      { path: 'profile', component: UserProfile },
      { path: 'orders', component: UserOrders },
    ],
    meta: { requiresAuth: true, role: 'user' }
  },
  {
    path: '/admin',
    component: AdminPanel,
    children: [
      { path: 'dashboard', component: AdminDashboard },
      { path: 'manage-users', component: AdminManageUsers },
      { path: 'settings', component: AdminSettings },
      { path: 'sales-prediction', component: AdminSalesPrediction },
      { path: 'product-recommendation', component: AdminProductRecommendation },
      { path: 'sales-analytics', component: AdminSalesAnalytics },
      { path: 'inventory', component: AdminInventory },
    ],
    meta: { requiresAuth: true, role: 'admin' }
  },
];

// Navigation guard to check authentication and role
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser; // Get the current authenticated user

  // If the route requires authentication
  if (to.meta.requiresAuth) {
    if (!user) {
      // If not authenticated, redirect to login
      next('/login');
    } else {
      // Fetch the user's role from Firestore
      const db = getFirestore();
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const userRole = userData.role;

        if (to.meta.role && to.meta.role !== userRole) {
          // If roles don't match, redirect to home
          next('/');
        } else {
          // Otherwise, allow access
          next();
        }
      } else {
        // If no user data found in Firestore, log them out and redirect to login
        auth.signOut();
        next('/login');
      }
    }
  } else {
    next(); // No auth required, allow access
  }
});

export default router;
