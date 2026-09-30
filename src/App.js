import { MotionConfig } from "motion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import ScrollProgress from "./components/ScrollProgress";


function App() {
  return (
    // Tự tắt hiệu ứng chuyển động nếu người xem bật "Reduce motion" trên máy
    <MotionConfig reducedMotion="user">
      {/* overflow-x-clip: phần tử đang trượt vào từ bên cạnh không làm trang cuộn ngang */}
      <div className="min-h-screen overflow-x-clip bg-darkbg text-gray-100">
        <ScrollProgress />
        <Header />
        <Body />
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
