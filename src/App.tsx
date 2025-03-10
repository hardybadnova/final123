
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { GameProvider } from "./contexts/GameContext";
import { KYCProvider } from './contexts/KYCContext';
import { StakingProvider } from './contexts/StakingContext';
import { SupportProvider } from './contexts/SupportContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect } from "react";
import KYCVerificationScreen from './pages/KYCVerificationScreen';
import SplashScreen from "./pages/SplashScreen";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import PoolsScreen from "./pages/PoolsScreen";
import GameScreen from "./pages/GameScreen";
import GameResultScreen from "./pages/GameResultScreen";
import MilestonesScreen from "./pages/MilestonesScreen";
import ReferralScreen from "./pages/ReferralScreen";
import TransactionHistory from "./pages/TransactionHistory";
import StakingScreen from "./pages/StakingScreen";
import SupportChat from "./pages/SupportChat";
import AdminDashboard from "./pages/AdminDashboard";
import TestWalletPage from "./pages/TestWalletPage";
import ProfilePage from "./pages/ProfilePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import GameHistoryPage from "./pages/GameHistoryPage";
import CompetitionsPage from "./pages/CompetitionsPage";
import AppLayout from "./components/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  useEffect(() => {
    console.log("App initialized. Ready to handle routing.");
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <TooltipProvider>
            <ThemeProvider>
              <GameProvider>
                <KYCProvider>
                  <StakingProvider>
                    <SupportProvider>
                      <Toaster />
                      <Sonner />
                      <Routes>
                        <Route path="/" element={<SplashScreen />} />
                        <Route path="/login" element={<Login />} />
                        
                        <Route element={<ProtectedRoute />}>
                          <Route path="/dashboard" element={<Dashboard />} />
                          <Route path="/pools/:gameType" element={<PoolsScreen />} />
                          <Route path="/game/:poolId" element={<GameScreen />} />
                          <Route path="/result/:poolId" element={<GameResultScreen />} />
                          <Route path="/milestones" element={<MilestonesScreen />} />
                          <Route path="/referral" element={<ReferralScreen />} />
                          <Route path="/kyc" element={<KYCVerificationScreen />} />
                          <Route path="/transactions" element={<TransactionHistory />} />
                          <Route path="/staking" element={<StakingScreen />} />
                          <Route path="/support" element={<SupportChat />} />
                          <Route path="/competitions" element={<CompetitionsPage />} />
                          <Route path="/test-wallet" element={
                            <AppLayout>
                              <TestWalletPage />
                            </AppLayout>
                          } />
                          <Route path="/profile" element={<ProfilePage />} />
                          <Route path="/leaderboard" element={<LeaderboardPage />} />
                          <Route path="/game-history" element={<GameHistoryPage />} />
                        </Route>
                        
                        {/* Admin Routes */}
                        <Route element={<AdminRoute />}>
                          <Route path="/admin" element={<AdminDashboard />} />
                        </Route>
                        
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </SupportProvider>
                  </StakingProvider>
                </KYCProvider>
              </GameProvider>
            </ThemeProvider>
          </TooltipProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
